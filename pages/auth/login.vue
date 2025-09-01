<template>
  <v-card class="mx-auto pa-4" max-width="400" flat>
    <h2 class="mb-6 text-h5 font-weight-bold text-center">Welcome Back</h2>
    <v-row class="mt-2">
      <v-col cols="12" class="text-center">
        <GoogleSign />
      </v-col>
    </v-row>
    <v-divider class="my-6">
      <p style="font-size: 0.875rem; color: rgba(0, 0, 0, 0.6)">or continue with</p>
    </v-divider>
    <v-form ref="loginForm" v-model="valid">
      <v-text-field
        v-model="email"
        label="Email"
        variant="outlined"
        type="email"
        :rules="[rules.required, rules.email]"
        prepend-inner-icon="mdi-email"
        color="primary"
        density="comfortable"
      />
      <v-text-field
        density="comfortable"
        v-model="password"
        label="Password"
        variant="outlined"
        type="password"
        :rules="[rules.required]"
        prepend-inner-icon="mdi-lock"
        color="primary"
        class="mb-6"
      />
      <v-btn block color="primary" size="large" @click="login">Login</v-btn>
    </v-form>
    <p class="text-center mt-4 text-caption">
      Don't have an account?
      <a href="/auth/signup">Register here</a>
    </p>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const loginForm = ref(null);
const valid = ref(false);

const email = ref("");
const password = ref("");

const rules = {
  required: (v) => !!v || "This field is required",
  email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
};

function login() {
  loginForm.value.validate().then((res) => {
    if (res.valid) {
      alert("Logging in...");
      console.log({ email: email.value, password: password.value });
    }
  });
}
</script>
