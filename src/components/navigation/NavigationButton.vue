<template lang="pug">

  .navigation-button(v-if="isVisible" name="navigation-button" v-on:click="performNavigation" v-bind:class="{ active: (state === 'close'), back: !isRoot }")
    .bar-wrapper(v-bind:class="{cross: (state === 'close') }")
      .bar.top-bar
      .bar.middle-bar
      .bar.bottom-bar

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navigation-button',
  computed: {
    ...mapGetters([
      'navigation'
    ]),
  },
  methods: {
    performNavigation() {
      this.$logging.logEvent('navigation-button', 'clicked', 1)
      if (this.isRoot) {
        this.$store.commit('TOGGLE_LEFT_DRAWER')
      }
      else if (['schedule'].indexOf(this.$route.name) !== -1) {
        this.$router.push({ name: 'home' })
      }
      else if (['content'].indexOf(this.$route.name) !== -1) {
        this.$router.push({ name: 'schedule' })
      }
      else if (['live', 'feedback', 'feedback_view', 'markdown'].indexOf(this.$route.name) !== -1) {
        this.$router.push({ name: 'content' })
      }
      else if (document.referrer.indexOf(window.location.host) !== -1) {
        this.$router.go(-1)
      } else {
        this.$router.push({ name: 'schedule' })
      }
    }
  },
  computed: {
    state() {
      return this.$store.state.navigation.burger.state
    },
    isVisible() {
      return this.$store.state.navigation.visible
    },
    isRoot() {
      const paths = ['home', 'about', 'faq', 'cookies', 'privacy', 'research', 'terms']
      return paths.indexOf(this.$route.name) !== -1
    }
  }
}

</script>

<style lang="stylus" scoped>

@import '~stylus/shared'

.navigation-button
  animate()
  height 50px
  width 52px

  position fixed
  top 5px
  left 5px
  z-index 55

  .bar-wrapper
    pinned()
    position absolute
    .bar
      animate()
      pinned()
      background-color white
      height 2px
      left 12px 
      right 12px
      position absolute
      &.top-bar
        top 18px
        bottom auto
      &.bottom-bar
        bottom 18px
        top auto
      &.middle-bar
        opacity 0
        left 12px 
        right 16px
        bottom 24px
        top auto

  &.back
    .bar-wrapper
      pinned()
      position absolute
      .bar
        pinned()
        transition-delay 0.5s
        background-color white
        height 2px
        left 12px 
        right 12px
        position absolute
        &.top-bar
          top 19px
          right 26px        
          bottom auto
          transform rotate(-45deg)
        &.bottom-bar
          bottom 19px
          right 26px        
          top auto
          transform rotate(45deg) 
        &.middle-bar
          bottom 24px
          left 13px 
          right 10px
          top auto

      &:hover
        .bar-wrapper
          .middle-bar
            left 13px
            right 8px


  &:hover
    cursor pointer

  /* Active styles */
  &.active
    background-color transparent
    left calc(100% - 60px)
    z-index 56
    @media(min-width: 360px)
      left 320px
  
  .bar-wrapper
    &.cross
      .bar
        left 12px !important
        right 12px !important
      .top-bar
        top 24px !important
        transform rotate(-45deg)
      .bottom-bar
        bottom 24px !important
        transform rotate(45deg)
      .middle-bar
        opacity 0

</style>
