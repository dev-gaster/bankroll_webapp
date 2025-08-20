<template>
  <div>
    <v-container class="fill-height mt-5 pt-8">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="pa-2 text-center" rounded="lg" max-width="250" variant="tonal" color="primary">
            <div>WhatsApp Group Alternative</div>
          </v-card>
          <div class="hero-text-wrapper mt-3">
            <h1>Fuel Dreams. Fund Goals. Build Together</h1>
            <div style="font-size: 1.5rem">
              Bankroll is the easiest way to
              <b>raise money, support causes, and fund projects</b> with friends, family
              and communities - all powered by a secure platform.
            </div>
            <blockquote class="mt-3" style="font-style: italic">
              Replace the WhatsApp groups with a platform that offers better control over
              your crowdfunding and fundraising campaigns.
            </blockquote>
          </div>
          <div class="d-flex mt-4">
            <v-btn class="mr-2 text-white" height="50" color="primary" large variant="flat" target="blank"
              href="https://forms.gle/6nPDEWTNcaVwnQLY6">Try the App</v-btn>
            <v-btn color="primary" height="50" variant="outlined" large>Learn more</v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img src="/br-infograph.png" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <HeroSection /> -->
    <Features />
    <CampaignCategories />
    <HowItWorks />
    <CTASection />
  </div>
</template>
<style lang="scss" scoped>
.hero-text-wrapper {
  width: 600px !important;

  @media (max-width: 600px) {
    width: 100% !important;
  }
}
</style>
