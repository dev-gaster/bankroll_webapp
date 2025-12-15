<template>
    <div class="features-page">
        <!-- Hero Section -->
        <section class="hero-section">
            <v-container>
                <div class="hero-content">
                    <div class="hero-badge">
                        <v-icon size="18">mdi-wallet</v-icon>
                        <span>All-in-One Platform</span>
                    </div>
                    <h1 class="hero-title">
                        One Wallet.<br>Infinite Possibilities.
                    </h1>
                    <p class="hero-description">
                        Bankroll combines fundraising, savings, payments, pay-later credit, and business tools into one
                        unified platform.
                        Designed for individuals, communities, and small businesses.
                    </p>
                    <div class="hero-actions">
                        <v-btn color="primary" size="x-large" rounded class="hero-btn primary-btn" to="/download">
                            Download App
                            <v-icon end>mdi-download</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-container>
        </section>

        <!-- Core Wallet & Payments -->
        <section class="feature-section wallet-section">
            <v-container>
                <div class="section-header">
                    <div class="section-label">Core Platform</div>
                    <h2 class="section-title">Your Digital Wallet</h2>
                    <p class="section-description">
                        A unified wallet for all your financial needs. Send, receive, and manage money with complete
                        transparency.
                    </p>
                </div>
                <v-row class="features-grid">
                    <v-col v-for="feature in walletFeatures" :key="feature.title" cols="12" sm="6" md="3">
                        <div class="feature-card">
                            <div class="feature-icon-wrapper">
                                <v-icon size="32" :color="feature.color">{{ feature.icon }}</v-icon>
                            </div>
                            <h3 class="feature-title">{{ feature.title }}</h3>
                            <p class="feature-text">{{ feature.description }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Fundraising & Campaigns -->
        <section class="feature-section fundraising-section">
            <v-container>
                <v-row align="center">
                    <v-col cols="12" md="6" order="2" order-md="1">
                        <div class="feature-visual">
                            <div class="visual-card">
                                <v-icon size="120" color="primary">mdi-hand-heart</v-icon>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" order="1" order-md="2">
                        <div class="feature-content">
                            <div class="section-label">Community Fundraising</div>
                            <h2 class="section-title">Campaigns That Connect</h2>
                            <p class="section-description">
                                Create public or private fundraising campaigns for causes that matter. Track progress,
                                engage supporters,
                                and achieve goals together.
                            </p>
                            <ul class="feature-list">
                                <li v-for="item in fundraisingFeatures" :key="item">
                                    <v-icon size="20" color="primary">mdi-check-circle</v-icon>
                                    <span>{{ item }}</span>
                                </li>
                            </ul>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Savings -->
        <section class="feature-section savings-section">
            <v-container>
                <v-row align="center">
                    <v-col cols="12" md="6">
                        <div class="feature-content">
                            <div class="section-label">Smart Savings</div>
                            <h2 class="section-title">Save Together, Grow Together</h2>
                            <p class="section-description">
                                Build financial discipline with personal or group savings goals. Automated reminders
                                keep you on track,
                                with flexible access when you need it.
                            </p>
                            <ul class="feature-list">
                                <li v-for="item in savingsFeatures" :key="item">
                                    <v-icon size="20" color="primary">mdi-check-circle</v-icon>
                                    <span>{{ item }}</span>
                                </li>
                            </ul>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="feature-visual">
                            <div class="visual-card">
                                <v-icon size="120" color="success">mdi-piggy-bank</v-icon>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Bankroll Later (Pay-Later) -->
        <section class="feature-section paylater-section">
            <v-container>
                <div class="paylater-card">
                    <div class="paylater-content">
                        <div class="paylater-icon">
                            <v-icon size="64" color="white">mdi-credit-card-clock</v-icon>
                        </div>
                        <div class="paylater-text">
                            <div class="section-label light">Flexible Payments</div>
                            <h2 class="section-title light">Bankroll Later</h2>
                            <p class="section-description light">
                                Buy now, pay later for bills, campaigns, medical needs, and daily expenses.
                                Flexible repayment plans with transparent fees and built-in credit tracking.
                            </p>
                            <div class="paylater-features">
                                <div v-for="feature in paylaterFeatures" :key="feature" class="paylater-feature-item">
                                    <v-icon size="18" color="white">mdi-check</v-icon>
                                    <span>{{ feature }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-container>
        </section>

        <!-- Agent & Float Management -->
        <section class="feature-section agents-section">
            <v-container>
                <div class="section-header">
                    <div class="section-label">Agent Network</div>
                    <h2 class="section-title">Tools for Agents</h2>
                    <p class="section-description">
                        Empower your agent network with dedicated wallets, float management, and real-time tracking.
                    </p>
                </div>
                <v-row class="features-grid">
                    <v-col v-for="feature in agentFeatures" :key="feature.title" cols="12" sm="6" md="3">
                        <div class="feature-card">
                            <div class="feature-icon-wrapper">
                                <v-icon size="32" :color="feature.color">{{ feature.icon }}</v-icon>
                            </div>
                            <h3 class="feature-title">{{ feature.title }}</h3>
                            <p class="feature-text">{{ feature.description }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Small Business Tools -->
        <section class="feature-section business-section">
            <v-container>
                <v-row align="center">
                    <v-col cols="12" md="6" order="2" order-md="1">
                        <div class="feature-visual">
                            <div class="visual-card">
                                <v-icon size="120" color="warning">mdi-storefront</v-icon>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" order="1" order-md="2">
                        <div class="feature-content">
                            <div class="section-label">Business Suite</div>
                            <h2 class="section-title">Everything Your Business Needs</h2>
                            <p class="section-description">
                                From invoicing to inventory, manage your small business with tools designed for growth
                                and simplicity.
                            </p>
                            <div class="business-tools-grid">
                                <div v-for="tool in businessTools" :key="tool" class="business-tool">
                                    <v-icon size="20" color="primary">mdi-check-circle</v-icon>
                                    <span>{{ tool }}</span>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Communities -->
        <section class="feature-section communities-section">
            <v-container>
                <div class="communities-card">
                    <v-row align="center">
                        <v-col cols="12" md="6">
                            <div class="communities-content">
                                <div class="section-label">Social Finance</div>
                                <h2 class="section-title">Build Communities</h2>
                                <p class="section-description">
                                    Create or join communities to organize group fundraising, share updates, and
                                    collaborate on financial goals.
                                </p>
                                <ul class="feature-list">
                                    <li v-for="item in communityFeatures" :key="item">
                                        <v-icon size="20" color="primary">mdi-check-circle</v-icon>
                                        <span>{{ item }}</span>
                                    </li>
                                </ul>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="communities-visual">
                                <div class="community-avatars">
                                    <div v-for="i in 6" :key="i" class="avatar-circle"
                                        :style="{ animationDelay: `${i * 0.1}s` }">
                                        <v-icon color="white">mdi-account</v-icon>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </section>

        <!-- Security & Trust -->
        <section class="feature-section security-section">
            <v-container>
                <div class="section-header">
                    <div class="section-label">Security First</div>
                    <h2 class="section-title">Built on Trust</h2>
                    <p class="section-description">
                        Enterprise-grade security with full transparency. Your money and data are always protected.
                    </p>
                </div>
                <v-row class="features-grid">
                    <v-col v-for="feature in securityFeatures" :key="feature.title" cols="12" sm="6" md="3">
                        <div class="feature-card security-card">
                            <div class="feature-icon-wrapper">
                                <v-icon size="32" :color="feature.color">{{ feature.icon }}</v-icon>
                            </div>
                            <h3 class="feature-title">{{ feature.title }}</h3>
                            <p class="feature-text">{{ feature.description }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Built for Growth -->
        <section class="feature-section growth-section">
            <v-container>
                <div class="growth-card">
                    <div class="growth-content">
                        <div class="section-label light">Scalable Platform</div>
                        <h2 class="section-title light">Built for Growth</h2>
                        <p class="section-description light">
                            Bankroll is designed to evolve with your needs. A modular platform ready for POS systems,
                            tax management, advanced analytics, and seamless integrations.
                        </p>
                        <div class="growth-features">
                            <div v-for="feature in growthFeatures" :key="feature" class="growth-feature-badge">
                                {{ feature }}
                            </div>
                        </div>
                        <v-btn size="large" variant="outlined" color="white" rounded class="growth-btn" to="/download">
                            Download App
                            <v-icon end>mdi-download</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-container>
        </section>

        <!-- Final CTA -->
        <section class="cta-section">
            <v-container>
                <div class="cta-content">
                    <h2 class="cta-title">Ready to Get Started?</h2>
                    <p class="cta-description">
                        Download the Bankroll app and start managing your finances today
                    </p>
                    <div class="cta-actions">
                        <v-btn color="primary" size="x-large" rounded class="cta-btn" to="/download">
                            Download App
                            <v-icon end>mdi-download</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-container>
        </section>
    </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
    title: "Features - Bankroll | All-in-One Financial Platform",
    description: "Discover Bankroll's features: fundraising, savings, payments, pay-later credit, and business tools. One unified wallet for individuals, communities, and businesses.",
    ogTitle: "Bankroll Features - Unified Financial Platform",
    ogDescription: "One wallet. Infinite possibilities. Fundraising, savings, payments, and business tools in one platform.",
});

const walletFeatures = [
    {
        icon: 'mdi-wallet',
        title: 'Unified Wallet',
        description: 'One wallet for all your money management needs',
        color: 'primary'
    },
    {
        icon: 'mdi-bank-transfer',
        title: 'Instant Transfers',
        description: 'Send and receive money instantly with zero friction',
        color: 'success'
    },
    {
        icon: 'mdi-receipt',
        title: 'Bill Payments',
        description: 'Pay utilities and services directly from your wallet',
        color: 'warning'
    },
    {
        icon: 'mdi-shield-check',
        title: 'Secure Transactions',
        description: 'Complete audit trails and encrypted payments',
        color: 'error'
    }
];

const fundraisingFeatures = [
    'Create public or private campaigns',
    'Real-time progress tracking',
    'Community discussions and updates',
    'Transparent goal management',
    'Support causes and emergencies'
];

const savingsFeatures = [
    'Personal savings goals',
    'Group savings with tracking',
    'Automated reminders',
    'Flexible fund access'
];

const paylaterFeatures = [
    'Pay in 30 days or split payments',
    'Transparent fees and schedules',
    'Built-in credit tracking',
    'For bills, campaigns, and daily needs'
];

const agentFeatures = [
    {
        icon: 'mdi-account-cash',
        title: 'Agent Wallets',
        description: 'Dedicated wallets for your agent network',
        color: 'primary'
    },
    {
        icon: 'mdi-water-plus',
        title: 'Float Management',
        description: 'Easy float top-ups including pay-later options',
        color: 'info'
    },
    {
        icon: 'mdi-chart-timeline-variant',
        title: 'Live Tracking',
        description: 'Real-time transaction monitoring',
        color: 'success'
    },
    {
        icon: 'mdi-percent',
        title: 'Commissions',
        description: 'Automated commission calculations',
        color: 'warning'
    }
];

const businessTools = [
    'Invoicing & Quotations',
    'Inventory Management',
    'Wage Payments (WagePal)',
    'Sales Tracking',
    'Simple Reporting',
    'Payment Collection'
];

const communityFeatures = [
    'Create and join communities',
    'Organize group fundraising drives',
    'Public or private settings',
    'Discussion threads and updates'
];

const securityFeatures = [
    {
        icon: 'mdi-lock-check',
        title: 'Secure Auth',
        description: 'Multi-factor authentication and biometric security',
        color: 'primary'
    },
    {
        icon: 'mdi-shield-lock',
        title: 'Encrypted',
        description: 'End-to-end encryption for all transactions',
        color: 'success'
    },
    {
        icon: 'mdi-file-document-check',
        title: 'Transparent',
        description: 'Complete transaction records and audit trails',
        color: 'info'
    },
    {
        icon: 'mdi-scale-balance',
        title: 'Compliant',
        description: 'Built for regulatory compliance and scale',
        color: 'warning'
    }
];

const growthFeatures = [
    'POS Systems',
    'Tax Management',
    'Advanced Analytics',
    'API Integrations',
    'Custom Workflows',
    'Enterprise Solutions'
];
</script>

<style scoped lang="scss">
.features-page {
    background: white;
}

// Hero Section
.hero-section {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    padding: 120px 0 100px;
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
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
        pointer-events: none;
    }

    @media (max-width: 960px) {
        padding: 80px 0 60px;
    }
}

.hero-content {
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 32px;
    backdrop-filter: blur(10px);
}

.hero-title {
    font-size: clamp(3rem, 7vw, 5rem);
    font-weight: 700;
    line-height: 1.1;
    color: white;
    margin-bottom: 24px;
    letter-spacing: -2px;
}

.hero-description {
    font-size: clamp(1.15rem, 2vw, 1.35rem);
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 48px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.hero-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

.hero-btn {
    text-transform: none;
    font-weight: 600;
    letter-spacing: 0;
    min-width: 200px;
    font-size: 16px;

    &.primary-btn {
        box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
    }

    &.secondary-btn {
        border-color: rgba(255, 255, 255, 0.3);
        color: white;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: white;
        }
    }
}

// Common Feature Section Styles
.feature-section {
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
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 960px) {
        margin-bottom: 50px;
    }
}

