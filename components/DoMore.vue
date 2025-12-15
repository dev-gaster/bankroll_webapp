<template>
    <v-sheet class="dark-section mt-8">
        <v-container class="py-16">
            <v-card class="main-card" elevation="0">
                <v-card-text class="card-content">
                    <!-- Hero Section -->
                    <div class="hero-section">
                        <div class="hero-badge">
                            <v-icon size="20" class="badge-icon">mdi-star</v-icon>
                            <span>All-in-One Platform</span>
                        </div>
                        <h1 class="hero-title">Just Bankroll it</h1>
                        <p class="hero-description">
                            Raise funds, manage expenses, and achieve your financial goals—all in one
                            secure, easy-to-use platform.
                        </p>
                    </div>

                    <!-- Features Grid -->
                    <div class="feature-grid">
                        <div v-for="(item, index) in features" :key="index" class="feature-card"
                            :style="{ animationDelay: `${index * 100}ms` }">
                            <div class="feature-icon-wrapper">
                                <v-avatar :color="item.color" size="56" class="feature-avatar">
                                    <v-icon color="white" size="28">{{ item.icon }}</v-icon>
                                </v-avatar>
                            </div>
                            <h3 class="feature-title">{{ item.title }}</h3>
                            <p class="feature-description">{{ item.description }}</p>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-container>
    </v-sheet>
</template>
<script setup lang="ts">
// list of features to highlight
const features = [
    {
        title: "Easy Fundraising",
        description:
            "Create campaigns for personal causes, community projects, or charitable events.",
        icon: "mdi-hand-heart",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
        title: "Group Expenses",
        description:
            "Manage shared expenses among friends, family, or colleagues effortlessly.",
        icon: "mdi-account-group",
        color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
        title: "Savings Goals",
        description: "Set dedicated goals and track your progress towards achieving them.",
        icon: "mdi-piggy-bank",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
        title: "Secure & Safe",
        description: "Robust security measures protect your financial data and transactions.",
        icon: "mdi-shield-lock",
        color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    // pay bills
    {
        title: "Bill Splitting",
        description: "Easily split bills and track who owes what among friends and family.",
        icon: "mdi-receipt-split",
        color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    // payment links
    {
        title: "Payment Links",
        description: "Generate payment links to receive funds quickly and conveniently.",
        icon: "mdi-link-variant",
        color: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
];
</script>
<style lang="scss" scoped>
.v-sheet {
    background: linear-gradient(135deg, #0a1f1a 0%, #011e0f 50%, #001a0f 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 20% 50%,
                rgba(102, 126, 234, 0.08) 0%,
                transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.08) 0%, transparent 50%);
        pointer-events: none;
    }
}

.main-card {
    background: transparent !important;
    color: white;
}

.card-content {
    position: relative;
    z-index: 1;
}

// Hero Section
.hero-section {
    text-align: center;
    margin-bottom: 60px;

    @media (max-width: 960px) {
        margin-bottom: 40px;
    }
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 24px;
    backdrop-filter: blur(10px);
    color: #4ecdc4;

    .badge-icon {
        color: #4ecdc4;
    }
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #ffffff 0%, #4ecdc4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -1px;
}

.hero-description {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
    max-width: 700px;
    margin: 0 auto;
}

// Feature Grid
.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;

    @media (max-width: 960px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
}

.feature-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 32px 24px;
    text-align: center;
    backdrop-filter: blur(20px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;

    &:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;

        .feature-avatar {
            transform: scale(1.1) rotate(5deg);
        }
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.feature-icon-wrapper {
    margin-bottom: 20px;
}

.feature-avatar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.feature-title {
    font-size: 1.35rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: white;
    letter-spacing: -0.3px;
}

.feature-description {
    font-size: 0.98rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
}
</style>
