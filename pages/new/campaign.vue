<template>
  <v-div class="d-flex align-center justify-center" height="90vh">
   
          <v-col cols="12">

        <v-card class="pa-8" width="100%" elevation="12" rounded="xl">

          <h3 class="subheading mb-4">Step {{ step }} of 3</h3>

          <!-- Step 1 -->
          <v-form v-if="step === 1" ref="formStep1" v-model="validStep1">
            <v-text-field
              variant="outlined"
              v-model="form.campaignName"
              color="primary"
              placeholder="Campaign Name"
              rounded="lg"
              density="comfortable"
              :rules="[rules.required]"
            />
            <v-textarea
              v-model="form.campaignDescription"
              placeholder="Campaign Description"
              variant="outlined"
              rows="3"
              auto-grow
              rounded="lg"
              color="primary"
              class=" mb-2"
              hide-details
              :rules="[rules.required]"
            ></v-textarea>

            <v-label class="text-subtitle-1 font-weight-medium mb-2">Select a Campaign Category</v-label>
            <v-chip-group
              v-model="form.category"
              column
              filter
              mandatory
              class="mb-4"
            >
              <v-chip
                v-for="category in categories"
                :key="category"
                :value="category"
                class="ma-1"
                color="primary"
                variant="tonal"
              >
                {{ category }}
              </v-chip>
            </v-chip-group>

            <FileUpload v-model="form.coverImage" label="Campaign Cover Image" />
          </v-form>

          <!-- Step 2 -->
          <v-form v-if="step === 2" ref="formStep2" v-model="validStep2">
            <v-text-field
              v-model="form.goalAmount"
              label="Goal Amount"
              variant="outlined"
              type="number"
              density="comfortable"
              rounded="lg"
              :rules="[rules.required]"
              prefix="UGX"
            />
            <v-text-field
              v-model="form.endDate"
              label="End Date"
              type="date"
              variant="outlined"
              density="comfortable"
              rounded="lg"
              :rules="[rules.required]"
            />
            <v-text-field
              v-model="form.minimumDonation"
              label="Minimum Donation"
              type="number"
              variant="outlined"
              density="comfortable"
              rounded="lg"
            />
          </v-form>

          <!-- Step 3 -->
          <v-form v-if="step === 3" ref="formStep3" v-model="validStep3">
            <v-text-field
              v-model="form.username"
              placeholder="Enter Location"
                variant="outlined"
                density="comfortable"
                rounded="lg"
              :rules="[rules.required]"
            />
            <v-text-field
              v-model="form.socialMediaLinks.facebook"
              placeholder="Facebook Link"
              variant="outlined"
              density="comfortable"
              rounded="lg"
            />
            <v-text-field
              v-model="form.socialMediaLinks.twitter"
              placeholder="Twitter Link"
              variant="outlined"
              density="comfortable"
              rounded="lg"
            />
            <v-text-field
              v-model="form.socialMediaLinks.instagram"
              placeholder="Instagram Link"
              variant="outlined"
              density="comfortable"
              rounded="lg"
            />
          </v-form>

          <!-- Step Navigation -->
          <div class="d-flex justify-space-between mt-6">
            <v-btn :disabled="step === 1" @click="step--">Back</v-btn>
            <v-btn color="primary" @click="nextStep" v-if="step < 3">Next</v-btn>
            <v-btn color="success" @click="submitForm" v-if="step === 3">Create</v-btn>
          </div>
        </v-card>
      </v-col>

   </v-div>
</template>


<script setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'newCampaign',
  
})

const step = ref(1)
const validStep1 = ref(false)
const validStep2 = ref(false)
const validStep3 = ref(false)

const formStep1 = ref(null)
const formStep2 = ref(null)
const formStep3 = ref(null)

const form = ref({
  campaignName: '',
  campaignDescription: '',
  category: '',
  goalAmount:'',
  endDate: '',
  country: '',
    agreeToTerms: false,
  coverImage: null,
  
  socialMediaLinks: {
    facebook: '',
    twitter: '',
    instagram: '',
    },
  
})

const rules = {
  required: v => !!v || 'This field is required',
  email: v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
}

const categories = ['Education', 'Medical and Health', 'Community Support', 'Event', 'Faith','Memorial', 'Other']

async function nextStep() {
  if (step.value === 1) {
    const res = await formStep1.value.validate()
    if (res.valid) step.value++
  } else if (step.value === 2) {
    const res = await formStep2.value.validate()
    if (res.valid) step.value++
  }
}

function submitForm() {
  formStep3.value.validate().then(res => {
    if (res.valid) {
      alert('Form submitted successfully!')
      console.log(form.value)
    }
  })
}
</script>
