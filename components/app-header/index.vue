<script lang="ts" setup>
import NavigationList from "./navigation-list.vue";
</script>

<template>
  <header
    class="container flex items-center justify-between rounded-[100px] bg-grey-shades-11 p-3.5 pl-6 outline outline-grey-shades-15 md:pl-6"
  >
    <nuxt-img
      alt="Logo"
      height="40"
      src="/icons/logo-desktop.svg"
      v-bind="$attrs"
      width="120"
    />

    <nav class="md:hidden">
      <dropdown-menu />
    </nav>

    <navigation-list />
  </header>
</template>