import Vue from 'vue'
import app from '@/config'
import { mapGetters } from 'vuex'
import { EventBus } from '@/event-bus.js'

import _throttle from 'lodash/throttle'
import _find from 'lodash/find'
import _clamp from 'lodash/clamp'


const AUTOSCROLL_ATTEMPT = 1500 // Interval at which to attempt auto scroll
const WHEEL_TIMEOUT = 1000 // Interval before assumed no longer manually scrolling
const SCROLL_UPDATE_INTERVAL = 500 // Interval at which scroll position should be updated

export default {
  mounted() {
    setTimeout(() => {
      // Attempt auto scroll every second
      window.setInterval(this.attemptAutoScroll, AUTOSCROLL_ATTEMPT)

      // Listen for scroll events
      window.addEventListener('scroll', () => {
        // Scroll update
        this.onScroll(this)
      }, { passive: true })

      // Listen for wheel events
      window.addEventListener('wheel', this.onWheel, { passive: true }) // Passive to improve mobile performance

      // Listen for mousedown events
      // window.addEventListener('mousedown', this.onMousedown, { passive: true }) // Passive to improve mobile performance
      // window.addEventListener('touchstart', this.onMousedown, { passive: true }) // Passive to improve mobile performance

      // Listen for mouseup events
      // window.addEventListener('mouseup', this.onMouseup, { passive: true }) // Passive to improve mobile performance
      // window.addEventListener('touchend', this.onMouseup, { passive: true }) // Passive to improve mobile performance
    }, 50)
  },
  destroyed () {
    // Remove event listeners
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('wheel', this.onWheel)
    // window.removeEventListener('mousedown', this.onMousedown)
    // window.removeEventListener('mouseup', this.onMouseup)
  },
  data() {
    return {
      scrollStatus: undefined,
      currentSection: undefined,
      wheeling: false,
      canAutoScroll: false,
      isAutoScrolling: false,
      preventScroll: false
    }
  },
  watch: {
    peekSegment(nV) {
      this.checkIfCanAutoScroll()
    },
    preventScroll(nV) {
      this.checkIfCanAutoScroll()
    },
    mediaPlaying(nV) {
      this.checkIfCanAutoScroll()
      if (nV) { this.attemptAutoScroll() }
    },
    currentSection(nV) {
      this.checkIfCanAutoScroll()
    }
  },
  computed: {
    ...mapGetters([
      'mediaPlaying', 'activeSegment', 'peekSegment', 'scrollPoints',
    ]),
  },
  methods: {
    checkIfCanAutoScroll() {
      this.canAutoScroll = (!this.peekSegment && !this.preventScroll && this.mediaPlaying && (this.currentSection !== undefined))
    },
    attemptAutoScroll() {

      Vue.$log.debug('Attempting auto scroll')

      if (!this.canAutoScroll) { Vue.$log.debug('Cannot auto scroll'); this.isAutoScrolling = false; return }
      if (this.isAutoScrolling) { Vue.$log.debug('Already auto scrolling'); return }

      this.isAutoScrolling = true

      let position = function(start, end, elapsed, duration) {
        return start + (end - start) * (elapsed / duration) // Linear
      }

      const clock = Date.now()
      const requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(fn) { window.setTimeout(fn, 15) }

      var start = this.scrollStatus.scrollPos
      const durationRate = 5000
      let end = this.currentSection.bottom

      var duration = (((end - start) / (this.$app.segmentHeight * 1.0)) * durationRate)

      var step = () => {

        var elapsed = Date.now() - clock

        const yPos = position(start, end, elapsed, duration)

        if (!this.preventScroll) {
          window.scroll(0, yPos)
        }

        if ((elapsed <= duration) && this.canAutoScroll) {
          requestAnimationFrame(step)
        }
        else if (elapsed > duration) {
          Vue.$log.info('(elapsed > duration) -- Pausing')
          this.$store.commit('PAUSE_MEDIA')
        }
      }
      step()
    },
    wheelMovement() {

      if (this.peekSegment || this.preventScroll) {
        return
      }
      if (this.mediaPlaying) {
        this.$store.commit('PAUSE_MEDIA')
      }
      this.preventScroll = true
      this.isAutoScrolling = false

      clearTimeout(this.wheeling)

      this.wheeling = setTimeout(() => {
        this.wheeling = undefined
        this.preventScroll = false
      }, WHEEL_TIMEOUT)
    },
    onWheel() {
      if (!this.activeSegment) {
        this.wheelMovement(this)
      }
    },
    onMousedown() {
      Vue.$log.debug('MOUSEDOWN')
      this.preventScroll = true
      this.isAutoScrolling = false
    },
    onMouseup() {
      Vue.$log.debug('MOUSEUP')
      this.preventScroll = false
      this.isAutoScrolling = false
    },
    onScroll: _throttle(function (self) {

      // Calculate
      let scrollPos = window.scrollY

      // Offset
      let offsetScrollPos = scrollPos + window.innerHeight

      // Get class
      const scrollPoint = _find(self.scrollPoints, { content_type: 'class' })
      
      if (!scrollPoint) return

      // Check if current
      let newCurrentSection = undefined
      if ((offsetScrollPos > scrollPoint.top) && (offsetScrollPos < scrollPoint.bottom)) {
        offsetScrollPos = offsetScrollPos - scrollPoint.top
        newCurrentSection = scrollPoint
      }
      if (self.currentSection != newCurrentSection) {
        self.$store.commit('SET_CURRENT_SECTION', newCurrentSection)
      }

      if (newCurrentSection === 'undefined') {
        EventBus.$emit('scrollStatus', undefined)
        return
      }
      
      offsetScrollPos = offsetScrollPos - _clamp(((offsetScrollPos / (app.segmentHeight * 0.2)) * 50), 0, 200)

      // Time
      const currentTime = (offsetScrollPos / (app.segmentHeight * 0.2))

      // Segment group
      let currentSegmentGroup = Math.floor(offsetScrollPos / app.segmentHeight)

      // Segment
      let currentSegment = Math.floor(currentTime)

      // Create object
      const scrollStatus = {
        scrollPos,
        offsetScrollPos,
        currentTime,
        currentSegmentGroup,
        currentSegment,
      }

      // Emit position
      EventBus.$emit('scrollStatus', scrollStatus)

      // Update local objects
      self.scrollStatus = scrollStatus
      self.currentSection = newCurrentSection

    }, SCROLL_UPDATE_INTERVAL, { 'leading': false, 'trailing': true })
  }
}
