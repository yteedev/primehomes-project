<script setup>
import { useRouter } from 'vue-router'
import { defineStore, storeToRefs } from 'pinia'
import { useNavigationStore } from '@/stores/NavigationStore'

const store = useNavigationStore()
const { headerNavItems } = storeToRefs(store)

const router = useRouter()

const footerNavItems = [
  {
    item: 'Demo',
    to: '/demo',
  },
  {
    item: 'Terms and Conditions',
    to: '/termsAndConditions',
  },
  {
    item: 'Cookies Policies',
    to: '/cookiesPolicies',
  },
]

const year = new Date().getFullYear()
</script>

<template>
  <div
    class="hidden md:block bg-[#432818] text-white md:mt-30 xl:mt-43 pt-8 xl:pt-10 md:px-15 xl:px-30"
  >
    <div class="flex flex-row justify-between pb-8">
      <div class="w-1/3">
        <img src="/images/smarthomes logo white.png" alt="" class="w-30 xl:w-38 h-12 xl:h-14" />
        <div class="text-justify">
          <p class="text-base/7 xl:text-xl/7 font-ligh mt-6 xl:mt-8">
            Transforming homes across Rwanda with modern automation, smart security, and connected
            living solutions.
          </p>
          <div class="flex flex-row gap-8 mt-6 xl:mt-8">
            <img src="\icons\instagram-icon.png" alt="" class="size-10 xl:size-12" />
            <img src="\icons\facebook-icon.png" alt="" class="size-10 xl:size-12" />
            <img src="\icons\linkedin-icon.png" alt="" class="size-10 xl:size-12" />
          </div>
        </div>
      </div>

      <div class="flex flex-row gap-6 mt-14 xl:mt-6">
        <div>
          <p class="text-xl xl:text-3xl font-medium">Quick Links</p>
          <ul
            v-for="headerNavItem in headerNavItems"
            :key="headerNavItem.item"
            class="flex flex-col gap-3 xl:gap-4 mt-4 text-white text-base xl:text-[22px] font-normal"
          >
            <router-link :to="headerNavItem.to">
              <li>{{ headerNavItem.item }}</li>
            </router-link>
          </ul>
        </div>
        <div>
          <p class="text-xl xl:text-3xl font-medium">Support</p>
          <ul
            v-for="footerNavItem in footerNavItems"
            :key="footerNavItem.item"
            class="flex flex-col gap-3 xl:gap-4 mt-4 text-white text-base xl:text-[22px] font-normal"
          >
            <router-link :to="footerNavItem.to">
              <li>{{ footerNavItem.item }}</li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-[#ffffff] text-center">
      <p class="text-sm xl:text-base pt-5 pb-5">&#169; {{ year }} All Rights Reserved</p>
    </div>
  </div>
</template>
