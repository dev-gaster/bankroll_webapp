<template>
    <section class="security-section">
        <v-container class="py-16">
            <div class="section-header">
                <div class="section-badge">
                    <v-icon size="18">mdi-shield-check</v-icon>
                    <span>Enterprise Security</span>
                </div>
                <h2 class="section-title">Built on trust and security</h2>
                <p class="section-subtitle">
                    Your money and data are protected by bank-level security standards
                </p>
            </div>

            <v-row class="security-grid">
                <v-col v-for="feature in securityFeatures" :key="feature.title" cols="12" sm="6" md="3">
                    <div class="security-card">
                        <div class="security-icon">
                            <v-icon size="32" :color="feature.color">{{ feature.icon }}</v-icon>
                        </div>
                        <h3 class="security-title">{{ feature.title }}</h3>
                        <p class="security-text">{{ feature.description }}</p>
                    </div>
                </v-col>
            </v-row>

            <div class="compliance-badges">
                <div class="compliance-item">
                    <v-icon size="24" color="success">mdi-check-decagram</v-icon>
                    <span>256-bit SSL Encryption</span>
                </div>
                <div class="compliance-item">
                    <v-icon size="24" color="success">mdi-check-decagram</v-icon>
                    <span>PCI DSS Compliant</span>
                </div>
                <div class="compliance-item">
                    <v-icon size="24" color="success">mdi-check-decagram</v-icon>
                    <span>Regular Security Audits</span>
                </div>
            </div>
        </v-container>
    </section>
</template>

<script setup lang="ts">
const securityFeatures = ref([
    {
        icon: 'mdi-lock-check',
        title: 'Encrypted',
        description: 'End-to-end encryption protects all your transactions and data',
        color: '#6366f1'
    },
    {
        icon: 'mdi-shield-account',
        title: 'Verified',
        description: 'Multi-factor authentication and biometric security',
        color: '#8b5cf6'
    },
    {
        icon: 'mdi-file-certificate',
        title: 'Compliant',
        description: 'Full regulatory compliance and financial standards',
        color: '#10b981'
    },
    {
        icon: 'mdi-eye-off',
        title: 'Private',
        description: 'Your data is never sold or shared with third parties',
        color: '#f59e0b'
    }
]);
</script>

<style scoped lang="scss">
.security-section {
    background: #fafbfc;
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
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 30px;
    font-size: 13px;
    font-weight: 600;
    color: #059669;
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
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.security-grid {
    max-width: 1200px;
    margin: 0 auto 60px;
}

.security-card {
    text-align: center;
    padding: 36px 24px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    height: 100%;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        border-color: #6366f1;
    }
}

.security-icon {
    width: 72px;
    height: 72px;
    background: rgba(99, 102, 241, 0.08);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
}

.security-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 12px;
}

.security-text {
    font-size: 0.98rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
}

.compliance-badges {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    padding-top: 40px;
    border-top: 1px solid #e2e8f0;
}

.compliance-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
    color: #334155;
    font-weight: 600;
}
</style>
