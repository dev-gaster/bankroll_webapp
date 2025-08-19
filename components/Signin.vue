<template>
  <v-dialog v-model="dialog" max-width="450" persistent no-click-animation>
    <template #activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" color="primary" variant="flat" class="text-none">
        <v-icon v-if="showIcon" start> mdi-account-circle </v-icon>
        Get Started
      </v-btn>
    </template>

    <template #default="{ isActive }">
      <v-card class="pa-4" rounded="xl" elevation="0">
        <v-toolbar flat color="transparent">
          <v-spacer />
          <v-btn icon @click="isActive.value = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <div class="text-center">
          <h2 class="mb-4">Sign in to your account</h2>
          <p class="mb-2">
            Sign in to create campaigns and contribute to meaningful causes.
            <br />Continue with Google to get started.
          </p>

          <v-text-field label="Email address" hide-details="auto" />
          <v-btn block class="mt-4" variant="flat" height="45" color="primary"
            >Continue</v-btn
          >
          <div class="my-3">
            <v-divider>Or continue with</v-divider>
          </div>

          <GoogleSign />
        </div>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
const showIcon = true;
const dialog = ref(false);
</script>
