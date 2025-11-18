<template>
  <div>
    <ContentRenderer v-if="legal" :value="legal" />
    <div v-else>Legal document not found</div>
  </div>
</template>
<script setup lang="ts">
const { data: legal } = await useAsyncData(() =>
  queryCollection("content").path("/terms-of-service").first()
);
useSeoMeta({
  title: legal.value?.title ?? "Terms of Service",
  description:
    legal.value?.description ??
    "Bankroll helps you manage all your fundraising activities",
});
</script>
