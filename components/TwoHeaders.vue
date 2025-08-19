<template>
    <v-row justify="space-between" align="center">
      <v-col cols="auto">
        <h1>{{ title }}</h1>
      </v-col>
      <v-col cols="auto">
       <NuxtLink :to="link" class="link-text">
        <p >View All</p>
       </NuxtLink>

      </v-col>
    </v-row>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: 'Medical Campaign'
    },
  link: {
    type: String,
    default: '/'
  }
});

</script>

<style scoped>  
.link-text {
  text-decoration: none;
  font-weight: 500;
  color: #000000;
  transition: color 0.2s ease;
}

.link-text:hover {
  text-decoration: underline;
}

</style>
