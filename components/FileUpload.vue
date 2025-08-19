<template>
  <v-file-input
    :label="label"
    accept="image/*"
    v-model="internalFile"
    show-size
    truncate-length="15"
    variant="outlined"
  />

  
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: File,    
  label: { type: String, default: 'Upload Cover Image' }
})

const emit = defineEmits(['update:modelValue'])

const internalFile = ref(props.modelValue || null)
const imageUrl = ref('')

watch(internalFile, (newFile) => {
  emit('update:modelValue', newFile)
  if (newFile) {
    imageUrl.value = URL.createObjectURL(newFile)
  } else {
    imageUrl.value = ''
  }
})

watch(() => props.modelValue, (newVal) => {
  internalFile.value = newVal
  if (newVal) {
    imageUrl.value = URL.createObjectURL(newVal)
  } else {
    imageUrl.value = ''
  }
})
</script>
