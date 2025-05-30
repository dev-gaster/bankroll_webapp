<template>
  <div class="feature-card" color="#f7fafd">
    <v-card elevation="0" class="text-center" rounded="lg" color="#f7fafd">
      <v-card-text>
        <div class="avatar-wrapper my-4" :style="{ background: avatarColor }">
          <v-icon :icon="icon" size="32" color="white" />
        </div>
        <h2 >{{ title }}</h2>
        <p class=" my-4" style="font-size: larger; color: grey;">{{ description }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  avatarColor: {
    type: String,
    default: `linear-gradient(
      19deg,
      rgba(33, 105, 188, 1) 0%,
      rgba(54, 56, 187, 1) 35%,
      rgba(115, 41, 186, 1) 100%
    )`
  }
});
</script>

<style scoped>
.feature-card {
  background-color: #f7fafd;
  border-radius: 16px;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(52, 29, 116, 0.2);
}

.avatar-wrapper {
  width: 56px;
  height: 56px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


