<script lang="ts" setup></script>

<template>
  <div class="cta-section">
    <div class="flex max-w-[874px] flex-col gap-2.5">
      <section-title
        :highlighted="['YourBank', 'today!']"
        :plan-subscription="false"
        text="Start your financial journey with YourBank today!"
        textSize="sm"
      >
        Ready to take control of your finances? Join YourBank now, and let us
        help you achieve your financial goals with our tailored solutions and
        exceptional customer service
      </section-title>
    </div>

    <button-filled aria-label="Open Account Button" size="lg">Open Account</button-filled>
  </div>
</template>
