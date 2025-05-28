<template>
  <v-row justify="center">
    <v-progress-circular
      :model-value="computedProgress"
      :rotate="360"
      :size="size"
      :width="width"
      :color="color"
      :bg-color="bgColor"
    >
      <span :style="{ fontSize: fontSize + 'px' }">
        {{ Math.round(computedProgress) }}%
      </span>
    </v-progress-circular>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  current: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    default: 50
  },
  width: {
    type: Number,
    default: 6
  },
  color: {
    type: String,
    default: 'success'
  },
  bgColor: {
    type: String,
    default: '#FBFFFA'
  },
  fontSize: {
    type: Number,
    default:16
  }
})

const computedProgress = computed(() => {
  if (props.total === 0) return 0
  return (props.current / props.total) * 100
})
</script>
