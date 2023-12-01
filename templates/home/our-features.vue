<script setup lang="ts">
const navItems = [
  {
    id: "online-banking",
    label: "Online Banking",
    childrens: [
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
    childrens: [
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
    childrens: [
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

const activeItemChildrens = computed(() => {
  const currentItem = navItems.find(
    (item) => item.id === activeItemIndex.value
  );

  if (currentItem) {
    return currentItem.childrens;
  }

  return [];
});
</script>

<template>
  <div class="container mt-[80px] md:mt-[120px] flex flex-col gap-[60px]">
    <div class="max-w-[1030px]">
      <section-title
        text="Our "
        textColorful="Features"
        :plan-subscription="false"
      >
        Experience a host of powerful features at YourBank, including seamless
        online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience
      </section-title>
    </div>

    <div class="flex gap-5 flex-col xl:flex-row">
      <nav
        class="overflow-y-auto p-5 xl:p-10 w-full xl:w-auto rounded-[10px] bg-grey-shades-11 self-start"
      >
        <ul
          class="flex flex-nowrap flex-row xl:flex-col gap-5 justify-start md:justify-center text-white text-sm"
        >
          <li v-for="item in navItems" class="min-w-fit">
            <button
              @click="activeItemIndex = item.id"
              class="px-5 py-3.5 rounded-[100px] border border-grey-shades-15"
              :class="{ 'text-green-shades-60': item.id === activeItemIndex }"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          class="p-[30px] lg:p-10 flex flex-col gap-5 lg:gap-6 rounded-[10px] border-grey-shades-15 bg-grey-shades-11 xl:max-w-[497px] 2xl:max-w-[614px]"
          v-for="item in activeItemChildrens"
        >
          <div class="flex items-center justify-between">
            <span class="text-white text-lg">
              {{ item.title }}
            </span>

            <nuxt-img
              src="/icons/external-anchor.svg"
              alt="External Anchor Icon"
              class="w-6 h-6"
            />
          </div>

          <p
            class="text-grey-shades-70 font-light text-sm lg:text-base -tracking-[0.084px] lg:-tracking-[0.096px]"
          >
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
