<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <!-- NAV BAR -->
  <nav
    class="hidden static md:flex flex-row justify-between items-center h-24 px-25 shadow-[0_0.5px_10px_0px_rgba(0,0,0,0.18)]"
  >
    <!-- SMARTHOMES LOGO -->
    <div class="w-33 h-14">
      <img src="/images/smarthomes logo coffee.png" alt="" class="w-full" />
    </div>
    <!-- NAVIGATION BAR (DESKTOP ONLY) -->

    <ul class="flex flex-row gap-10">
      <router-link to="/" v-slot="{ isActive }">
        <li
          class="hover:uppercase hover:text-[#995829] hover:font-extrabold cursor-pointer"
          :class="
            isActive
              ? 'uppercase font-extrabold text-[#995829]'
              : 'text-base font-normal text-[#000000]'
          "
        >
          Home
        </li>
      </router-link>
      <router-link to="/services">
        <li
          class="hover:uppercase hover:text-[#995829] hover:font-extrabold cursor-pointer"
          :class="
            isActive
              ? 'uppercase font-extrabold text-[#995829]'
              : 'text-base font-normal text-[#000000]'
          "
        >
          Services
        </li></router-link
      >
      <router-link to="/contact"
        ><li
          class="hover:uppercase hover:text-[#995829] hover:font-extrabold cursor-pointer"
          :class="
            isActive
              ? 'uppercase font-extrabold text-[#995829]'
              : 'text-base font-normal text-[#000000]'
          "
        >
          Contact
        </li></router-link
      >
      <router-link to="/faqs"
        ><li
          class="hover:uppercase hover:text-[#995829] hover:font-extrabold cursor-pointer"
          :class="
            isActive
              ? 'uppercase font-extrabold text-[#995829]'
              : 'text-base font-normal text-[#000000]'
          "
        >
          FAQs
        </li></router-link
      >
    </ul>
  </nav>
</template>
