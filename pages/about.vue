<template>
    <div class="about-page">
        <!-- Hero Section -->
        <section class="hero-section">
            <v-container>
                <div class="hero-content">
                    <div class="hero-badge">
                        <span class="badge-dot"></span>
                        <span>About Bankroll</span>
                    </div>
                    <h1 class="hero-title">
                        Building the future of<br />
                        <span class="gradient-text">financial infrastructure</span>
                    </h1>
                    <p class="hero-description">
                        A unified financial platform designed for emerging markets. Combining
                        payments, fundraising, savings, credit, and business tools into one seamless
                        experience.
                    </p>
                </div>

                <!-- Stats Grid -->
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value">$2M+</div>
                        <div class="stat-label">Transaction Volume</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">50K+</div>
                        <div class="stat-label">Active Users</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">10K+</div>
                        <div class="stat-label">Campaigns Launched</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">98%</div>
                        <div class="stat-label">Success Rate</div>
                    </div>
                </div>
            </v-container>
        </section>

        <!-- Company Overview Section -->
        <section class="overview-section">
            <v-container>
                <v-row align="center" class="overview-row">
                    <v-col cols="12" md="6">
                        <div class="overview-content">
                            <div class="section-label">Our Mission</div>
                            <h2 class="section-title">Democratizing financial access</h2>
                            <p class="section-text">
                                We're building the financial infrastructure for emerging markets. Bankroll
                                combines fundraising, payments, savings, credit, and business tools into a
                                single, powerful platform that works for everyone.
                            </p>
                            <p class="section-text">
                                From individuals managing personal campaigns to small businesses scaling
                                their operations, we provide the tools to move money efficiently and
                                transparently.
                            </p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="overview-visual">
                            <div class="visual-grid">
                                <div class="visual-item" v-for="(item, index) in platformFeatures" :key="index">
                                    <v-icon :color="item.color">{{ item.icon }}</v-icon>
                                    <span>{{ item.label }}</span>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Principles Section -->
        <section class="principles-section">
            <v-container>
                <div class="section-header">
                    <div class="section-label">How We Work</div>
                    <h2 class="section-title">Built on trust and transparency</h2>
                    <p class="section-description">
                        Every decision we make is guided by our commitment to users, security, and
                        financial inclusion.
                    </p>
                </div>
                <v-row class="principles-grid">
                    <v-col v-for="principle in principles" :key="principle.title" cols="12" md="4">
                        <div class="principle-card">
                            <div class="principle-icon">
                                <v-icon>{{ principle.icon }}</v-icon>
                            </div>
                            <h3 class="principle-title">{{ principle.title }}</h3>
                            <p class="principle-text">{{ principle.description }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Product Section -->
        <section class="product-section">
            <v-container>
                <div class="section-header">
                    <div class="section-label">Platform</div>
                    <h2 class="section-title">One platform, infinite possibilities</h2>
                </div>
                <div class="product-grid">
                    <div v-for="product in products" :key="product.title" class="product-card">
                        <div class="product-header">
                            <div class="product-icon">
                                <v-icon size="28">{{ product.icon }}</v-icon>
                            </div>
                            <h3 class="product-title">{{ product.title }}</h3>
                        </div>
                        <p class="product-description">{{ product.description }}</p>
                        <ul class="product-features">
                            <li v-for="feature in product.features" :key="feature">
                                <v-icon size="16">mdi-check</v-icon>
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </v-container>
        </section>

        <!-- Commitment Section -->
        <section class="commitment-section">
            <v-container>
                <div class="commitment-content">
                    <div class="commitment-text">
                        <div class="section-label">Security & Compliance</div>
                        <h2 class="section-title">Enterprise-grade security</h2>
                        <p class="section-text">
                            Your money and data are protected by bank-level security standards. We use
                            end-to-end encryption, secure authentication, and comply with international
                            financial regulations.
                        </p>
                        <div class="security-badges">
                            <div v-for="badge in securityBadges" :key="badge.title" class="security-badge">
                                <v-icon size="24">{{ badge.icon }}</v-icon>
                                <div class="badge-content">
                                    <div class="badge-title">{{ badge.title }}</div>
                                    <div class="badge-subtitle">{{ badge.subtitle }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-container>
        </section>

        <!-- Growth Section -->
        <section class="growth-section">
            <v-container>
                <div class="growth-content">
                    <v-row align="center">
                        <v-col cols="12" md="6">
                            <div class="section-label">Backed by Innovation</div>
                            <h2 class="section-title">Built by Gasobu Technologies</h2>
                            <p class="section-text">
                                Bankroll is developed and maintained by Gasobu Technologies, a software
                                company focused on building financial infrastructure for emerging markets.
                            </p>
                            <p class="section-text">
                                Our team combines expertise in fintech, mobile payments, and
                                community-driven platforms to create tools that work for everyone.
                            </p>
                            <div class="growth-stats">
                                <div class="growth-stat">
                                    <div class="stat-number">2023</div>
                                    <div class="stat-label">Founded</div>
                                </div>
                                <div class="growth-stat">
                                    <div class="stat-number">5+</div>
                                    <div class="stat-label">Products</div>
                                </div>
                                <div class="growth-stat">
                                    <div class="stat-number">24/7</div>
                                    <div class="stat-label">Support</div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="growth-visual">
                                <div class="growth-card">
                                    <v-icon size="48" color="primary">mdi-rocket-launch</v-icon>
                                    <h3>Fast Deployment</h3>
                                    <p>New features shipped continuously</p>
                                </div>
                                <div class="growth-card">
                                    <v-icon size="48" color="success">mdi-shield-check</v-icon>
                                    <h3>Secure Infrastructure</h3>
                                    <p>Bank-grade security standards</p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </section>

        <!-- CTA Section -->
        <section class="cta-section">
            <v-container>
                <div class="cta-content">
                    <h2 class="cta-title">Get started with Bankroll</h2>
                    <p class="cta-description">
                        Download the app and experience modern financial tools designed for you.
                    </p>
                    <v-btn color="primary" size="x-large" rounded class="cta-button" to="/download">
                        Download App
                        <v-icon end>mdi-download</v-icon>
                    </v-btn>
                </div>
            </v-container>
        </section>
    </div>
</template>

<script setup lang="ts">
// Meta and SEO
useSeoMeta({
    title: "About Bankroll - Building Financial Infrastructure for Emerging Markets",
    ogTitle: "About Bankroll - Modern Financial Platform",
    description:
        "Bankroll combines fundraising, payments, savings, credit, and business tools into one unified platform. Built for individuals, communities, and businesses in emerging markets.",
    ogDescription:
        "A unified financial platform combining payments, fundraising, savings, and business tools. Built for emerging markets.",
    ogImage: "/og-image.png",
    twitterCard: "summary_large_image",
});

// Platform Features
const platformFeatures = ref([
    { icon: "mdi-wallet", label: "Payments", color: "#6366f1" },
    { icon: "mdi-hand-heart", label: "Fundraising", color: "#8b5cf6" },
    { icon: "mdi-piggy-bank", label: "Savings", color: "#10b981" },
    { icon: "mdi-credit-card-clock", label: "Pay Later", color: "#f59e0b" },
    { icon: "mdi-storefront", label: "Business", color: "#ec4899" },
    { icon: "mdi-account-group", label: "Communities", color: "#06b6d4" },
]);

// Principles
const principles = ref([
    {
        icon: "mdi-shield-lock",
        title: "Security First",
        description:
            "Bank-grade encryption and security protocols protect every transaction. Your trust is our foundation.",
    },
    {
        icon: "mdi-lightning-bolt",
        title: "Built for Speed",
        description:
            "Fast transactions, instant confirmations, and real-time updates. Money moves at the speed of life.",
    },
    {
        icon: "mdi-scale-balance",
        title: "Transparent Always",
        description:
            "Clear fees, complete records, and full visibility into every transaction. No hidden charges.",
    },
]);

// Products
const products = ref([
    {
        icon: "mdi-wallet",
        title: "Digital Wallet",
        description: "Send, receive, and manage money with a unified wallet.",
        features: [
            "Instant transfers",
            "Bill payments",
            "Transaction history",
            "Multi-currency support",
        ],
    },
    {
        icon: "mdi-hand-heart",
        title: "Fundraising",
        description: "Create campaigns for causes that matter to your community.",
        features: [
            "Public & private campaigns",
            "Real-time tracking",
            "Community engagement",
            "Goal management",
        ],
    },
    {
        icon: "mdi-credit-card-clock",
        title: "Bankroll Later",
        description: "Flexible pay-later options for bills, campaigns, and purchases.",
        features: [
            "Buy now, pay later",
            "Flexible terms",
            "Transparent fees",
            "Credit tracking",
        ],
    },
    {
        icon: "mdi-storefront",
        title: "Business Tools",
        description: "Everything small businesses need to grow and succeed.",
        features: ["Invoicing", "Inventory", "Wage payments", "Sales tracking"],
    },
]);

// Security Badges
const securityBadges = ref([
    {
        icon: "mdi-lock-check",
        title: "Encrypted",
        subtitle: "End-to-end encryption",
    },
    {
        icon: "mdi-shield-check",
        title: "Compliant",
        subtitle: "Financial regulations",
    },
    {
        icon: "mdi-fingerprint",
        title: "Verified",
        subtitle: "Secure authentication",
    },
]);
</script>

<style scoped lang="scss">
.about-page {
    background: white;
}

// Hero Section
.hero-section {
    padding: 120px 0 100px;
    background: linear-gradient(180deg, #fafbfc 0%, white 100%);

    @media (max-width: 960px) {
        padding: 80px 0 60px;
    }
}

.hero-content {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 80px;

    @media (max-width: 960px) {
        margin-bottom: 60px;
    }
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 18px;
    background: rgba(99, 102, 241, 0.08);
    border-radius: 30px;
    font-size: 13px;
    font-weight: 600;
    color: #6366f1;
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-dot {
    width: 6px;
    height: 6px;
    background: #6366f1;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.hero-title {
    font-size: clamp(2.75rem, 6vw, 4.5rem);
    font-weight: 700;
    line-height: 1.15;
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

.hero-description {
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    line-height: 1.7;
    color: #64748b;
    max-width: 750px;
    margin: 0 auto;
}

// Stats Grid
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
}

.stat-card {
    text-align: center;
    padding: 32px 20px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(99, 102, 241, 0.1);
        border-color: #6366f1;
    }
}

.stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 8px;
    letter-spacing: -1px;
}

.stat-label {
    font-size: 0.95rem;
    color: #64748b;
    font-weight: 500;
}

// Common Section Styles
section {
    padding: 100px 0;

    @media (max-width: 960px) {
        padding: 60px 0;
    }

    &:nth-child(even) {
        background: #fafbfc;
    }
}

.section-header {
    text-align: center;
    margin-bottom: 80px;

    @media (max-width: 960px) {
        margin-bottom: 50px;
    }
}

.section-label {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(99, 102, 241, 0.08);
    color: #6366f1;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 16px;
}

.section-title {
    font-size: clamp(2.25rem, 4vw, 3rem);
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 16px;
    letter-spacing: -1px;
    line-height: 1.2;
}

.section-description {
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    color: #64748b;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
}

.section-text {
    font-size: 1.1rem;
    color: #64748b;
    line-height: 1.8;
    margin-bottom: 24px;
}

// Overview Section
.overview-section {
    background: white;
}

.overview-row {
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.overview-content {
    @media (max-width: 960px) {
        text-align: center;
        margin-bottom: 50px;
    }
}

.overview-visual {
    display: flex;
    justify-content: center;
    padding: 40px;
}

.visual-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 400px;

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
}

.visual-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 24px 16px;
    background: white;
    border: 1.5px solid #e2e8f0;
    border-radius: 16px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        border-color: #6366f1;
        box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
    }

    .v-icon {
        font-size: 32px;
    }

    span {
        font-size: 13px;
        font-weight: 600;
        color: #0f172a;
    }
}

