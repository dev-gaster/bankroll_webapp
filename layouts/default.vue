<!-- ~/layouts/default.vue -->
<template>
  <v-app>
    <v-app-bar app class="v-app-bar" v-if="!$vuetify.display.smAndDown" color="white" flat>
      <template #prepend>
        <v-toolbar color="transparent" flat>
          <NuxtLink to="/">
            <v-img src="/bankroll-logo.png" alt="Company Logo" :width="$vuetify.display.mobile ? '100' : '150'" cover />
          </NuxtLink>
        </v-toolbar>

      </template>
      <v-spacer></v-spacer>
      <v-btn variant="plain" class="text-none " to="/campaigns"> <a class="subheading">Campaign</a></v-btn>
      <v-btn variant="plain" class="text-none" to="/features"> <a class="subheading">Features</a></v-btn>
      <v-btn variant="plain" class="text-none" to="/contact"> <a class="subheading">Contact Us</a></v-btn>
      <v-spacer></v-spacer>

      <Signin />
    </v-app-bar>
    <NavBar v-if="$vuetify.display.smAndDown" />
    <v-main>
      <NuxtPage />
    </v-main>
    <v-footer v-if="!route.path.includes('campaigns')" color="#00031C">
      <Footer />
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
