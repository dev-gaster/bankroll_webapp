<template>
  <div>
    <v-card class="d-flex flex-column align-center justify-center mx-auto" max-width="600" min-height="250" flat>
      <h1 class="text-h4 font-weight-bold">Find campaigns and fundraisers</h1>
      <p class="text-subtitle-1 mb-4 text-center">
        Find the perfect campaign or fundraiser to support
      </p>
      <div style="width: 80%">
        <v-text-field v-model="searchQuery" type="number" placeholder="Enter campaign ID"
          prepend-inner-icon="mdi-magnify" :loading="loading" variant="outlined" fill-color="grey lighten-4"
          density="compact" rounded hide-details />
        <!-- show search results -->
        <v-btn block class="mt-5" variant="flat" height="50" color="primary">Search Campaign</v-btn>
      </div>
    </v-card>
    <!-- <v-toolbar style="position: sticky; top: 0; z-index: 10; background: white">
      <v-container class="d-flex">
        category tabs
        <v-tabs
          v-model="tab"
          background-color="transparent"
          show-arrows
          class="flex-grow-1"
          slider-color="primary"
          :style="{ borderBottom: '1px solid #e0e0e0' }"
          :center-active="$vuetify.display.smAndDown"
        >
          <v-tab value="">All</v-tab>
          <v-tab value="Medical">Medical</v-tab>
          <v-tab value="Education">Education</v-tab>
          <v-tab value="Emergency">Emergency</v-tab>
          <v-tab value="Memorial">Memorial</v-tab>
        </v-tabs>
      </v-container>
    </v-toolbar>
    <v-container class="mt-4">
      <div class="mt-3">
        <h2 class="mb-4">Popular Campaigns</h2>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card
              height="400"
              variant="tonal"
              rounded="lg"
              color="primary"
              image="https://images.gofundme.com/6E7IQw4ehCdfWG62GtZ6yXmqWpw=/720x405/https://d2g8igdw686xgo.cloudfront.net/93829655_1755714838582893_r.png"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-row>
              <v-col v-for="i in 4" :key="i" cols="12" sm="6">
                <v-card height="190" variant="tonal" rounded="lg" color="primary" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, nesciunt dolores
        provident et nihil saepe veniam repudiandae suscipit perferendis, deserunt
        inventore iste atque, quae cum nemo praesentium itaque animi? Laboriosam? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Modi accusamus vel a
        doloremque perspiciatis quam voluptatum, nulla ratione sapiente impedit quas ab
        dolores culpa corporis nobis. Eaque voluptatum delectus quibusdam! Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Minima consectetur repellendus,
        soluta odit, voluptatibus esse ea quam corrupti obcaecati blanditiis saepe autem
        alias ut impedit veniam, deleniti facilis. Doloremque, distinctio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At repudiandae aliquam a,
        inventore repellendus atque neque alias sit similique culpa deleniti ab
        consequatur molestias, molestiae, consequuntur dicta nisi libero nulla.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quidem itaque
        provident inventore molestiae? Minima officiis eaque eius deserunt earum. Fugiat,
        quae quibusdam sit consequatur maxime blanditiis eos quidem et?
      </p>
    </v-container> -->
  </div>
</template>
<script setup lang="ts">
const searchQuery = ref("");
const config = useRuntimeConfig();
const loading = ref(false);
// const tab = ref("");
const searchResults = ref<CampaignType[]>([]);
const debounce = <T extends (...args: unknown[]) => unknown>(func: T, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
// watch searchQuery and fetch search results from API
watch(searchQuery, async (newQuery) => {
  loading.value = true;
  debounce(async () => {
    loading.value = false;
    debounce(async () => {
      if (newQuery.length < 3) {
        searchResults.value = [];
        return;
      }
      try {
        const response = await fetch(`${config.apiBaseUrl}/campaigns?search=${newQuery}`);
        if (response.ok) {
          searchResults.value = await response.json();
        } else {
          console.error("Error fetching search results");
        }
      } catch (error) {
        console.error("Error fetching search results", error);
      }
      loading.value = false;
    }, 300);
  }, 500)();
});
</script>