// Principles Section
.principles-section {
    background: #fafbfc;
}

.principles-grid {
    max-width: 1100px;
    margin: 0 auto;
}

.principle-card {
    padding: 40px 32px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    height: 100%;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        border-color: #6366f1;
    }
}

.principle-icon {
    width: 64px;
    height: 64px;
    background: rgba(99, 102, 241, 0.08);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;

    .v-icon {
        color: #6366f1;
        font-size: 32px;
    }
}

.principle-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 12px;
    letter-spacing: -0.3px;
}

.principle-text {
    font-size: 1.05rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
}

// Product Section
.product-section {
    background: white;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.product-card {
    padding: 36px 28px;
    background: #fafbfc;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        background: white;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        border-color: #6366f1;
    }
}

.product-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.product-icon {
    width: 48px;
    height: 48px;
    background: rgba(99, 102, 241, 0.08);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    .v-icon {
        color: #6366f1;
    }
}

.product-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.3px;
}

.product-description {
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.98rem;
}

.product-features {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 0;
        color: #475569;
        font-size: 0.92rem;

        .v-icon {
            color: #10b981;
            flex-shrink: 0;
        }
    }
}

// Commitment Section
.commitment-section {
    background: #fafbfc;
}

.commitment-content {
    max-width: 900px;
    margin: 0 auto;
}

