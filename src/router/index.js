import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Fotografos from '../views/Fotografos';
import Contacto from '../views/Contacto';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fotografos',
    name: 'Fotografos',
    component: Fotografos
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
    
]

const router = new VueRouter({
    routes
  })

  export default router
