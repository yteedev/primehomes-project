<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useNavigationStore } from '@/stores/NavigationStore'

const router = useRouter()

const store = useNavigationStore()
const { headerNavItems } = storeToRefs(store)

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
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
          class="bg-[#DBB68F] md:flex items-center md:rounded-3xl w-full md:w-[95%] h-81 md:h-120 xl:h-133 text-center md:text-left"
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
            <div
              class="overflow-hidden absolute top-8 right-4 bg-white w-1/3 max-w-50 mt-3 text-[#432818] text-[10px] flex-col text-center rounded-sm z-50"
            >
              <ul
                v-for="(headerNavItem, index) in headerNavItems"
                :key="headerNavItem.item"
                v-show="isMenuOpen"
              >
                <router-link :to="headerNavItem.to" @click="toggleMenu">
                  <li
                    @touchstart="activeIndex = index"
                    @touchend="((activeIndex = null), toggleMenu())"
                    @click="toggleMenu"
                    class="cursor-pointer py-[4px] transition-all duration-150 [webkit-tap-highlight-color:transparent]"
                    :class="[
                      activeIndex === index
                        ? 'bg-[#995829] text-white font-bold'
                        : 'hover:text-white hover:bg-[#995829] hover:font-bold',
                      index === 0
                        ? 'rounded-t-sm'
                        : index === headerNavItems.length - 1
                          ? 'rounded-b-sm'
                          : '',
                    ]"
                  >
                    {{ headerNavItem.item }}
                  </li>
                </router-link>
              </ul>
            </div>
          </div>

          <!-- Text content -->
          <div class="md:ml-10 xl:ml-16 md:w-1/2">
            <h1
              class="pt-3 text-[#432818] font-extrabold text-2xl md:text-5xl/14 xl:text-7xl/19 leading-relaxed"
            >
              Experience Life<span class="md:hidden">,</span><br class="hidden md:block" />
              Powered by Ai
            </h1>
            <p class="mt-4 text-[10px] md:text-sm xl:text-base font-light md:font-normal">
              Experience next-level living with fully integrated smart systems for lighting,
              <br class="md:hidden" />
              security, climate, and entertainment.
            </p>
            <button
              class="bg-black text-white px-3 py-2 md:px-4 md:py-2 xl:px-8 xl:py-4 rounded-sm md:rounded-xl text-[8px] md:text-sm xl:text-base mt-3 md:mt-8 cursor-pointer md:w-auto"
            >
              Tap to feel the future
            </button>
          </div>
        </div>

        <!-- Homepage image -->
        <div
          class="absolute w-full md:w-[50%] h-67 sm:h-80 md:h-130 xl:h-139 top-3/5 md:top-10 md:right-0 md:w-80"
        >
          <img
            src="\images\homepage-img1.jpg"
            alt=""
            class="rounded-xl md:rounded-[40px] h-full w-9/10 md:w-8/10 mx-auto md:mr-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
