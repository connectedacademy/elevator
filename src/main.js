import Vue from 'vue'
import Vuex from 'vuex'
import VueAnalytics from 'vue-analytics'
import VueAutosize from 'vue-autosize'
import VueConfig from 'vue-config'
import VueCookie from 'vue-cookie'
import VueLogger from 'vuejs-logger'
import { VueMasonryPlugin } from 'vue-masonry'
import VueResource from 'vue-resource'
import VueSocketio from 'vue-socket.io'

import { sync } from 'vuex-router-sync'
import { Events } from '@/events.js'

import app_config from '@/config'
import * as api_config from '@/api/config'

import logging from '@/logging'
import store from '@/store'
import router from '@/router'

import App from '@/App'
import Lang from '@/Lang'

// Global components
import NarrowPageHeader from '@/components/NarrowPageHeader'
import OnboardingPrompt from '@/components/shared/OnboardingPrompt'

// Icons
require('./icons.js')

// Global components
Vue.component('narrow-page-header', NarrowPageHeader)
Vue.component('onboarding-prompt', OnboardingPrompt)

Vue.prototype.$app = app_config
Vue.prototype.$logging = logging

sync(store, router)

Vue.use(VueSocketio, api_config.API.replace(/\/v1/g, ''))
Vue.use(VueResource)
Vue.use(Vuex)

Vue.use(VueConfig, Vue.config)
Vue.use(VueMasonryPlugin)

const options = {
  logLevel: 'info', // error
  stringifyArguments: false,
  showLogLevel: false,
  dev: true
}

Vue.use(VueLogger, options)
Vue.use(VueCookie)
Vue.use(VueAutosize)

Vue.use(VueAnalytics, {
  id: app_config.ga_id,
  router,
  autoTracking: {
    exception: true
  }
})

// General config
Vue.config.productionTip = false

// Http config
Vue.http.options = { credentials: true, responseType: 'json', timeout: 5000 }

// I18n config
Vue.config.lang = 'en'
Vue.config.fallbackLang = 'en'

store.dispatch('getCourse')

// Particle effect
require('particles.js')
particlesJS.load('app', '/static/particles.json')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    notification: function (val) {
      console.log('notifications', val)
    },
    message: function (val) {
      console.log('SOCKET - message', val)
      Events.$emit('message', val)
    },
    homeworkmessage: function (val) {
      console.log('SOCKET - homeworkmessage', val)
      Events.$emit('homeworkmessage', val)
    },
    homework: function (val) {
      console.log('SOCKET - homework', val)
      Events.$emit('homework', val)
    },
  },
  components: {
    App,
    Lang
  }
})
