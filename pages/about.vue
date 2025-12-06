<template>
    <div class="about-page">
        <!-- Hero Section -->
        <section class="hero-section">
            <v-container>
                <v-row align="center" class="min-height-screen">
                    <v-col cols="12" md="6" class="hero-content">
                        <div class="hero-badge">
                            <v-icon class="badge-icon">mdi-heart</v-icon>
                            <span>Empowering Communities</span>
                        </div>
                        <h1 class="hero-title">
                            Empowering Communities Through
                            <span class="gradient-text">Meaningful Fundraising</span>
                        </h1>
                        <p class="hero-description">
                            A modern platform connecting communities to support what matters most.
                        </p>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <h3>10K+</h3>
                                <p>Campaigns Created</p>
                            </div>
                            <div class="stat-item">
                                <h3>$2M+</h3>
                                <p>Funds Raised</p>
                            </div>
                            <div class="stat-item">
                                <h3>50K+</h3>
                                <p>Lives Impacted</p>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="hero-visual">
                        <div class="hero-image-container">
                            <img src="/br-infograph.png" alt="Bankroll Community" class="hero-image" />
                            <div class="floating-card card-1">
                                <v-icon class="card-icon">mdi-account-group</v-icon>
                                <span>Community Support</span>
                            </div>
                            <div class="floating-card card-2">
                                <v-icon class="card-icon">mdi-heart-pulse</v-icon>
                                <span>Medical Aid</span>
                            </div>
                            <div class="floating-card card-3">
                                <v-icon class="card-icon">mdi-school</v-icon>
                                <span>Education</span>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Mission & Vision Section -->
        <section class="mission-section">
            <v-container>
                <div class="section-header">
                    <h2 class="section-title">Our Purpose</h2>
                    <p class="section-subtitle">Connecting communities to support each other</p>
                </div>
                <v-row class="mission-content">
                    <v-col cols="12" md="6">
                        <div class="mission-card">
                            <div class="card-icon-container">
                                <v-icon class="card-icon">mdi-target</v-icon>
                            </div>
                            <h3>Mission</h3>
                            <p>
                                Make fundraising accessible for everyone to create, manage, and contribute
                                to meaningful causes.
                            </p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="mission-card">
                            <div class="card-icon-container">
                                <v-icon class="card-icon">mdi-eye</v-icon>
                            </div>
                            <h3>Vision</h3>
                            <p>
                                A world where technology bridges hearts and every person has a supportive
                                community ready to help.
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Our Story Section -->
        <section class="story-section">
            <v-container>
                <div class="section-header">
                    <h2 class="section-title">Our Journey</h2>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <v-icon>mdi-lightbulb</v-icon>
                        </div>
                        <div class="timeline-content">
                            <h4>2023</h4>
                            <p>
                                Founded by Gasobu Technologies to help communities organize support during
                                critical moments.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <v-icon>mdi-rocket-launch</v-icon>
                        </div>
                        <div class="timeline-content">
                            <h4>2024</h4>
                            <p>
                                Launched with core features, seeing rapid adoption across communities.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <v-icon>mdi-account-group</v-icon>
                        </div>
                        <div class="timeline-content">
                            <h4>2025</h4>
                            <p>
                                Evolved into a complete community ecosystem with collaborative features.
                            </p>
                        </div>
                    </div>
                </div>
            </v-container>
        </section>

        <!-- Features Section -->
        <section class="features-section">
            <v-container>
                <div class="section-header">
                    <h2 class="section-title">Why Bankroll</h2>
                </div>
                <v-row>
                    <v-col v-for="feature in features" :key="feature.title" cols="12" md="4">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <v-icon>{{ feature.icon }}</v-icon>
                            </div>
                            <h4>{{ feature.title }}</h4>
                            <p>{{ feature.description }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Values Section -->
        <section class="values-section">
            <v-container>
                <div class="section-header">
                    <h2 class="section-title">Our Values</h2>
                </div>
                <v-row>
                    <v-col v-for="value in values" :key="value.title" cols="12" md="6" lg="3">
                        <div class="value-card">
                            <div class="value-icon">
                                <v-icon>{{ value.icon }}</v-icon>
                            </div>
                            <h4>{{ value.title }}</h4>
                            <p>{{ value.description }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- Impact Section -->
        <section class="impact-section">
            <v-container>
                <div class="section-header">
                    <h2 class="section-title">Impact</h2>
                </div>
                <v-row>
                    <v-col cols="12" md="4">
                        <div class="impact-card">
                            <div class="impact-number">98%</div>
                            <h4>Success Rate</h4>
                            <p>Campaigns reach their goals</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="impact-card">
                            <div class="impact-number">24h</div>
                            <h4>Fast Response</h4>
                            <p>Average time to first donation</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="impact-card">
                            <div class="impact-number">150+</div>
                            <h4>Communities</h4>
                            <p>Active support networks</p>
                        </div>
                    </v-col>
                </v-row>

                <div class="testimonial-section">
                    <v-row>
                        <v-col v-for="testimonial in testimonials" :key="testimonial.name" cols="12" md="4">
                            <div class="testimonial-card">
                                <div class="testimonial-content">
                                    <v-icon class="quote-icon">mdi-format-quote-open</v-icon>
                                    <p>{{ testimonial.content }}</p>
                                </div>
                                <div class="testimonial-author">
                                    <div class="author-avatar">
                                        <v-icon>mdi-account</v-icon>
                                    </div>
                                    <div class="author-info">
                                        <h5>{{ testimonial.name }}</h5>
                                        <span>{{ testimonial.role }}</span>
                                    </div>
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
                    <h2>Ready to Make a Difference?</h2>
                    <p>Join thousands building stronger communities through Bankroll.</p>
                    <div class="cta-buttons">
                        <v-btn color="primary" size="large" class="cta-button primary" to="/new/campaign">
                            Start a Campaign
                            <v-icon end>mdi-arrow-right</v-icon>
                        </v-btn>
                        <v-btn variant="outlined" size="large" class="cta-button secondary" to="/campaigns">
                            Browse Campaigns
                        </v-btn>
                    </div>
                </div>
            </v-container>
        </section>
    </div>
</template>

<script setup lang="ts">
// Meta and SEO
useSeoMeta({
    title: "About Bankroll - Empowering Communities Through Fundraising",
    ogTitle: "About Bankroll - Empowering Communities Through Fundraising",
    description:
        "Learn about Bankroll's mission to connect communities and enable meaningful support through innovative fundraising technology. Discover our story, values, and impact.",
    ogDescription:
        "Learn about Bankroll's mission to connect communities and enable meaningful support through innovative fundraising technology.",
    ogImage: "/og-image.png",
    twitterCard: "summary_large_image",
});

// Features data
const features = ref([
    {
        icon: "mdi-shield-check",
        title: "Secure & Trusted",
        description: "Bank-level security with transparent fund tracking.",
    },
    {
        icon: "mdi-devices",
        title: "Mobile-First",
        description: "Create and manage campaigns from any device, anywhere.",
    },
    {
        icon: "mdi-account-group",
        title: "Community Driven",
        description: "Build supportive communities around causes.",
    },
    {
        icon: "mdi-chart-line",
        title: "Real-Time Analytics",
        description: "Track performance with detailed insights.",
    },
    {
        icon: "mdi-share-variant",
        title: "Social Integration",
        description: "Amplify your campaign across all platforms.",
    },
    {
        icon: "mdi-cash-fast",
        title: "Quick Payouts",
        description: "Fast and reliable fund transfers.",
    },
]);

// Values data
const values = ref([
    {
        icon: "mdi-heart",
        title: "Compassion",
        description: "Amplifying empathy through thoughtful design.",
    },
    {
        icon: "mdi-shield-account",
        title: "Transparency",
        description: "Clear communication at every step.",
    },
    {
        icon: "mdi-handshake",
        title: "Community",
        description: "Building genuine connections, not just transactions.",
    },
    {
        icon: "mdi-lightbulb-on",
        title: "Innovation",
        description: "Continuously evolving to serve you better.",
    },
]);

// Testimonials data
const testimonials = ref([
    {
        name: "Sarah Kimani",
        role: "Campaign Creator",
        content:
            "Raised funds for my daughter's surgery in just 3 days. The community support was incredible.",
    },
    {
        name: "David Ochieng",
        role: "Community Leader",
        content:
            "Our community uses Bankroll for everything from school projects to emergency support.",
    },
    {
        name: "Grace Mutindi",
        role: "Education Advocate",
        content:
            "Made coordinating scholarship funds effortless. Transparency features build donor confidence.",
    },
]);
</script>

<style scoped lang="scss">
.about-page {
    overflow-x: hidden;
}

// Hero Section
.hero-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,1000 0,0 1000,0"/></svg>');
        background-size: cover;
    }

    .v-container {
        position: relative;
        z-index: 1;
    }
}

