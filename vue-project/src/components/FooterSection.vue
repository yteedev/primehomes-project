<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const year = new Date().getFullYear()
</script>

<template>
  <div class="hidden md:block bg-[#432818] text-white mt-43 pt-10 px-30">
    <div class="flex flex-row justify-between pb-8">
      <div class="w-1/3">
        <img src="/images/smarthomes logo white.png" alt="" class="w-38 h-14" />
        <div class="text-justify">
          <p class="text-lg/7 font-ligh mt-8">
            Transforming homes across Rwanda with modern automation, smart security, and connected
            living solutions.
          </p>
          <div class="flex flex-row gap-8 mt-8">
            <img src="\icons\instagram-icon.png" alt="" class="size-12" />
            <img src="\icons\facebook-icon.png" alt="" class="size-12" />
            <img src="\icons\facebook-icon.png" alt="" class="size-12" />
          </div>
        </div>
      </div>

      <div class="flex flex-row gap-6">
        <div>
          <p class="text-3xl font-medium">Quick Links</p>
          <ul class="flex flex-col gap-4 mt-4">
            <router-link to="/">
              <li class="text-white font-[22px] font-normal">Home</li>
            </router-link>
            <router-link to="/services">
              <li class="text-white font-[22px] font-normal">Services</li></router-link
            >
            <router-link to="/contact"
              ><li class="text-white font-[22px] font-normal">Contact</li></router-link
            >
            <router-link to="/faqs"
              ><li class="text-white font-[22px] font-normal">FAQs</li></router-link
            >
          </ul>
        </div>
        <div>
          <p class="text-3xl font-medium">Support</p>
          <ul class="flex flex-col gap-4 mt-4">
            <router-link to="/demo">
              <li class="text-white font-[22px] font-normal">Demo</li>
            </router-link>
            <router-link to="/termsAndConditions">
              <li class="text-white font-[22px] font-normal">Terms and Conditions</li></router-link
            >
            <router-link to="/cookiesPolicies"
              ><li class="text-white font-[22px] font-normal">Cookies Policies</li></router-link
            >
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-[#ffffff] text-center">
      <p class="text-base pt-5 pb-5">&#169; {{ year }} All Rights Reserved</p>
    </div>
  </div>
</template>
