<script lang="ts" setup>
import {
  ArchiveBoxArrowDownIcon,
  BanknotesIcon,
  BriefcaseIcon,
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
  <section
    class="mt-[70px] flex flex-col gap-[60px] md:mt-[120px] md:gap-[80px]"
  >
    <section-title :highlighted="['Products']" text="Our Products">
      Discover a range of comprehensive and customizable banking products at
      YourBank, designed to suit your
      <br />
      unique financial needs and aspirations
    </section-title>

    <div class="container flex flex-col items-center lg:flex-row">
      <div
        v-for="(item, index) in benefits"
        :class="{
          'pt-0 lg:pl-0 lg:pt-6': index === 0,
          '!border-r-0 border-b-0 !pr-0': index === benefits.length - 1,
        }"
        class="flex flex-1 flex-col items-center justify-center gap-6 border-b border-grey-shades-15 px-2.5 py-[30px] lg:border-b-0 lg:border-r lg:px-10 lg:py-6"
      >
        <gradient-icon>
          <component
            :is="item.icon"
            class="h-auto w-[28px] fill-green-shades-60"
          />
        </gradient-icon>

        <div class="flex flex-col items-center gap-4 text-center">
          <p class="text-xl text-white">{{ item.title }}</p>
          <p class="text-sm font-light text-grey-shades-70 md:text-base">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>