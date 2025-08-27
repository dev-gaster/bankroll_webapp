<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="800">
      <div
        class="text-center"
        style="
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
          border-radius: 10px;
          margin-bottom: 24px;
          padding: 24px;
          text-align: center;
        "
      >
        <h1 class="text-h4 mb-4">Frequently Asked Questions (FAQ)</h1>
        <div class="mb-4" style="font-style: italic; font-size: medium">
          Find answers to common questions about our platform and services.
        </div>
        <p class="text-primary">Looking for something else?</p>
        <div
          class="d-flex mt-4 justify-space-between align-space-around flex-wrap"
          :class="$vuetify.display.smAndDown ? 'flex-column align-center' : ''"
          style="gap: 12px"
        >
          <v-btn variant="outlined" :block="$vuetify.display.mobile" rounded
            >About Company</v-btn
          >
          <v-btn
            variant="outlined"
            rounded
            :class="$vuetify.display.mobile ? 'my-2' : ''"
            :block="$vuetify.display.mobile"
            href="mailto:info@bankroll.cash"
            target="_blank"
            >Contact Support</v-btn
          >
          <v-btn variant="outlined" :block="$vuetify.display.mobile" rounded
            >Visit Help Center</v-btn
          >
        </div>
      </div>
      <v-expansion-panels flat>
        <v-expansion-panel
          v-for="(item, index) in faqItems"
          :key="index"
          style="margin-bottom: 8px; background-color: #f9f9f9; border-radius: 8px"
        >
          <v-expansion-panel-title style="font-weight: 600; font-size: 18px">{{
            item.question
          }}</v-expansion-panel-title>
          <v-expansion-panel-text>{{ item.answer }}</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
const faqItems = [
  {
    question: "How do I create a campaign?",
    answer:
      "To create a campaign, click on the 'Start a Campaign' button on the homepage and fill out the required details.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards, PayPal, bank transfers and mobile money.",
  },
  {
    question: "How can I share my campaign?",
    answer:
      "You can share your campaign via social media platforms or by sending the direct link to your friends and family.",
  },
  {
    question: "Is there a fee for using the platform?",
    answer:
      "Yes, we charge a small percentage fee on the total amount raised to cover operational costs. This fee is clearly outlined during the campaign creation process.",
  },
  {
    question: "How do I withdraw funds from my campaign?",
    answer:
      "Once your campaign is complete, you can request a withdrawal through your account dashboard or by visiting our agent locations. Funds will be transferred to your designated bank account or mobile money account.",
  },
  {
    question: "Can I edit my campaign after it has started?",
    answer:
      "Yes, you can edit certain details of your campaign such as the description and images. However, some changes may require approval from our team.",
  },
  {
    question: "How is this platform different from others?",
    answer:
      "Our platform is designed to be user-friendly and accessible, with a focus on transparency and community support. We also offer unique features such as local agent support for fund withdrawals.Each campaign created on our platform is reviewed to ensure it meets our guidelines and standards.",
  },
  {
    question: "What should I do if I encounter an issue?",
    answer:
      "If you encounter any issues, please contact our support team via the 'Contact Us' page or email us at info@bankroll.cash",
  },
];
</script>