.section-label {
    display: inline-block;
    padding: 6px 18px;
    background: rgba(99, 102, 241, 0.1);
    color: #6366f1;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 16px;

    &.light {
        background: rgba(255, 255, 255, 0.2);
        color: white;
    }
}

.section-title {
    font-size: clamp(2.25rem, 4vw, 3rem);
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 16px;
    letter-spacing: -1px;
    line-height: 1.2;

    &.light {
        color: white;
    }
}

.section-description {
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    color: #64748b;
    line-height: 1.7;
    margin: 0;

    &.light {
        color: rgba(255, 255, 255, 0.9);
    }
}

// Feature Cards
.features-grid {
    max-width: 1200px;
    margin: 0 auto;
}

.feature-card {
    text-align: center;
    padding: 36px 24px;
    border-radius: 16px;
    background: white;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    height: 100%;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        border-color: #6366f1;
    }

    &.security-card {
        background: linear-gradient(135deg, #fafbfc 0%, white 100%);
    }
}

.feature-icon-wrapper {
    width: 72px;
    height: 72px;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
}

.feature-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 10px;
}

.feature-text {
    font-size: 0.98rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
}

// Feature Content & Visual
.feature-content {
    @media (max-width: 960px) {
        text-align: center;
        margin-bottom: 40px;
    }
}

