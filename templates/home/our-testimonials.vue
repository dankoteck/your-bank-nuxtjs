<script lang="ts" setup>
import { Navigation } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";

const testimonials = [
  {
    content:
      "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
    user: "Sara T",
    profileLink: "https://nuxt.com/docs/api/composables/use-async-data",
  },
  {
    content:
      "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
    user: "John D",
    profileLink: "https://nuxt.com/docs/api/composables/use-async-data",
  },
  {
    content:
      "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
    user: "Emily G",
    profileLink: "https://nuxt.com/docs/api/composables/use-async-data",
  },
];
</script>

<template>
  <div class="container mt-[80px] flex flex-col gap-10 md:mt-[120px] lg:gap-20">
    <section-title :highlighted="['Testimonials']" text="Our Testimonials">
      Discover how YourBank has transformed lives with innovative digital
      solutions and personalized customer service. See why
      <br class="hidden md:block" />
      our clients trust us for a secure and prosperous financial journey
    </section-title>

    <div class="relative flex flex-col gap-[30px] lg:flex-row lg:gap-10">
      <button-basic
        id="swiper-navigation-prevEl"
        active
        class="hidden self-center !p-3 lg:block"
      >
        <template #icon>
          <arrow-left-icon class="h-7 w-7" />
        </template>
      </button-basic>

      <Swiper
        :breakpoints="{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }"
        :modules="[Navigation]"
        :navigation="{
          prevEl: '#swiper-navigation-prevEl',
          nextEl: '#swiper-navigation-nextEl',
        }"
        :slides-per-view="1"
        class="relative"
        loop
      >
        <!-- Overlay left side -->
        <div class="bg-testimonials-overlay left-0"></div>

        <SwiperSlide v-for="item in testimonials">
          <div
            class="flex flex-col gap-[30px] rounded-xl border border-grey-shades-15 p-5 text-center lg:gap-10 md:border-0 lg:px-[30px] lg:py-0"
          >
            <div class="flex items-center gap-4">
              <hr
                class="block w-full border-0 border-b border-b-grey-shades-15"
              />
              <nuxt-img
                alt="Quote Icon"
                class="h-11 w-11"
                src="/icons/double-quote.svg"
              />
              <hr
                class="block w-full border-0 border-b border-b-grey-shades-15"
              />
            </div>
            <p class="text-sm text-white lg:text-base">{{ item.content }}</p>
            <p class="font-medium text-green-shades-60">
              {{ item.user }}
            </p>
          </div>
        </SwiperSlide>

        <!-- Overlay right side -->
        <div class="bg-testimonials-overlay right-0 rotate-180"></div>
      </Swiper>

      <div class="flex items-center justify-center gap-5">
        <button-basic
          id="swiper-navigation-prevEl"
          active
          class="block self-center !p-3 lg:!hidden"
        >
          <template #icon>
            <arrow-left-icon class="h-7 w-7" />
          </template>
        </button-basic>

        <button-basic
          id="swiper-navigation-nextEl"
          active
          class="self-center !p-3"
        >
          <template #icon>
            <arrow-right-icon class="h-7 w-7" />
          </template>
        </button-basic>
      </div>
    </div>
  </div>
</template>