<template>
  <div class="d-flex align-center justify-center" style="min-height: 90vh;">
    <v-col cols="12"  class="d-flex align-center justify-center">
      <v-card class="pa-8" width="100%" elevation="12" rounded="xl">
          <h2 class="mb-6 text-h5 font-weight-bold text-center">Create Account</h2>
           <v-row class="mt-2">
            <v-col cols="12" class="text-center">

            <GoogleSign/>
            </v-col>
          </v-row>
          <v-divider class="my-6">
          
           <p style="font-size: 0.875rem; color: rgba(0, 0, 0, 0.6);">
             or continue with
           </p>
        </v-divider>
          <v-form ref="signupForm" v-model="valid">
            <v-text-field
              v-model="fullName"
              label="Full Name"
              variant="outlined"
              density="comfortable"

              prepend-icon="mdi-account"
              :rules="[rules.required]"
              color="primary"
            />
            <v-text-field
              v-model="email"
              label="Email"
              variant="outlined"
              type="email"
              density="comfortable"
              prepend-icon="mdi-email"
              :rules="[rules.required, rules.email]"
              color="primary"
            />
            <v-text-field
              v-model="password"
              label="Password"
              variant="outlined"
              type="password"
              density="comfortable"
              prepend-icon="mdi-lock"
              :rules="[rules.required]"
              color="primary"
            />
            <v-text-field
              v-model="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              type="password"
              density="comfortable"
              prepend-icon="mdi-lock-check"
              :rules="[rules.required, rules.matchPassword]"
              color="primary"
              class="mb-4"
            />
            <v-btn block color="primary" size="large" @click="signup">Sign Up</v-btn>
          </v-form>
          <p class="text-center mt-4 text-caption">
            Already have an account?
            <a href="/auth/login">Login here</a>
          </p>
        </v-card>
      </v-col>

  </div>
</template>


<script setup>
import { ref } from 'vue'

const signupForm = ref(null)
const valid = ref(false)

const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const rules = {
  required: v => !!v || 'This field is required',
  email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  matchPassword: v => v === password.value || 'Passwords must match',
}

function signup() {
  signupForm.value.validate().then(res => {
    if (res.valid) {
      alert('Signing up...')
      console.log({
        fullName: fullName.value,
        email: email.value,
        password: password.value,
      })
    }
  })
}
</script>

