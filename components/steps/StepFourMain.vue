<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  campaign: Object
})

const emit = defineEmits(['update-campaign', 'valid'])

const form = ref(null)
const formValid = ref(false)

const validateAndEmit = async () => {
  if (form.value) {
    const result = await form.value.validate()
    emit('valid', result.valid)
  }
}

watch(
  () => props.campaign,
  validateAndEmit,
  { immediate: true, deep: true }
)

onMounted(validateAndEmit)

const update = (field, value) => {
  emit('update-campaign', { [field]: value })
}
</script>

<template>
  <v-card flat>
    <v-form v-model="formValid" ref="form" class="d-flex flex-column gap-4 pa-2">
      <v-text-field
        v-model="props.campaign.need"
        label="Need"
        variant="outlined"
        @input="update('need', $event)"
        :rules="[v => !!v || 'Need is required']"
      />

      <v-text-field
        v-model="props.campaign.category"
        label="Category"
        variant="outlined"
        @input="update('category', $event)"
        :rules="[v => !!v || 'Category is required']"
      />

      <v-textarea
        v-model="props.campaign.story"
        label="Story"
        variant="outlined"
        @input="update('story', $event)"
        :rules="[v => !!v || 'Story is required']"
      />

      <v-text-field
        v-model="props.campaign.goal"
        label="Goal"
        type="number"
        variant="outlined"
        @input="update('goal', $event)"
        :rules="[v => !!v || 'Goal is required']"
      />

      <v-text-field
        v-model="props.campaign.startDate"
        label="Start Date"
        type="date"
        variant="outlined"
        @input="update('startDate', $event)"
        :rules="[v => !!v || 'Start date is required']"
      />

      <v-text-field
        v-model="props.campaign.endDate"
        label="End Date"
        type="date"
        variant="outlined"
        @input="update('endDate', $event)"
        :rules="[
          v => !!v || 'End date is required',
          v => {
            const start = new Date(props.campaign.startDate)
            const end = new Date(v)
            const minEnd = new Date(start)
            minEnd.setDate(start.getDate() + 28)
            return end >= minEnd || `Must be at least 28 days after ${minEnd.toISOString().slice(0, 10)}`
          }
        ]"
      />

      <v-file-input
        v-model="props.campaign.coverImage"
        label="Cover Image"
        accept="image/*"
        variant="outlined"
        @change="update('coverImage', $event)"
        :rules="[v => !!v || 'Cover image is required']"
      />
    </v-form>
  </v-card>
</template>
