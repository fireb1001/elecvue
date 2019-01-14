import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase/app'

import 'firebase/firestore'
import BootstrapVue from 'bootstrap-vue'
import VueProgressiveImage from 'vue-progressive-image'

Vue.use(BootstrapVue);
Vue.use(VueFire)
Vue.use(VueProgressiveImage)

firebase.initializeApp({
  projectId: 'elecvue',
  databaseURL: 'https://elecvue.firebaseio.com'
})
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

