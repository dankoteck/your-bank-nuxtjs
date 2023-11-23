<script setup lang="ts">
import {
  BuildingLibraryIcon,
  BookOpenIcon,
  BuildingOffice2Icon,
  BanknotesIcon,
  PresentationChartBarIcon,
  CurrencyDollarIcon,
} from "@heroicons/vue/24/solid";

const forIndividuals = [
  {
    title: "Managing Personal Finances",
    img: "/icons/finances-support.svg",
  },
  {
    title: "Saving for the Future",
    img: "/icons/finances-saving.svg",
  },
  {
    title: "Homeownership",
    img: BuildingLibraryIcon,
  },
  {
    title: "Education Funding",
    img: BookOpenIcon,
  },
];

const cases01 = [
  {
    percent: "78%",
    text: "Secure Retirement Planning",
  },
  {
    percent: "63%",
    text: "Manageable Debt Consolidation",
  },
  {
    percent: "91%",
    text: "Reducing financial burdens",
  },
];

const forBusiness = [
  {
    title: "Startups and Entrepreneurs",
    img: BuildingOffice2Icon,
  },
  {
    title: "Cash Flow Management",
    img: BanknotesIcon,
  },
  {
    title: "Business Expansion",
    img: PresentationChartBarIcon,
  },
  {
    title: "Payment Solutions",
    img: CurrencyDollarIcon,
  },
];

const cases02 = [
  {
    percent: "65%",
    text: "Cash Flow Management",
  },
  {
    percent: "70%",
    text: "Drive Business Expansion",
  },
  {
    percent: "45%",
    text: "Streamline payroll processing",
  },
];
</script>

<template>
  <div class="container mt-[80px] md:mt-[120px] flex flex-col gap-10">
    <div class="text-center md:text-left">
      <p class="text-green-shades-60 text-[28px] md:text-[38px] leading-[1.5]">
        Use Cases
      </p>
      <p class="font-light text-sm md:text-base text-grey-shades-70">
        At YourBank, we cater to the diverse needs of individuals and businesses
        alike, offering a wide range of financial solutions
      </p>
    </div>

    <div class="flex gap-[30px] lg:gap-[60px] flex-col lg:flex-row">
      <div
        class="flex-1 basis-1/2 grid grid-cols-2 grid-rows-2 gap-2.5 md:p-10 p-5 rounded-[20px] bg-grey-shades-11 bg-use-cases"
      >
        <div
          class="p-[14px] md:p-6 flex flex-col items-center gap-[14px] rounded-xl border border-grey-shades-15 bg-grey-shades-10"
          v-for="item in forIndividuals"
        >
          <gradient-icon>
            <nuxt-img
              :src="item.img"
              :alt="item.title + ' Icon'"
              v-if="typeof item.img === 'string'"
              width="24"
              height="24"
              class="w-[24px] h-auto fill-green-shades-60"
            />
            <component
              :is="item.img"
              v-else
              class="w-[24px] h-auto fill-green-shades-60"
            />
          </gradient-icon>

          <p class="text-sm md:text-base text-center text-white">
            {{ item.title }}
          </p>
        </div>
      </div>

      <div class="flex-1 basis-1/2 flex flex-col justify-between">
        <div class="flex flex-col gap-2.5 md:text-left text-center">
          <p
            class="text-white md:text-[26px] text-xl leading-[1.5] font-medium"
          >
            For Individuals
          </p>
          <p class="text-sm md:text-base text-grey-shades-70 font-light">
            For individuals, our mortgage services pave the way to
            homeownership, and our flexible personal loans provide vital support
            during various life milestones. We also prioritize retirement
            planning, ensuring a financially secure future for our customers
          </p>
        </div>

        <div
          class="flex items-center flex-col px-[50px] mt-5 lg:mt-0 lg:px-0 md:flex-row"
        >
          <div
            v-for="(item, index) in cases01"
            class="w-full flex-1 flex flex-col items-center md:items-start gap-1.5 px-0 py-[30px] md:py-0 md:px-[50px] border-b md:border-b-0 md:border-r border-grey-shades-15 border-dashed"
            :class="{
              'pb-[30px] md:pl-0 md:pr-[50px]': index === 0,
              'md:pr-0 md:pl-[50px] md:!border-r-0':
                index === cases01.length - 1,
            }"
          >
            <p
              class="text-green-shades-60 text-[40px] font-medium leading-[1.5]"
            >
              {{ item.percent }}
            </p>
            <p class="text-grey-shades-70 font-light text-[15px] leading-[1.5]">
              {{ item.text }}
            </p>
          </div>
        </div>

        <button
          class="text-white text-sm md:text-base mt-[50px] lg:mt-0 mx-auto md:mx-0 w-fit py-[14px] px-5 text-center rounded-[82px] border border-grey-shades-15 bg-grey-11"
        >
          Learn More
        </button>
      </div>
    </div>

    <div
      class="flex gap-[30px] md:gap-[60px] mt-5 md:mt-0 flex-col lg:flex-row-reverse"
    >
      <div
        class="flex-1 basis-1/2 grid grid-cols-2 grid-rows-2 gap-2.5 md:p-10 p-5 rounded-[20px] bg-grey-shades-11 bg-use-cases md:before:-scale-x-[1]"
      >
        <div
          class="p-[14px] md:p-6 flex flex-col items-center gap-[14px] rounded-xl border border-grey-shades-15 bg-grey-shades-10"
          v-for="item in forBusiness"
        >
          <gradient-icon>
            <nuxt-img
              :src="item.img"
              :alt="item.title + ' Icon'"
              width="24"
              height="24"
              v-if="typeof item.img === 'string'"
              class="w-[24px] h-auto fill-green-shades-60"
            />
            <component
              :is="item.img"
              v-else
              class="w-[24px] h-auto fill-green-shades-60"
            />
          </gradient-icon>

          <p class="text-sm md:text-base text-center text-white">
            {{ item.title }}
          </p>
        </div>
      </div>

      <div class="flex-1 basis-1/2 flex flex-col justify-between">
        <div class="flex flex-col gap-2.5 md:text-left text-center">
          <p
            class="text-white md:text-[26px] text-xl leading-[1.5] font-medium"
          >
            For Business
          </p>
          <p class="text-sm md:text-base text-grey-shades-70 font-light">
            For businesses, we empower growth with working capital solutions
            that optimize cash flow, and our tailored financing options fuel
            business expansion. Whatever your financial aspirations, YourBank is
            committed to providing the right tools and support to achieve them
          </p>
        </div>

        <div
          class="flex items-center flex-col px-[50px] mt-5 lg:mt-0 lg:px-0 md:flex-row"
        >
          <div
            v-for="(item, index) in cases02"
            class="w-full flex-1 flex flex-col items-center md:items-start gap-1.5 px-0 py-[30px] md:py-0 md:px-[50px] border-b md:border-b-0 md:border-r border-grey-shades-15 border-dashed"
            :class="{
              'pb-[30px] md:pl-0 md:pr-[50px]': index === 0,
              'md:pr-0 md:pl-[50px] md:!border-r-0':
                index === cases02.length - 1,
            }"
          >
            <p
              class="text-green-shades-60 text-[40px] font-medium leading-[1.5]"
            >
              {{ item.percent }}
            </p>
            <p class="text-grey-shades-70 font-light text-[15px] leading-[1.5]">
              {{ item.text }}
            </p>
          </div>
        </div>

        <button
          class="text-white text-sm md:text-base mt-[50px] lg:mt-0 mx-auto md:mx-0 w-fit py-[14px] px-5 text-center rounded-[82px] border border-grey-shades-15 bg-grey-11"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>
