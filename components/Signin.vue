<template>
  <v-dialog max-width="450">
    <template #activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" color="primary" variant="flat" class="text-none">
        <v-icon v-if="showIcon" start> mdi-account-circle </v-icon>
        Get Started
      </v-btn>
    </template>

    <template #default="{ isActive }">
      <v-card class="pa-4" rounded="xl" elevation="0">
        <v-toolbar variant="flat" color="transparent">
          <v-spacer />
          <v-btn icon variant="flat" @click="isActive = !isActive"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <div class="text-center">
          <h2 class="mb-4">Sign in to your account</h2>
          <p class="mb-2">
            Sign in to create campaigns and contribute to meaningful causes.
            <br />Continue with Google to get started.
          </p>
          <div style="width: 100%">
            <GoogleSign />
          </div>
        </div>
        <div class="my-3">
          <v-divider>Or continue with Email</v-divider>
        </div>
        <v-text-field variant="solo" hide-details flat label="Email address"
          style="border: 1px solid #555; border-radius: 5px !important" aria-placeholder="Enter email"
          aria-label="Email address" placeholder="Enter email" />
        <v-btn class="mt-4" color="primary" height="45" variant="flat">Continue</v-btn>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
const showIcon = true;
</script>
