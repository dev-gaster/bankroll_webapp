<template>
  <section class="how-it-works-section">
    <v-container class="py-16">
      <!-- Header -->
      <div class="section-header">
        <div class="header-badge">
          <v-icon size="18">mdi-lightbulb-on</v-icon>
          <span>Simple Process</span>
        </div>
        <h1 class="section-title">Fundraise on Bankroll</h1>
        <p class="section-subtitle">
          Get started in minutes and begin receiving support from your community
        </p>
      </div>

      <!-- Steps -->
      <div class="steps-container">
        <!-- Step 1 -->
        <div class="step-row">
          <v-row align="center">
            <v-col cols="12" md="6" class="step-content-col" order="1" order-md="1">
              <div class="step-content" data-step="1">
                <div class="step-number-wrapper">
                  <div class="step-number">1</div>
                  <div class="step-line"></div>
                </div>
                <div class="step-text">
                  <h2 class="step-title">Create Your Campaign</h2>
                  <p class="step-description">
                    Set up in minutes with a title, description, and goal. Choose the
                    category that fits your cause.
                  </p>
                  <div class="step-features">
                    <div class="feature-item">
                      <v-icon size="18" color="primary">mdi-check-circle</v-icon>
                      <span>Quick setup</span>
                    </div>
                    <div class="feature-item">
                      <v-icon size="18" color="primary">mdi-check-circle</v-icon>
                      <span>Customizable goals</span>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" order="2" order-md="2">
              <div class="step-image-wrapper">
                <div class="image-decoration decoration-1"></div>
                <v-card class="step-image-card" elevation="8">
                  <v-img src="/groupphone.jpg" alt="Create Campaign" cover class="step-image" />
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Step 2 -->
        <div class="step-row">
          <v-row align="center">
            <v-col cols="12" md="6" order="2" order-md="1">
              <div class="step-image-wrapper">
                <div class="image-decoration decoration-2"></div>
                <v-card class="step-image-card" elevation="8">
                  <v-img src="/inviting.jpg" alt="Invite Your Circle" cover class="step-image" />
                </v-card>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="step-content-col" order="1" order-md="2">
              <div class="step-content" data-step="2">
                <div class="step-number-wrapper">
                  <div class="step-number">2</div>
                  <div class="step-line"></div>
                </div>
                <div class="step-text">
                  <h2 class="step-title">Invite Your Circle</h2>
                  <p class="step-description">
                    Share with friends and family to build support. Use social media or
                    direct links to spread the word.
                  </p>
                  <div class="step-features">
                    <div class="feature-item">
                      <v-icon size="18" color="primary">mdi-check-circle</v-icon>
                      <span>Easy sharing</span>
                    </div>
                    <div class="feature-item">
                      <v-icon size="18" color="primary">mdi-check-circle</v-icon>
                      <span>Social integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Step 3 -->
        <div class="step-row">
          <v-row align="center">
            <v-col cols="12" md="6" class="step-content-col" order="1" order-md="1">
              <div class="step-content" data-step="3">
                <div class="step-number-wrapper">
                  <div class="step-number">3</div>
                </div>
                <div class="step-text">
                  <h2 class="step-title">Share & Receive</h2>
                  <p class="step-description">
                    Engage with supporters, share updates, and receive contributions in
                    real-time.
                  </p>
                  <div class="step-features">
                    <div class="feature-item">
                      <v-icon size="18" color="primary">mdi-check-circle</v-icon>
                      <span>Real-time updates</span>
                    </div>
                    <div class="feature-item">
                      <v-icon size="18" color="primary">mdi-check-circle</v-icon>
                      <span>Instant notifications</span>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" order="2" order-md="2">
              <div class="step-image-wrapper">
                <div class="image-decoration decoration-3"></div>
                <v-card class="step-image-card" elevation="8">
                  <v-img src="/money.jpg" alt="Share & Receive" cover class="step-image" />
                </v-card>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </section>
</template>
<style scoped lang="scss">
.how-it-works-section {
  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

// Header
.section-header {
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 960px) {
    margin-bottom: 50px;
  }
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.section-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

// Steps
.steps-container {
  max-width: 1200px;
  margin: 0 auto;
}

.step-row {
  margin-bottom: 100px;

  @media (max-width: 960px) {
    margin-bottom: 60px;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.step-content-col {
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    justify-content: center;
  }
}

.step-content {
  display: flex;
  gap: 24px;
  max-width: 500px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }
}

.step-number-wrapper {
  position: relative;
  flex-shrink: 0;
}

.step-number {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  position: relative;
  z-index: 2;

  @media (max-width: 960px) {
    width: 56px;
    height: 56px;
    font-size: 24px;
  }
}

.step-line {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 120px;
  background: linear-gradient(180deg, #667eea 0%, transparent 100%);

  @media (max-width: 960px) {
    display: none;
  }
}

.step-row:last-child .step-line {
  display: none;
}

.step-text {
  flex: 1;
}

.step-title {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}

.step-description {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 20px;
}

.step-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: #475569;

  span {
    font-weight: 500;
  }
}

// Image
.step-image-wrapper {
  position: relative;
  padding: 20px;

  @media (max-width: 960px) {
    padding: 10px;
  }
}

.image-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  opacity: 0.6;
  z-index: 0;

  &.decoration-1 {
    background: linear-gradient(135deg,
        rgba(102, 126, 234, 0.1) 0%,
        rgba(118, 75, 162, 0.1) 100%);
    top: -10px;
    left: -10px;
  }

  &.decoration-2 {
    background: linear-gradient(135deg,
        rgba(240, 147, 251, 0.1) 0%,
        rgba(245, 87, 108, 0.1) 100%);
    top: 10px;
    right: -10px;
  }

  &.decoration-3 {
    background: linear-gradient(135deg,
        rgba(79, 172, 254, 0.1) 0%,
        rgba(0, 242, 254, 0.1) 100%);
    bottom: -10px;
    left: 10px;
  }
}

.step-image-card {
  position: relative;
  z-index: 1;
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;

    .step-image {
      transform: scale(1.05);
    }
  }
}

.step-image {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  height: 400px;

  @media (max-width: 960px) {
    height: 300px;
  }

  @media (max-width: 600px) {
    height: 250px;
  }
}
</style>
