import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/auth/Register.vue'
import Signin from '@/components/auth/Signin.vue'
import Inicio from '@/views/Inicio.vue'
import Registro from '@/views/Registro.vue'
import Perfil from '@/views/Perfil.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro,
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil,
      meta: {
				//requiresAuth: true
			}
    }
  ]
})