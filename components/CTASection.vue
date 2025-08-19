<template>
    <div class="section">
        <v-container class="py-16">
            <v-row>
                <v-col cols="12" class="text-center">
                    <h2 class="text-h3 font-weight-bold mb-4 text-white">Ready to Start Your<br>Fundraising Journey?</h2>
                    <p class="mb-6 text-h6 text-white">Join thousands of families and friends who are already using <br>our platform to support each other.</p>
                    <v-btn 
  color="white" 
  variant="flat" 
  class="ma-1 px-16 green-text-btn text-none" 
  prepend-icon="mdi-message"
  size="large"
>
  Get Started
</v-btn>



                </v-col>
            </v-row>
        </v-container>

    </div>
</template>
<style scoped>
.section {
  background: linear-gradient(
    77deg,
    rgba(24, 61, 245, 1) 0%,
    rgba(54, 74, 255, 1) 16%,
    rgba(166, 87, 250, 1) 52%,
    rgba(82, 90, 247, 1) 85%,
    rgba(48, 89, 252, 1) 100%
  );
  padding: 24px;
}

.green-text-btn {
  color: #183DF5 !important; 
}


:deep(.green-text-btn .v-icon) {
  color: #183DF5 !important;
}
</style>
