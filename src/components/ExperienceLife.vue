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
    <div class="relative">
      <div>
        <!-- Brown background container -->
        <div
          class="bg-[#DBB68F] md:flex items-center md:rounded-3xl w-full md:w-[95%] h-81 md:h-120 lg:h-133 text-center md:text-left"
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
              <router-link to="/services" @click="(toggleMenu, addBgColour(2))">
                <li
                  class="active:bg-[#995829] active:text-white hover:text-white hover:bg-[#995829] hover:font-bold cursor-pointer py-[4px]"
                  :class="{ 'bg-[#995829] font-bold text-white': IsMenuActive === 2 }"
                >
                  Services
                </li></router-link
              >
              <router-link to="/contact" @click="(toggleMenu, addBgColour(3))"
                ><li
                  class="active:bg-[#995829] active:text-white hover:text-white hover:bg-[#995829] hover:font-bold cursor-pointer py-[4px]"
                  :class="{ 'bg-[#995829] font-bold text-white': IsMenuActive === 3 }"
                >
                  Contact
                </li></router-link
              >
              <router-link to="/faqs" @click="(toggleMenu, addBgColour(4))"
                ><li
                  class="active:bg-[#995829] active:text-white hover:text-white hover:bg-[#995829] hover:font-bold cursor-pointer py-[4px]"
                  :class="{ 'bg-[#995829] font-bold text-white': IsMenuActive === 4 }"
                >
                  FAQs
                </li></router-link
              >
            </ul>
          </div>
          <!-- Text content - left side -->
          <div class="md:ml-10 lg:ml-16 md:w-1/2">
            <h1
              class="pt-3 text-[#432818] font-extrabold text-2xl md:text-5xl/14 lg:text-7xl/19 leading-relaxed"
            >
              Experience Life<span class="md:hidden">,</span><br class="hidden md:block" />
              Powered by Ai
            </h1>
            <p class="mt-4 text-[10px] md:text-sm lg:text-base font-light md:font-normal">
              Experience next-level living with fully integrated smart systems for lighting,
              <br class="md:hidden" />
              security, climate, and entertainment.
            </p>
            <button
              class="bg-black text-white px-3 py-2 md:px-4 md:py-2 lg:px-8 lg:py-4 rounded-sm md:rounded-lg text-[8px] md:text-sm lg:text-base mt-3 md:mt-8 cursor-pointer md:w-auto"
            >
              Tap to feel the future
            </button>
          </div>
        </div>
        <!-- Homepage image -->
        <div
          class="absolute w-full md:w-[50%] h-67 md:h-130 lg:h-139 top-3/5 md:top-10 md:right-0 md:w-80"
        >
          <img
            src="\images\homepage-img1.jpg"
            alt=""
            class="rounded-lg md:rounded-[40px] h-full w-9/10 md:w-8/10 mx-auto md:mr-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
