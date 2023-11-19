<script setup lang="ts">
import Navigation from "./navigation.vue";
</script>

<template>
  <header
    class="container p-3.5 pl-6 md:pl-6 rounded-[100px] flex items-center justify-between outline outline-grey-shades-15 bg-grey-shades-11"
  >
    <responsive-image
      alt="Logo"
      :sources="{
        desktop: '/icons/logo-desktop.svg',
        laptop: '/icons/logo-laptop.svg',
        mobile: '/icons/logo-mobile.svg',
      }"
    />

    <nav class="md:hidden">
      <dropdown-menu />
    </nav>

    <navigation />
  </header>
</template>
