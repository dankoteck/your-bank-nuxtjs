<script setup lang="ts">
import {
  BriefcaseIcon,
  ArchiveBoxArrowDownIcon,
  BanknotesIcon,
} from "@heroicons/vue/24/solid";

const benefits = [
  {
    icon: BriefcaseIcon,
    title: "Checking Accounts",
    content:
      "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
  },
  {
    icon: ArchiveBoxArrowDownIcon,
    title: "Savings Accounts",
    content:
      "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
  },
  {
    icon: BanknotesIcon,
    title: "Loans and Mortgages",
    content:
      "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
  },
];
</script>

<template>
  <div class="flex flex-col gap-[60px] md:gap-[80px]">
    <div
      class="flex flex-col md:items-end justify-between container gap-6 md:flex-row items-center mt-[70px] md:mt-[120px]"
    >
      <div class="flex flex-col gap-2.5 text-center md:text-left">
        <p class="text-[28px] md:text-[38px] leading-[1.5] text-white">
          <span>Our</span>
          <span class="text-green-shades-60"> Products</span>
        </p>
        <p
          class="text-grey-shades-70 text-sm md:text-base font-light leading-[1.5]"
        >
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your
          <br />
          unique financial needs and aspirations
        </p>
      </div>

      <div
        class="p-3 flex items-center rounded-[82px] border border-grey-shades-15 bg-grey-shades-11"
      >
        <button
          class="text-sm md:text-base rounded-[140px] py-2.5 px-[18px] items-center justify-center bg-green-shades-60 text-grey-shades-11"
        >
          For Individuals
        </button>

        <button
          class="text-sm md:text-base rounded-[140px] py-2.5 px-[18px] items-center justify-center text-white"
        >
          For Businesses
        </button>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row items-center container">
      <div
        v-for="(item, index) in benefits"
        class="flex-1 px-2.5 lg:px-10 py-[30px] lg:py-6 border-b lg:border-b-0 lg:border-r border-grey-shades-15 flex flex-col gap-6 justify-center items-center"
        :class="{
          'pt-0 lg:pt-6 lg:pl-0': index === 0,
          '!pr-0 border-b-0 !border-r-0': index === benefits.length - 1,
        }"
      >
        <gradient-icon>
          <component
            :is="item.icon"
            class="w-[28px] h-auto fill-green-shades-60"
          />
        </gradient-icon>

        <div class="flex flex-col gap-4 items-center text-center">
          <p class="text-white text-xl">{{ item.title }}</p>
          <p class="text-grey-shades-70 text-sm md:text-base font-light">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
