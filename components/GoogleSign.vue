<template>
  <GoogleSignInButton :buttonConfig="{
    size: 'large',
    theme: 'outlined',
    width: '500',
  }" @success="handleLoginSuccess" @error="handleLoginError" />
</template>

<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";
const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  console.log("Access Token", credential);
};
const handleLoginError = () => {
  console.error("Login failed");
};
</script>
