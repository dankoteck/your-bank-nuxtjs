<template>
  <main
    :class="{
      'bg-[url(/images/abstract-design-02.svg)] bg-[-20px_-20px] bg-no-repeat':
        $route.path === '/',
    }"
    class="overflow-hidden px-4 py-10 pb-20 md:pb-[120px]"
  >
    <app-header />
    <slot></slot>
  </main>
  <app-footer />
</template>
