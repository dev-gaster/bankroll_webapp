<template>
  <div class="d-flex justify-space-between align-center my-2">
    <div class="flex-1">
      <div><strong>{{ label }}</strong></div>
      <div>{{ value }}</div>
    </div>
    <div class="flex-1">
      <v-btn
       
        variant="outlined"
        rounded
       
      >
        Edit
      </v-btn>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
  showEdit: { type: Boolean, default: true },
  // onEdit: Function,
});
</script>
