<script setup>
const features = [
  'Automation',
  'Security',
  'Control',
  'Intelligent',
  'Connectivity',
  'Sustainability',
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
            v-for="(feature, index) in features"
            :key="index"
            class="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 xl:p-8 bg-white border-solid border-[0.5px] border-[#C5C2C2] shadow-[1px_1px_2px_0px_rgba(197,194,194,0.5)] md:shadow-[3px_3px_3px_0px_rgba(197,194,194,0.5)]"
          >
            <img
              :src="`/icons/${index + 1}-icon.png`"
              alt="feature"
              class="size-4 sm:size-8 md:size-11 xl:size-12"
            />
            <p
              class="text-[9px] sm:text-base md:text-xl xl:text-2xl font-normal md:font-medium mt-2 md:mt-5 xl:mt-9"
            >
              {{ feature }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
