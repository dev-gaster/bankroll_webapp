<template>
  <v-container class="pt-12 text-center">
    <v-card elevation="0" color="transparent" class="mx-auto" max-width="1200">
      <h1 class="mb-8">Campaign Categories</h1>

      <v-row class="equal-height-cards">
        <v-col
          v-for="(category, i) in categories"
          :key="i"
          cols="6"
          sm="4"
          md="2"
          class="d-flex"
        >
          <v-card
            class="custom-card text-black"
            color="#EAFFEE"
            variant="flat"
          >
            <v-img
              :src="category.image"
              :alt="category.name"
              class="mb-4"
              height="60"
              contain
            />
            <p class="text-h6">{{ category.name }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
const categories = [
  { name: 'Medical and Health', image: '/medical.png' },
  { name: 'Education', image: '/education.png' },
  { name: 'Community Support', image: '/community.png' },
  { name: 'Event', image: '/event.png' },
  { name: 'Faith', image: '/faith.png' },
    { name: 'Family', image: '/family.png' },
  
  { name: 'Community Support', image: '/community.png' },
  { name: 'Event', image: '/event.png' },
  { name: 'Faith', image: '/faith.png' },
  { name: 'Family', image: '/family.png' },
];
</script>

<style scoped>
.equal-height-cards {
  align-items: stretch;
}

.custom-card {
  padding: 24px;
  border-radius: 16px;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}
.custom-card:hover {
  transform: translateY(-5px);
}
</style>
