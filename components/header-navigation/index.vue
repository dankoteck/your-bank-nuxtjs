<script setup lang="ts">
import NavigationList from "./navigation-list.vue";
</script>

<template>
  <header
    class="container p-3.5 pl-6 md:pl-6 rounded-[100px] flex items-center justify-between outline outline-grey-shades-15 bg-grey-shades-11"
  >
    <nuxt-img
      width="120"
      height="40"
      v-bind="$attrs"
      alt="Logo"
      src="/icons/logo-desktop.svg"
    />

    <nav class="md:hidden">
      <dropdown-menu />
    </nav>

    <navigation-list />
  </header>
</template>
