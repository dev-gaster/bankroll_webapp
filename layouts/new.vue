<template>
  <v-app>
    <v-navigation-drawer color="primary" variant="tonal" location="right" floating width="700">
      <v-card color="transparent" flat height="100vh" class="pt-6 px-6 text-white">
        <component :is="currentDrawerComponent" :campaign="campaign" @update-campaign="handleUpdateCampaign"
          @valid="onFormValid" />
        <v-spacer />
      </v-card>
    </v-navigation-drawer>

    <v-main :style="{ marginRight: `${drawerWidth}px` }" class="pa-6">
      <v-container>
        <component :is="currentMainComponent" :campaign="campaign" />
        <div class="d-flex justify-end mt-4">
          <v-btn class="me-4" color="primary" @click="goToPreviousStep" v-if="currentStep > 0">
            Back
          </v-btn>
          <v-btn color="primary" :disabled="!isCurrentFormValid" @click="goToNextStep">
            {{ currentStep === drawerComponents.length - 1 ? "Submit" : "Next" }}
          </v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, watch } from "vue";

import StepOneDrawer from "@/components/steps/StepOneDrawer.vue";
import StepTwoDrawer from "@/components/steps/StepTwoDrawer.vue";
import StepThreeDrawer from "@/components/steps/StepThreeDrawer.vue";
import StepFourDrawer from "@/components/steps/StepFourDrawer.vue";

import StepOneMain from "@/components/steps/StepOneMain.vue";
import StepTwoMain from "@/components/steps/StepTwoMain.vue";
import StepThreeMain from "@/components/steps/StepThreeMain.vue";
import StepFourMain from "@/components/steps/StepFourMain.vue";

const drawerWidth = ref(400);
const currentStep = ref(0);
const isCurrentFormValid = ref(false);

const campaign = ref({
  need: "",
  category: "",
  story: "",
  goal: "",
  startDate: "",
  endDate: "",
  coverImage: null,
});

const drawerComponents = [StepOneDrawer, StepTwoDrawer, StepThreeDrawer, StepFourDrawer];
const mainComponents = [StepOneMain, StepTwoMain, StepThreeMain, StepFourMain];

const currentDrawerComponent = computed(() => drawerComponents[currentStep.value]);
const currentMainComponent = computed(() => mainComponents[currentStep.value]);

const isStepValid = computed(() => {
  switch (currentStep.value) {
    case 0:
      return campaign.value.need.trim() !== "" && campaign.value.category.trim() !== "";
    case 1:
      return campaign.value.story.trim() !== "" && campaign.value.goal.trim() !== "";
    case 2:
      return (
        campaign.value.startDate.trim() !== "" &&
        campaign.value.endDate.trim() !== "" &&
        campaign.value.coverImage !== null
      );
    case 3:
      return true;
    default:
      return false;
  }
});

watch(
  () => isStepValid.value,
  (val) => {
    isCurrentFormValid.value = val;
  },
  { immediate: true }
);

const goToPreviousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const goToNextStep = () => {
  if (currentStep.value < drawerComponents.length - 1 && isCurrentFormValid.value) {
    currentStep.value++;
  } else if (currentStep.value === drawerComponents.length - 1) {
    submitCampaign();
  }
};

const submitCampaign = () => {
  console.log("🎉 Final campaign submission:", campaign.value);
  // Replace this with actual API logic
};

const handleUpdateCampaign = (update) => {
  campaign.value = { ...campaign.value, ...update };
};

const onFormValid = (valid) => {
  isCurrentFormValid.value = valid;
};
</script>
