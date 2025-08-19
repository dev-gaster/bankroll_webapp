<template>
  <div>
    <v-sheet min-height="70vh">
      <v-container
        class="fill-height d-flex mt-5 flex-column align-center justify-items-center"
      >
        <div>
          <v-img src="/icon-light.png" width="100" />
        </div>
        <div class="text-center hero-text-wrapper">
          <h1>WhatsApp group Alternative</h1>
          <div style="text-align: center; font-size: 1.5rem">
            Bankroll is the <b>#1 Platform</b> that empowers you to Organize campaigns and
            Support (a person, Organization or Project) financially
          </div>
        </div>
      </v-container>
    </v-sheet>
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
    width: auto;
  }
}
</style>
