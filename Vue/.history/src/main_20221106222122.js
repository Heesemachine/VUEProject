import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Vue from 'vue'



import '@/assets/styles/main.scss';
createApp(App).use(router).use(store).mount('#app')