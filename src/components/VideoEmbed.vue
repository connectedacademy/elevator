<template lang="pug">

.video-wrapper
  .loading-wrapper(v-if="!theSrc")
    .pure-button.pure-button-youtube.rounded-tall(@click="loadEmbed") Click to watch video
  .video-container(v-if="theSrc")
    iframe(v-bind:src="theSrc" frameborder='0' allowfullscreen)

</template>

<script>
import startsWith from 'lodash/startsWith';

export default {
  name: 'video-embed',
  props: ['contentType', 'videoSrc', 'autoLoad'],
  mounted() {
    if (this.autoLoad) {
      this.theSrc = this.src;
    }
  },
  data() {
    return {
      theSrc: undefined
    }
  },
  computed: {
    src() {
      switch (this.contentType) {
        case 'webinar':
          return (startsWith(this.videoSrc, 'http')) ? this.videoSrc : `https://www.youtube.com/embed/${this.videoSrc}`;
          break;
        default:
          return `https://www.youtube.com/embed/${this.videoSrc}`;
      }
    },
  },
  methods: {
    loadEmbed() {
      this.theSrc = this.src;
      this.$logging.logEvent('video-embed', 'embed-loaded', this.src);
    },
  },
};
</script>

<style lang="stylus" scoped>

@import '~stylus/shared'
@import '~stylus/buttons'

.video-wrapper
  .loading-wrapper
    background-color white // $color-lighter-grey
    margin-bottom 20px
    padding 58px 20px
    text-align center
  .video-container
    background-color black
    margin-bottom 20px
    position relative
    padding-bottom 56.25%
    height 0
    overflow hidden
    max-width 100%

    iframe, object, embed
      position absolute
      top 0
      left 0
      width 100%
      height 100%

</style>
