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
          <v-btn
            target="blank"
            color="primary"
            rounded
            variant="flat"
            class="ma-4"
            href="https://play.google.com/store/apps/details?id=com.gasobu.fintech_apps.bankroll&pcampaignid=web_share"
          >
            Get the App
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      color="transparent"
      flat
      :scroll-behavior="route.path.includes('campaigns') ? 'hide' : 'none'"
      :class="{ 'on-dark': isOnDark }"
    >
      <v-btn icon variant="text" class="d-flex d-sm-none" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <NuxtLink to="/">
        <v-img
          src="/bankroll-logo.png"
          alt="Company Logo"
          :width="$vuetify.display.mobile ? '100' : '150'"
          cover
        />
      </NuxtLink>

      <v-spacer />
      <div class="d-none d-sm-flex nav-bar-links">
        <nuxt-link v-for="(link, index) in links" :key="index" :to="link.to">{{
          link.title
        }}</nuxt-link>
      </div>
      <v-spacer />

      <!-- <div class="mr-3">
        <search-form />
      </div> -->
      <v-btn
        height="40"
        class="font-weight-medium text-white"
        prepend-icon="mdi-arrow-down"
        style="font-size: 16px"
        color="primary"
        variant="flat"
        depressed
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.gasobu.fintech_apps.bankroll&pcampaignid=web_share"
      >
        Get the App
      </v-btn>
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
import { useDarkSectionObserver } from "~/composables/useDarkSectionObserver";

const { isOnDark } = useDarkSectionObserver();
const route = useRoute();
const drawer = ref(false);
const links = [
  { title: "FAQ", to: "/faq" },
  { title: "Campaigns", to: "/campaigns" },
  { title: "Features", to: "/features" },
  { title: "About", to: "/about" },
];
</script>
<style lang="scss">
.v-app-bar {
  padding: 0 50px !important;
}

.nav-bar-links {
  gap: 20px;
}

.nav-bar-links a {
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f !important;
  text-decoration: none;

  &:hover {
    color: #000000 !important;
  }

  // active link styling
  &.router-link-active {
    color: #000000 !important;
    // add underline using pseudo element
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #1fa011;
      border-radius: 1px;
    }
  }
}

.v-app-bar.on-dark .nav-bar-links a {
  color: #ffffff !important;

  &:hover {
    color: #000000 !important;
  }

  // active link styling
}

@media (max-width: 600px) {
  .v-app-bar {
    padding: 0 !important;
  }
}
</style>
