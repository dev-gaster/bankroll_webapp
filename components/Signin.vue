

<template>
    <v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      color="primary"
      text="Get Started"
      variant="flat"
      class="text-none"
    ></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card class="pa-4" rounded="xl" elevation="0">
        <v-col cols="12" class="text-center">
            <h2 class="mb-4" >Sign in to your account</h2>
            
            <p class="mb-2">Please sign in using your Google account .</p>
            <v-row>
                <v-col>
                    <GoogleSign/>
                </v-col>
            </v-row>
        </v-col>

      
      
    </v-card>
  </template>
</v-dialog>
</template>
