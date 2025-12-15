import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Services from '@/pages/Services.vue'
import Contact from '@/pages/Contact.vue'
import FAQs from '@/pages/FAQs.vue'
import Demo from '@/pages/Demo.vue'
import TermsAndConditions from '@/pages/TermsAndConditions.vue'
import CookiesPolicies from '@/pages/CookiesPolicies.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/faqs',
    name: 'FAQs',
    component: FAQs,
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
  },
  {
    path: '/termsAndConditions',
    name: 'TermsAndConditions',
    component: TermsAndConditions,
  },
  {
    path: '/cookiesPolicies',
    name: 'CookiesPolicies',
    component: CookiesPolicies,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
