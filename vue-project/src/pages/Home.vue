<script setup>
import NavBar from '@/components/NavBar.vue'
import ExperienceLife from '@/components/ExperienceLife.vue'
import OurVision from '@/components/OurVision.vue'
</script>
<template>
  <div>
    <NavBar />

    <div class="md:px-25">
      <!-- EXPERIENCE LIFE SECTION -->
      <ExperienceLife />

      <!-- ABOUT SMARTHOMES SECTION -->
      <div class="text-center mt-49 md:mt-30 w-full px-6 md:mx-auto">
        <h1 class="text-2xl md:text-6xl text-[#000000] font-extrabold">
          About <span class="text-[#995829]"> SmartHomes </span>
        </h1>
        <p
          class="w-full text-[11px] md:text-xl text-[#000000] font-normal mt-4 md:mt-8 leading-5 md:leading-8 tracking-wider"
        >
          SmartHomes is a modern home-automation company dedicated to transforming everyday houses
          into intelligent living spaces. We design and install seamless smart systems that enhance
          comfort, security, and energy efficiency.
        </p>
      </div>
      <!-- OUR VISION SECTION -->
      <div>
        <OurVision />
      </div>
      <!-- FEATURED PROJECTS SECTION -->
      <div class="text-center mt-16 md:mt-45 w-full px-6 md:mx-auto">
        <h1 class="text-2xl md:text-6xl text-[#000000] font-extrabold">
          Featured <span class="text-[#995829]"> Projects </span>
        </h1>
        <p
          class="w-full text-[11px] md:text-xl text-[#000000] font-normal mt-4 md:mt-8 leading-5 md:leading-8 tracking-wider"
        >
          A curated look at the smart living experiences we’re creating across Rwanda; featuring
          both ongoing developments and completed home transformations that reflect our commitment
          to intelligent, modern living.
        </p>
        <div class="flex flex-col md:flex-row gap-8 md:gap-4 mt-9 md:mt-23">
          <img
            src="/images/primevilla.jpg"
            alt=""
            class="w-full md:w-1/2 h-61 md:h-121 rounded-lg md:rounded-[20px] object-cover"
          />
          <img
            src="/images/garden of peace.jpg"
            alt=""
            class="w-full md:w-1/2 h-61 md:h-121 border border-[#000000] rounded-lg md:rounded-[20px] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
