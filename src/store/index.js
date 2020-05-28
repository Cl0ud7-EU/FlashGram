import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('../firebase.js')

Vue.use(Vuex)
var storageRef = fb.st.ref();

export default new Vuex.Store({

  state: {
    usuario: null,
    status: null,
    error: null

  },
  mutations: {

    setUser (state, payload) {
      state.usuario = payload
    },

    removeUser (state) {
      state.usuario = null
    },

    setStatus (state, payload) {
      state.status = payload
    },

    setError (state, payload) {
      state.error = payload
    }

  },
  actions: {
    accionRegistro ({ commit }, payload) {
      commit('setStatus', 'cargando')
      fb.auth.createUserWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          alert('success')
          // response will have user
          // user will have uid will be updated to the state
          commit('setUsuario', response.usuario.uid)
          commit('setStatus', 'correcto')
          commit('setError', null)
        })
        .catch((error) => {
          commit('setStatus', 'fallo')
          commit('setError', error.message)
        })
    },

    accionLogin ({ commit }, payload) {
      fb.auth.signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          commit('setUsuario', response.usuario.uid)
          commit('setStatus', 'correcto')
          commit('setError', null)
        })
        .catch((error) => {
          commit('setStatus', 'fallo')
          commit('setError', error.message)
        })
    },

    accionSalir ({ commit }) {
      firebase.auth().signOut()
        .then((response) => {
          commit('setUsuario', null)
          commit('setStatus', 'correcto')
          commit('setError', null)
        })
        .catch((error) => {
          commit('setStatus', 'fallo')
          commit('setError', error.message)
        })
    },
    subirFotoAction (payload) {
      storageRef.child('images/' + payload.nombre).put(payload.file);
    },
  },

  getters: {

    status (state) {
      return state.status
    },

    user (state) {
      return state.usuario
    },

    error (state) {
      return state.error
    }
  }
})