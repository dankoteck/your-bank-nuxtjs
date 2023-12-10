<script lang="ts" setup>
import NavigationList from "~/components/app-header/navigation-list.vue";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div
    class="flex w-full flex-col items-center gap-10 bg-grey-shades-11 px-4 pb-[30px] pt-[50px] lg:px-20 lg:pt-[60px]"
  >
    <nuxt-img
      alt="Logo"
      height="40"
      src="/icons/logo-desktop.svg"
      width="130"
    />

    <navigation-list :no-styles="true" :register="false" />

    <hr
      class="block h-[1px] w-full border-0 border-b border-b-grey-shades-15"
    />

    <div
      class="flex flex-wrap items-center justify-center gap-5 lg:justify-between"
    >
      <div class="flex items-center gap-1.5">
        <envelope-icon class="h-5 w-5 text-green-shades-60" />
        <p class="text-white">lekhoa011159@gmail.com</p>
      </div>

      <div class="flex items-center gap-1.5">
        <phone-icon class="h-5 w-5 text-green-shades-60" />
        <p class="text-white">(+84) 96450667</p>
      </div>

      <div class="flex items-center gap-1.5">
        <map-pin-icon class="h-5 w-5 text-green-shades-60" />
        <p class="text-white">Vietnam</p>
      </div>
    </div>

    <hr
      class="block h-[1px] w-full border-0 border-b border-b-grey-shades-15"
    />

    <div
      class="flex w-full flex-col items-center justify-between gap-5 rounded-xl border border-grey-shades-15 bg-grey-shades-10 p-3 pb-[30px] pr-6 lg:flex-row lg:gap-0 lg:rounded-[100px] lg:pb-3"
    >
      <div class="-mt-8 flex items-center gap-2 lg:mt-0">
        <div
          class="flex items-center justify-center rounded-full bg-green-shades-60 p-3"
        >
          <nuxt-img
            alt="Facebook Icon"
            class="h-5 w-5"
            src="/icons/facebook.svg"
          />
        </div>

        <div
          class="flex items-center justify-center rounded-full bg-green-shades-60 p-3"
        >
          <nuxt-img
            alt="Twitter Icon"
            class="h-5 w-5"
            src="/icons/twitter.svg"
          />
        </div>

        <div
          class="flex items-center justify-center rounded-full bg-green-shades-60 p-3"
        >
          <nuxt-img
            alt="Linkedin Icon"
            class="h-5 w-5"
            src="/icons/linkedin.svg"
          />
        </div>
      </div>

      <p class="text-sm font-light text-grey-shades-70">
        YourBank All Rights Reserved
      </p>

      <p class="text-sm font-light text-grey-shades-70">
        Privacy Policy &nbsp; | &nbsp; Terms of Service
      </p>
    </div>
  </div>
</template>