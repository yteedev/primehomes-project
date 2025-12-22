<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useNavigationStore } from '@/stores/NavigationStore'

const router = useRouter()

const store = useNavigationStore()
const { headerNavItems } = storeToRefs(store)
</script>
<template>
  <div class="relative">
    <!-- NAV BAR -->
    <nav
      class="hidden md:flex flex-row justify-between items-center fixed top-0 right-0 left-0 bg-white h-24 px-12 xl:px-25 shadow-[0_0.5px_10px_0px_rgba(0,0,0,0.18)] z-50"
    >
      <!-- SMARTHOMES LOGO -->
      <div class="w-33 h-14">
        <img src="/images/smarthomes-logo-coffee.png" alt="" class="w-full" />
      </div>
      <!-- NAVIGATION BAR (DESKTOP ONLY) -->
      <div class="flex flex-row gap-10">
        <div v-for="headerNavItem in headerNavItems" :key="headerNavItem.item">
          <router-link :to="headerNavItem.to" v-slot="{ isActive }">
            <span class="inline-grid">
              <span class="invisible col-start-1 row-start-1 font-bold scale-105">
                {{ headerNavItem.item }}
              </span>
              <span
                class="col-start-1 row-start-1 hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
                :class="
                  isActive
                    ? 'uppercase font-extrabold text-[#995829]'
                    : 'text-base font-normal text-[#000000] hover:font-bold'
                "
              >
                {{ headerNavItem.item }}
              </span></span
            >
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
