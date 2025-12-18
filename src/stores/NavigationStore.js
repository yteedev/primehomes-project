import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigationStore = defineStore('headerNavItems', () => {
  // HEADER NAVIGATION
  const headerNavItems = ref([
    {
      item: 'Home',
      to: '/',
    },
    {
      item: 'Services',
      to: '/services',
    },
    {
      item: 'Contact',
      to: '/contact',
    },
    {
      item: 'FAQs',
      to: '/faqs',
    },
  ])

  return {
    headerNavItems,
  }
})
