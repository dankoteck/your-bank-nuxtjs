<script lang="ts" setup>
const faqsList = [
  {
    question: "How do I open an account with YourBank?",
    answer:
      "Opening an account with YourBank is easy. Simply visit our website and click on the \"Open an Account\" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help."
  },
  {
    question: "What documents do I need to provide to apply for a loan?",
    answer:
      "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process."
  },
  {
    question: "How can I access my accounts online?",
    answer:
      "Accessing your accounts online is simple and secure. Visit our website and click on the \"Login\" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the \"Enroll Now\" button and follow the registration process. If you need assistance, our customer support team is available to guide you."
  },
  {
    question: "Are my transactions and personal information secure?",
    answer:
      "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place."
  }
];
</script>

<template>
  <div class="container mt-[80px] flex flex-col md:mt-[120px]">
    <div class="text-center md:text-left">
      <section-title
        :highlighted="['Frequently']"
        :plan-subscription="false"
        text="Frequently Asked Questions"
      >
        Still you have any questions? Contact our Team via support@yourbank.com
      </section-title>
    </div>

    <div class="relative mt-[60px]">
      <div class="grid grid-cols-2 grid-rows-2 gap-5">
        <div
          v-for="(item, index) in faqsList"
          class="flex flex-col rounded-xl border border-grey-shades-15 p-10"
        >
          <p class="text-lg font-medium text-white">{{ item.question }}</p>
          <hr
            class="my-6 block h-[1px] border-0 border-b border-b-grey-shades-15 p-0"
          />
          <p class="text-base font-light text-grey-shades-70">
            {{ item.answer }}
          </p>
        </div>
      </div>

      <div class="bg-section-overlay absolute -bottom-[2px] h-1/2 w-full"></div>
    </div>

    <button
      class="flex items-center gap-1 mt-1 w-fit self-center rounded-[100px] border border-grey-shades-15 px-5 py-3.5 text-white"
      data-v-inspector="templates/home/our-features.vue:119:13"
    >
      Load All FAQ’s
      <nuxt-img
        alt="Caret down ico"
        class="h-[18px] w-[18px]"
        src="/icons/caret-down.svg"
      />
    </button>
  </div>
</template>
