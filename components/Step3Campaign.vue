<template>
  <v-form ref="form" :model-value="validStep3"  @update:model-value="val => emit('update:validStep3', val)">
    <v-text-field
      v-model="form.username"
      placeholder="Enter Location"
      variant="outlined"
      density="comfortable"
      rounded="lg"
      :rules="[rules.required]"
    />
    <v-text-field
      v-model="form.socialMediaLinks.facebook"
      placeholder="Facebook Link"
      variant="outlined"
      density="comfortable"
      rounded="lg"
    />
    <v-text-field
      v-model="form.socialMediaLinks.twitter"
      placeholder="Twitter Link"
      variant="outlined"
      density="comfortable"
      rounded="lg"
    />
    <v-text-field
      v-model="form.socialMediaLinks.instagram"
      placeholder="Instagram Link"
      variant="outlined"
      density="comfortable"
      rounded="lg"
    />
  </v-form>
</template>

<script setup>
const props = defineProps({
  validStep3: Boolean
})

const emit = defineEmits(['update:validStep3'])
</script>
