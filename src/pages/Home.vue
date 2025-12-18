<script setup>
import NavBar from '@/components/NavBar.vue'
import ExperienceLife from '@/components/ExperienceLife.vue'
import OurVision from '@/components/OurVision.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
<template>
  <div>
    <NavBar />

    <div class="md:px-10 xl:px-25 md:mt-21 md:pt-24">
      <!-- EXPERIENCE LIFE SECTION -->
      <ExperienceLife />

      <!-- ABOUT SMARTHOMES SECTION -->
      <div class="text-center mt-49 sm:mt-62 md:mt-35 w-full px-6 md:mx-auto">
        <h1 class="text-2xl sm:text-4xl md:text-5xl xl:text-6xl text-[#000000] font-extrabold">
          About <span class="text-[#995829]"> SmartHomes </span>
        </h1>
        <p
          class="w-full text-[11px] sm:text-base md:text-xl xl:text-xl text-[#000000] font-normal mt-4 md:mt-6 xl:mt-8 leading-5 sm:leading-6 md:leading-7 xl:leading-8 tracking-normal"
        >
          SmartHomes is a modern home-automation company dedicated to transforming everyday houses
          into intelligent living spaces. We design and install seamless smart systems that enhance
          comfort, security, and energy efficiency.
        </p>
      </div>

      <!-- OUR VISION SECTION -->
      <OurVision />

      <!-- FEATURED PROJECTS SECTION -->
      <FeaturedProjects />
    </div>
    <!-- FOOTER SECTION -->
    <FooterSection />
  </div>
</template>
