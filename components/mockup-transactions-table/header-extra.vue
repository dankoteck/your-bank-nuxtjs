<template>
  <div
    class="absolute flex items-center gap-2 -left-8 -top-8 px-2.5 py-2 bg-[#22251B] rounded-md"
  >
    <div
      class="rounded-full flex justify-center items-center w-6 md:w-8 h-6 md:h-8 p-1 bg-green-shades-60"
    >
      <nuxt-img alt="Plus Icon" src="/icons/plus.svg" class="w-4 h-4" />
    </div>

    <div class="flex flex-col">
      <p class="text-white leading-[150%] text-xs md:text-sm">+ $5000,00</p>
      <p class="text-white-shades-90 font-light text-[10px] md:text-xs">
        Monthly Income
      </p>
    </div>
  </div>

  <div
    class="absolute -right-14 md:-right-10 lg:-right-40 xl:-right-80 -top-6 md:-top-12 lg:-top-6 -z-10 w-[220px] lg:w-[300px] xl:w-[420px] h-[220px] lg:h-[300px] xl:h-[420px] bg-[url(/images/abstract-design-01.svg)] bg-no-repeat"
  ></div>
</template>
