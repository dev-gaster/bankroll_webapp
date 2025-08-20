<template>
  <div>
    <v-navigation-drawer v-if="campaign" location="right" width="350" class="pa-4" floating>
      <v-card min-height="300" rounded="xl" class="pa-4" style="
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1) !important;
        ">
        <h1>{{ formatCurrency(campaign.goal_amount) }}</h1>
        <div class="d-flex">
          <b>Raised:</b>
          <div>{{ formatCurrency("200000") }}</div>
        </div>
        <div class="d-flex">
          <v-btn variant="flat" color="primary" class="flex-1">Donate</v-btn>
          <v-btn variant="outlined" color="primary" class="ml-2 flex-1">Share</v-btn>
        </div>
      </v-card>
    </v-navigation-drawer>
    <div v-if="pending" class="text-center">
      <div>loading</div>
    </div>
    <v-container v-if="campaign" class="pa-5">
      <CampaignImage :campaign="campaign" />
      <div class="tab-sticky">
        <v-card class="pa-4 mb-4 rounded-xl d-block d-md-none" color="primary" variant="tonal">
          <div class="d-flex align-center justify-space-between mb-4">
            <div class="flex-1">
              <h3>Raised: UGX 12,000,000</h3>
              <div>
                <p><strong>Goal:</strong> UGX 20,000,000</p>
                <p><strong>Days left:</strong> 23</p>
              </div>
            </div>
            <div flex-1 class="mr-2">
              <CircularProgress :current="60" :total="100" :size="50" :width="6" color="primary" bg-color="#FFFFFF" />
            </div>
          </div>

          <div class="d-flex">
            <div class="flex-1 mr-2">
              <v-btn color="primary" variant="tonal" block>Share</v-btn>
            </div>
            <div class="flex-1 mr-2">
              <v-btn color="primary" variant="outlined" block>Join</v-btn>
            </div>
            <div class="flex-1">
              <v-btn color="primary" variant="flat" block>Donate</v-btn>
            </div>
          </div>
        </v-card>

        <h2>Campaign Details</h2>
        <br />
        <div>
          <!-- <p>{{ data?.description ?? "Campaign does not exist" }}</p> -->
          <v-divider class="my-2" />

          <br />
          <h2 class="mb-2" style="margin: 0">Organizer</h2>
          <div style="display: flex; align-items: center; gap: 12px">
            <v-avatar size="48">
              <img src="/girl.jpeg" alt="Organizer Avatar" style="object-fit: cover; width: 100%; height: 100%" />
            </v-avatar>
            <div>
              <h3 style="margin: 0">Amanda Peterson</h3>
              <p style="margin: 0">Kampala, Uganda</p>
            </div>
          </div>

          <br />
          <br />

          <h2 class="mb-2">Words of kindness</h2>

          <SupportMessage name="Amanda Peterson" amount="UGX 50,000"
            message="Wishing you all the best! You`ve got this 💪" avatar="/girl.jpeg" />
          <SupportMessage name="Amanda Peterson" amount="UGX 50,000"
            message="Wishing you all the best! You`ve got this 💪" avatar="/girl.jpeg" />

          <v-divider class="my-2" />
          <v-row class="py-4" align="center" justify="space-between">
            <v-col cols="12" sm="6">
              <div class="d-flex flex-column">
                <div class="text-body-1 mb-2">
                  <span class="font-weight-bold">Created on:</span>
                  <span> May 1st, 2025</span>
                </div>
              </div>
            </v-col>

            <v-col cols="12" sm="6" class="d-flex justify-sm-end justify-start">
              <v-btn color="error" variant="outlined" class="mt-sm-0 mt-2">
                Report fundraiser
              </v-btn>
            </v-col>
          </v-row>

          <v-divider class="my-2" />
        </div>
      </div>
    </v-container>
    <v-container v-else>
      <v-card class="mx-auto pa-4 d-flex flex-column align-center" flat max-width="700">
        <v-avatar size="100" color="grey" variant="tonal" />
        <h1>{{ error?.message }}</h1>
        <h1 class="mt-5">Campaign with ID {{ $route.params.id }} not found</h1>
        <div class="mt-4 d-flex">
          <v-btn color="primary" to="/" variant="flat" rounded>Get out of Here</v-btn>
          <v-btn color="primary" variant="text" rounded @click="refresh">
            <v-icon location="left" class="mr-3" left>mdi-reload</v-icon> Retry</v-btn>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const { data: campaign, pending, error, refresh } = await useAsyncData<CampaignType>(
  `campaign-${route.params.id}`,
  async () => {
    try {
      const response = await $fetch<CampaignType>(
        `${config.public.apiUrl}/campaigns/${route.params.id}`,
        {
          headers: {
            Authorization: `Bearer ${config.public.apiToken}`,
            "Content-Type": "application/json",
          },
          // Optional: Add timeout and retry logic
          timeout: 10000,
          retry: 2,
          retryDelay: 1000,
        }
      );
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (fetchError: any) {
      console.error("Fetch error:", fetchError);
      throw createError({
        statusCode: fetchError.statusCode || 500,
        statusMessage: fetchError.statusMessage || "Failed to fetch campaign data",
      });
    }
  },
  {
    server: true,
    lazy: false, // Set to true if you want to defer loading
    default: () => null,
    transform: (data) => {
      // You can transform the data here if needed
      return data;
    },
    // Optional: Cache settings
  }
);
// const calculateProgress = (campaign: Campaign) => {
//   const goal = parseFloat(campaign.goal_amount)
//   const current = parseFloat(campaign.current_amount)
//   if (goal === 0) return 0
//   return Math.min(100, Math.round((current / goal) * 100))
// }

const formatCurrency = (amount: string) => {
  return parseFloat(amount).toLocaleString("en-UG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

useSeoMeta({
  title: campaign.value?.title ?? null,
  description: campaign.value?.description ?? null,
  ogTitle: campaign.value?.title ?? null,
  ogDescription: campaign.value?.description ?? null,
  ogImage: campaign.value?.image ?? null,
});
</script>

<style>
.tab-sticky {
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
  padding: 12px 0;
}
</style>
