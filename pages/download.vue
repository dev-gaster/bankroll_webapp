<template>
  <div class="download-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container class="dark-section">
        <v-row align="center" class="hero-row">
          <v-col cols="12" md="6" class="text-content">
            <div class="badge">
              <v-icon size="18">mdi-cellphone-download</v-icon>
              <span>Mobile App</span>
            </div>
            <h1 class="hero-title">Get Bankroll on Android</h1>
            <p class="hero-description">
              Download the app and start raising funds or supporting causes on the go.
              Available now on Google Play Store.
            </p>

            <!-- Download Button -->
            <div class="download-buttons">
              <a
                href="https://play.google.com/store/apps/details?id=com.gasobu.fintech_apps.bankroll"
                class="store-button"
                aria-label="Get it on Google Play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-card color="white">
                  <v-img src="/google-play-badge.png" alt="Get it on Google Play" />
                </v-card>
              </a>
            </div>

            <!-- Coming Soon Badge -->
            <div class="coming-soon-badge">
              <v-icon size="18" color="#94a3b8">mdi-apple</v-icon>
              <span>iOS version coming soon</span>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="image-content">
            <div class="phone-mockup">
              <div class="phone-frame">
                <img
                  src="https://res.cloudinary.com/dtj3i62m9/image/upload/v1760505176/contribute_h8kipx.jpg"
                  alt="Bankroll App Screenshot"
                  class="app-screenshot"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Features Highlights -->
    <section class="features-section">
      <v-container>
        <h2 class="features-title">Why Download Bankroll?</h2>
        <v-row class="features-grid">
          <v-col
            v-for="(feature, index) in features"
            :key="index"
            cols="12"
            sm="6"
            md="3"
          >
            <div class="feature-card">
              <div class="feature-icon">
                <v-icon size="32" color="primary">{{ feature.icon }}</v-icon>
              </div>
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <v-container>
        <div class="cta-content">
          <h2 class="cta-title">Ready to Get Started?</h2>
          <p class="cta-description">
            Join 1,000+ users managing their finances with Bankroll
          </p>
          <div class="cta-buttons">
            <v-btn
              color="primary"
              size="x-large"
              rounded
              class="download-btn"
              prepend-icon="mdi-google-play"
              href="https://play.google.com/store/apps/details?id=com.gasobu.fintech_apps.bankroll"
              target="_blank"
            >
              Download for Android
            </v-btn>
          </div>
          <p class="coming-soon-text">
            <v-icon size="18" color="#94a3b8">mdi-apple</v-icon>
            iOS version coming soon
          </p>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: "Download Bankroll App - Android | Fundraising Made Easy",
  description:
    "Download the Bankroll mobile app for Android. Start fundraising campaigns, support causes, and manage donations on the go. Available on Google Play Store.",
  ogTitle: "Download Bankroll App - Available on Android",
  ogDescription:
    "Get the Bankroll app for Android and start making a difference from your mobile device. iOS coming soon.",
});

const features = [
  {
    icon: "mdi-lightning-bolt",
    title: "Quick Setup",
    description: "Create campaigns in minutes",
  },
  {
    icon: "mdi-bell-ring",
    title: "Real-time Updates",
    description: "Get instant notifications",
  },
  {
    icon: "mdi-lock-check",
    title: "Secure Payments",
    description: "Bank-level security",
  },
  {
    icon: "mdi-share-variant",
    title: "Easy Sharing",
    description: "Share campaigns instantly",
  },
];
</script>

<style scoped lang="scss">
.download-page {
  overflow-x: hidden;
}

// Hero Section
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  @media (max-width: 960px) {
    padding: 60px 0 40px;
  }
}

.hero-row {
  min-height: 500px;

  @media (max-width: 960px) {
    min-height: auto;
  }
}

.text-content {
  position: relative;
  z-index: 2;

  @media (max-width: 960px) {
    text-align: center;
  }
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.hero-description {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.7;
  margin-bottom: 40px;
  opacity: 0.95;
  max-width: 500px;

  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
}

.download-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
}

.coming-soon-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  backdrop-filter: blur(10px);

  @media (max-width: 960px) {
    justify-content: center;
  }
}

.store-button {
  display: inline-block;
  width: 200px;
  text-decoration: none;
  transition: all 0.3s ease;

  :deep(img) {
    width: 100%;
    height: auto;
    display: block;
  }

  &:hover {
    transform: translateY(-4px);
    filter: brightness(1.1);
  }
}

.qr-section {
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 960px) {
    justify-content: center;
  }
}

.qr-placeholder {
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.qr-text {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

.image-content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 960px) {
    margin-top: 40px;
  }
}

.phone-mockup {
  position: relative;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

.phone-frame {
  width: 280px;
  height: 560px;
  background: #1e293b;
  border-radius: 40px;
  padding: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 25px;
    background: #1e293b;
    border-radius: 0 0 20px 20px;
    z-index: 2;
  }
}

.app-screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

// Features Section
.features-section {
  padding: 80px 0;
  background: #fafbfc;

  @media (max-width: 960px) {
    padding: 60px 0;
  }
}

.features-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-card {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 16px;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.2);
  }
}

.feature-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1e293b;
}

.feature-description {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
}

// CTA Section
.cta-section {
  padding: 80px 0;
  background: white;

  @media (max-width: 960px) {
    padding: 60px 0;
  }
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  margin-bottom: 16px;
  color: #1e293b;
  letter-spacing: -0.5px;
}

.cta-description {
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 40px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.download-btn {
  min-width: 220px;
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0;
}

.coming-soon-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  color: #64748b;
  font-size: 0.95rem;
}
</style>
