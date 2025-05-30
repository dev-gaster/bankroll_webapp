<template >
    <div style="background-color: #F6F6FF; padding: 48px 24px;">
  <v-container class="pt-12 text-center" style="max-width: 1200px; color: #DEDEFC">


      <v-row class="equal-height-cards"  align="center"> 
        <v-col cols="12" md="6" class="d-flex justify-start mb-4">
          <div class="text-start" style="max-width: 400px">
          <h1 class="mb-2   heading2" >Launch a campaign for the cause you care about.</h1>
          <p class="subheading">Explore various categories to find the right campaign for you.</p>
</div>
        </v-col>
        <v-col cols="12" md="6">
   <v-row align="stretch">
  <v-col
    v-for="(category, i) in categories"
    :key="i"
    cols="12"
    sm="6"
    md="4"
    class="d-flex"
    style="height: 100%;" 
  >
    <v-card
      class="custom-card d-flex flex-column justify-space-between"
      color="#ffffff"
      variant="flat"
      style="height: 150px;"
    >
      <v-img
        :src="category.image"
        :alt="category.name"
        class="mb-4"
        height="40"
        contain
      />
      <p class="mb-2">{{ category.name }}</p>
    </v-card>
  </v-col>
</v-row>


        </v-col>
       
      </v-row>
  </v-container>
</div>
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
  justify-content: space-between;
  width: 100%;
  height: 100px; 
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(47, 22, 109, 0.2);

}


</style>
