import Vue from 'vue';
import API from '@/api';
import { mapGetters } from 'vuex';
import math from 'lodash/math';

export default {
  data() {
    return {
      transcript: [],
    };
  },
  computed: {
    ...mapGetters(['course', 'currentClass']),
  },
  methods: {
    loadTranscript(content) {
      if (typeof content.transcript === 'undefined') return
      
      Vue.$log.info('Getting transcript...');

      this.transcript = []; // Clear existing transcript

      API.message.getTranscript(
        {
          theClass: this.currentClass.slug,
          filename: content.transcript
        },
        response => {

          for (var transcript of response) {

            let group = math.divide(math.floor(transcript.start + 2.5), 5);

            const segmentGroup = parseInt(group);

            let newTransctipt = transcript;

            newTransctipt.segmentGroup = segmentGroup;

            Vue.set(this.transcript, segmentGroup, (this.transcript[segmentGroup]) ? this.transcript[segmentGroup] + ' ' + newTransctipt.text : newTransctipt.text);
          }
        },
        response => {},
      );
    }
  },
}