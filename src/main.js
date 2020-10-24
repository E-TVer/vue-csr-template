import Vue from 'vue'
import { sync } from 'vuex-router-sync'

// Components
import './components'

// Plugins
import './plugins'

import App from './App'
import router from './route'
import store from './store'

sync(store, router)

new Vue({
  router,
  store,
  el: '#root',
  render: h => h(App),
})


