<script setup>
import { ref } from 'vue'

const activeProject = ref(null)
const toggleProject = (projectId) => {
  activeProject.value = activeProject.value === projectId ? null : projectId
}
</script>
<template>
  <div class="text-center mt-16 md:mt-45 w-full px-6 md:mx-auto">
    <h1 class="text-2xl md:text-6xl text-[#000000] font-extrabold">
      Featured <span class="text-[#995829]"> Projects </span>
    </h1>
    <p
      class="w-full text-[11px] md:text-xl text-[#000000] font-normal mt-4 md:mt-8 leading-5 md:leading-8 tracking-normal"
    >
      A curated look at the smart living experiences we’re creating across Rwanda; featuring both
      ongoing developments <br class="hidden md:block" />
      and completed home transformations that reflect our commitment to intelligent, modern living.
    </p>

    <!-- OVERLAY -->
    <div class="flex flex-col md:flex-row gap-8 md:gap-4 mt-9 md:mt-23">
      <!-- OVERLAY IMG -->
      <div
        @click="toggleProject(1)"
        class="relative w-full md:w-1/2 h-61 md:h-121 rounded-lg md:rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:group cursor-pointer"
      >
        <img
          src="/images/primevilla.jpg"
          alt=""
          class="w-full h-full md:object-cover transition-transform duration-500 group-hover:scale-110"
          :class="{ 'scale-105': activeProject === 1 }"
        />

        <!-- OVERLAY TEXT -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-[#432818]/0 via-[#432818] to-[#FF6100] md:group-hover:opacity-50 transition-all duration-500"
          :class="activeProject === 1 ? 'opacity-50' : 'opacity-0'"
        ></div>
        <div
          class="w-8/10 md:w-9/10 mx-auto absolute top-4/10 md:top-3/10 inset-0 flex flex-col items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
          :class="activeProject === 1 ? 'opacity-100' : 'opacity-0'"
        >
          <h class="text-white text-xl md:text-4xl font-bold">PrimeHOMES VILLAS</h>
          <p class="text-white text-[11px] md:text-lg font-normal mt-2 md:mt-4">
            A live smart home build that reflects our end-to-end approach to crafting intelligent,
            seamlessly connected villa spaces designed for modern living.
          </p>
        </div>
      </div>
      <!-- OVERLAY IMG -->
      <div
        @click="toggleProject(2)"
        class="relative w-full md:w-1/2 h-61 md:h-121 rounded-lg md:rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:group cursor-pointer"
      >
        <img
          src="/images/garden of peace.jpg"
          alt=""
          class="w-full h-full md:object-cover transition-transform duration-500 group-hover:scale-110"
          :class="{ 'scale-105': activeProject === 2 }"
        />

        <!-- OVERLAY TEXT -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-[#432818]/0 via-[#432818] to-[#FF6100] md:group-hover:opacity-50 transition-all duration-500"
          :class="activeProject === 2 ? 'opacity-50' : 'opacity-0'"
        ></div>
        <div
          class="w-8/10 md:w-9/10 mx-auto absolute top-4/10 md:top-3/10 inset-0 flex flex-col items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
          :class="activeProject === 2 ? 'opacity-100' : 'opacity-0'"
        >
          <h class="text-white text-xl md:text-4xl font-bold">Garden of Peace</h>
          <p class="text-white text-[11px] md:text-lg font-normal mt-2 md:mt-4">
            A complete home upgrade where we transformed a traditional house into a fully automated
            space with intelligent control, enhanced security, and seamless comfort.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
