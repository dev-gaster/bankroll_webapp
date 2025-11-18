<template>
  <v-card class="overflow-hidden mx-auto" max-width="800" height="400px" variant="flat" rounded="lg">
    <v-img :src="campaign.image ??
      'https://res.cloudinary.com/dtj3i62m9/image/upload/v1760505176/contribute_h8kipx.jpg'
      " cover height="400px">
      <div class="gradient-overlay" />

      <div class="top-overlay pa-6 pt-4">
        <v-row no-gutters align="center" justify="space-between">
          <v-col class="flex-grow-0 pa-3">
            <CircularProgress :current="200000" :total="parseInt(campaign.goal_amount)" :size="50" :width="4"
              color="success" bg-color="#FBFFFA" />
          </v-col>
        </v-row>
      </div>

      <div class="text-overlay">
        <h3 class="text-white responsive-heading mb-1">{{ campaign.title }}</h3>

        <p class="text-white mb-2 responsive-paragraph text-ellipsis-3-lines">
          Organized by {{ campaign.organizer_name }}
        </p>

        <v-row class="px-0" no-gutters>
          <!-- <v-col cols="6" v-if="organizer">
            <span class="text-white" style="font-size: 0.9rem">Organized by: {{ organizer }}</span>
          </v-col>
          <v-col cols="6" class="text-right" v-if="goal">
            <span style="color: #49aa18; font-size: 0.9rem; font-weight: bold">Goal: {{ goal }}</span>
          </v-col> -->
        </v-row>
      </div>
    </v-img>
  </v-card>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  campaign: {
    type: Object as PropType<CampaignType>,
    required: true,
  },
});
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

.text-ellipsis-3-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
