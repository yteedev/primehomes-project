<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const IsMenuActive = ref(null)
const addBgColour = (menuId) => {
  IsMenuActive.value = IsMenuActive.value === menuId ? null : menuId
}
</script>
<template>
  <div>
    <!-- DARK OVERLAY (MOBILE ONLY) -->
    <div
      v-show="isMenuOpen"
      @click="toggleMenu"
      class="md:hidden fixed inset-0 bg-black/65 z-40 transition-opacity"
    ></div>
    <!-- EXPERIENCE LIFE, POWERED BY Ai SECTION -->
    <div class="w-full md:mt-21 md:flex justify-center">
      <div class="relative w-full md:max-w-310">
        <!-- Brown background container -->
        <div
          class="relative bg-[#DBB68F] md:flex items-center md:text-left md:pl-16 w-full h-81 md:h-133 md:rounded-3xl"
        >
          <!-- DROP DOWN ICON (MOBILE ONLY)-->
          <div class="md:hidden pt-4 grid place-items-end mr-4">
            <img
              v-show="!isMenuOpen"
              src="\icons\menu-vertical-dropdown-icon.png"
              alt="dropdown icon image"
              class="cursor-pointer size-3"
              @click="toggleMenu"
            />
            <img
              v-show="isMenuOpen"
              src="\icons\active-menu-vertical-dropdown-icon.png"
              alt="dropdown icon image"
              class="cursor-pointer size-3 z-50"
              @click="toggleMenu"
            />
            <!-- NAVIGATION LIST (MOBILE ONLY)-->

            <ul
              v-show="isMenuOpen"
              class="absolute top-8 right-4 bg-white w-1/3 max-w-50 mt-3 text-[#432818] text-[10px] flex-col text-center rounded-sm z-50"
            >
              <router-link to="/" @click="(toggleMenu, addBgColour(1))">
                <li
                  class="md:hover:text-white md:hover:bg-[#995829] md:hover:font-bold cursor-pointer py-[4px]"
                  :class="{ 'bg-[#995829] font-bold text-white': IsMenuActive === 1 }"
                >
                  Home
                </li>
              </router-link>
              <router-link to="/services" @click="toggleMenu">
                <li
                  class="active:bg-[#995829] active:text-white hover:text-white hover:bg-[#995829] hover:font-bold cursor-pointer py-[4px]"
                >
                  Services
                </li></router-link
              >
              <router-link to="/contact" @click="toggleMenu"
                ><li
                  class="active:bg-[#995829] active:text-white hover:text-white hover:bg-[#995829] hover:font-bold cursor-pointer py-[4px]"
                >
                  Contact
                </li></router-link
              >
              <router-link to="/faqs" @click="toggleMenu"
                ><li
                  class="active:bg-[#995829] active:text-white hover:text-white hover:bg-[#995829] hover:font-bold cursor-pointer py-[4px]"
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
              src="\images\homepage-img1.jpg"
              alt=""
              class="rounded-lg md:rounded-[40px] h-67 md:h-140 w-9/10 md:w-full mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
