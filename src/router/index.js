import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/greek',
    name: 'greek',
    component: () => import(`@/views/GreekView.vue`)
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(`@/views/LoginView.vue`)
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(`@/views/RegisterView.vue`)
  },
  {
    path: '/',
    name: 'home',
    component: () => import(`@/views/HomeView.vue`)
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(`@/views/ServicesView.vue`)
  },
  {
    path: '/agents',
    name: 'agents',
    component: () => import(`@/views/AgentsView.vue`)
  },
  {
    path: '/agent',
    name: 'agent',
    component: () => import(`@/views/AgentView.vue`)
  },
  {
    path: '/emissaries',
    name: 'emissaries',
    component: () => import(`@/views/EmissariesView.vue`)
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(`@/views/ContactView.vue`)
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(`@/views/AdminView.vue`)
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
