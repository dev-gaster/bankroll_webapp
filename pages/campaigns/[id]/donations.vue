<template>
  <v-card class="pa-4">
    <v-list lines="two" density="comfortable">
      <v-list-item v-for="(donation, index) in donations" :key="index">
        <template #prepend>
          <v-avatar color="primary" size="36">
            <v-icon icon="mdi-cash" />
          </v-avatar>
        </template>
        <v-list-item-title>{{ donation.name }}</v-list-item-title>
        <v-list-item-subtitle>UGX. {{ donation.amount.toLocaleString() }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
const donations = ref([
  { name: "John Doe", amount: 20000 },
  { name: "Jane Smith", amount: 50000 },
  { name: "Emily Aseru", amount: 100000 },
]);
</script>
