<script setup lang="ts">
defineProps<{
  alt?: string;
  sources: {
    desktop: string;
    laptop: string;
    mobile: string;
  };
}>();
</script>

<template>
  <!-- This Img will shown on Mobile screen -->
  <img v-bind="$attrs" :alt="alt" :src="sources.mobile" class="md:hidden" />

  <!-- This Img will shown on Laptop screen -->
  <img
    v-bind="$attrs"
    :alt="alt"
    :src="sources.laptop"
    class="hidden md:inline-flex lg:hidden"
  />

  <!-- This Img will shown on Desktop screen -->
  <img
    v-bind="$attrs"
    :alt="alt"
    :src="sources.desktop"
    class="hidden lg:inline-flex"
  />
</template>
