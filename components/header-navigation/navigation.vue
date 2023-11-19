<script setup lang="ts">
const route = useRoute();

const navList = [
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
  { name: "About", path: "/about" },
  { name: "Security", path: "/security" },
];

const activeItem = (pathname: string) => route.path === pathname;
</script>

<template>
  <ul class="hidden md:flex items-center">
    <li
      class="text-white text-sm leading-[150%] px-5 py-2.5 rounded-full"
      :class="{ 'bg-grey-shades-15': activeItem(item.path) }"
      v-for="item in navList"
    >
      <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
    </li>
  </ul>

  <ul class="hidden md:flex items-center">
    <li
      class="text-white text-sm leading-[150%] px-4 py-2 rounded-full"
      :class="{ 'bg-grey-shades-15': activeItem('/sign-up') }"
    >
      <nuxt-link to="/">Sign Up</nuxt-link>
    </li>
    <li
      class="text-white text-sm leading-[150%] rounded-full"
      :class="{ 'bg-grey-shades-15': activeItem('/login') }"
    >
      <button-filled>Login</button-filled>
    </li>
  </ul>
</template>
