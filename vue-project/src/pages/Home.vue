<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
  <div>
    <!-- NAV BAR -->
    <nav
      class="hidden static md:flex flex-row justify-between items-center px-20 h-24 shadow-[0_0.5px_10px_0px_rgba(0,0,0,0.18)]"
    >
      <!-- SMARTHOMES LOGO -->
      <div class="w-33 h-14">
        <img src="/images/smarthomes logo coffee.png" alt="" class="w-full" />
      </div>
      <!-- NAVIGATION LIST -->

      <ul class="flex flex-row gap-10 text-base font-nomal text-[#000000]">
        <router-link to="/">
          <li
            class="hover:uppercase hover:text-[#995829] hover:font-extrabold cursor-pointer"
            active-class="uppercase font-extrabold text-[#995829]"
          >
            Home
          </li>
        </router-link>
        <router-link to="/services">
          <li
            class="hover:uppercase hover:text-[#995829] hover:font-extrabold cursor-pointe"
            active-class="uppercase font-extrabold text-[#995829]"
          >
            Services
          </li></router-link
        >
        <router-link to="/contact"
          ><li
            class="hover:uppercase hover:text-[#995829] hover:font-extrabold cursor-pointer"
            active-class="uppercase font-extrabold text-[#995829]"
          >
            Contact
          </li></router-link
        >
        <router-link to="/faqs"
          ><li
            class="hover:uppercase hover:text-[#995829] hover:font-extrabold cursor-pointer"
            active-class="uppercase font-extrabold text-[#995829]"
          >
            FAQs
          </li></router-link
        >
      </ul>
    </nav>

    <!-- EXPERIENCE LIFE, POWERED BY Ai SECTION -->
    <div class="md:mt-21 md:flex justify-center">
      <div class="relative w-full md:max-w-310 md:mx-auto">
        <!-- Brown background container -->
        <div
          class="bg-[#DBB68F] md:flex items-center md:text-left md:pl-16 w-full h-81 md:h-133 md:rounded-3xl"
        >
          <!-- DROP DOWN ICON -->
          <div class="md:hidden pt-4 grid place-items-end mr-4">
            <img
              src="\icons\menu-vertical-dropdown-icon.png"
              alt="dropdown icon image"
              class="cursor-pointer"
              @click="toggleMenu"
            />

            <!-- NAVIGATION LIST -->

            <ul
              v-show="isMenuOpen"
              class="absolute top-8 bg-white w-1/3 max-w-50 mt-3 text-[#432818] text-[10px] flex-col text-center rounded-sm z-10"
            >
              <router-link to="/" @click="isMenuOpen">
                <li
                  class="hover:text-white hover:bg-[#995829] hover:font-bold cursor-pointer py-[4px]"
                >
                  Home
                </li>
              </router-link>
              <router-link to="/services">
                <li
                  class="hover:text-white hover:bg-[#995829] hover:font-bold cursor-pointer py-[4px]"
                >
                  Services
                </li></router-link
              >
              <router-link to="/contact"
                ><li
                  class="hover:text-white hover:bg-[#995829] hover:font-bold cursor-pointer py-[4px]"
                >
                  Contact
                </li></router-link
              >
              <router-link to="/faqs"
                ><li
                  class="hover:text-white hover:bg-[#995829] hover:font-bold cursor-pointer py-[4px]"
                >
                  FAQs
                </li></router-link
              >
            </ul>
          </div>
          <!-- Text content - left side -->
          <div
            class="md:flex flex-col justify-center text-center md:text-left md:w-2/3 pt-3 md:pt-0 md:items-start"
          >
            <h1 class="text-[#432818] font-extrabold text-2xl md:text-7xl/19 leading-relaxed">
              Experience Life<span class="md:hidden">,</span> Powered by Ai
            </h1>
            <p class="mt-4 md:mt-4 text-[10px] md:text-base font-light md:font-normal">
              Experience next-level living with fully integrated smart systems for
              <br class="hidden md:block" />
              lighting,
              <br class="md:hidden" />
              security, climate, and entertainment.
            </p>
            <button
              class="bg-black text-white px-3 md:px-8 md:py-4 py-2 rounded-sm md:rounded-lg text-[8px] md:text-base mt-3 md:mt-8 cursor-pointer md:w-auto"
            >
              Tap to feel the future
            </button>
          </div>

          <!-- Homepage image -->
          <div class="absolute w-full md:w-1/2 top-3/5 md:top-10 md:-right-18">
            <img
              src="\images\homepage-img1.jpeg"
              alt=""
              class="rounded-lg md:rounded-[40px] h-67 md:h-140 w-9/10 md:w-full mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- ABOUT SMARTHOMES SECTION -->
    <div></div>

    <!-- OUR VISION SECTION -->
    <div></div>

    <!-- FEATURED PROJECTS SECTION -->
    <div></div>
  </div>
</template>
