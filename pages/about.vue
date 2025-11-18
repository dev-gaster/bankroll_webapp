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
                            Bringing People Together Through
                            <span class="gradient-text">Meaningful Support</span>
                        </h1>
                        <p class="hero-description">
                            Bankroll is more than just a fundraising platform. We're a community-driven
                            solution that connects hearts, builds bridges between families and friends,
                            and transforms how people support each other through life's most important
                            moments.
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
                    <h2 class="section-title">Our Mission & Vision</h2>
                    <p class="section-subtitle">
                        Building a world where everyone has access to community support when they need
                        it most
                    </p>
                </div>
                <v-row class="mission-content">
                    <v-col cols="12" md="6">
                        <div class="mission-card">
                            <div class="card-icon-container">
                                <v-icon class="card-icon">mdi-target</v-icon>
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To democratize fundraising and make it accessible for everyone to create,
                                manage, and contribute to meaningful causes. We believe that when
                                communities come together, extraordinary things happen.
                            </p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="mission-card">
                            <div class="card-icon-container">
                                <v-icon class="card-icon">mdi-eye</v-icon>
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                A world where geographical boundaries don't limit compassion, where
                                technology bridges gaps between hearts, and where every person has a
                                supportive community ready to help during life's challenges and
                                celebrations.
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
                    <h2 class="section-title">Our Story</h2>
                    <p class="section-subtitle">
                        Born from a simple idea: technology should bring people closer together
                    </p>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <v-icon>mdi-lightbulb</v-icon>
                        </div>
                        <div class="timeline-content">
                            <h4>The Idea (2023)</h4>
                            <p>
                                Founded by the team at Gasobu Technologies, Bankroll was born from
                                witnessing countless families struggling to organize support during
                                medical emergencies and life events. We saw the need for a platform that
                                could seamlessly connect communities.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <v-icon>mdi-rocket-launch</v-icon>
                        </div>
                        <div class="timeline-content">
                            <h4>Launch & Growth (2024)</h4>
                            <p>
                                Launched our first version with core fundraising features. Within months,
                                we saw incredible adoption as communities across Africa began using
                                Bankroll to support each other through medical bills, education costs, and
                                emergencies.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <v-icon>mdi-account-group</v-icon>
                        </div>
                        <div class="timeline-content">
                            <h4>Community Features (2025)</h4>
                            <p>
                                Added powerful community features, enabling users to create support
                                groups, collaborate on campaigns, and build lasting networks of mutual
                                aid. Our platform evolved into a true community ecosystem.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <v-icon>mdi-earth</v-icon>
                        </div>
                        <div class="timeline-content">
                            <h4>Global Impact (Today)</h4>
                            <p>
                                Today, Bankroll serves thousands of users across multiple countries,
                                facilitating millions in community support. We continue to innovate,
                                adding features that make fundraising more effective and communities
                                stronger.
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
                    <h2 class="section-title">Why Choose Bankroll?</h2>
                    <p class="section-subtitle">
                        Designed with communities in mind, built with cutting-edge technology
                    </p>
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
                    <h2 class="section-title">Our Core Values</h2>
                    <p class="section-subtitle">The principles that guide everything we do</p>
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
                    <h2 class="section-title">Our Impact</h2>
                    <p class="section-subtitle">
                        Real stories, real change, real community support
                    </p>
                </div>
                <v-row>
                    <v-col cols="12" md="4">
                        <div class="impact-card">
                            <div class="impact-number">98%</div>
                            <h4>Success Rate</h4>
                            <p>Of campaigns reach their funding goals through our platform</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="impact-card">
                            <div class="impact-number">24h</div>
                            <h4>Average Response</h4>
                            <p>Time for emergency campaigns to receive their first donations</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="impact-card">
                            <div class="impact-number">150+</div>
                            <h4>Communities</h4>
                            <p>Active communities supporting members across different causes</p>
                        </div>
                    </v-col>
                </v-row>

                <div class="testimonial-section">
                    <h3>What Our Users Say</h3>
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
                    <p>
                        Join thousands of users who are already building stronger communities through
                        Bankroll. Start your campaign today or support others in their journey.
                    </p>
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
        description:
            "Bank-level security with transparent fund tracking and verified campaign creators.",
    },
    {
        icon: "mdi-devices",
        title: "Mobile-First Design",
        description:
            "Seamlessly create and manage campaigns from any device, anywhere, anytime.",
    },
    {
        icon: "mdi-account-group",
        title: "Community Driven",
        description:
            "Build supportive communities around causes, creating lasting networks of mutual aid.",
    },
    {
        icon: "mdi-chart-line",
        title: "Real-Time Analytics",
        description:
            "Track campaign performance with detailed insights and donor engagement metrics.",
    },
    {
        icon: "mdi-share-variant",
        title: "Social Integration",
        description:
            "Powerful social sharing tools to amplify your campaign across all major platforms.",
    },
    {
        icon: "mdi-cash-fast",
        title: "Quick Payouts",
        description:
            "Fast and reliable fund transfers with multiple payout options for your convenience.",
    },
]);

