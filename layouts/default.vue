<template>
  <v-app>
    <v-app-bar color="transparent" flat>
      <div class="d-none d-sm-flex">
        <v-btn variant="text" rounded class="font-weight-medium" to="/faq"> FAQ</v-btn>
        <v-btn variant="text" rounded class="font-weight-medium" to="/campaigns">
          Campaign</v-btn
        >
        <!-- <v-btn variant="text" class="font-weight-medium" to="/features"> Features</v-btn> -->
        <v-btn variant="text" rounded class="font-weight-medium"> Resources</v-btn>
      </div>
      <v-spacer />
      <NuxtLink to="/">
        <v-img
          src="/bankroll-logo.png"
          alt="Company Logo"
          :width="$vuetify.display.mobile ? '100' : '150'"
          cover
        />
      </NuxtLink>

      <v-spacer />

      <div class="mr-3">
        <search-form />
      </div>
      <v-btn
        height="40"
        rounded
        class="font-weight-medium d-none d-md-flex"
        style="font-size: 16px"
        color="primary"
        variant="flat"
        depressed
        target="blank"
        href="https://forms.gle/6nPDEWTNcaVwnQLY6"
      >
        Get the App
      </v-btn>
      <v-btn
        v-if="$vuetify.display.mobile"
        class="d-flex d-sm-none"
        target="blank"
        href="https://forms.gle/6nPDEWTNcaVwnQLY6"
        icon
        outlined
        height="35"
        width="35"
        color="primary"
        ><v-icon>mdi-download</v-icon></v-btn
      >
    </v-app-bar>
    <!-- <NavBar v-if="$vuetify.display.smAndDown" /> -->
    <v-main>
      <slot />
    </v-main>
    <v-footer
      v-if="
        !route.path.includes('campaigns') &&
        !route.path.includes('login') &&
        !$route.path.includes('signup')
      "
      color="#00031C"
    >
      <SiteFooter />
    </v-footer>
  </v-app>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
<style lang="css">
@media (max-width: 600px) {
  .v-app-bar {
    padding: 0 !important;
  }
}
</style>
