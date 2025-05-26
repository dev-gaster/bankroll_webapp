<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <h3 class="text-grey mb-2">Categories</h3>
                <div v-for="(link, i) in links" :key="i" class="mb-2">
          <NuxtLink :to="link.link" class="footer-link font-size-14">
            {{ link.title }}
          </NuxtLink>
        </div> 
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column align-center align-md-start mx-auto mx-md-0">
            <div>
              <img src="/icon-light.png" alt="Gasobu Logo" width="80" />
              
            </div>
          
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
    link: "/service",
  },
  {
    title: "Memorials",
    link: "/about",
  },
  
]);
</script>
<style scoped lang="scss">
.footer-link {
  color: #ffffff;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>