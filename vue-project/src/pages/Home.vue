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
      <div class="text-center mt-16 md:mt-45 w-full px-6 md:mx-auto">
        <h1 class="text-2xl md:text-6xl text-[#000000] font-extrabold">
          Featured <span class="text-[#995829]"> Projects </span>
        </h1>
        <p
          class="w-full text-[11px] md:text-xl text-[#000000] font-normal mt-4 md:mt-8 leading-5 md:leading-8 tracking-normal"
        >
          A curated look at the smart living experiences we’re creating across Rwanda; featuring
          both ongoing developments <br class="hidden md:block" />
          and completed home transformations that reflect our commitment to intelligent, modern
          living.
        </p>
        <div class="flex flex-col md:flex-row gap-8 md:gap-4 mt-9 md:mt-23">
          <div
            class="relative w-full md:w-1/2 h-61 md:h-121 rounded-lg md:rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] group cursor-pointer"
          >
            <img
              src="/images/primevilla.jpg"
              alt=""
              class="w-full h-full md:object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 group-hover:bg-linear-to-b from-[#432818]/0 via-[#432818] to-[#FF6100] group-over: opacity-50 transition-all duration-500"
            ></div>
            <div
              class="w-8/10 md:w-9/10 mx-auto absolute top-4/10 md:top-3/10 inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <h class="text-white text-xl md:text-4xl font-bold">PrimeHOMES VILLAS</h>
              <p class="text-white text-[11px] md:text-lg font-normal mt-2 md:mt-4">
                A live smart home build that reflects our end-to-end approach to crafting
                intelligent, seamlessly connected villa spaces designed for modern living.
              </p>
            </div>
          </div>
          <div
            class="relative w-full md:w-1/2 h-61 md:h-121 rounded-lg md:rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] group cursor-pointer border border-black"
          >
            <img
              src="/images/garden of peace.jpg"
              alt=""
              class="w-full h-full md:object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 group-hover:bg-linear-to-b from-[#432818]/0 via-[#432818] to-[#FF6100] group-over: opacity-50 transition-all duration-500"
            ></div>
            <div
              class="w-8/10 md:w-9/10 mx-auto absolute top-4/10 md:top-3/10 inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <h class="text-white text-xl md:text-4xl font-bold">Garden of Peace</h>
              <p class="text-white text-[11px] md:text-lg font-normal mt-2 md:mt-4">
                A complete home upgrade where we transformed a traditional house into a fully
                automated space with intelligent control, enhanced security, and seamless comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
