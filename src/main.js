import Vue from 'vue'
import vuetify from "./plugins/vuetify";
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
//import { store } from './store/index.js'

//import * as firebase from 'firebase'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
/*
var config = {
    apiKey: "AIzaSyBeCqgG8r2oe2Yr1S9S6SFwc7inTlI7G5w",
    authDomain: "prueba-187a9.firebaseapp.com",
    databaseURL: "https://prueba-187a9.firebaseio.com",
    projectId: "prueba-187a9",
    storageBucket: "prueba-187a9.appspot.com",
    messagingSenderId: "961583165767",
    appId: "1:961583165767:web:e81b238b1090762b855c62",
    measurementId: "G-CE4BP751XK"
}
firebase.initializeApp(config)*/