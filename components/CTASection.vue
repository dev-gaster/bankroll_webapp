<template>
  <section class="cta-section dark-section">
    <v-container class="py-16">
      <div class="cta-content">
        <!-- Badge -->
        <div class="cta-badge">
          <v-icon size="16" color="white">mdi-rocket-launch</v-icon>
          <span>Get Started Today</span>
        </div>

        <!-- Heading -->
        <h2 class="cta-title">
          Ready to take control of<br>your finances?
        </h2>

        <!-- Description -->
        <p class="cta-description">
          Join 1,000+ users who trust Bankroll for fundraising, payments, savings,
          and business tools. Start your journey in minutes.
        </p>

        <!-- Stats Row -->
        <div class="cta-stats">
          <div class="stat-item">
            <v-icon size="20" color="white">mdi-clock-fast</v-icon>
            <span>2-minute setup</span>
          </div>
          <div class="stat-item">
            <v-icon size="20" color="white">mdi-shield-check</v-icon>
            <span>Bank-level security</span>
          </div>
          <div class="stat-item">
            <v-icon size="20" color="white">mdi-cash-remove</v-icon>
            <span>No hidden fees</span>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="cta-actions">
          <v-btn color="white" size="x-large" rounded class="cta-btn" target="_blank"
            href="https://play.google.com/store/apps/details?id=com.gasobu.fintech_apps.bankroll">
            Download App
            <v-icon end>mdi-download</v-icon>
          </v-btn>
          <v-btn variant="outlined" size="large" rounded class="cta-btn-secondary" to="/features">
            Learn More
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </div>

        <!-- Trust Line -->
        <p class="trust-line">
          <v-icon size="18" color="success">mdi-check-circle</v-icon>
          Free to download • No credit card required
        </p>
      </div>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
.cta-section {
  background: linear-gradient(135deg,
      rgba(24, 61, 245, 1) 0%,
      rgba(54, 74, 255, 1) 16%,
      rgba(166, 87, 250, 1) 52%,
      rgba(82, 90, 247, 1) 85%,
      rgba(48, 89, 252, 1) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.cta-title {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  letter-spacing: -1px;
  line-height: 1.2;
}

.cta-description {
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

.cta-stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 20px;
  }
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.cta-btn {
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0;
  min-width: 200px;
  color: #183df5 !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  }

  :deep(.v-icon) {
    color: #183df5 !important;
  }
}

.cta-btn-secondary {
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0;
  min-width: 180px;
  border-color: rgba(255, 255, 255, 0.4);
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
  }
}

.trust-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  margin: 0;
}
</style>
