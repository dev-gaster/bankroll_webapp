<template>
  <v-card class="pa-4 mb-4" variant="flat" rounded="lg" color="grey-lighten-4">
    <v-row no-gutters align="start">
      <v-col cols="auto" class="mr-4">
        <v-avatar size="48">
          <v-img :src="avatar" :alt="`${name} Avatar`" cover />
        </v-avatar>
      </v-col>

      <v-col>
        <div class=" font-weight-medium" style="font-weight: bold; ">{{ name }}</div>
        <div class="text-body-2 text-primary font-weight-medium">
          Donated: {{ amount }}
        </div>

        <div class="text-body-2 mt-1">
          {{ message }}
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  amount: string
  message: string
  avatar: string
}>()
</script>
