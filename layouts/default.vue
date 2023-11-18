<template>
  <main
    class="px-4 py-10 overflow-hidden"
    :class="{
      'bg-contain bg-[-60px_-12px] bg-[url(/images/abstract-design-02.svg)] bg-no-repeat': true,
    }"
  >
    <header-navigation />
    <slot></slot>
  </main>
</template>
