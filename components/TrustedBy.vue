<template>
    <section class="trusted-section">
        <v-container class="py-12">
            <div class="trusted-content">
                <p class="trusted-label">Trusted by thousands across emerging markets</p>
                <div class="stats-row">
                    <div class="stat-item">
                        <div class="stat-number">1,000+</div>
                        <div class="stat-text">Active Users</div>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-item">
                        <div class="stat-number">$2M+</div>
                        <div class="stat-text">Funds Raised</div>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-item">
                        <div class="stat-number">10K+</div>
                        <div class="stat-text">Campaigns</div>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-item">
                        <div class="stat-number">98%</div>
                        <div class="stat-text">Success Rate</div>
                    </div>
                </div>
            </div>
        </v-container>
    </section>
</template>

<style scoped lang="scss">
.trusted-section {
    background: white;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
}

.trusted-content {
    text-align: center;
}

.trusted-label {
    font-size: 0.95rem;
    color: #64748b;
    font-weight: 500;
    margin-bottom: 32px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.stats-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 32px;
    }
}

.stat-item {
    text-align: center;
    min-width: 120px;
}

.stat-number {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 4px;
    letter-spacing: -1px;
}

.stat-text {
    font-size: 0.95rem;
    color: #64748b;
    font-weight: 500;
}

.stat-divider {
    width: 1px;
    height: 40px;
    background: #e2e8f0;

    @media (max-width: 768px) {
        display: none;
    }
}
</style>
