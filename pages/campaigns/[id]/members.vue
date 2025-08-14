<template>
  <v-card class="pa-4">
    <v-list lines="two" density="comfortable">
      <v-list-item v-for="(member, index) in members" :key="index">
        <template #prepend>
          <v-avatar color="primary" size="36">
            <v-icon icon="mdi-account" />
          </v-avatar>
        </template>
        <v-list-item-title>{{ member.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ member.role }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
const members = ref([
  { name: "John Doe", role: "Organizer" },
  { name: "Jane Smith", role: "Admin" },
  { name: "Kevin Ziyada", role: "Admin" },
  { name: "Emily Aseru", role: "Member" },
  { name: "Sarah Doe", role: "Member" },
  { name: "Michael Johnson", role: "Member" },
  { name: "Alice Brown", role: "Member" },
]);
</script>
