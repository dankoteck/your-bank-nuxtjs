<script setup lang="ts">
const currencies = [
  { alt: "Dollar Currency Icon", src: "/icons/dollar-currency.svg" },
  { alt: "Euro Currency Icon", src: "/icons/euro-currency.svg" },
  { alt: "Bitcoin Currency Icon", src: "/icons/bitcoin-currency.svg" },
  { alt: "Ethereum Currency Icon", src: "/icons/ethereum-currency.svg" },
];
</script>

<template>
  <section class="flex flex-col items-center mt-[50px] gap-2">
    <div
      class="p-2 pr-4 flex items-center gap-1 rounded-[61px] bg-grey-shades-15 w-fit"
    >
      <img alt="Verification Icon" src="/icons/verification.svg" />
      <p class="text-white font-light text-xs leading-6">
        No LLC Required, No Credit Check.
      </p>
    </div>

    <div class="text-[28px] text-center leading-[150%] mt-1">
      <p class="text-white">
        Welcome to YourBank
        <br />
        Empowering Your
      </p>
      <p class="text-green-shades-60">Financial Journey</p>
    </div>

    <p
      class="text-sm text-center -tracking-[0.2px] text-white-shades-90 leading-[150%] font-light"
    >
      At YourBank, our mission is to provide comprehensive banking solutions
      that empower individuals and businesses to achieve their financial goals.
      We are committed to delivering personalized and innovative services that
      prioritize our customers&apos; needs.
    </p>

    <div class="mt-[22px]">
      <button-filled size="lg">Open Account</button-filled>
    </div>

    <mockup-transactions-table />

    <div
      class="flex items-center justify-between self-end gap-1 rounded-[42px] mt-1 px-2 py-1.5 pl-4 bg-[#22251B]"
    >
      <p class="text-[10px] leading-[150%] text-white">Supported Currency</p>
      <div
        class="rounded-[28px] bg-grey-shades-10 flex items-center gap-1 justify-center p-1.5"
      >
        <img
          v-for="currency in currencies"
          :src="currency.src"
          :alt="currency.alt"
          class="w-5 h-5"
        />
      </div>
    </div>
  </section>
</template>
