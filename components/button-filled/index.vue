<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
  }>(),
  {
    type: "primary",
    size: "md",
  }
);
</script>

<template>
  <button
    v-bind="$attrs"
    class="flex items-center justify-center leading-[150%] px-6 rounded-[82px]"
    :class="{
      'bg-green-shades-60 text-grey-shades-11': type === 'primary',
      'bg-[#22251B] text-green-shades-65': type === 'secondary',
      'text-sm py-3.5': size === 'lg',
      'text-xs py-2': size === 'md',
      'text-[10px]': size === 'sm',
    }"
  >
    <slot></slot>
  </button>
</template>
