<script lang="ts" setup>
const navItems = [
  {
    id: "online-banking",
    label: "Online Banking",
    children: [
      {
        title: "24/7 Account Access",
        content:
          "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
      },
      {
        title: "Mobile Banking App",
        content:
          "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
      },
      {
        title: "Secure Transactions",
        content:
          "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
      },
      {
        title: "Bill Pay and Transfers",
        content:
          "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
      },
    ],
  },
  {
    id: "financial-tools",
    label: "Financial Tools",
    children: [
      {
        title: "Budget Planner",
        content:
          "Organize your spending and savings by planning ahead with our intuitive budget planner. Take control of your finances and set goals for the future.",
      },
      {
        title: "Investment Tracker",
        content:
          "Monitor your investments and watch your money grow. Our investment tracker lets you keep an eye on stock performance and manage your portfolio efficiently.",
      },
      {
        title: "Tax Assistance",
        content:
          "Simplify the complexity of taxes with our automated tax assistance tools. Ensure accuracy and maximize your returns with ease.",
      },
      {
        title: "Loan Calculators",
        content:
          "Estimate your loan payments with precision using our loan calculators. Explore different scenarios and plan your finances accordingly.",
      },
    ],
  },
  {
    id: "customer-support",
    label: "Customer Support",
    children: [
      {
        title: "24/7 Helpdesk",
        content:
          "Get support whenever you need it with our around-the-clock helpdesk. Our dedicated team is always ready to assist you with any inquiries.",
      },
      {
        title: "Online Chat Service",
        content:
          "Connect with our customer support agents instantly via our online chat service for quick and convenient assistance.",
      },
      {
        title: "FAQs and Guides",
        content:
          "Find answers to common questions and detailed guides to our services in our comprehensive FAQ section.",
      },
      {
        title: "Appointment Scheduling",
        content:
          "Schedule appointments with our financial advisors at your convenience to discuss your banking needs and financial planning.",
      },
    ],
  },
];

const activeItemIndex = ref("online-banking");

const activeItemChildren = computed(() => {
  const currentItem = navItems.find(
    (item) => item.id === activeItemIndex.value,
  );

  return currentItem ? currentItem.children : [];
});
</script>

<template>
  <div class="container mt-[80px] flex flex-col gap-[60px] md:mt-[120px]">
    <div class="max-w-[1030px]">
      <section-title
        :highlighted="['Features']"
        :plan-subscription="false"
        text="Our Features"
      >
        Experience a host of powerful features at YourBank, including seamless
        online banking, secure transactions, and personalized financial
        insights, all designed to enhance your banking experience
      </section-title>
    </div>

    <div class="flex flex-col gap-5 xl:flex-row">
      <nav
        class="w-full self-start overflow-y-auto rounded-[10px] bg-grey-shades-11 p-5 xl:w-auto xl:p-10"
      >
        <ul
          class="flex flex-row flex-nowrap justify-start gap-5 text-sm text-white md:justify-center xl:flex-col"
        >
          <li v-for="item in navItems" class="min-w-fit">
            <button-basic
              :active="item.id === activeItemIndex"
              size="xs"
              @click="activeItemIndex = item.id"
            >
              {{ item.label }}
            </button-basic>
          </li>
        </ul>
      </nav>

      <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div
          v-for="item in activeItemChildren"
          class="flex flex-col gap-5 rounded-[10px] border-grey-shades-15 bg-grey-shades-11 p-[30px] lg:gap-6 lg:p-10 xl:max-w-[497px] 2xl:max-w-[614px]"
        >
          <div class="flex items-center justify-between">
            <span class="text-lg text-white">
              {{ item.title }}
            </span>

            <nuxt-img
              alt="External Anchor Icon"
              class="h-6 w-6"
              src="/icons/external-anchor.svg"
            />
          </div>

          <p
            class="text-sm font-light -tracking-[0.084px] text-grey-shades-70 lg:text-base lg:-tracking-[0.096px]"
          >
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
