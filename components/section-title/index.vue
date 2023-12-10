<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text: string;
    highlighted?: string[];
    planSubscription?: boolean;
  }>(),
  {
    highlighted: undefined,
    planSubscription: true,
  },
);

const { text } = toRefs(props);

const textToRender = computed(() => text.value.split(" "));
</script>

<template>
  <div
    class="container flex flex-col items-center justify-between gap-6 md:flex-row md:items-end"
  >
    <div
      class="flex flex-col items-center gap-2.5 text-center md:items-start md:text-left"
    >
      <div
        class="w-fit text-center text-[28px] leading-[1.5] text-white md:text-left md:text-[38px]"
      >
        <span
          v-for="word in textToRender"
          :class="{ 'text-green-shades-60': highlighted?.includes(word) }"
        >
          {{ word + " " }}
        </span>
      </div>

      <p
        class="text-sm font-light leading-[1.5] text-grey-shades-70 md:text-base"
      >
        <slot></slot>
      </p>
    </div>

    <div
      v-if="planSubscription"
      class="flex items-center rounded-[82px] border border-grey-shades-15 bg-grey-shades-11 p-3"
    >
      <button
        class="items-center justify-center rounded-[140px] bg-green-shades-60 px-[18px] py-2.5 text-sm text-grey-shades-11 md:text-base"
      >
        For Individuals
      </button>

      <button
        class="items-center justify-center rounded-[140px] px-[18px] py-2.5 text-sm text-white md:text-base"
      >
        For Businesses
      </button>
    </div>
  </div>
</template>
