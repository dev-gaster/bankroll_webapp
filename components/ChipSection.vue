<template>
  <v-chip-group
    v-model="selectedTag"
    column
    variant="flat"
    color="white"
    multiple
    class="mb-4"
  >
    <v-chip
      v-for="(item, index) in tag"
      :key="index"
      size="large"
      class="ma-1"
      :color="selectedTag.includes(item) ? 'white' : 'green'"
      @click="toggleTag(item)"
    >
      {{ item }}
    </v-chip>
  </v-chip-group>
</template>

<script setup>
import { ref } from 'vue'

const tag = [
  "All",
  "Medical & Health",
  "Education",
  "Emergency",
  "Community Support",
  "Event",
  "Faith",
  "Memorial",
  "Sport",
  "Charity",
]

const selectedTag = ref([]) 

function toggleTag(item) {
  const index = selectedTag.value.indexOf(item)
  if (index !== -1) {
    selectedTag.value.splice(index, 1)
  } else {
    selectedTag.value.push(item) 
  }
}
</script>
