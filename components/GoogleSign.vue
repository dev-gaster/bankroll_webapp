<template>
  <v-btn :disabled="!isReady" block color="white" class="google-btn py-5" elevation="0" rounded="lg"
    @click="() => login()">
    <v-row align="center" justify="center" no-gutters class="w-100">
      <img src="/Google.png" alt="Google Logo" width="" height="20" class="mr-2" />
      <span class="text-none text-black">Sign in with Google</span>
    </v-row>
  </v-btn>
</template>

<script setup lang="ts">
import { useOneTap, type CredentialResponse } from "vue3-google-signin";

const { isReady, login } = useOneTap({
  disableAutomaticPrompt: true,
  onSuccess: (response: CredentialResponse) => {
    console.log("Success:", response);
  },
  onError: () => console.error("Error with One Tap Login"),
  // options
});
</script>

<style scoped>
.google-btn {
  border: 1px solid #ccc;
}
</style>
