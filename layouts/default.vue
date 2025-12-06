<template>
  <v-app>
    <!-- navigation drawer only on small devices -->
    <v-navigation-drawer v-model="drawer" class="d-flex d-sm-none" width="400" temporary>
      <template #prepend>
        <v-toolbar flat color="transparent">
          <v-btn icon variant="text" @click="drawer = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider />
      </template>
      <v-list nav>
        <v-list-item to="/faq">
          <v-list-item-title>FAQ</v-list-item-title>
        </v-list-item>
        <v-list-item to="/campaigns">
          <v-list-item-title>Campaigns</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item to="/features">
        <v-list-item-title>Features</v-list-item-title>
      </v-list-item> -->
        <v-list-item to="/resources">
          <v-list-item-title>Resources</v-list-item-title>
        </v-list-item>
      </v-list>
      <template #append>
        <v-divider />
        <div>
          <v-btn target="blank" color="primary" rounded variant="flat" class="ma-4"
            href="https://play.google.com/store/apps/details?id=com.gasobu.fintech_apps.bankroll&pcampaignid=web_share">
            Get the App
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar color="transparent" flat :scroll-behavior="route.path.includes('campaigns') ? 'hide' : 'none'">
      <v-btn icon variant="text" class="d-flex d-sm-none" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <NuxtLink to="/">
        <v-img src="/bankroll-logo.png" alt="Company Logo" :width="$vuetify.display.mobile ? '100' : '150'" cover />
      </NuxtLink>

      <v-spacer />
      <div class="d-none d-sm-flex" style="border: 0.5px solid grey; border-radius: 50px; padding: 8px">
        <v-btn variant="text" rounded class="font-weight-medium" to="/about">About</v-btn>
        <v-btn variant="text" rounded class="font-weight-medium" to="/faq"> FAQ</v-btn>
        <v-btn variant="text" rounded class="font-weight-medium" to="/campaigns">
          Campaign</v-btn>
        <!-- <v-btn variant="text" class="font-weight-medium" to="/features"> Features</v-btn> -->
        <v-btn variant="text" rounded class="font-weight-medium"> Resources</v-btn>
      </div>
      <v-spacer />

      <!-- <div class="mr-3">
        <search-form />
      </div> -->
      <v-btn height="40" rounded class="font-weight-medium d-none d-md-flex" style="font-size: 16px" color="primary"
        variant="flat" depressed target="_blank"
        href="https://play.google.com/store/apps/details?id=com.gasobu.fintech_apps.bankroll&pcampaignid=web_share">
        Get the App
      </v-btn>
      <v-btn v-if="$vuetify.display.mobile" class="d-flex d-sm-none" target="_blank"
        href="https://play.google.com/store/apps/details?id=com.gasobu.fintech_apps.bankroll&pcampaignid=web_share" icon
        outlined height="35" width="35" color="primary"><v-icon>mdi-download</v-icon></v-btn>
    </v-app-bar>
    <!-- <NavBar v-if="$vuetify.display.smAndDown" /> -->
    <v-main>
      <slot />
    </v-main>
    <v-footer v-if="
      !route.path.includes('campaigns') &&
      !route.path.includes('login') &&
      !$route.path.includes('signup')
    " color="#00031C">
      <SiteFooter />
    </v-footer>
  </v-app>
</template>
<script setup lang="ts">
const route = useRoute();
const drawer = ref(false);
</script>
<style lang="css">
@media (max-width: 600px) {
  .v-app-bar {
    padding: 0 !important;
  }
}
</style>
