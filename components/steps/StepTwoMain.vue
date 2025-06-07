

<template>
  <div style="height: 80vh;" class="d-flex flex-column justify-center">

    <v-card class="pa-6" elevation="0">
   
    <h2 class="text-h5 font-weight-bold mb-4">Share Your Story & Goal</h2>

    <v-form v-model="formValid" ref="form" class="d-flex flex-column gap-4">
      <v-textarea
        v-model="props.campaign.story"
        placeholder="What’s the story behind your campaign?"
        :rules="[v => !!v || 'This field is required']"
        auto-grow
        variant="outlined"
      />
      <v-text-field
        v-model="props.campaign.goal"
        label="How much do you hope to raise?"
        placeholder="How much do you hope to raise? (e.g. 1,000,000 UGX)"
        variant="outlined"
        prefix="UGX"
        type="number"
        :rules="[v => !!v || 'Goal amount is required']"
      />
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

const validateAndEmit = async () => {
  if (form.value) {
    const result = await form.value.validate()
    emit('valid', result.valid)
  }
}

watch(
  () => [props.campaign.story, props.campaign.goal],
  validateAndEmit,
  { immediate: true, deep: true }
)

onMounted(validateAndEmit)
</script>
