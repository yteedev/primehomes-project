<script setup>
const features = [
  {
    name: 'Automation',
    icon: '/primehomes-project/icons/1-icon.png',
    sizes: {
      mobile: { width: 14, height: 12 },
      sm: { width: 23, height: 21 },
      md: { width: 49, height: 49 },
      xl: { width: 55, height: 55 },
    },
  },
  {
    name: 'Security',
    icon: '/primehomes-project/icons/2-icon.png',
    sizes: {
      mobile: { width: 13, height: 13 },
      sm: { width: 22, height: 22 },
      md: { width: 32, height: 32 },
      xl: { width: 40, height: 40 },
    },
  },
  {
    name: 'Control',
    icon: '/primehomes-project/icons/3-icon.png',
    sizes: {
      mobile: { width: 9, height: 13 },
      sm: { width: 18, height: 22 },
      md: { width: 27, height: 41 },
      xl: { width: 33, height: 47 },
    },
  },
  {
    name: 'Intelligent',
    icon: '/primehomes-project/icons/4-icon.png',
    sizes: {
      mobile: { width: 13, height: 13 },
      sm: { width: 22, height: 22 },
      md: { width: 39, height: 40 },
      xl: { width: 45, height: 46 },
    },
  },
  {
    name: 'Connectivity',
    icon: '/primehomes-project/icons/5-icon.png',
    sizes: {
      mobile: { width: 19, height: 16 },
      sm: { width: 28, height: 24 },
      md: { width: 49, height: 42 },
      xl: { width: 55, height: 48 },
    },
  },
  {
    name: 'Sustainability',
    icon: '/primehomes-project/icons/6-icon.png',
    sizes: {
      mobile: { width: 15, height: 12 },
      sm: { width: 24, height: 21 },
      md: { width: 47, height: 35 },
      xl: { width: 53, height: 41 },
    },
  },
]
</script>
<template>
  <div class="mx-auto px-6 md:px-6 xl:px-7 mt-15 md:mt-29">
    <div class="flex flex-row gap-4 md:gap-6 xl:gap-12">
      <!-- Image Section - 53% width -->
      <div class="w-[53%] overflow-hidden self-stretch">
        <img
          src="/images/liftapp.jpg"
          alt="Modern living room"
          class="w-full h-full max-h-232 object-cover"
        />
      </div>

      <!-- Content Section - 44% width -->
      <div
        class="w-[44%] text-sm sm:text-xl md:text-3xl xl:text-4xl xl:text-5xl font-bold md:font-extrabold flex flex-col"
      >
        <h1>Our Vision</h1>
        <p
          class="text-[8px] sm:text-xs md:text-base xl:text-xl font-light md:font-normal mt-2 md:mt-7 xl:mt-11 leading-4 sm:leading-5 md:leading-8 text-justify"
        >
          To lead the future of living in Rwanda by creating homes that are intelligent, secure, and
          effortlessly connected; spaces where technology enhances comfort, sustainability, and
          everyday life for every homeowner.
        </p>

        <!-- Features Grid -->
        <div class="grid grid-cols-2 gap-2 md:gap-6 xl:gap-6 mt-2 md:mt-6 flex-grow">
          <div
            v-for="feature in features"
            :key="feature.name"
            class="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 xl:p-8 bg-white border-solid border-[0.5px] border-[#C5C2C2] shadow-[1px_1px_2px_0px_rgba(197,194,194,0.5)] md:shadow-[3px_3px_3px_0px_rgba(197,194,194,0.5)]"
          >
            <img
              :src="feature.icon"
              alt="feature"
              class="feature-icon"
              :style="{
                '--icon-width-mobile': `${feature.sizes.mobile.width}px`,
                '--icon-height-mobile': `${feature.sizes.mobile.height}px`,
                '--icon-width-sm': `${feature.sizes.sm.width}px`,
                '--icon-height-sm': `${feature.sizes.sm.height}px`,
                '--icon-width-md': `${feature.sizes.md.width}px`,
                '--icon-height-md': `${feature.sizes.md.height}px`,
                '--icon-width-xl': `${feature.sizes.xl.width}px`,
                '--icon-height-xl': `${feature.sizes.xl.height}px`,
              }"
            />
            <p
              class="text-[9px] sm:text-base md:text-xl xl:text-2xl font-normal md:font-medium mt-2 md:mt-5 xl:mt-9"
            >
              {{ feature.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.feature-icon {
  width: var(--icon-width-mobile);
  height: var(--icon-height-mobile);
}

@media (min-width: 640px) {
  .feature-icon {
    width: var(--icon-width-sm);
    height: var(--icon-height-sm);
  }
}

@media (min-width: 768px) {
  .feature-icon {
    width: var(--icon-width-md);
    height: var(--icon-height-md);
  }
}

@media (min-width: 1280px) {
  .feature-icon {
    width: var(--icon-width-xl);
    height: var(--icon-height-xl);
  }
}
</style>