.feature-list {
    list-style: none;
    padding: 0;
    margin: 32px 0;

    li {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 0;
        font-size: 1.05rem;
        color: #334155;

        @media (max-width: 960px) {
            justify-content: center;
        }
    }
}

.feature-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;

    @media (max-width: 960px) {
        padding: 20px;
    }
}

.visual-card {
    width: 280px;
    height: 280px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: float 3s ease-in-out infinite;

    @media (max-width: 600px) {
        width: 220px;
        height: 220px;
    }
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

.learn-more-btn {
    text-transform: none;
    font-weight: 600;
    padding: 0;
}

// Pay Later Section
.paylater-section {
    background: white !important;
}

.paylater-card {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    border-radius: 30px;
    padding: 80px 60px;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        pointer-events: none;
    }

    @media (max-width: 960px) {
        padding: 50px 30px;
    }
}

.paylater-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
}

.paylater-icon {
    margin-bottom: 32px;
}

.paylater-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    margin-top: 40px;
}

.paylater-feature-item {
    display: flex;
    align-items: center;
    gap: 12px;
    color: white;
    font-size: 1.05rem;
    justify-content: center;
}

// Business Tools
.business-tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 32px;
}

.business-tool {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: rgba(99, 102, 241, 0.05);
    border-radius: 12px;
    font-size: 1rem;
    color: #334155;
    font-weight: 500;

    @media (max-width: 960px) {
        justify-content: center;
    }
}

