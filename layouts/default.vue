<!-- ~/layouts/default.vue -->
<template>
  <v-app>
    <v-app-bar app class="v-app-bar" color="white"  flat>
      <template #prepend>
        <v-toolbar color="transparent" flat>
        <NuxtLink to="/">
          <v-img src="/bankroll-logo.png" alt="Company Logo" :width="$vuetify.display.mobile ? '100' : '150'" cover />
        </NuxtLink>
        </v-toolbar>
        
      </template>
      <v-spacer></v-spacer>
      <v-btn variant="plain" class="text-none" to="/campaigns">Campaign</v-btn>
      <v-btn variant="plain" class="text-none" to="/features">Features</v-btn>
      <v-btn variant="plain" class="text-none" to="/contact">Contact Us</v-btn>
      <v-spacer></v-spacer>
      <Signin/>
      </v-app-bar>
    <v-main>
      <NuxtPage />
    </v-main>
    <v-footer v-if="!route.path.includes('campaigns')"  color="black">
      <Footer/>
    </v-footer>
  </v-app>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
<style lang="css">
.v-app-bar {
  padding: 0 40px !important;
  background-color: #effbe9ec !important;
}

@media (max-width: 600px) {
  .v-app-bar {
    padding: 0 !important;
  }
}
</style>


