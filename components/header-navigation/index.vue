<template>
  <header
    class="p-3.5 pl-6 rounded-[100px] outline outline-grey-shades-15 bg-grey-shades-11"
  >
    <nav class="flex items-center justify-between">
      <responsive-image
        alt="Logo"
        :sources="{
          desktop: '/icons/logo-desktop.svg',
          laptop: '/icons/logo-laptop.svg',
          mobile: '/icons/logo-mobile.svg',
        }"
      />

      <dropdown-menu />
    </nav>
  </header>
</template>