// Communities
.communities-section {
    background: white !important;
}

.communities-card {
    background: linear-gradient(135deg, #fafbfc 0%, white 100%);
    border: 1px solid #e2e8f0;
    border-radius: 30px;
    padding: 60px;

    @media (max-width: 960px) {
        padding: 40px 24px;
    }
}

.communities-content {
    @media (max-width: 960px) {
        text-align: center;
        margin-bottom: 40px;
    }
}

.communities-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
}

.community-avatars {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    max-width: 300px;
}

.avatar-circle {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
    animation: popIn 0.5s ease-out forwards;
    opacity: 0;

    @media (max-width: 600px) {
        width: 60px;
        height: 60px;
    }
}

@keyframes popIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

// Growth Section
.growth-section {
    background: white !important;
}

.growth-card {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    border-radius: 30px;
    padding: 80px 60px;
    text-align: center;
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
            radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%);
        pointer-events: none;
    }

    @media (max-width: 960px) {
        padding: 50px 30px;
    }
}

.growth-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    margin: 0 auto;
}

.growth-features {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin: 40px 0;
}

.growth-feature-badge {
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    color: white;
    font-size: 15px;
    font-weight: 500;
    backdrop-filter: blur(10px);
}

.growth-btn {
    text-transform: none;
    font-weight: 600;
    border-width: 2px;
}

// Final CTA
.cta-section {
    padding: 100px 0;
    background: #fafbfc;

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
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 16px;
    letter-spacing: -1px;
}

.cta-description {
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 48px;
}

.cta-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

.cta-btn {
    text-transform: none;
    font-weight: 600;
    letter-spacing: 0;
    min-width: 220px;
    font-size: 16px;
}

.cta-link {
    text-transform: none;
    font-weight: 600;
}
</style>