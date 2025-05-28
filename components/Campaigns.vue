<template>
  <v-card class="overflow-hidden" height="400px" variant="flat" rounded="xl" >
    <v-img :src="image" cover height="400px">
      <div class="gradient-overlay"></div>

      <div class="top-overlay pa-6 pt-4">
        <v-row no-gutters align="center" justify="space-between">
          <v-col class="flex-grow-0">
            <Timeline />
          </v-col>
          <v-col class="flex-grow-0" v-if="goal">
  <CircularProgress
    :current="current"
    :total="total"
    :size="50"
    :width="6"
    color="success"
    bg-color="#FBFFFA"
  />
</v-col>

        </v-row>
      </div>

      <div class="text-overlay">
        <h3 class="text-white responsive-heading mb-1">{{ title }}</h3>


        <p class="text-white mb-2 responsive-paragraph">{{ description }}</p>

        <v-row class="px-0" no-gutters>
  <v-col cols="6" v-if="organizer">
    <span class="text-white" style="font-size: 0.9rem;">Organized by: {{ organizer }}</span>
  </v-col>
  <v-col cols="6" class="text-right" v-if="goal">
    <span style="color:#49AA18; font-size: 0.9rem; font-weight: bold;">Goal: {{ goal }}</span>
  </v-col>
</v-row>

      </div>
    </v-img>
  </v-card>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  goal: String,
  organizer: String,
  current: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 100
  },
  showEnding: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.694), transparent);
  z-index: 1;
}

.text-overlay {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  z-index: 2;
}

.responsive-heading {
  font-size: clamp(1.1rem, 2.5vw, 1.75rem);
}

.responsive-paragraph {
  font-size: clamp(0.8rem, 2vw, 1.1rem);
}
</style>