.min-height-screen {
    min-height: 100vh;
}

.hero-content {
    padding: 60px 0;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 24px;
    backdrop-filter: blur(10px);

    .badge-icon {
        color: #ff6b6b;
    }
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 24px;

    .gradient-text {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
}

.hero-description {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 40px;
    opacity: 0.9;
    max-width: 500px;
}

.hero-stats {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;

    .stat-item {
        text-align: left;

        h3 {
            font-size: 2rem;
            font-weight: 700;
            margin: 0;
            color: #4ecdc4;
        }

        p {
            margin: 0;
            opacity: 0.8;
            font-size: 0.9rem;
        }
    }
}

.hero-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-image-container {
    position: relative;
    max-width: 400px;
    width: 100%;
}

.hero-image {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.floating-card {
    position: absolute;
    background: white;
    color: #333;
    padding: 12px 16px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    animation: float 3s ease-in-out infinite;

    .card-icon {
        color: #667eea;
    }

    &.card-1 {
        top: 20%;
        right: -20px;
        animation-delay: 0s;
    }

    &.card-2 {
        top: 50%;
        left: -30px;
        animation-delay: 1s;
    }

    &.card-3 {
        bottom: 20%;
        right: -10px;
        animation-delay: 2s;
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

// Common Section Styles
section {
    padding: 100px 0;

    @media (max-width: 960px) {
        padding: 60px 0;
    }
}

.section-header {
    text-align: center;
    margin-bottom: 80px;

    @media (max-width: 960px) {
        margin-bottom: 50px;
    }
}

.section-title {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.5px;
}

.section-subtitle {
    font-size: 1.1rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    font-weight: 400;
}

// Mission Section
.mission-section {
    background: #fafbfc;
}

.mission-content {
    max-width: 1000px;
    margin: 0 auto;
}

.mission-card {
    background: white;
    padding: 50px 40px;
    border-radius: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    height: 100%;
    transition: all 0.3s ease;

    @media (max-width: 600px) {
        padding: 35px 25px;
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15);
    }

    .card-icon-container {
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 28px;

        .card-icon {
            color: white;
            font-size: 2rem;
        }
    }

    h3 {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 20px;
        color: #1e293b;
        letter-spacing: -0.3px;
    }

    p {
        color: #64748b;
        line-height: 1.75;
        font-size: 1.05rem;
        margin: 0;
    }
}

// Story Section
.story-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.timeline {
    max-width: 900px;
    margin: 0 auto;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(-50%);

        @media (max-width: 768px) {
            left: 30px;
        }
    }
}

.timeline-item {
    display: flex;
    margin-bottom: 50px;
    position: relative;

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }

    &:nth-child(even) {
        flex-direction: row-reverse;

        .timeline-content {
            text-align: right;
            margin-right: 80px;
            margin-left: 0;

            @media (max-width: 768px) {
                text-align: left;
                margin-right: 0;
                margin-left: 80px;
            }
        }
    }

    &:nth-child(odd) {
        .timeline-content {
            margin-left: 80px;
        }
    }
}

.timeline-marker {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #4ecdc4, #44a08d);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: 0 4px 15px rgba(78, 205, 196, 0.4);

    @media (max-width: 768px) {
        left: 30px;
        transform: translateX(-50%);
        width: 50px;
        height: 50px;
    }

    .v-icon {
        color: white;
        font-size: 1.5rem;

        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    }
}

.timeline-content {
    flex: 1;
    background: rgba(255, 255, 255, 0.08);
    padding: 35px 30px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        padding: 25px 20px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateY(-3px);
    }

    h4 {
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 12px;
        color: #4ecdc4;
        letter-spacing: -0.3px;
    }

    p {
        line-height: 1.7;
        opacity: 0.95;
        font-size: 1.05rem;
        margin: 0;
    }
}

