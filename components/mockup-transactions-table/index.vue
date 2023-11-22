<script setup lang="ts">
import type { StyleValue } from "vue";

import MoneyExchangeTable from "./money-exchange-table.vue";
import headerExtra from "./header-extra.vue";

const data = [
  { name: "Joel Kenley", price: "-$68.00" },
  { name: "Mark Smith", price: "-$48.00" },
  { name: "Lenen Roy", price: "-$28.00" },
];

const getStyle = (index: number): StyleValue => {
  return {
    marginTop:
      index === data.length - 1 ? `${index * -8}px` : `${index * -15}px`,
    zIndex: data.length - index,
    opacity: 1 - index * 0.4,
    width: `calc(100% - ${index * 20}px)`,
  };
};
</script>

<template>
  <div
    class="relative mt-[72px] md:mt-0 lg:mr-[70px] xl:mr-[140px] lg:max-w-[410px] xl:max-w-[520px] w-[87%] lg:w-full"
  >
    <header-extra />

    <div
      class="p-5 lg:p-[28px] xl:p-9 flex flex-col gap-4 rounded-md w-full h-auto border border-grey-shades-15 bg-mockup-transactions-table"
    >
      <div class="flex flex-col gap-3.5 lg:gap-6">
        <h1 class="text-white text-xs md:text-sm leading-[150%]">
          Your Transactions
        </h1>

        <div class="flex flex-col">
          <div
            v-for="(item, index) in data"
            :key="item.name"
            :style="getStyle(index)"
            class="flex justify-between mx-auto items-end px-3 md:px-3.5 py-2 md:py-2.5 rounded-md outline outline-grey-shades-15 bg-grey-shades-11"
          >
            <div class="flex items-center gap-1.5">
              <div
                class="bg-green-shades-60 rounded-[28px] flex items-center justify-center p-1.5"
              >
                <nuxt-img src="/icons/transaction.svg" alt="Transaction Icon" class="w-4 h-4" />
              </div>
              <div
                class="flex flex-col text-white text-[10px] md:text-xs leading-[150%]"
              >
                <p class="font-light">Transaction</p>
                <p>{{ item.name }}</p>
              </div>
            </div>

            <p class="text-xs md:text-base leading-[150%] text-white">
              {{ item.price }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3.5 lg:gap-6 w-full">
        <h1 class="text-white text-[10px] md:text-sm leading-[150%]">
          Money Exchange
        </h1>
        <money-exchange-table />
        <button-filled type="secondary">Exchange</button-filled>
      </div>
    </div>
  </div>
</template>