.commitment-text {
    text-align: center;
}

.security-badges {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-top: 48px;
}

.security-badge {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 28px 24px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        border-color: #6366f1;
    }

    .v-icon {
        color: #6366f1;
        flex-shrink: 0;
    }
}

.badge-content {
    text-align: left;
}

.badge-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 4px;
}

.badge-subtitle {
    font-size: 0.9rem;
    color: #64748b;
}

// Growth Section
.growth-section {
    background: white;
}

.growth-content {
    max-width: 1200px;
    margin: 0 auto;
}

.growth-stats {
    display: flex;
    gap: 48px;
    margin-top: 40px;
    flex-wrap: wrap;
}

.growth-stat {
    text-align: left;
}

.stat-number {
    font-size: 2.25rem;
    font-weight: 700;
    color: #6366f1;
    margin-bottom: 4px;
    letter-spacing: -1px;
}

.stat-label {
    font-size: 0.95rem;
    color: #64748b;
    font-weight: 500;
}

.growth-visual {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px;

    @media (max-width: 960px) {
        padding: 20px 0;
    }
}

.growth-card {
    padding: 36px 32px;
    background: #fafbfc;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        background: white;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        border-color: #6366f1;
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #0f172a;
        margin: 16px 0 8px;
    }

    p {
        color: #64748b;
        line-height: 1.6;
        margin: 0;
    }
}

// CTA Section
.cta-section {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    text-align: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 30% 50%,
                rgba(99, 102, 241, 0.15) 0%,
                transparent 50%),
            radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
        pointer-events: none;
    }
}

.cta-content {
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.cta-title {
    font-size: clamp(2.25rem, 5vw, 3rem);
    font-weight: 700;
    color: white;
    margin-bottom: 16px;
    letter-spacing: -1px;
}

.cta-description {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 40px;
}

.cta-button {
    text-transform: none;
    font-weight: 600;
    min-width: 200px;
    font-size: 16px;
    letter-spacing: 0;
}

// Responsive Design
@media (max-width: 960px) {

    .overview-content,
    .commitment-text,
    .growth-content {
        text-align: center;
    }

    .overview-visual {
        margin-top: 40px;
    }

    .growth-stats {
        justify-content: center;
    }

    .product-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    section {
        padding: 60px 0;
    }

    .principle-card,
    .product-card,
    .growth-card {
        padding: 28px 20px;
    }

    .security-badges {
        grid-template-columns: 1fr;
    }
}

// Accessibility improvements
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
</style>
