components/NavBar.vue
<template>
  <v-bottom-navigation
    grow
    fixed
    color="primary"
    height="64"
    class="bottom-nav"
  >
  <v-btn to="/" icon>
      <v-icon>mdi-home</v-icon>
      Home
    </v-btn>
    <v-btn to="/campaigns" icon>

      <v-icon>mdi-bullhorn</v-icon>
        Campaigns
    </v-btn>
    <v-btn to="/features" icon>
      <v-icon>mdi-star</v-icon>
      Features
    </v-btn>

 
  </v-bottom-navigation>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bottom-nav {
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
