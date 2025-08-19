<template>
  <v-dialog v-model="localValue" max-width="450" persistent no-click-animation>
    <template #default>
      <v-card class="pa-4" rounded="xl" elevation="0">
        <v-toolbar flat color="transparent">
          <v-spacer />
          <v-btn icon @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="text-center">
          <h2 class="mb-4">{{ title }}</h2>
          <p class="mb-2" v-if="description">{{ description }}</p>

          <!-- Slot for input/content -->
          <slot />

          <!-- Optional divider -->
          <div v-if="$slots.divider" class="my-3">
            <v-divider>
              <slot name="divider" />
            </v-divider>
          </div>

          <!-- Default footer with Save -->
          <div v-if="!$slots.footer" class="mt-4">
            <v-btn block color="primary" @click="submit">
              Save
            </v-btn>
          </div>

          <!-- Custom footer slot -->
          <slot name="footer" />
        </div>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  title: string;
  description?: string;
}>();

const emit = defineEmits(['update:modelValue', 'submit']);

const localValue = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  localValue.value = val;
});

watch(localValue, (val) => {
  if (val !== props.modelValue) {
    emit('update:modelValue', val);
  }
});

function close() {
  emit('update:modelValue', false);
}

function submit() {
  emit('submit');
  close();
}
</script>
