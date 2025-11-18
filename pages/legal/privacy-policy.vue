<template>
  <ContentRenderer v-if="privacy" :value="privacy" />
  <div v-else>Privacy policy not found</div>
</template>
<script setup lang="ts">
const { data: privacy } = await useAsyncData(() =>
  queryCollection("content").path("/privacy-policy").first()
);

useSeoMeta({
  title: privacy.value?.title ?? "Privacy policy",
  description:
    privacy.value?.description ??
    "Bankroll helps you manage all your fundraising activities",
});
</script>