// Features Section
.features-section {
    background: white;
}

.feature-card {
    text-align: center;
    padding: 45px 30px;
    border-radius: 20px;
    transition: all 0.3s ease;
    height: 100%;
    background: #fafbfc;
    border: 1px solid transparent;

    &:hover {
        transform: translateY(-8px);
        background: white;
        border-color: rgba(102, 126, 234, 0.1);
        box-shadow: 0 8px 30px rgba(102, 126, 234, 0.12);
    }

    .feature-icon {
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 24px;

        .v-icon {
            color: white;
            font-size: 1.8rem;
        }
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 14px;
        color: #1e293b;
        letter-spacing: -0.2px;
    }

    p {
        color: #64748b;
        line-height: 1.6;
        font-size: 0.98rem;
        margin: 0;
    }
}

// Values Section
.values-section {
    background: #fafbfc;
}

.value-card {
    text-align: center;
    padding: 40px 25px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
    height: 100%;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    }

    .value-icon {
        width: 65px;
        height: 65px;
        background: linear-gradient(135deg, #4ecdc4, #44a08d);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;

        .v-icon {
            color: white;
            font-size: 1.5rem;
        }
    }

    h4 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 12px;
        color: #1e293b;
        letter-spacing: -0.2px;
    }

    p {
        color: #64748b;
        line-height: 1.6;
        font-size: 0.95rem;
        margin: 0;
    }
}

