import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/login.vue'
import Crear from '../views/crearcuenta.vue'
import Home from '../views/Principal.vue'
import Config from '../views/configuracion.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Crear',
    name: 'Crear',
    component: Crear
  },  
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Configuracion',
    name: 'Configuracion',
    component: Config
  }
]

const router = new VueRouter({
  routes
})

export default router