// Values data
const values = ref([
    {
        icon: "mdi-heart",
        title: "Compassion",
        description:
            "We believe in the power of human kindness and design our platform to amplify empathy.",
    },
    {
        icon: "mdi-shield-account",
        title: "Transparency",
        description:
            "Every transaction, every fee, every process is transparent and clearly communicated.",
    },
    {
        icon: "mdi-handshake",
        title: "Community",
        description:
            "We foster genuine connections and long-term relationships, not just transactions.",
    },
    {
        icon: "mdi-lightbulb-on",
        title: "Innovation",
        description:
            "We continuously evolve our platform to better serve our users and communities.",
    },
]);

// Testimonials data
const testimonials = ref([
    {
        name: "Sarah Kimani",
        role: "Medical Campaign Creator",
        content:
            "Bankroll helped us raise funds for my daughter's surgery in just 3 days. The community support was overwhelming and beautiful.",
    },
    {
        name: "David Ochieng",
        role: "Community Leader",
        content:
            "Our local community uses Bankroll for everything from school projects to emergency support. It's become our digital village square.",
    },
    {
        name: "Grace Mutindi",
        role: "Education Advocate",
        content:
            "The platform made it so easy to coordinate scholarship funds for students in our area. The transparency features give donors confidence.",
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
    padding: 80px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

// Mission Section
.mission-section {
    background: #f8fafc;
}

.mission-content {
    margin-top: 40px;
}

.mission-card {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    height: 100%;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    }

    .card-icon-container {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 24px;

        .card-icon {
            color: white;
            font-size: 2rem;
        }
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 16px;
        color: #2d3748;
    }

    p {
        color: #4a5568;
        line-height: 1.6;
    }
}

// Story Section
.story-section {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
}

.timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: rgba(255, 255, 255, 0.3);
        transform: translateX(-50%);
    }
}

.timeline-item {
    display: flex;
    margin-bottom: 60px;
    position: relative;

    &:nth-child(even) {
        flex-direction: row-reverse;

        .timeline-content {
            text-align: right;
            margin-right: 60px;
            margin-left: 0;
        }
    }

    &:nth-child(odd) {
        .timeline-content {
            margin-left: 60px;
        }
    }
}

.timeline-marker {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    .v-icon {
        color: white;
        font-size: 1.5rem;
    }
}

.timeline-content {
    flex: 1;
    background: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 16px;
    backdrop-filter: blur(10px);

    h4 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 12px;
        color: #4ecdc4;
    }

    p {
        line-height: 1.6;
        opacity: 0.9;
    }
}

// Features Section
.features-section {
    background: white;
}

.feature-card {
    text-align: center;
    padding: 40px 20px;
    border-radius: 16px;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    .feature-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 24px;

        .v-icon {
            color: white;
            font-size: 2rem;
        }
    }

    h4 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 16px;
        color: #2d3748;
    }

    p {
        color: #4a5568;
        line-height: 1.6;
    }
}

// Values Section
.values-section {
    background: #f8fafc;
}

.value-card {
    text-align: center;
    padding: 30px 20px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .value-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
        border-radius: 50%;
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
        color: #2d3748;
    }

    p {
        color: #4a5568;
        line-height: 1.5;
        font-size: 0.9rem;
    }
}

// Impact Section
.impact-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.impact-card {
    text-align: center;
    padding: 40px 20px;

    .impact-number {
        font-size: 3rem;
        font-weight: 700;
        color: #4ecdc4;
        margin-bottom: 16px;
    }

    h4 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 12px;
    }

    p {
        opacity: 0.9;
        line-height: 1.6;
    }
}

.testimonial-section {
    margin-top: 80px;

    h3 {
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 40px;
    }
}

.testimonial-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 16px;
    backdrop-filter: blur(10px);
    height: 100%;

    .testimonial-content {
        margin-bottom: 24px;

        .quote-icon {
            font-size: 2rem;
            color: #4ecdc4;
            margin-bottom: 16px;
        }

        p {
            font-style: italic;
            line-height: 1.6;
            margin: 0;
        }
    }

    .testimonial-author {
        display: flex;
        align-items: center;
        gap: 16px;

        .author-avatar {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            .v-icon {
                color: #4ecdc4;
            }
        }

        .author-info {
            h5 {
                font-weight: 600;
                margin: 0;
                font-size: 1rem;
            }

            span {
                opacity: 0.8;
                font-size: 0.9rem;
            }
        }
    }
}

// CTA Section
.cta-section {
    background: #1a202c;
    color: white;
    text-align: center;

    .cta-content {
        max-width: 600px;
        margin: 0 auto;

        h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #4ecdc4, #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin-bottom: 40px;
            opacity: 0.9;
        }
    }

    .cta-buttons {
        display: flex;
        gap: 20px;
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
