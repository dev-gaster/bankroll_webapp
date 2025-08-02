

<template>
 <div style="height: 80vh;" class="d-flex flex-column justify-center">

    <v-card class="pa-6" elevation="0">
      <h2 class="text-h5 font-weight-bold mb-4">What do you need help with</h2>

      <v-form v-model="formValid" ref="form" class="d-flex flex-column gap-4">
        <v-text-field
          v-model="campaign.need"
          variant="outlined"
          density="comfortable"
          placeholder="What do you need help with?"
          :rules="[v => !!v || 'This field is required']"
        />

        <v-label>Select a Campaign Category</v-label>
        <v-chip-group
          v-model="campaign.category"
          column
          filter
          mandatory
          :rules="[v => !!v || 'Category is required']"
        >
          <v-chip
            v-for="category in categories"
            :key="category"
            :value="category"
            class="ma-1"
            color="primary"
            variant="tonal"
          >
            {{ category }}
          </v-chip>
        </v-chip-group>
      </v-form>
    </v-card>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  campaign: Object
})

const emit = defineEmits(['valid'])

const form = ref(null)
const formValid = ref(false)

const categories = [
  'Education', 'Medical and Health', 'Community Support', 'Event', 'Faith', 'Memorial', 'Other',
  'Sports', 'Travel', 'Animal Welfare', 'Environment', 'Disaster Relief', 'Arts and Culture',
  'Business', 'Technology', 'Research', 'Human Rights', 'Political Campaigns'
]

const validateAndEmit = async () => {
  if (form.value) {
    const result = await form.value.validate()
    emit('valid', result.valid)
  }
}

watch(
  () => [props.campaign.need, props.campaign.category],
  validateAndEmit,
  { deep: true }
)

onMounted(validateAndEmit)
</script>