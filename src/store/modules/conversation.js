/* eslint-disable */
import Vue from 'vue';
import * as types from '@/store/mutation-types';
import API from '@/api';
import store from '@/store';
import math from 'lodash/math';
import inRange from 'lodash/inRange';
import forEach from 'lodash/forEach';
import findIndex from 'lodash/findIndex';

// initial state
const state = {
  visualisation: [],
  media: [],
  activeSegment: undefined,
  peekSegment: undefined,
  activeSegmentMessages: [],
  replyingTo: undefined,
  subscribedTo: undefined,
  infoModalVisible: false,
  infoModalTitle: undefined,
  infoModalBody: undefined,
  infoModalAction: undefined,
};

// getters
const getters = {
  subscribedTo: (initialState) => initialState.subscribedTo,
  activeSegment: (initialState) => initialState.activeSegment,
  peekSegment: (initialState) => initialState.peekSegment,
  activeSegmentMessages: (initialState) => initialState.activeSegmentMessages,
  replyingTo: (initialState) => initialState.replyingTo,
  infoModalVisible: (initialState) => initialState.infoModalVisible,
  infoModalTitle: (initialState) => initialState.infoModalTitle,
  infoModalBody: (initialState) => initialState.infoModalBody,
  infoModalAction: (initialState) => initialState.infoModalAction,
  modalVisible: (initialState) => initialState.infoModalVisible,
  media: (initialState) => initialState.media,
  visualisation: (initialState) => initialState.visualisation,

  videoIsActive() {
    if (store.state.currentSection === undefined) {
      return false;
    }
    return (store.state.currentSection.duration !== undefined);
  },
  currentActiveSection() {
    if (store.state.scrollPoints.length === 0) { return undefined; }

    forEach(store.state.scrollPoints, function (scrollPoint, key) {
      
      if (inRange(store.state.scrollPosition, scrollPoint.sectionTop, scrollPoint.bottom)) { // (store.state.scrollPosition > scrollPoint.sectionTop) && (store.state.scrollPosition < scrollPoint.bottom)
        return scrollPoint;
      }
    });    

    return undefined;
  },
  currentSectionScrollPosition() {
    if (!store.state.currentSection) { return 0; }
    return store.state.offsetScrollPosition - store.state.currentSection.top;
  },
  currentSegmentGroup() {
    if (!store.state.currentSection) { return -1; }
    return math.floor(store.getters.currentSectionScrollPosition / 158.0);
  },
  currentSegment() {
    if (!store.state.currentSection) { return 0; }
    return math.floor(store.getters.currentSectionScrollPosition / (158.0 * 0.2));
  },
};

// actions
const actions = {
  getMedia({
    commit,
  }, request) {
    API.message.getMedia(
      request.slug,
      request.path,
      response => commit(types.GET_MEDIA_SUCCESS, {
        response,
      }),
      response => commit(types.GET_MEDIA_FAILURE, {
        response,
      }),
    );
  },
};

// mutations
const mutations = {
  [types.GET_VISUALISATION_SUCCESS](initialState, {
    response,
  }) {
    state.visualisation = response.data;
  },
  [types.GET_VISUALISATION_FAILURE](initialState, {
    response,
  }) {
    Vue.$log.info('error');
    state.visualisation = [];
    // error in response
  },
  [types.GET_MEDIA_SUCCESS](initialState, {
    response,
  }) {
    state.media = response.response;
  },
  [types.GET_MEDIA_FAILURE](initialState, {
    response,
  }) {
    Vue.$log.info('error');
    state.media = [];
    // error in response
  },
  [types.GET_MESSAGES_SUCCESS](initialState, {
    response,
  }) {
    const startSegmentGroup = parseInt(parseInt(response.scope.startsegment) * 0.2);
    const endSegmentGroup = parseInt(parseInt(response.scope.endsegment) * 0.2);

    for (var group in response.data) {

      const segmentGroup = parseInt(parseInt(group) * 0.2);
      let newMessage = response.data[group];
      newMessage.segmentGroup = segmentGroup;

      Vue.set(state.messages, segmentGroup, newMessage);
    }
  },
  [types.SET_ACTIVE_SEGMENT](initialState, activeSegment) {
    state.activeSegment = activeSegment;
  },
  [types.SET_PEEK_SEGMENT](initialState, peekSegment) {
    state.peekSegment = peekSegment;
  },
  [types.SET_SUBSCRIBED_TO](initialState, subscribedTo) {
    state.subscribedTo = subscribedTo;
  },
  [types.SET_SEGMENT_MESSAGES](initialState, messages) {
    state.activeSegmentMessages = messages;
  },
  [types.PUSH_SEGMENT_MESSAGE](initialState, newMessage) {
    if (newMessage.replyto) {
      // A reply so push to message replies
      const index = findIndex(state.activeSegmentMessages, function (message) { return message.message_id == newMessage.replyto.message_id })
      state.activeSegmentMessages[index].in_reply.push(newMessage);
    } else {
      // Not a reply so just push onto array
      state.activeSegmentMessages.push(newMessage);
    }
  },
  [types.SET_REPLYING_TO](initialState, message) {
    state.replyingTo = message;
  },
  [types.SHOW_INFO_MODAL](initialState, params) {
    state.infoModalVisible = true;
    state.infoModalTitle = params.title;
    state.infoModalBody = params.body;
    state.infoModalAction = params.action;
  },
  [types.DISMISS_INFO_MODAL](initialState) {
    state.infoModalVisible = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
