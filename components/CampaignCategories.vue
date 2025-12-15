<template>
  <section class="categories-section">
    <v-container class="py-16">
      <v-row align="center" class="categories-row">
        <!-- Left Content -->
        <v-col cols="12" md="5" class="content-col">
          <div class="section-badge">
            <v-icon size="18">mdi-apps</v-icon>
            <span>Campaign Categories</span>
          </div>
          <h2 class="section-title">
            Launch campaigns for causes you care about
          </h2>
          <p class="section-description">
            From medical emergencies to education, community projects to personal goals.
            Choose from various categories designed for real-life needs.
          </p>
          <v-btn color="primary" size="large" variant="flat" rounded class="explore-btn" to="/campaigns">
            Explore Campaigns
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>

        <!-- Right Grid -->
        <v-col cols="12" md="7">
          <div class="categories-grid">
            <div v-for="(category, i) in categories" :key="i" class="category-card"
              :style="{ animationDelay: `${i * 80}ms` }">
              <div class="category-icon">
                <v-img :src="category.image" :alt="category.name" height="32" width="32" contain />
              </div>
              <h3 class="category-name">{{ category.name }}</h3>
              <p class="category-count">{{ category.count }} campaigns</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const categories = [
  { name: "Medical & Health", image: "/medical.png", count: "250+" },
  { name: "Education", image: "/education.png", count: "180+" },
  { name: "Community", image: "/community.png", count: "320+" },
  { name: "Events", image: "/event.png", count: "150+" },
  { name: "Faith", image: "/faith.png", count: "90+" },
  { name: "Family", image: "/family.png", count: "200+" }
];
</script>

<style scoped lang="scss">
.categories-section {
  background: linear-gradient(180deg, #fafbfc 0%, #f1f5f9 100%);
}

.categories-row {
  max-width: 1300px;
  margin: 0 auto;
}

.content-col {
  @media (max-width: 960px) {
    text-align: center;
    margin-bottom: 40px;
  }
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
  margin-bottom: 20px;
  letter-spacing: -1px;
  line-height: 1.2;

  @media (max-width: 960px) {
    max-width: 100%;
  }
}

.section-description {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 500px;

  @media (max-width: 960px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

.explore-btn {
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0;
  min-width: 200px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}

.category-card {
  padding: 28px 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  animation: fadeInScale 0.5s ease-out forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
    border-color: #6366f1;

    .category-icon {
      transform: scale(1.1);
    }
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.category-icon {
  width: 60px;
  height: 60px;
  background: rgba(99, 102, 241, 0.08);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  transition: transform 0.3s ease;
}

.category-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 6px;
  letter-spacing: -0.2px;
}

.category-count {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
}
</style>
