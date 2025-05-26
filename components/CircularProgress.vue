<template>
    <v-row justify="center">
      <v-progress-circular
        :model-value="progress"
        :rotate="360"
        :size="70"
        :width="10"
        color="success"
        bg-color="#FBFFFA"
      >
        {{ Math.round(progress) }}%
      </v-progress-circular>
    </v-row>
  
</template>

<script setup>
import { ref, computed } from 'vue'

const current = ref(2)
const total = ref(10)

const progress = computed(() => {
  if (total.value === 0) return 0
  return (current.value / total.value) * 100
})
</script>
