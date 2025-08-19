<template>
  <v-form ref="form" :model-value="validStep2" @update:model-value="val => emit('update:validStep2', val)"
>
    <v-text-field
      v-model="form.goalAmount"
      label="Goal Amount"
      variant="outlined"
      type="number"
      density="comfortable"
      rounded="lg"
      :rules="[rules.required]"
      prefix="UGX"
    />
    <v-text-field
      v-model="form.endDate"
      label="End Date"
      type="date"
      variant="outlined"
      density="comfortable"
      rounded="lg"
      :rules="[rules.required]"
    />
    <v-text-field
      v-model="form.minimumDonation"
      label="Minimum Donation"
      type="number"
      variant="outlined"
      density="comfortable"
      rounded="lg"
    />
  </v-form>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  validStep2: Boolean
})

const emit = defineEmits(['update:validStep2'])

const form = ref({
  goalAmount: '',
  endDate: '',
  minimumDonation: ''
})

const rules = {
  required: value => !!value || 'This field is required'
}
</script>

