<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12" md="3" class="d-flex flex-column align-center align-md-start text-center text-md-start">
        <div>
          <img src="/icon-light.png" alt="Gasobu Logo" width="60" />

        </div>
        <p class="text-grey mt-2" style="font-size: medium;">
          Bringing families and friends together to support each other through life's challenges.
        </p>

      </v-col>
      <v-col cols="12" md="3" class="d-flex flex-column align-center align-md-start text-center text-md-start">
        <h3 class="mb-4 font-weight-bold">Categories</h3>
        <div v-for="(link, i) in links" :key="i" class="mb-2">
          <NuxtLink :to="link.link" class="footer-link font-size-14">
            {{ link.title }}
          </NuxtLink>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="d-flex flex-column align-center align-md-start text-center text-md-start">
        <h3 class="mb-4 font-weight-bold">Support</h3>
        <div v-for="(link, i) in support" :key="i" class="mb-2">
          <NuxtLink :to="link.link" class="footer-link font-size-14">
            {{ link.title }}
          </NuxtLink>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="d-flex flex-column align-center align-md-start text-center text-md-start">
        <h3 class="mb-4 font-weight-bold">Legal</h3>
        <div v-for="(link, i) in legal" :key="i" class="mb-2">
          <NuxtLink :to="link.link" class="footer-link font-size-14">
            {{ link.title }}
          </NuxtLink>
        </div>
      </v-col>



    </v-row>

    <v-divider class="mt-8 mb-4" />
    <v-row class="text-center">
      <v-col cols="12">
        <p class="text-grey" style="font-size: small;">
          © 2025 Gasobu. All rights reserved.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const links = ref([
  {
    title: "Medical",
    link: "/",
  },
  {
    title: "Campaigns",
    link: "/",
  },
  {
    title: "Memorials",
    link: "/about",
  },

]);
const support = ref([
  {
    title: "Help Center",
    link: "/",
  },
  {
    title: "Contact Us",
    link: "/",
  },
  {
    title: "Community",
    link: "/",
  },

]);
const legal = ref([
  {
    title: "Terms of Service",
    link: "/legal/terms",
  },
  {
    title: "Privacy Policy",
    link: "/legal/privacy-policy",
  },
  {
    title: "Cookie Policy",
    link: "/legal/cookies",
  },

]);
</script>
<style scoped lang="scss">
.footer-link {
  color: #aaa;
  font-size: 16px;
  text-decoration: none;
  display: block;
  margin-left: 0;
  padding-left: 0;
}

h3 {
  margin-left: 0;
  padding-left: 0;
}


.footer-link:hover {
  color: #ffffff;
}
</style>