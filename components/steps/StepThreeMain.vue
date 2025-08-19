<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  campaign: Object
})

const emit = defineEmits(['valid'])

const form = ref(null)
const formValid = ref(false)

const validateAndEmit = async () => {
  if (form.value) {
    const result = await form.value.validate()
    emit('valid', result.valid)
  }
}

watch(
  () => [props.campaign.startDate, props.campaign.endDate, props.campaign.coverImage],
  validateAndEmit,
  { immediate: true, deep: true }
)

onMounted(validateAndEmit)
</script>

<template>
  <div style="height: 80vh;" class="d-flex flex-column justify-center">
    <v-card class="pa-6" elevation="0">
      <h2 class="text-h5 font-weight-bold mb-4">Campaign Duration & Media</h2>

      <v-form v-model="formValid" ref="form" class="d-flex flex-column gap-4">
        <v-text-field
          v-model="props.campaign.startDate"
          placeholder="Start Date"
          density="comfortable"
          type="date"
          variant="outlined"
          :rules="[v => !!v || 'Start date is required']"
        />

        <v-text-field
          v-model="props.campaign.endDate"
          placeholder="End Date"
          density="comfortable"
          type="date"
          variant="outlined"
          :rules="[
            v => !!v || 'End date is required',
            v => {
              if (!props.campaign.startDate || !v) return true
              const start = new Date(props.campaign.startDate)
              const end = new Date(v)
              const minEnd = new Date(start)
              minEnd.setDate(start.getDate() + 28)
              return end >= minEnd || `End date must be at least 28 days after start date (${minEnd.toISOString().slice(0, 10)})`
            }
          ]"
        />

        <v-file-input
          v-model="props.campaign.coverImage"
          placeholder="Cover Image"
          accept="image/*"
          variant="outlined"
          :rules="[v => !!v || 'Cover image is required']"
          prepend-icon="mdi-image"
        />
      </v-form>
    </v-card>
  </div>
</template>

