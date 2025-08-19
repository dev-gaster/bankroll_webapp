<template>
  <div style="padding: 0 16px;">
    <v-card
      class="cardTransparent"
      rounded="lg"
      elevation="0"
      style=" height: fit-content;"
      text="New Pledge: $150 from Mum"
    ></v-card>
  </div>
</template>


<style scoped>
.cardTransparent {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(11, 184, 46, 0.13);
  border-radius: 12px;
  border: 1px solid rgba(245, 250, 241, 0.144);
  color: #ffffff;
}
</style>
