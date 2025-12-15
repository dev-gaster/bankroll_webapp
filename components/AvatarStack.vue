<template>
  <div class="avatar-stack">
    <div
      v-for="(avatar, index) in avatars"
      :key="index"
      class="avatar-wrapper"
      :style="{ left: `${index * 20}px`, zIndex: avatars.length - index }"
    >
      <v-avatar size="40" class="avatar-border">
        <v-img :src="avatar" />
      </v-avatar>
    </div>
  </div>
</template>
<script setup lang="ts">
// list of avatar image URLs
const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=15",
];
</script>

<style scoped>
.avatar-stack {
  position: relative;
  height: 40px;
}

.avatar-wrapper {
  position: absolute;
  top: 0;
  transition: left 0.3s ease;
}

.avatar-border {
  border: 2px solid white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}
</style>
