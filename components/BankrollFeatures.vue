<template>
  <section class="features-section">
    <v-container class="py-16">
      <!-- Header -->
      <div class="section-header">
        <div class="section-badge">
          <v-icon size="18">mdi-star-four-points</v-icon>
          <span>Key Features</span>
        </div>
        <h2 class="section-title">Everything you need in one place</h2>
        <p class="section-subtitle">
          Built for individuals, communities, and businesses with powerful yet simple tools
        </p>
      </div>

      <!-- Features Grid -->
      <v-row class="features-grid">
        <v-col cols="12" sm="6" md="3" v-for="(feature, index) in features" :key="index">
          <div class="feature-card" :style="{ animationDelay: `${index * 100}ms` }">
            <div class="feature-icon" :style="{ background: feature.gradient }">
              <v-icon size="28" color="white">{{ feature.icon }}</v-icon>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </v-col>
      </v-row>

      <!-- Additional Benefits -->
      <div class="benefits-section">
        <v-row class="benefits-row">
          <v-col cols="12" md="4" v-for="(benefit, index) in benefits" :key="index">
            <div class="benefit-item">
              <v-icon size="24" :color="benefit.color">{{ benefit.icon }}</v-icon>
              <div class="benefit-content">
                <h4 class="benefit-title">{{ benefit.title }}</h4>
                <p class="benefit-text">{{ benefit.text }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const features = ref([
  {
    icon: 'mdi-hand-heart',
    title: 'Fundraising',
    description: 'Create campaigns for personal causes or community projects',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
  },
  {
    icon: 'mdi-message-text',
    title: 'Real-time Chat',
    description: 'Engage supporters with familiar messaging interface',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  },
  {
    icon: 'mdi-bell-ring',
    title: 'Smart Alerts',
    description: 'Instant notifications for donations and milestones',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  },
  {
    icon: 'mdi-chart-line',
    title: 'Progress Tracking',
    description: 'Visual updates and detailed campaign analytics',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
  },
  {
    icon: 'mdi-account-group',
    title: 'Group Savings',
    description: 'Collaborative savings goals with your community',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
  },
  {
    icon: 'mdi-wallet',
    title: 'Digital Wallet',
    description: 'Manage all your money in one secure place',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
  },
  {
    icon: 'mdi-credit-card-clock',
    title: 'Pay Later',
    description: 'Flexible payment options when you need them',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)'
  },
  {
    icon: 'mdi-shield-check',
    title: 'Secure',
    description: 'Bank-level security for all transactions',
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'
  }
]);

const benefits = ref([
  {
    icon: 'mdi-clock-fast',
    title: 'Setup in Minutes',
    text: 'Get started quickly with our simple onboarding process',
    color: '#6366f1'
  },
  {
    icon: 'mdi-cash-remove',
    title: 'Transparent Fees',
    text: 'No hidden charges. Clear pricing on all services',
    color: '#10b981'
  },
  {
    icon: 'mdi-headset',
    title: '24/7 Support',
    text: 'Always here to help with any questions or issues',
    color: '#f59e0b'
  }
]);
</script>

<style scoped lang="scss">
.features-section {
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  color: #6366f1;
  margin-bottom: 20px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.section-subtitle {
  font-size: 1.15rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  max-width: 1200px;
  margin: 0 auto 80px;
}

.feature-card {
  text-align: center;
  padding: 32px 24px;
  background: #fafbfc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  height: 100%;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-8px);
    background: white;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    border-color: #6366f1;

    .feature-icon {
      transform: scale(1.1);
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 10px;
  letter-spacing: -0.3px;
}

.feature-description {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.benefits-section {
  padding-top: 60px;
  border-top: 1px solid #e2e8f0;
}

.benefits-row {
  max-width: 1100px;
  margin: 0 auto;
}

.benefit-item {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: #fafbfc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    border-color: #6366f1;
    transform: translateX(4px);
  }
}

.benefit-content {
  flex: 1;
}

.benefit-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 6px;
}

.benefit-text {
  font-size: 0.92rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}
</style>
