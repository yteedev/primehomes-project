<script setup>
import NavBar from '@/components/NavBar.vue'
import ExperienceLife from '@/components/ExperienceLife.vue'
import OurVision from '@/components/OurVision.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
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
          class="w-full text-[11px] md:text-xl text-[#000000] font-normal mt-4 md:mt-8 leading-5 md:leading-8 tracking-normal"
        >
          SmartHomes is a modern home-automation company dedicated to transforming everyday houses
          into intelligent living spaces.
          <br class="hidden md:block" />
          We design and install seamless smart systems that enhance comfort, security, and energy
          efficiency.
        </p>
      </div>
      <!-- OUR VISION SECTION -->
      <div>
        <OurVision />
      </div>
      <!-- FEATURED PROJECTS SECTION -->
      <FeaturedProjects />
    </div>
  </div>
</template>
