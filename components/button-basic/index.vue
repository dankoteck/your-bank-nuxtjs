<script lang="ts" setup>
withDefaults(
  defineProps<{
    active?: boolean;
    size?: "xs" | "sm";
  }>(),
  {
    active: false,
    size: "sm",
  },
);
</script>

<template>
  <button
    :class="{
      'text-green-shades-60': active,
      'text-white': !active,
      'text-xs': size === 'xs',
      'text-sm md:text-base': size === 'sm',
    }"
    class="bg-grey-11 flex w-fit items-center gap-1 rounded-[100px] border border-grey-shades-15 px-5 py-3.5 text-center"
    v-bind="$attrs"
  >
    <slot></slot>
    <slot name="icon"></slot>
  </button>
</template>
