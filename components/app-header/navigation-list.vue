<script lang="ts" setup>
const route = useRoute();

const navList = [
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
  { name: "About", path: "/about" },
  { name: "Security", path: "/security" },
];

const activeItem = (pathname: string) => route.path === pathname;

withDefaults(
  defineProps<{
    register?: boolean;
    noActive?: boolean;
    dense?: boolean;
    showOnSp?: boolean;
  }>(),
  {
    register: true,
    noActive: false,
    dense: false,
    showOnSp: false,
  },
);
</script>

<template>
  <ul
    :class="{
      hidden: !showOnSp,
      flex: showOnSp,
    }"
    class="items-center md:flex"
  >
    <li
      v-for="item in navList"
      :class="{
        'bg-grey-shades-15': !noActive && activeItem(item.path),
        'px-[7px] md:px-[13px]': dense,
        'px-5': !dense,
      }"
      class="rounded-full py-2.5 text-sm leading-[150%] text-white"
    >
      <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
    </li>
  </ul>

  <ul v-if="register" class="hidden items-center md:flex">
    <li
      :class="{ 'bg-grey-shades-15': activeItem('/sign-up') }"
      class="rounded-full px-4 py-2 text-sm leading-[150%] text-white"
    >
      <nuxt-link to="/">Sign Up</nuxt-link>
    </li>
    <li
      :class="{ 'bg-grey-shades-15': activeItem('/login') }"
      class="rounded-full text-sm leading-[150%] text-white"
    >
      <button-filled>Login</button-filled>
    </li>
  </ul>
</template>