// Impact Section
.impact-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.impact-card {
    text-align: center;
    padding: 45px 25px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    .impact-number {
        font-size: 3.5rem;
        font-weight: 700;
        color: #4ecdc4;
        margin-bottom: 12px;
        letter-spacing: -1px;
    }

    h4 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 10px;
        opacity: 0.95;
    }

    p {
        opacity: 0.85;
        line-height: 1.5;
        font-size: 0.98rem;
    }
}

.testimonial-section {
    margin-top: 80px;

    h3 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 50px;
        font-weight: 600;
        opacity: 0.95;
    }
}

.testimonial-card {
    background: rgba(255, 255, 255, 0.08);
    padding: 35px 30px;
    border-radius: 20px;
    height: 100%;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateY(-5px);
    }

    .testimonial-content {
        margin-bottom: 28px;

        .quote-icon {
            color: #4ecdc4;
            font-size: 2.5rem;
            opacity: 0.4;
            margin-bottom: 15px;
        }

        p {
            line-height: 1.75;
            font-size: 1.05rem;
            opacity: 0.95;
            margin: 0;
        }
    }

    .testimonial-author {
        display: flex;
        align-items: center;
        gap: 15px;

        .author-avatar {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #4ecdc4, #44a08d);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            .v-icon {
                color: white;
                font-size: 1.3rem;
            }
        }

        .author-info {
            text-align: left;

            h5 {
                font-size: 1.1rem;
                font-weight: 600;
                margin-bottom: 4px;
                color: white;
            }

            span {
                font-size: 0.9rem;
                opacity: 0.75;
            }
        }
    }
}

// CTA Section
.cta-section {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    color: white;
    text-align: center;

    .cta-content {
        max-width: 700px;
        margin: 0 auto;

        h2 {
            font-size: clamp(2rem, 4vw, 2.75rem);
            font-weight: 700;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #4ecdc4, #44a08d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -0.5px;
        }

        p {
            font-size: 1.15rem;
            line-height: 1.6;
            margin-bottom: 40px;
            opacity: 0.9;
            color: #e2e8f0;
        }
    }

    .cta-buttons {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .cta-button {
        min-width: 180px;
        height: 56px;
        font-size: 1rem;
        font-weight: 600;
        text-transform: none;

        &.primary {
            background: linear-gradient(135deg, #667eea, #764ba2) !important;
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);

            &:hover {
                box-shadow: 0 12px 30px rgba(102, 126, 234, 0.6);
                transform: translateY(-2px);
            }
        }

        &.secondary {
            border: 2px solid #4ecdc4;
            color: #4ecdc4;

            &:hover {
                background: #4ecdc4;
                color: #1a202c;
            }
        }
    }
}

// Responsive Design
@media (max-width: 960px) {
    .hero-stats {
        justify-content: center;
        text-align: center;
        gap: 30px;
    }

    .timeline {
        &::before {
            left: 30px;
        }
    }

    .timeline-item {
        flex-direction: column !important;

        .timeline-content {
            margin-left: 80px !important;
            margin-right: 0 !important;
            text-align: left !important;
        }
    }

    .timeline-marker {
        left: 30px !important;
        transform: translateX(-50%);
    }

    .floating-card {
        position: static !important;
        margin-bottom: 20px;
        align-self: center;
    }

    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 600px) {
    section {
        padding: 60px 0;
    }

    .hero-section {
        padding: 40px 0;
    }

    .hero-content {
        padding: 40px 0;
    }

    .mission-card,
    .feature-card,
    .value-card {
        padding: 30px 20px;
    }

    .timeline-content {
        padding: 20px;
    }

    .testimonial-section {
        margin-top: 60px;
    }

    .cta-content h2 {
        font-size: 2rem;
    }

    .cta-button {
        min-width: 160px;
        height: 50px;
    }
}

// Animation classes
.fade-in-up {
    animation: fadeInUp 0.8s ease-out;
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

// Accessibility improvements
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}

@media (prefers-contrast: high) {
    .section-title {
        color: #000 !important;
        background: none !important;
        -webkit-text-fill-color: initial !important;
    }
}
</style>
