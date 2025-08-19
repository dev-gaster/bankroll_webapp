<template>
  <div>
    <v-navigation-drawer v-if="campaign" location="right" width="350" class="pa-4" floating>
      <v-card min-height="300" rounded="xl" variant="tonal" color="secondary" class="pa-4">
        <h1>Campaign</h1>
      </v-card>
    </v-navigation-drawer>
    <v-container v-if="campaign" class="pa-5">
      <CampaignImage :image="campaign?.image ?? '/girl.jpeg'" :title="campaign?.title ?? 'Campaign does not exist'"
        :description="campaign?.author?.name ?? 'Campaign Not Found'" />
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
          <p>{{ campaign?.description ?? "Campaign does not exist" }}</p>
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

          <TwoHeaders title="Most Searched" link="/" />
          <v-row>
            <v-col v-for="n in 2" :key="n" cols="12" sm="6" md="6" lg="6" class="mb-4">
              <Campaigns title="Help Sarah Fight Leukemia"
                description="Sarah is a bright 9-year-old battling leukemia. Help her family afford chemotherapy and travel expenses."
                image="/girl.jpeg" goal="UGX 20,000,000" organizer="John Doe" :show-ending="true" :current="70"
                :total="100" />
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
    <v-container v-else>
      <v-card class="mx-auto pa-4 d-flex flex-column align-center" flat max-width="700">
        <v-avatar size="100" color="grey" variant="tonal" />

        <h1 class="mt-5">Campaign with ID {{ $route.params.id }} not found</h1>
        <div class="mt-4">
          <v-btn color="primary" to="/" variant="flat" rounded>Get out of Here</v-btn>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    // const
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const { data } = await $fetch(`${apiUrl}/campaigns/${params.id}`);
    return {
      campaign: data,
    };
  },
  head: () => ({
    title: this.campaign?.title ?? null,
    meta: [
      {
        hid: "description",
        name: "description",
        content: this.campaign?.description ?? null,
      },
      {
        hid: "og:title",
        name: "og:title",
        content: this.campaign?.title ?? null,
      },
      {
        hid: "og:image",
        name: "og:image",
        content: this.campaign.image ?? null,
      },
      {
        hid: "og:description",
        name: "og:description",
        content: this.campaign?.description ?? null,
      },
    ],
  }),
};
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
