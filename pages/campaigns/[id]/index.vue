<template>
  <div class="campaign-detail-page">
    <!-- Loading State -->
    <v-container v-if="pending" class="pa-5 text-center">
      <v-progress-circular indeterminate color="primary" size="64" />
    </v-container>

    <!-- Error State -->
    <v-container v-else-if="error" class="pa-5">
      <v-card flat max-width="600" class="mx-auto pa-4">
        <v-alert type="error" variant="tonal" prominent>
          An error occurred while fetching campaign data: {{ error.message }}
        </v-alert>
        <div class="text-center mt-4">
          <v-btn color="primary" @click="refresh">Retry</v-btn>
        </div>
      </v-card>
    </v-container>

    <!-- Hero Section -->
    <section v-else-if="campaign" class="hero-section">
      <div class="hero-container">
        <!-- Background Image -->
        <div class="hero-background">
          <img
            src="https://res.cloudinary.com/dtj3i62m9/image/upload/v1760505176/contribute_h8kipx.jpg"
            :alt="campaign.title"
            class="hero-image"
          />
          <div class="hero-overlay" />
        </div>

        <!-- Hero Content -->
        <v-container class="hero-content">
          <v-row align="center" class="hero-row">
            <!-- Left Side: Title and Description -->
            <v-col cols="12" md="7" lg="6" class="hero-text-section">
              <div class="hero-text-content">
                <h1 class="hero-title">
                  {{ campaign.title }}
                </h1>
                <p class="hero-description">
                  {{ campaign.description ?? defaultDescription }}
                </p>
                <v-btn
                  color="white"
                  size="large"
                  rounded
                  class="hero-cta-btn"
                  @click="scrollToDonate"
                >
                  Participate Now
                </v-btn>
              </div>
            </v-col>

            <!-- Right Side: Urgent Cause Card -->
            <v-col cols="12" md="5" lg="6" class="hero-card-section">
              <v-card class="urgent-cause-card" elevation="8" rounded="xl">
                <!-- Urgent Badge -->
                <div class="urgent-badge">
                  <v-icon size="small" class="mr-1">mdi-clock-alert-outline</v-icon>
                  Urgent cause
                </div>

                <!-- Campaign Title in Card -->
                <h2 class="card-title">
                  {{ campaign.title }}
                </h2>

                <!-- Progress Bar -->
                <div class="progress-section">
                  <v-progress-linear
                    :model-value="
                      campaign.percentage_raised == 0 ? 3 : calculateProgress(campaign)
                    "
                    height="8"
                    rounded
                    color="success"
                    bg-color="grey-lighten-1"
                    class="mb-3"
                  />

                  <div class="amount-raised">
                    <span class="amount-text">
                      {{
                        formatCurrency(
                          (
                            (parseFloat(campaign.goal_amount) *
                              calculateProgress(campaign)) /
                            100
                          ).toString()
                        )
                      }}
                      raised
                    </span>
                  </div>
                </div>

                <!-- Donations Count -->
                <v-card
                  variant="tonal"
                  color="primary"
                  rounded="lg"
                  class="donations-info d-flex align-center justify-space-between mb-4 pa-3"
                >
                  <div class="donations-count">
                    {{ formatCount(campaign.donation_count) }} donations
                  </div>
                  <v-btn
                    icon
                    density="compact"
                    variant="outlined"
                    @click="scrollToDonations"
                  >
                    <v-icon size="small">mdi-arrow-top-right</v-icon>
                  </v-btn>
                </v-card>

                <!-- Campaign Thumbnails -->
                <div class="campaign-thumbnails">
                  <div class="d-flex flex-row align-center">
                    <div
                      style="padding: 5px; border: 1px solid grey; border-radius: 5px"
                      class="mr-2"
                    >
                      <v-icon>mdi-calendar</v-icon>
                    </div>
                    <div class="d-flex flex-column">
                      <span>Ends on</span>
                      <span>{{ formatDate(campaign.end_date) }}</span>
                    </div>
                  </div>
                  <v-divider vertical class="mx-4" />
                  <div class="d-flex flex-row align-center">
                    <div
                      style="padding: 5px; border: 1px solid grey; border-radius: 5px"
                      class="mr-2"
                    >
                      <v-icon>mdi-account-multiple</v-icon>
                    </div>
                    <div class="d-flex flex-column">
                      <span>{{ formatCount(campaign.member_count) }}</span>
                      <span>Members</span>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- Campaign Details Content -->
    <v-container v-if="campaign" class="campaign-content py-8">
      <v-row>
        <!-- Main Content Column -->
        <v-col cols="12" md="8">
          <!-- Campaign Story -->
          <v-card flat class="mb-4">
            <v-card-title class="text-h5 font-weight-bold">Campaign Story</v-card-title>
            <v-card-text>
              <div class="campaign-story">{{ campaign.description }}</div>
            </v-card-text>
          </v-card>

          <!-- Organizer Information -->
          <v-card flat class="mb-4">
            <v-card-title class="text-h6 font-weight-bold">Organizer</v-card-title>
            <v-card-text>
              <div class="d-flex align-center">
                <v-avatar size="48" color="primary" class="mr-3">
                  <span class="text-white text-h6">
                    {{ campaign.organizer_name?.charAt(0).toUpperCase() }}
                  </span>
                </v-avatar>
                <div>
                  <div class="font-weight-bold">{{ campaign.organizer_name }}</div>
                  <div class="text-caption text-grey">Campaign Organizer</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Sidebar Column -->
        <v-col cols="12" md="4">
          <!-- Donate Card -->
          <v-card class="donate-sidebar-card mb-4" variant="flat" rounded="xl">
            <v-card-text>
              <div class="text-h5 font-weight-bold mb-2">
                {{
                  formatCurrency(
                    (
                      (parseFloat(campaign.goal_amount) * calculateProgress(campaign)) /
                      100
                    ).toString()
                  )
                }}
              </div>
              <div class="text-caption text-grey mb-3">
                Goal {{ formatCurrency(campaign.goal_amount || "0") }}
              </div>

              <v-progress-linear
                :model-value="calculateProgress(campaign)"
                height="6"
                rounded
                color="success"
                bg-color="grey-lighten-3"
                class="mb-4"
              />

              <div class="mb-4">
                <div class="font-weight-bold">
                  {{ formatCount(campaign.donation_count) }}
                </div>
                <div class="text-caption text-grey">donations</div>
              </div>

              <v-btn
                color="primary"
                size="large"
                variant="flat"
                block
                rounded="lg"
                class="mb-2"
              >
                Donate Now
              </v-btn>

              <v-btn
                variant="outlined"
                size="large"
                block
                rounded="lg"
                @click="shareCampaign"
              >
                Share Campaign
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const defaultDescription =
  "By bringing together people from all walks of life, it fosters empathy and understanding to tackle challenges and create positive change.";
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
    lazy: false,
    default: () => null,
    transform: (data) => {
      return data;
    },
  }
);

