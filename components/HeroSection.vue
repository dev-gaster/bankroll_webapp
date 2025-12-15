<template>
  <section class="hero-section">
    <v-container class="py-8">
      <v-row align="center" class="hero-row">
        <v-col cols="12" md="6" class="hero-content">
          <!-- Trust Badge -->
          <div class="trust-badge">
            <v-icon size="16" color="success">mdi-shield-check</v-icon>
            <span>Trusted by 1,000+ users</span>
          </div>

          <!-- Main Headline -->
          <h1 class="hero-title">
            Moving money,<br />
            <span class="gradient-text">simplified</span>
          </h1>

          <!-- Subtitle -->
          <p class="hero-subtitle">
            One platform for fundraising, savings, payments, pay-later, invoicing, and
            wages. Built for everyday life.
          </p>

          <!-- Key Benefits -->
          <div class="hero-benefits">
            <div class="benefit-item">
              <v-icon size="20" color="primary">mdi-check-circle</v-icon>
              <span>100% Secure & Encrypted</span>
            </div>
            <div class="benefit-item">
              <v-icon size="20" color="primary">mdi-check-circle</v-icon>
              <span>Setup in 2 minutes</span>
            </div>
            <div class="benefit-item">
              <v-icon size="20" color="primary">mdi-check-circle</v-icon>
              <span>No hidden fees</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="hero-actions">
            <v-btn color="primary" size="x-large" rounded class="hero-btn primary-btn" target="_blank"
              href="https://play.google.com/store/apps/details?id=com.gasobu.fintech_apps.bankroll">
              Download App
              <v-icon end>mdi-download</v-icon>
            </v-btn>
            <v-btn variant="text" size="large" class="hero-btn learn-more-btn" to="/features">
              See All Features
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </div>

          <!-- Built by Badge -->
          <div class="built-by">
            <span class="built-by-text">Built by</span>
            <span class="gasobu-badge">Gasobu Technologies</span>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <!-- <div class="phone-mockup"> -->
          <v-card height="500" color="black" style="
              border-radius: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
            ">
            <div>
              <v-img src="/phone-booting.jpg" alt="Bankroll App" cover width="250" />
            </div>
          </v-card>
          <!-- Floating Stats -->
          <!-- <div class="floating-stat stat-1">
              <div class="stat-icon">
                <v-icon color="success">mdi-trending-up</v-icon>
              </div>
              <div class="stat-content">
                <div class="stat-value">$2M+</div>
                <div class="stat-label">Raised</div>
              </div>
            </div>
            <div class="floating-stat stat-2">
              <div class="stat-icon">
                <v-icon color="primary">mdi-shield-check</v-icon>
              </div>
              <div class="stat-content">
                <div class="stat-value">100%</div>
                <div class="stat-label">Secure</div>
              </div>
            </div> -->
          <!-- </div> -->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  background: linear-gradient(180deg, #fafbfc 0%, white 100%);
  padding: 60px 0 80px;
  position: relative;
  overflow: hidden;

  @media (max-width: 960px) {
    padding: 40px 0 60px;
  }
}

.hero-row {
  max-width: 1400px;
  margin: 0 auto;
}

.hero-content {
  @media (max-width: 960px) {
    text-align: center;
  }
}

.trust-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  color: #059669;
  margin-bottom: 24px;
}

.hero-title {
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  color: #0f172a;
  margin-bottom: 24px;
  letter-spacing: -2px;

  .gradient-text {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.hero-subtitle {
  font-size: clamp(1.15rem, 2vw, 1.35rem);
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 32px;
  max-width: 550px;

  @media (max-width: 960px) {
    margin: 0 auto 32px;
  }
}

.hero-benefits {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;

  @media (max-width: 960px) {
    align-items: center;
  }
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
  color: #334155;
  font-weight: 500;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
}

.hero-btn {
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0;

  &.primary-btn {
    min-width: 200px;
    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);

    &:hover {
      box-shadow: 0 12px 32px rgba(99, 102, 241, 0.4);
    }
  }

  &.learn-more-btn {
    color: #6366f1;
  }
}

.built-by {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;

  @media (max-width: 960px) {
    justify-content: center;
  }
}

.built-by-text {
  color: #94a3b8;
}

.gasobu-badge {
  font-weight: 700;
  color: #6366f1;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.phone-mockup {
  position: relative;
  max-width: 400px;
  width: 100%;
}

.phone-card {
  border-radius: 30px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 8px;
  animation: float 3s ease-in-out infinite;
}

.phone-image {
  border-radius: 24px;
  aspect-ratio: 9/16;
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

.floating-stat {
  position: absolute;
  background: white;
  border-radius: 16px;
  padding: 16px 20px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: slideIn 0.6s ease-out forwards;

  &.stat-1 {
    top: 15%;
    right: -20px;
    animation-delay: 0.3s;

    @media (max-width: 600px) {
      right: 10px;
    }
  }

  &.stat-2 {
    bottom: 15%;
    left: -20px;
    animation-delay: 0.5s;

    @media (max-width: 600px) {
      left: 10px;
    }
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.stat-icon {
  width: 40px;
  height: 40px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
}

.stat-label {
  font-size: 0.85rem;
  color: #64748b;
}
</style>
