<script lang="ts" setup>
import {
  BanknotesIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  PresentationChartBarIcon,
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
    title: "Homeowner",
    img: BuildingLibraryIcon,
  },
  {
    title: "Education Funding",
    img: BookOpenIcon,
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
  <div class="container mt-[80px] flex flex-col gap-10 md:mt-[120px]">
    <section-title
      :highlighted="['Use', 'Cases']"
      :plan-subscription="false"
      text="Use Cases"
    >
      At YourBank, we cater to the diverse needs of individuals and businesses
      alike, offering a wide range of financial solutions
    </section-title>

    <div class="flex flex-col gap-[30px] lg:flex-row lg:gap-[60px]">
      <div
        class="bg-use-cases grid flex-1 basis-1/2 grid-cols-2 grid-rows-2 gap-2.5 rounded-[20px] bg-grey-shades-11 p-5 md:p-10"
      >
        <div
          v-for="item in forIndividuals"
          class="flex flex-col items-center gap-[14px] rounded-xl border border-grey-shades-15 bg-grey-shades-10 p-[14px] md:p-6"
        >
          <gradient-icon>
            <nuxt-img
              v-if="typeof item.img === 'string'"
              :alt="item.title + ' Icon'"
              :src="item.img"
              class="h-auto w-[24px] fill-green-shades-60"
              height="24"
              width="24"
            />
            <component
              :is="item.img"
              v-else
              class="h-auto w-[24px] fill-green-shades-60"
            />
          </gradient-icon>

          <p class="text-center text-sm text-white md:text-base">
            {{ item.title }}
          </p>
        </div>
      </div>

      <div class="flex flex-1 basis-1/2 flex-col justify-between">
        <div class="flex flex-col gap-2.5 text-center md:text-left">
          <p
            class="text-xl font-medium leading-[1.5] text-white md:text-[26px]"
          >
            For Individuals
          </p>
          <p class="text-sm font-light text-grey-shades-70 md:text-base">
            For individuals, our mortgage services pave the way to homeowner,
            and our flexible personal loans provide vital support during various
            life milestones. We also prioritize retirement planning, ensuring a
            financially secure future for our customers
          </p>
        </div>

        <div
          class="mt-5 flex flex-col items-center px-[50px] md:flex-row lg:mt-0 lg:px-0"
        >
          <div
            v-for="(item, index) in cases01"
            :class="{
              'pb-[30px] md:pl-0 md:pr-[50px]': index === 0,
              'md:!border-r-0 md:pl-[50px] md:pr-0':
                index === cases01.length - 1,
            }"
            class="flex w-full flex-1 flex-col items-center gap-1.5 border-b border-dashed border-grey-shades-15 px-0 py-[30px] md:items-start md:border-b-0 md:border-r md:px-[50px] md:py-0"
          >
            <p
              class="text-[40px] font-medium leading-[1.5] text-green-shades-60"
            >
              {{ item.percent }}
            </p>
            <p class="text-[15px] font-light leading-[1.5] text-grey-shades-70">
              {{ item.text }}
            </p>
          </div>
        </div>

        <div class="mt-[50px] lg:mt-0">
          <button-basic> Learn More</button-basic>
        </div>
      </div>
    </div>

    <div
      class="mt-5 flex flex-col gap-[30px] md:mt-0 md:gap-[60px] lg:flex-row-reverse"
    >
      <div
        class="bg-use-cases grid flex-1 basis-1/2 grid-cols-2 grid-rows-2 gap-2.5 rounded-[20px] bg-grey-shades-11 p-5 md:p-10 md:before:-scale-x-[1]"
      >
        <div
          v-for="item in forBusiness"
          class="flex flex-col items-center gap-[14px] rounded-xl border border-grey-shades-15 bg-grey-shades-10 p-[14px] md:p-6"
        >
          <gradient-icon>
            <nuxt-img
              v-if="typeof item.img === 'string'"
              :alt="item.title + ' Icon'"
              :src="item.img"
              class="h-auto w-[24px] fill-green-shades-60"
              height="24"
              width="24"
            />
            <component
              :is="item.img"
              v-else
              class="h-auto w-[24px] fill-green-shades-60"
            />
          </gradient-icon>

          <p class="text-center text-sm text-white md:text-base">
            {{ item.title }}
          </p>
        </div>
      </div>

      <div class="flex flex-1 basis-1/2 flex-col justify-between">
        <div class="flex flex-col gap-2.5 text-center md:text-left">
          <p
            class="text-xl font-medium leading-[1.5] text-white md:text-[26px]"
          >
            For Business
          </p>
          <p class="text-sm font-light text-grey-shades-70 md:text-base">
            For businesses, we empower growth with working capital solutions
            that optimize cash flow, and our tailored financing options fuel
            business expansion. Whatever your financial aspirations, YourBank is
            committed to providing the right tools and support to achieve them
          </p>
        </div>

        <div
          class="mt-5 flex flex-col items-center px-[50px] md:flex-row lg:mt-0 lg:px-0"
        >
          <div
            v-for="(item, index) in cases02"
            :class="{
              'pb-[30px] md:pl-0 md:pr-[50px]': index === 0,
              'md:!border-r-0 md:pl-[50px] md:pr-0':
                index === cases02.length - 1,
            }"
            class="flex w-full flex-1 flex-col items-center gap-1.5 border-b border-dashed border-grey-shades-15 px-0 py-[30px] md:items-start md:border-b-0 md:border-r md:px-[50px] md:py-0"
          >
            <p
              class="text-[40px] font-medium leading-[1.5] text-green-shades-60"
            >
              {{ item.percent }}
            </p>
            <p class="text-[15px] font-light leading-[1.5] text-grey-shades-70">
              {{ item.text }}
            </p>
          </div>
        </div>

        <div class="mt-[50px] lg:mt-0">
          <button-basic> Learn More</button-basic>
        </div>
      </div>
    </div>
  </div>
</template>