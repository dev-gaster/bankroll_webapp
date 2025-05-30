<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="primary"
        variant="flat"
        class="text-none"
      >
        <v-icon
          v-if="showIcon"
          start
        >
          mdi-account-circle
        </v-icon>
        Get Started
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="pa-4" rounded="xl" elevation="0">
        <v-col cols="12" class="text-center">
          <h2 class="mb-4">Sign in to your account</h2>
          <p class="mb-2">Sign in to create campaigns and contribute to meaningful causes. <br>Continue with Google to get started.</p>
          <v-row>
            <v-col>
              <GoogleSign />
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
const showIcon = true; 
</script>
