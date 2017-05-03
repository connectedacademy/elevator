import * as types from '../mutation-types';
import API from '../../api';

// initial state
const state = {
  visible: false,
  isAuthenticated: false,
  isAuthenticating: false,
  session: {},
  user: {},
};

// getters
const getters = {
  isRegistered: (initialState) => {
    const isRegistered = (initialState.user);
    return (isRegistered) ? initialState.user.registration : false;
  },
};

// actions
const actions = {
  checkAuth({
    commit,
  }) {
    API.auth.checkAuth(
      response => commit(types.CHECK_AUTH_SUCCESS, {
        response,
      }),
      response => commit(types.CHECK_AUTH_FAILURE, {
        response,
      }),
    );
  },
  logout({
    commit,
  }) {
    API.auth.logout(
      response => commit(types.LOGOUT_SUCCESS, { response }),
      response => commit(types.LOGOUT_FAILURE, { response }),
    );
  },
};

// mutations
const mutations = {
  [types.SHOW_AUTH](initialState) {
    state.visible = true;
  },
  [types.DISMISS_AUTH](initialState) {
    state.visible = false;
  },
  [types.CHECK_AUTH_SUCCESS](initialState, {
    response,
  }) {
    state.isAuthenticated = true;
    // Save user in session
    state.user = response.user;
  },
  [types.CHECK_AUTH_FAILURE](initialState, {
    response,
  }) {
    state.isAuthenticated = false;
    // error in response
  },
  [types.LOGOUT_SUCCESS](initialState, {
    response,
  }) {
    state.visible = false;
    state.isAuthenticated = false;
    state.user = undefined;
  },
  [types.LOGOUT_FAILURE](initialState, {
    response,
  }) {
    // error in response
  },
  isAuthenticating({ commit }, isAuthenticating) {
    state.isAuthenticating = isAuthenticating;
  },
  setSession({ commit }, session) {
    state.session = session;
  },
  attemptAuth({ commit }, user) {
    state.user = user;
    document.location = 'http://localhost:4000/v1/auth/login';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};