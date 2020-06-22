import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const  router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: '*', redirect: '/' },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:'QR generator',
        color:'white'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        title:'QR generator',
        color:'white'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta:{
        title:'About | QRgen',
        color:'green'
      }
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue'),
      meta: {
        title:"Team | QRgen",
        hideNavigation: true,
        color:'yellow'
      }
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('./views/Speakers.vue'),
      meta:{
        title:'Speakers | QRgen',
        color:'blue'
      }
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('./views/Schedule.vue'),
      meta:{
        title:'Schedule | QRgen',
        color:'red'
      }
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: () => import('./views/Sessions.vue'),
      meta:{
        title:'Sessions | QRgen',
        color:'indigo'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
      meta:{
        title:'Contact | QRgen',
        color:'red'
      }
    },
    {
      path:'/community-guidelines',
      name:'community-guidelines',
      component: () => import('./views/CommunityGuidelines.vue'),
      meta:{
        title:'Community Guidelines | QRgen',
        color:'red'
      }
    },
    {
      path:'/sponsors',
      name:'sponsors',
      component: () => import('./views/Sponsors.vue'),
      meta:{
        title:'Sponsors | QRgen',
        color:'red'
      }
    }
  ],
})

router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

export default router
