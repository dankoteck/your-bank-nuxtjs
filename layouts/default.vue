<template>
  <main
    class="px-4 py-10 overflow-hidden"
    :class="{
      'bg-[-20px_-20px] bg-[url(/images/abstract-design-02.svg)] bg-no-repeat':
        $route.path === '/',
    }"
  >
    <header-navigation />
    <slot></slot>
  </main>
</template>
