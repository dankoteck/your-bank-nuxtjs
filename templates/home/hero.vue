<script lang="ts" setup>
import type { HomeContentData } from "~/types";

const { data } = await useAsyncData("home-content", () =>
  queryContent<HomeContentData>("/home")
    .only([
      "description",
      "supportedCurrency",
      "currentExchangeRate",
      "exampleTransactions",
      "exampleMonthlyIncome",
    ])
    .findOne(),
);
</script>

<template>
  <section
    class="container mt-[50px] flex flex-col items-center gap-2 md:mt-[80px] md:flex-row md:items-start md:justify-between lg:gap-10"
  >
    <div class="flex flex-1 flex-col items-center gap-2 md:items-start">
      <div
        class="flex w-fit items-center gap-1 rounded-[61px] bg-grey-shades-15 p-2 pr-4"
      >
        <nuxt-img
          alt="Verification Icon"
          class="h-5 w-5"
          src="/icons/verification.svg"
        />
        <p class="text-xs font-light leading-6 text-white">
          No LLC Required, No Credit Check.
        </p>
      </div>

      <div
        class="mt-1 w-full text-center text-[28px] leading-[150%] md:text-left md:text-[38px]"
      >
        <p class="text-white">
          Welcome to YourBank
          <br />
          Empowering Your
          <span class="hidden text-green-shades-60 md:inline-block">
            Financial
          </span>
          <span class="hidden text-green-shades-60 md:inline-block xl:block">
            <span class="inline-block xl:hidden"> </span>
            Journey
          </span>
        </p>
        <p class="text-green-shades-60 md:hidden">Financial Journey</p>
      </div>

      <p
        class="text-center text-sm font-light leading-[150%] -tracking-[0.2px] text-white-shades-90 md:text-left md:text-base"
      >
        {{ data?.description }}
      </p>

      <div class="mt-[22px]">
        <button-filled size="lg">Open Account</button-filled>
      </div>
    </div>

    <div class="flex w-full flex-1 flex-col items-center gap-2 md:items-end">
      <mockup-transactions-table :data="data" />

      <div
        class="mt-1 flex items-center justify-between gap-1 self-end rounded-[42px] bg-[#22251B] px-2 py-1.5 pl-4 lg:mr-4 xl:mr-24"
      >
        <p class="text-[10px] leading-[150%] text-white md:text-xs">
          Supported Currency
        </p>
        <div
          class="flex items-center justify-center gap-1 rounded-[28px] bg-grey-shades-10 p-1.5"
        >
          <nuxt-img
            v-for="currency in data?.supportedCurrency"
            :alt="`${currency} currency icon`"
            :src="`/icons/${currency}-currency.svg`"
            class="h-5 w-5 md:h-8 md:w-8"
          />
        </div>
      </div>
    </div>
  </section>
</template>