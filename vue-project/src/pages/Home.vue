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
      <div class="text-center mt-49 md:mt-30 w-full mx-auto">
        <h1 class="text-2xl md:text-6xl text-[#000000] font-extrabold">
          About <span class="text-[#995829]"> SmartHomes </span>
        </h1>
        <p
          class="text-xs md:text-xl text-[#000000] font-normal mt-4 md:mt-8 leading-5 md:leading-8 tracking-wider"
        >
          SmartHomes is a modern home-automation company dedicated <br class="md:hidden" />
          to transforming everyday houses into intelligent living spaces.
          <br />
          We design and install seamless smart systems that enhance <br class="md:hidden" />
          comfort, security, and energy efficiency.
        </p>
      </div>
      <!-- OUR VISION SECTION -->
      <div>
        <OurVision />
      </div>
      <!-- FEATURED PROJECTS SECTION -->
    </div>
  </div>
</template>
