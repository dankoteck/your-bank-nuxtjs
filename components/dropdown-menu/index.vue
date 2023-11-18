<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Bars3BottomRightIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <Menu as="div" class="relative">
    <MenuButton
      class="flex items-center justify-center px-3.5 py-1.5 rounded-[82px] bg-green-shades-60"
    >
      <Bars3BottomRightIcon class="w-7 h-7" />
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <MenuItem v-slot="{ active }">
          <button
            :class="[
              active ? 'bg-violet-500 text-white' : 'text-gray-900',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]"
          >
            Edit
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
