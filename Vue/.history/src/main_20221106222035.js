
import App from './App.vue'

import router from './router/index'
import store from './store/index'
import Vue from 'vue'

VueRouter.useLink(VueRouter)

import '@/assets/styles/main.scss';

new Vue({
    render: h => h(App),
    el: '#app',
    router,
    store
  })
  