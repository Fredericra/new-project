import { createRouter, createWebHistory } from 'vue-router'
import Home from "../Page/Home.vue";
import PageNout from "../Page/PageNotFound.vue";
import Apropos from "../Page/Apropos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: Apropos
    },{
      path:"/:catchAll(.*)*",
      name:"notfound",
      component:PageNout
    }
  ]
})

export default router
