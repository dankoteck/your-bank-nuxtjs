<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string;
    textColorful?: string;
    planSubscription?: boolean;
    wordReversed?: boolean;
  }>(),
  {
    text: "",
    textColorful: "",
    planSubscription: true,
    wordReversed: false,
  }
);
</script>

<template>
  <div class="flex flex-col gap-2.5 text-center md:text-left">
    <p class="text-[28px] md:text-[38px] leading-[1.5] text-white w-fit">
      <span :class="{ 'float-right': wordReversed }">{{ text }}</span>

      <span class="text-green-shades-60">
        {{ textColorful }}
      </span>
    </p>

    <p class="text-grey-shades-70 text-sm md:text-base font-light leading-[1.5]">
      <slot></slot>
    </p>
  </div>

  <div
    v-if="planSubscription"
    class="p-3 flex items-center rounded-[82px] border border-grey-shades-15 bg-grey-shades-11"
  >
    <button
      class="text-sm md:text-base rounded-[140px] py-2.5 px-[18px] items-center justify-center bg-green-shades-60 text-grey-shades-11"
    >
      For Individuals
    </button>

    <button class="text-sm md:text-base rounded-[140px] py-2.5 px-[18px] items-center justify-center text-white">
      For Businesses
    </button>
  </div>
</template>
