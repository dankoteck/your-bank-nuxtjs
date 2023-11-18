<template>
  <table
    class="table-fixed rounded-md overflow-hidden border-spacing-0 border border-separate border-grey-shades-15 w-full"
  >
    <thead>
      <tr>
        <th class="p-2.5 border-e border-b border-grey-shades-15 text-left">
          <div class="flex items-center gap-1.5">
            <img
              src="/icons/indian-flag.svg"
              alt="Indian Flag"
              class="w-6 h-6"
            />
            <p class="text-xs leading-[150%] text-white">INR</p>
          </div>
          <p class="mt-1.5 text-[10px] font-light text-white-shades-90">
            Indian Rupees
          </p>
        </th>

        <th class="p-2.5 border-b border-grey-shades-15 text-left">
          <div class="flex items-center gap-1.5">
            <img
              src="/icons/american-flag.svg"
              alt="American Flag"
              class="w-6 h-6"
            />
            <p class="text-xs leading-[150%] text-white">USD</p>
          </div>
          <p class="mt-1.5 text-[10px] font-light text-white-shades-90">
            United States Dollar
          </p>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td class="text-white text-xs p-2.5 border-e border-e-grey-shades-15">
          5,0000
        </td>
        <td class="text-white text-xs p-2.5">12.00</td>
      </tr>
    </tbody>
  </table>
</template>
