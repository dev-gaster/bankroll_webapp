<template>
    <div class="d-flex wrapper" style="min-height: 100vh">
        <v-sheet tile color="transparent" flat class="text-black pa-5" width="650">
            <div class="pa-5">
                <v-img src="/icon-light.png" width="80" />
            </div>
            <div class="mx-5">
                <h1>{{ returnTitle() }}</h1>
            </div>
        </v-sheet>
        <v-card tile class="work-card flex-1">
            <v-card-text class="pa-5" style="height: 90vh">
                <v-window v-model="step">
                    <v-window-item :value="1">
                        <h1>Where will the funds go?</h1>
                        <div>
                            Choose the location where you plan to withdraw your funds. Countries in
                            which we support fundraisers.
                        </div>
                        <div class="d-flex mt-4" style="width: 100%">
                            <div class="flex-1 mr-3">
                                <v-text-field variant="outlined" hide-details flat label="Location" />
                            </div>
                            <div class="flex-1">
                                <v-text-field variant="outlined" flat hide-details label="Location" />
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="text-h6">What are you into?</div>

                            <div class="text-subtitle-1">Select topics to continue</div>

                            <v-responsive class="overflow-y-auto" max-height="300">
                                <v-chip-group class="mt-3" column>
                                    <v-chip v-for="topic in topics" :key="topic" :text="topic" :value="topic" label
                                        size="large" />
                                </v-chip-group>
                            </v-responsive>
                        </div>
                    </v-window-item>
                    <v-window-item :value="2">
                        <h1>Campaign Details</h1>
                    </v-window-item>
                </v-window>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn class="mt-2" color="primary" variant="flat" width="150" height="55"
                    @click="continueClick">Continue</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "open",
});
useSeoMeta({
    title: "Create a Bankroll Campaign",
    description:
        "Start a new crowdfunding campaign on Bankroll. Fill in your campaign details and launch your project to reach supporters.",
});
const step = ref(1);
const returnTitle = () => {
    switch (step.value) {
        case 1:
            return "Let's get Started";

        default:
            return "Let's get Started";
    }
};
const continueClick = () => {
    switch (step.value) {
        case 1:
            // run checks before continue
            step.value++;
            return;
        // include more cases
        default:
            break;
    }
};
// topics
const topics = ref([
    "🎤 Advice",
    "🐕 Animals",
    "🤖 Anime",
    "🎨 Art & Design",
    "💄 Beauty",
    "🏢 Business",
    "📚 Books",
    "💡 Damn That's Interesting",
    "💃 Hobbies",
    "🎮 Gaming",
    "🎥 Movies",
    "🎵 Music",
    "📺 TV",
    "🌮 Food",
    "😂 Funny",
    "💖 Health & Lifestyle",
    "🎓 School",
    "📰 News",
    "🌲 Nature",
    "🎨 Photography",
    "🎏 Sports",
]);
</script>
<style lang="scss" scoped>
.work-card {
    min-height: 100vh;
    background-color: white !important;
    border-top-left-radius: 70px !important;
    box-shadow: -8px 0 24px -4px rgba(0, 0, 0, 0.08);

    .v-card-text {
        padding: 20px 150px !important;
        display: flex;
        flex-direction: column;
        // align-content: center;
        justify-content: center;
        align-items: start;
    }
}

.wrapper {
    background-color: rgba(252, 246, 239, 0.534) !important;
}
</style>
