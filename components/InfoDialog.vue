<template>
  <v-dialog v-model="localValue" max-width="600" scrollable :fullscreen="$vuetify.display.mobile" persistent no-click-animation>
    <template #default>
      <v-card class="pa-0" :tile="$vuetify.display.mobile" :rounded="$vuetify.display.mobile ? '' : 'xl'" style="max-height: 60vh; display: flex; flex-direction: column;">
        <!-- Header with close button -->
        <v-toolbar flat color="transparent">
          <div class="d-flex flex-column ml-4">
            <h1 class="text-h5 font-weight-bold">{{ title }}</h1>
            <p v-if="description" class="text-subtitle-1">{{ description }}</p>
          </div>
          <v-spacer />
          <v-btn icon @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <!-- Title and description -->
        <!-- <div class="px-6">
          <h2 class="mb-2 ">{{ title }}</h2>
          <p v-if="description" class="mb-4 ">{{ description }}</p>
        </div> -->

        <!-- Scrollable list container -->
        <v-card-text style="height: 85vh;" class="px-6">
          <div class="d-flex flex-column ga-2">
            <template v-for="(item, index) in items" :key="getItemKey(item, index)">
              <slot name="item" :item="item" :index="index">
                <v-card class="pa-3" variant="tonal" elevation="0" width="100%">
                  <v-row no-gutters align="center">
                    <v-col cols="auto">
                      <v-avatar size="40" class="mr-3" tile variant="tonal" rounded>
                        <v-icon>mdi-account</v-icon>
                      </v-avatar>
                    </v-col>
                    <v-col>
                      <h4 class="text-subtitle-1 font-weight-medium mb-1">
                        {{ item.name || 'No Name' }}
                      </h4>
                      <div v-if="item.email" class="text-body-2">{{ item.email }}</div>
                      <div v-else-if="item.amount" class="text-body-2">Donated: ${{ item.amount }}</div>
                    </v-col>
                  </v-row>
                </v-card>
              </slot>
            </template>
          </div>
        </v-card-text>

        <!-- Footer Button -->
         <v-divider/>
         <v-card-actions>
          <v-spacer />
          <v-btn color="primary" block variant="tonal" @click="close">
            Close
          </v-btn>
         </v-card-actions>
        <!-- <div class="pa-6">
          <v-btn block color="primary" @click="close">
            Close
          </v-btn>
        </div> -->
      </v-card>
    </template>
  </v-dialog>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  items: {
    type: Array as () => Record<string, unknown>[],
    default: () => [],
  },
  itemKey: {
    type: String,
    default: 'id', 
  },
});

const emit = defineEmits(['update:modelValue']);

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

function getItemKey(item: Record<string, unknown>, index: number) {
  return item[props.itemKey] ?? index;
}
</script>
