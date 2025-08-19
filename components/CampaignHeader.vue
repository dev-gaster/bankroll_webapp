<template>
  <v-container
    class="d-flex align-center justify-center"
    style="height: 80vh;"
  >
    <v-row justify="center" align="center" class="w-100" no-gutters>
      <v-col cols="12" md="8">
        <v-row align="center" no-gutters>
          <v-col cols="9" class="pr-2">
            <v-text-field
              placeholder="Search Campaigns"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              rounded="xl"
              density="comfortable"
              hide-details
            />
          </v-col>
          <v-col cols="3" class="d-flex align-center">
            <v-btn
              color="primary"
              block
              rounded="xl"
              :style="{ height: '48px' }"
            >
              Search
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <ChipSection />
    </v-row>
  </v-container>
</template>
