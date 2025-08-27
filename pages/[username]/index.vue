<template>
  <div class="mb-8">
    <div v-if="pending">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-progress-circular indeterminate color="primary" size="64" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div v-else-if="error">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-icon color="error" size="64">mdi-alert-circle</v-icon>
            <p class="text-h6 mt-4">Error loading user profile: {{ error.message }}</p>
            <v-btn color="primary" variant="outlined" @click="refresh">Retry</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div v-else-if="user">
      <v-card variant="tonal" tile color="primary" height="150" />
      <v-container>
        <div class="text-center">
          <v-avatar
            size="120"
            class="mx-auto text-center"
            tile
            rouned="lg"
            color="grey lighten-2"
            :image="user.avatar"
            :text="user.name.charAt(0).toUpperCase()"
            :style="{
              marginTop: '-60px',
              border: '4px solid white',
              objectFit: 'cover',
              borderRadius: '10px!important',
            }"
          />
        </div>
        <v-card class="mx-auto" flat max-width="600">
          <div class="text-center mt-2">
            <h1>{{ user.name }}</h1>
            <p v-if="user.bio" class="text-subtitle-1 mb-1">{{ user.bio }}</p>
            <div class="d-flex align-center justify-center">
              <v-btn variant="flat" color="primary" class="mr-2">Follow</v-btn>
              <v-btn variant="outlined" @click="shareUserProfile">Share</v-btn>
            </div>
          </div>
          <v-divider class="my-4" />
          <!-- <v-row v-if="user.campaigns" justify="center" class="mb-4">
            <v-col cols="12" sm="6" md="4" class="text-center">
              <h2 class="mb-1">{{ user.campaigns.length }}</h2>
              <p class="text-subtitle-2">Campaigns</p>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="text-center">
              <h2 class="mb-1">0</h2>
              <p class="text-subtitle-2">Supporters</p>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="text-center">
              <h2 class="mb-1">0</h2>
              <p class="text-subtitle-2">Total Raised</p>
            </v-col>
          </v-row>
          <v-divider class="my-4" />
          <div v-if="user.campaigns?.length === 0" class="text-center my-8">
            <h2>This user has not created any campaigns yet.</h2>
          </div>
          <div v-else>
            <h2 class="mb-4 text-center">Campaigns by {{ user.name }}</h2>
            <v-row dense>
              <v-col
                v-for="campaign in user.campaigns"
                :key="campaign.campaignId"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card :to="`/campaigns/${campaign.campaignId}`" class="hoverable">
                  <v-img
                    :src="campaign.image || '/default-campaign.jpg'"
                    height="200px"
                  />
                  <v-card-title>{{ campaign.title }}</v-card-title>
                  <v-card-subtitle class="grey--text text--darken-1">
                    Goal: {{ campaign.goal_amount }} | Raised: 0 | End Date:
                    {{
                      campaign.end_date
                        ? new Date(campaign.end_date).toLocaleDateString()
                        : "N/A"
                    }}
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row> 
           </div> -->
        </v-card>
      </v-container>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const username = route.params.username as string;
const { data: user, pending, error, refresh } = await useAsyncData<UserType>(
  "userProfile-" + username,
  async () => {
    // Fetch user profile data based on the username
    const response = await $fetch<UserType>(`${config.public.apiUrl}/users/${username}`);
    return response;
  }
);
const shareUserProfile = () => {
  const profileUrl = `${window.location.origin}/${username}`;
  if (navigator.share) {
    navigator
      .share({
        title: `Check out ${user.value?.name}'s profile on Bankroll`,
        url: profileUrl,
      })
      .then(() => console.log("Profile shared successfully"))
      .catch((error) => console.error("Error sharing profile:", error));
  } else {
    // Fallback for browsers that do not support the Web Share API
    navigator.clipboard
      .writeText(profileUrl)
      .then(() => alert("Profile URL copied to clipboard"))
      .catch((error) => console.error("Error copying URL to clipboard:", error));
  }
};
useSeoMeta({
  title: user.value?.name ?? null,
  description: user.value?.bio ?? null,
  ogTitle: user.value?.name ?? null,
  ogDescription: user.value?.bio ?? null,
  ogImage: user.value?.avatar ?? null,
});
</script>
<style scoped>
/* Add your styles here */
</style>
