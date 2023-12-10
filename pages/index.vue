<script lang="ts" setup>
import HomeHeroSection from "~/templates/home/hero.vue";
import OurProductsSection from "~/templates/home/our-products.vue";
import UseCasesSection from "~/templates/home/use-cases.vue";
import OurFeaturesSection from "~/templates/home/our-features.vue";
import FaqsSection from "~/templates/home/faqs-section.vue";
import OurTestimonialsSection from "~/templates/home/our-testimonials.vue";
import CtaSection from '~/templates/home/cta-section.vue'

useHead({
  title: "YourBank | Home",
  meta: [
    {
      name: "description",
      content:
        "At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.",
    },
  ],
});
</script>

<template>
  <home-hero-section />
  <our-products-section />
  <use-cases-section />
  <our-features-section />
  <faqs-section />
  <our-testimonials-section />
  <cta-section />
</template>