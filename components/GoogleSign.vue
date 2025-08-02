<template>
  <GoogleSignInButton
    @success="handleLoginSuccess"
    @error="handleLoginError"
  ></GoogleSignInButton>
</template>

<style scoped>
.google-btn {
  border: 1px solid #ccc;
}
</style>

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
