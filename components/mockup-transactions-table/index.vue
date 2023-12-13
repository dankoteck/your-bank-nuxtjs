<script lang="ts" setup>
import type { StyleValue } from "vue";

import type { HomeContentData } from "~/types";

const getStyle = (index: number, maxLen: number): StyleValue => {
  return {
    marginTop: `${index * (maxLen - 1 === index ? -8 : -15)}px`,
    zIndex: maxLen - index,
    opacity: 1 - index * 0.4,
    width: `calc(100% - ${index * 20}px)`,
  };
};

defineProps<{
  data: HomeContentData;
}>();
</script>

<template>
  <div
    class="relative mt-[72px] w-[87%] md:mt-0 lg:mr-[70px] lg:w-full lg:max-w-[410px] xl:mr-[140px] xl:max-w-[520px]"
  >
    <div
      class="absolute -left-8 -top-8 flex items-center gap-2 rounded-md bg-[#22251B] px-2.5 py-2"
    >
      <div
        class="flex h-6 w-6 items-center justify-center rounded-full bg-green-shades-60 p-1 md:h-8 md:w-8"
      >
        <nuxt-img alt="Plus Icon" class="h-4 w-4" src="/icons/plus.svg" />
      </div>

      <div class="flex flex-col">
        <p class="text-xs leading-[150%] text-white md:text-sm">
          {{ data.exampleMonthlyIncome }}
        </p>
        <p class="text-[10px] font-light text-white-shades-90 md:text-xs">
          Monthly Income
        </p>
      </div>
    </div>

    <div
      class="absolute -right-14 -top-6 -z-10 h-[220px] w-[220px] bg-[url(/images/abstract-design-01.svg)] bg-no-repeat md:-right-10 md:-top-12 lg:-right-40 lg:-top-6 lg:h-[300px] lg:w-[300px] xl:-right-80 xl:h-[420px] xl:w-[420px]"
    />

    <div
      class="bg-mockup-transactions-table flex h-auto w-full flex-col gap-4 rounded-md border border-grey-shades-15 p-5 lg:p-[28px] xl:p-9"
    >
      <div class="flex flex-col gap-3.5 lg:gap-6">
        <h1 class="text-xs leading-[150%] text-white md:text-sm">
          Your Transactions
        </h1>

        <div class="flex flex-col">
          <div
            v-for="(item, index) in data?.exampleTransactions"
            :key="item.name"
            :style="getStyle(index, data.exampleTransactions.length)"
            class="mx-auto flex items-end justify-between rounded-md bg-grey-shades-11 px-3 py-2 outline outline-grey-shades-15 md:px-3.5 md:py-2.5"
          >
            <div class="flex items-center gap-1.5">
              <div
                class="flex items-center justify-center rounded-[28px] bg-green-shades-60 p-1.5"
              >
                <nuxt-img
                  alt="Transaction Icon"
                  class="h-4 w-4"
                  src="/icons/transaction.svg"
                />
              </div>
              <div
                class="flex flex-col text-[10px] leading-[150%] text-white md:text-xs"
              >
                <p class="font-light">Transaction</p>
                <p>{{ item.name }}</p>
              </div>
            </div>

            <p class="text-xs leading-[150%] text-white md:text-base">
              {{ item.price }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex w-full flex-col gap-3.5 lg:gap-6">
        <h1 class="text-[10px] leading-[150%] text-white md:text-sm">
          Money Exchange
        </h1>
        <table
          class="w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-md border border-grey-shades-15"
        >
          <thead>
            <tr>
              <th
                v-for="item in data.currentExchangeRate"
                class="border-b border-e border-grey-shades-15 p-2.5 text-left md:p-[14px]"
              >
                <div class="flex items-center gap-1.5">
                  <nuxt-img
                    :alt="item.currency + ' currency'"
                    :src="`/icons/${item.flag}-flag.svg`"
                    class="h-7 w-7"
                  />
                  <p class="text-xs leading-[150%] text-white">
                    {{ item.name }}
                  </p>
                </div>
                <p class="mt-1.5 text-[10px] font-light text-white-shades-90">
                  {{ item.currency }}
                </p>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                v-for="item in data.currentExchangeRate"
                class="border-e border-e-grey-shades-15 p-2.5 text-xs text-white md:p-[14px]"
              >
                {{ Intl.NumberFormat().format(item.value) }}
              </td>
            </tr>
          </tbody>
        </table>

        <button-filled type="secondary">Exchange</button-filled>
      </div>
    </div>
  </div>
</template>