// share function
const shareCampaign = () => {
  const shareData = {
    title: campaign.value?.title || "Check out this campaign",
    text: campaign.value?.description || "Support this campaign on Gasobu.",
    url: window.location.href,
  };

  if (navigator.share) {
    navigator
      .share(shareData)
      .then(() => console.log("Campaign shared successfully"))
      .catch((error) => console.error("Error sharing campaign:", error));
  } else {
    // Fallback for browsers that do not support the Web Share API
    alert("Sharing is not supported in this browser. Please copy the URL to share.");
  }
};

// format count into K,M,B
const formatCount = (count: number) => {
  if (count < 1000) return count.toString();
  const units = ["K", "M", "B", "T"];
  let unitIndex = -1;
  let reducedCount = count;
  while (reducedCount >= 1000 && unitIndex < units.length - 1) {
    reducedCount /= 1000;
    unitIndex++;
  }
  return `${reducedCount.toFixed(1)}${units[unitIndex]}`;
};
// Format date
const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "N/A";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

// Calculate campaign progress percentage
const calculateProgress = (campaign: CampaignType) => {
  if (campaign.percentage_raised !== undefined) {
    return Math.min(100, Math.round(campaign.percentage_raised));
  }
  const goal = parseFloat(campaign.goal_amount || "0");
  if (goal === 0) return 0;
  // Default to 45% if no percentage_raised is available
  return 45;
};

// Format currency values
const formatCurrency = (amount: string) => {
  const numAmount = parseFloat(amount || "0");
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numAmount);
};

