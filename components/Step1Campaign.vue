<template>
  <v-form ref="form" :model-value="modelValue" @update:model-value="val => emit('update:modelValue', val)">
    <v-text-field
      v-model="formData.campaignName"
      variant="outlined"
      placeholder="Campaign Name"
      :rules="[rules.required]"
    />
    <v-textarea
      v-model="formData.campaignDescription"
      placeholder="Campaign Description"
      variant="outlined"
      :rules="[rules.required]"
    />
    <v-label>Select a Campaign Category</v-label>
    <v-chip-group
      v-model="formData.category"
      column
      filter
      mandatory
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
    <FileUpload v-model="formData.coverImage" label="Campaign Cover Image" />
  </v-form>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
  formData: Object,
})

const emit = defineEmits(['update:modelValue'])

const rules = {
  required: v => !!v || 'This field is required',
}

const categories = ['Education', 'Medical and Health', 'Community Support', 'Event', 'Faith', 'Memorial', 'Other']
</script>