// Scroll functions
const scrollToDonate = () => {
  const donateSection = document.querySelector(".donate-sidebar-card");
  if (donateSection) {
    donateSection.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const scrollToDonations = () => {
  const donationsSection = document.querySelector(".campaign-content");
  if (donationsSection) {
    donationsSection.scrollIntoView({ behavior: "smooth" });
  }
};

// SEO Meta
useSeoMeta({
  title: campaign.value?.title ?? null,
  description: campaign.value?.description ?? null,
  ogTitle: campaign.value?.title ?? null,
  ogDescription: campaign.value?.description ?? null,
  ogImage: campaign.value?.image ?? null,
});
</script>

<style lang="scss" scoped>
// Hero Section Styles
.hero-section {
  position: relative;
  min-height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;

  @media (max-width: 960px) {
    min-height: 500px;
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.85) 0%,
      rgba(118, 75, 162, 0.75) 100%
    );
  }
}

.hero-container {
  position: relative;
  z-index: 1;
  padding: 80px 0 60px;

  @media (max-width: 960px) {
    padding: 60px 0 40px;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 20px;

  @media (max-width: 960px) {
    padding: 10px;
    text-align: center;
  }
}

.hero-row {
  position: relative;
  z-index: 2;
}

.hero-text-content {
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(10px);
  margin-bottom: 24px;
  width: fit-content;

  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  color: white !important;
  margin-bottom: 14px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-size: clamp(28px, 5vw, 56px);

  @media (max-width: 1280px) {
    font-size: 48px;
  }

  @media (max-width: 960px) {
    font-size: clamp(28px, 5vw, 36px);
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
}

.hero-description {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95) !important;
  margin-bottom: 14px;
  max-width: 600px;

  @media (max-width: 960px) {
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
  }
}

.hero-cta {
  width: fit-content;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
  background: white !important;
  color: #667eea !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
  }
}

// Urgent Cause Card
.urgent-cause-card {
  position: relative;
  z-index: 2;
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);

  @media (max-width: 960px) {
    margin-top: 30px;
  }
}

.urgent-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  border-radius: 15px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.4;
}

.progress-section {
  margin-bottom: 24px;
}

.progress-bar-wrapper {
  position: relative;
  height: 12px;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
}

.progress-bar-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  transition: width 1s ease-out;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;

  .progress-percentage {
    font-weight: 700;
    color: #667eea;
    font-size: 16px;
  }
}

.donation-info {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
  border-radius: 12px;
  margin-bottom: 24px;

  .donation-count {
    font-size: 32px;
    font-weight: 800;
    color: #667eea;
  }

  .donation-label {
    font-size: 14px;
    color: #666;
    line-height: 1.4;
  }
}

.campaign-thumbnails {
  display: flex;
  gap: 8px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    object-fit: cover;
    border: 3px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

// Campaign Content Section
.campaign-content {
  padding: 60px 0;

  @media (max-width: 960px) {
    padding: 40px 0;
  }
}

.story-section {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;

  @media (max-width: 600px) {
    padding: 24px;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 24px;
  }

  .story-content {
    font-size: 16px;
    line-height: 1.8;
    color: #444;
  }
}

.organizer-section {
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    padding: 20px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 16px;
  }

  .organizer-name {
    font-size: 18px;
    font-weight: 600;
    color: #667eea;
    margin-bottom: 8px;
  }

  .organizer-date {
    font-size: 14px;
    color: #666;
  }
}

// Donate Sidebar
.donate-sidebar-card {
  position: sticky;
  top: 80px;
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 960px) {
    position: relative;
    top: 0;
    margin-top: 30px;
  }

  .sidebar-amount {
    font-size: 36px;
    font-weight: 800;
    color: #667eea;
    margin-bottom: 8px;
  }

  .sidebar-goal {
    font-size: 16px;
    color: #666;
    margin-bottom: 24px;
  }

  .donate-button {
    width: 100%;
    padding: 16px;
    font-size: 16px;
    font-weight: 600;
    text-transform: none;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    margin-bottom: 16px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
  }

  .share-button {
    width: 100%;
    padding: 16px;
    font-size: 16px;
    font-weight: 600;
    text-transform: none;
    border: 2px solid #667eea;
    color: #667eea;

    &:hover {
      background: rgba(102, 126, 234, 0.05);
    }
  }
}

// Loading and Error States
.loading-container,
.error-container {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-card {
  text-align: center;
  padding: 40px;

  h2 {
    color: #ff6b6b;
    margin-bottom: 16px;
  }

  p {
    color: #666;
    margin-bottom: 24px;
  }
}
</style>
