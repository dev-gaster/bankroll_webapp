<template >
    <div class="d-flex wrapper"  style="max-height: 60vh"  >
        <v-card class="work-card mx-auto pa-6 d-flex justify-space-between  flex-column " :tile="$vuetify.display.mobile"  variant="flat">
            <v-card-title>
              <div class="d-none d-sm-flex justify-space-between align-center pa-3">

                <div>
                  <v-img src="/icon-light.png" width="40" />
                </div>
                <div class="mt-4">
                  <h4>{{ stepTitles[step - 1] }}</h4>
                </div>
              <div>
    <p style ="margin-top: 8px; font-size: 16px; color: #666;"> Step: {{ step }} of 6</p>
  </div>
</div>

          <div class="d-block d-sm-none">
            <v-row class="justify-space-between align-center">
  <v-col cols="auto">
    <v-img src="/icon-light.png" width="40" />
  </v-col>
  <v-col cols="auto">
    <p style="margin: 0; font-size: 16px; color: #666;">Step: {{ step }} of 6</p>
  </v-col>
</v-row>

                <h5 class="ma-2">{{ stepTitles[step - 1] }}</h5>

          

          </div>
  
                
            </v-card-title>
            <div  style="overflow-y: auto; flex: 1; max-height: 80%;"  >
            <v-card-text class="d-flex align-center justify-center">
                <v-window v-model="step" :touch="false">
               <v-window-item :value="1">
    <v-form ref="formRefStep1" v-model="formValidStep1" class="mt-4"> 

    <h2>Who is this fundraiser for?</h2>
    <div>
      Every story is unique. Let us know who you're supporting so we can help you reach the people who care most.  </div>

    <v-chip-group
  v-model="selectedRequestFor"
  column
  class="mt-1"
  active-class="my-active-chip"
  :mandatory="true"
>
  <v-chip
    v-for="option in requestForOptions"
    :key="option.label"
    :value="option.label"
    variant="tonal"
    color="primary"
    class="big-chip pa-3"
  >
    <div class="text-center">
      <div class="font-weight-medium">{{ option.label }}</div>
      <div class="text-caption text-grey-darken-1 mt-1 d-none d-md-block">
  {{ option.description }}
</div>

    </div>
  </v-chip>
</v-chip-group>


    <div class="mt-2">
      <div class="text-title-1">Select one type that best describe your campaign.</div>
      <v-responsive class="overflow-y-auto" max-height="300">
        <v-chip-group
          v-model="selectedTopic"
          column
          active-class="my-active-chip"
          :mandatory="true"
        >
          <v-chip
            v-for="topic in topics"
            :key="topic"
            :value="topic"
            variant="tonal"
            color="primary"
            label
            size="default"
            filter
          >
            {{ topic }}
          </v-chip>
        </v-chip-group>
      </v-responsive>
    </div>
  </v-form>
</v-window-item>

                    <!-- Window Two -->
                    <v-window-item :value="2">
                      <h2>
                        Give your campaign a title that tells your story.
                      </h2>
                        <div >
                          It’s the first thing people see; make it clear, meaningful, and memorable.
                        </div>
                         
                            <v-form ref="formRefStep2" v-model="formValidStep2">
                                <div class="mt-2" >
                                    <v-text-field
                                        v-model="campaign.need"
                                        :rules="needRules"
                                        variant="outlined"
                                        hide-details="auto"
                                        flat
                                        label="What's your campaign title?"
                                    />
                                </div>
                                <h2 class="mt-4">Describe your campaign in your own words.</h2>
                                <div >Let people know why you’re raising funds, who it’s for, and how their support will make a difference.
                        </div>
                                 <div class="mt-2" >
                                <v-textarea v-model="campaign.description" :rules="descriptionRules" variant="outlined" hide-details="auto" flat label="What’s the story behind your campaign?" />
                            </div>
                            </v-form>
 </v-window-item >
                    <!-- Window Three -->
                    <v-window-item :value="3">
                      <h2>
                        How much do you hope to raise?
                      </h2>
                        <div>
                            A clear target makes it easier to plan and gives your supporters something to aim for.</div>
                        <div class="mt-4">
                            <v-form ref="formRefStep3" v-model="formValidStep3">
                                <v-text-field
                                    v-model="campaign.goal"


                                    :rules="goalRules"
                                    variant="outlined"
                                    hide-details ="auto"
                                    prefix="UGX"
                                    label="Goal Amount"
                                    type="number"
                                />
                               
                            </v-form>
                        </div>
                    </v-window-item>
                    <!-- Window Four -->
                <v-window-item :value="4">
                        <h2>
                            What will your cover photo be?
                        </h2>
                  
                        <div>
                           It’s the first thing people see when they visit your campaign — make it bold, clear, and meaningful.
                        </div>

                        <div class="mt-4" style="width: 100%;">

                          <v-form ref="formRefStep4" v-model="formValidStep4">
                          

         <div
  class="upload-container"
  @click="triggerFileInput"
  @dragover.prevent
  @drop.prevent="handleDrop"
>
  <input
    ref="fileInput"
    type="file"
    accept="image/*"
    class="hidden-input"
    @change="handleFileChange"
  >

  <!-- Show preview if available -->
  <div v-if="imagePreviewUrl" class="image-preview">
    <v-img :src="imagePreviewUrl" max-height="250" class="rounded" contain />
  </div>

  <div v-else class="upload-placeholder text-center">
    <v-icon size="40" color="primary">mdi-upload</v-icon>
    <p class="text-body-2 text-grey-darken-1 mt-2">
      Click or drag & drop an image here
    </p>
    <p v-if="fileError" class="text-caption text-error mt-2">
  {{ fileError }}
</p>


  </div>
  <p v-if="fileError" class="text-caption text-error mt-2">{{ fileError }}</p>

</div>
 
  <v-card>
    <v-img
      v-if="campaign.coverPhoto"
      :src="campaign.coverPhotoUrl" 
      width="120"
    />
  </v-card>
</v-form>

                           
                        </div>
                    </v-window-item>
                    <!-- Window Five -->
<v-window-item :value="5">
  <h2>What’s your campaign’s end date?</h2>
  <div>
    A deadline gives your campaign momentum and helps drive support.
    <br />
    You’ll need to set it at least <b>28 days from today</b> to ensure enough time to gain traction.
  </div>

  <div class="mt-4">
    <v-form ref="formRefStep5" v-model="formValidStep5">
      <v-checkbox
        v-model="noEndDate"
        label="Don't have an end date"
        class="mb-4"
      />

      <!-- Show date picker only when noEndDate is false -->
      <v-date-picker
        v-if="!noEndDate"
        v-model="campaign.endDate"
        :rules="endDateRules"
        :min="minSelectableDate"
        variant="outlined"
        hide-details="auto"
        label="End Date"
      />
    </v-form>
  </div>
</v-window-item>

                    <!-- Window Six -->
                     <v-window-item :value="6">
  <div>
    Review your campaign details and submit when you are ready.
  </div>
<div class="d-flex justify-center mt-4">
  <div class="cover-image-wrapper">
    <img
      v-if="imagePreviewUrl"
      :src="imagePreviewUrl"
      alt="Cover Photo Preview"
      class="cover-image"
    >
  </div>
</div>




  <div class="mt-4">

    <div class="mt-4" >
  <v-card>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Category</v-list-item-title>
          <v-list-item-subtitle>{{ campaign.topic }}</v-list-item-subtitle>
        </v-list-item-content>
        <template #append>
          <v-btn text @click="editField('topic')">Edit</v-btn>
        </template>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>For</v-list-item-title>
          <v-list-item-subtitle>{{ campaign.requestFor }}</v-list-item-subtitle>
        </v-list-item-content>
        <template #append>
          <v-btn text @click="editField('requestFor')">Edit</v-btn>
        </template>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Title</v-list-item-title>
          <v-list-item-subtitle>{{ campaign.need }}</v-list-item-subtitle>
        </v-list-item-content>
        <template #append>
          <v-btn text @click="editField('need')">Edit</v-btn>
        </template>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Description</v-list-item-title>
          <v-list-item-subtitle>{{ campaign.description }}</v-list-item-subtitle>
        </v-list-item-content>
        <template #append>
          <v-btn text @click="editField('description')">Edit</v-btn>
        </template>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Goal</v-list-item-title>
          <v-list-item-subtitle>UGX {{ campaign.goal }}</v-list-item-subtitle>
        </v-list-item-content>
        <template #append>
          <v-btn text @click="editField('goal')">Edit</v-btn>
        </template>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Cover Photo</v-list-item-title>
          <v-list-item-subtitle>{{ campaign.coverPhoto ? campaign.coverPhoto.name : 'No cover photo uploaded' }}</v-list-item-subtitle>
        </v-list-item-content>
        <template #append>
          <v-btn text @click="editField('coverPhoto')">Edit</v-btn>
        </template>
      </v-list-item>
     
       <v-list-item>
  <v-list-item-content>
    <v-list-item-title>End Date</v-list-item-title>
    <v-list-item-subtitle>
      {{ campaign.endDate ? formatDate(campaign.endDate) : 'No end date selected' }}
    </v-list-item-subtitle>
  </v-list-item-content>
  <template #append>
    <v-btn text @click="editField('endDate')">Edit</v-btn>
  </template>
</v-list-item>


    </v-list>
  </v-card>
</div>

<EditDialog
  v-model="dialog"
  :title="'Edit Campaign Field'"
  @submit="handleEditSubmit"
>
  <template #default>
    <template v-if="editFieldName === 'coverPhoto'">
      <v-file-input
        v-model="editFieldValue"
        label="Upload Cover Photo"
        accept="image/*"
        :rules="coverPhotoRules"
        @change="onCoverPhotoSelected"
      />
      
      <v-img
        v-if="imagePreviewUrl"
        :src="imagePreviewUrl"
        max-height="200"
        class="my-4"
      />
    </template>

    <template v-else>
      <v-text-field
        v-model="editFieldValue"
        :label="editFieldName"
        outlined
      />
    </template>
  </template>
</EditDialog>





    </div>
</v-window-item>

                </v-window>
            </v-card-text>
            </div>
           

           
        </v-card>

        <div class="bottom-buttons">
      <v-btn
        v-if="step !== 1"
        class="buttons px-2"
        color="primary"
        variant="tonal"
        @click="step--"
      >
        Back
      </v-btn>

      <v-spacer />

      <v-btn
        class="px-2 buttons"
        color="primary"
        variant="flat"
        :disabled="step === 1 && (!formValidStep1 || !selectedRequestFor) || step === 2 && !formValidStep2 || step === 3 && !formValidStep3"
        @click="continueClick"
      >
        {{ step === 6 ? 'Submit Campaign' : 'Continue' }}
      </v-btn>
    </div>
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
const dialog = ref(false);
const editFieldName = ref("");
const editFieldValue = ref("");
const step = ref(1);
const formRefStep1 = ref(null);
const formRefStep2 = ref(null);
const formRefStep3 = ref(null);
const formRefStep4 = ref(null);
const formRefStep5 = ref(null);
const formValidStep1 = ref(false);
const formValidStep2 = ref(false);
const formValidStep3 = ref(false);
const formValidStep4 = ref(false);
const formValidStep5 = ref(false);
const noEndDate = ref(false);
const MAX_IMAGE_SIZE_MB = 2;
const MIN_WIDTH = 600;
const MIN_HEIGHT = 400;
const RECOMMENDED_WIDTH = 1200;
const RECOMMENDED_HEIGHT = 600;
const fileWarning = ref("");

const fileError = ref("");


const stepTitles = [
  "Start your story",
  "Give your campaign a voice",
  "Set your fundraising goal",
  "Add a meaningful image",
  "Choose when your campaign ends",
  "Review everything and go live",
];







// const stepDescriptions = [
//   "Choose who you're raising funds for. This helps us understand your campaign better and connect you with the right supporters.",
//   "Tell us the essentials about your campaign. Share what you need help with and write a detailed description.",
//   "Set a realistic goal. This helps you plan effectively and gives your supporters a clear target.",
//   "A cover photo is the first thing people see when they visit your campaign. Make it count!",
//   "Set a deadline for your campaign. This creates urgency and encourages people to contribute.",
//   "Review your campaign details and submit when ready.",
// ];



const campaign = ref({
  requestFor: null,
  topic: null,
  need: "",
  description: "",
  goal: null,
  coverPhoto: null,
  endDate: null
    
});

const requestForOptions = [
  {
    label: 'Self',
    description: 'You’re raising funds for yourself'
  },
  {
    label: 'Other',
    description: 'You’re raising funds on behalf of someone else'
  },
  {
    label: 'Organization',
    description: 'You’re raising funds for a group, community, charity, or nonprofit cause.'
  }
];


const today = new Date()
const minSelectableDate = ref(new Date(today.setDate(today.getDate() + 28)).toISOString().split('T')[0])

const imagePreviewUrl = ref(null);

const editField = (fieldName) => {
  editFieldName.value = fieldName;

  if (fieldName === "coverPhoto") {
    editFieldValue.value = null; 
  } else {
    editFieldValue.value = campaign.value[fieldName];
  }

  dialog.value = true;
};
const onCoverPhotoSelected = (files) => {
  const file = files?.[0];
  if (file) {
    editFieldValue.value = file;
    imagePreviewUrl.value = URL.createObjectURL(file);
  }
};
const handleEditSubmit = () => {
  if (editFieldName.value === "coverPhoto") {
    if (editFieldValue.value instanceof File) {
      campaign.value.coverPhoto = editFieldValue.value;
    }
    onCoverPhotoSelected([editFieldValue.value]);
  } else if (editFieldName.value in campaign.value) {
    campaign.value[editFieldName.value] = editFieldValue.value;
  }
  dialog.value = false;
};
const handleFile = (file) => {
  fileError.value = "";
  fileWarning.value = "";

  if (!file || !file.type.startsWith("image/")) {
    fileError.value = "Only image files are allowed.";
    return;
  }

  const fileSizeMB = file.size / 1024 / 1024;
  if (fileSizeMB > MAX_IMAGE_SIZE_MB) {
    fileError.value = `File is too large. Maximum allowed size is ${MAX_IMAGE_SIZE_MB}MB.`;
    return;
  }

  const image = new Image();
  const objectUrl = URL.createObjectURL(file);

  image.onload = () => {
    const { width, height } = image;

    if (width < MIN_WIDTH || height < MIN_HEIGHT) {
      fileError.value = `Image is too small. Minimum dimensions are ${MIN_WIDTH}x${MIN_HEIGHT}px.`;
      URL.revokeObjectURL(objectUrl);
      return;
    }

    if (width !== RECOMMENDED_WIDTH || height !== RECOMMENDED_HEIGHT) {
      fileWarning.value = `Note: For best results, use an image sized exactly ${RECOMMENDED_WIDTH}x${RECOMMENDED_HEIGHT}px.`;
    }

    editFieldValue.value = file;
    imagePreviewUrl.value = objectUrl;
  };

  image.onerror = () => {
    fileError.value = "Could not load image. Please try a different file.";
    URL.revokeObjectURL(objectUrl);
  };

  image.src = objectUrl;
};


const fileInput = ref(null)

const triggerFileInput = () => fileInput.value?.click()

const handleFileChange = (event) => {
  const file = event.target.files[0]
  handleFile(file)
}

const handleDrop = (event) => {
  const file = event.dataTransfer.files[0]
  handleFile(file)
}

// const handleFile = (file) => {
//   if (!file || !file.type.startsWith('image/')) return
//   editFieldValue.value = file
//   imagePreviewUrl.value = URL.createObjectURL(file)
// }

// Support live preview if user changes image again in dialog
watch(editFieldValue, (newVal) => {
  if (editFieldName.value === "coverPhoto" && newVal instanceof File) {
    imagePreviewUrl.value = URL.createObjectURL(newVal)
  }
})
const selectedRequestFor = computed({
  get: () => campaign.value.requestFor,
  set: (value) => {
    campaign.value.requestFor = value;
  },
});
const selectedTopic = computed({
  get: () => campaign.value.topic,
  set: (value) => {
    campaign.value.topic = value;
  },
});
// const locationRules = [v => !!v || "Location is required"];
const needRules = [v => !!v || "This field is required"];
const descriptionRules = [v => !!v || "Description is required"];
const goalRules = [
  v => !!v || "Goal amount is required",
  v => v >= 100000 || "Goal amount must be greater than UGX 100000",
];
const coverPhotoRules = [v => !!v || "Cover photo is required"];

const endDateRules = [
  v => noEndDate.value || !!v || "End date is required",
  v => noEndDate.value || (new Date(v) >= minSelectableDate.value) || "End date must be at least 28 days from today",
];



const continueClick = async () => {

    switch (step.value) {
      case 1: {
        const isFormValid = await formRefStep1.value.validate();
        if (!isFormValid || !campaign.value.requestFor || !campaign.value.topic) {
          if (!campaign.value.requestFor) {
            alert("Please select who you're raising funds for.");
          }
          if (!campaign.value.topic) {
            alert("Please select a topic.");
          }
          return;
        }

        step.value++;
        return;
      }
      case 2:
        if (!(await formRefStep2.value.validate())) return;
        step.value++;
        return;
      case 3: 
        if (!(await formRefStep3.value.validate())) return;
        step.value++;
        return;
      case 4:
        if (!(await formRefStep4.value.validate())) return;
        step.value++; 
        return;
      case 5:
        if (!(await formRefStep5.value.validate())) return;
        step.value++;
        return;
      case 6:
        navigateTo("/campaigns/share");
        return;
      default:
        break;
    }
};
// topics
const topics = ref([
  "🏥 Medical",
  "📚 Education",
  "👨‍👩‍👧‍👦 Family Support",
  "🌍 Community Projects",
  "🎓 Student Needs",
  "🏠 Housing Assistance",
  "🥣 Food & Hunger Relief",
  "🚰 Clean Water Initiatives",
  "🧒 Child Welfare",
  "👵 Elderly Care",
  "🐾 Animal Rescue",
  "🛠️ Emergency Relief",
  "🕊️ Funeral & Memorial",
  "🏫 School Supplies",
  "🎗️ Cancer Support",
  "⚖️ Legal Aid",
  "🎨 Creative Projects",
  "👶 Orphan Support",
  "🌱 Agriculture & Farming",
  "🚑 Health & Wellness",
]);


watch(
  () => [campaign.value.requestFor, campaign.value.topic],
  ([newRequestFor, newTopic]) => {
    formValidStep1.value = !!newRequestFor && !!newTopic;
  },
  { immediate: true }
);

watch(
  () => campaign.value.coverPhoto,
  (newPhoto) => {
    if (newPhoto instanceof File) {
      imagePreviewUrl.value = URL.createObjectURL(newPhoto)
    } else {
      imagePreviewUrl.value = null
    }
  }
)

function formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

</script>
<style lang="scss" scoped>
.work-card {
    height: clamp(85vh, 4vh, 85vh);
    min-height: 60vh;
    width: 75%;
    background-color: white !important;
    flex: 1;
    margin: clamp(0px, 4vh, 100px);
    box-shadow: -8px 0 24px -4px rgba(0, 0, 0, 0.08);

    .v-card-text {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: start;
    }
}
.upload-container {
  border: 2px dashed #ccc;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s ease;
  background-color: #fafafa;
}

.upload-container:hover {
  border-color: #1976d2;
}

.hidden-input {
  display: none;
}

.upload-placeholder {
  color: #999;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-preview img {
  max-width: 100%;
  border-radius: 8px;
}


.wrapper {
    
    width: clamp(300px, 90%, 900px);
    margin: auto;
    height: 90vh;
    display: flex;
    background-color: rgba(255, 255, 255, 0.541) !important;
}

.dashed-upload .v-input__control {
  margin: auto;
  border: 2px dashed #aaa !important;
  border-radius: 20px;
  width: 100% !important;
  height: clamp(200px, 4vh, 500px); 
  padding: 20px;
  box-sizing: border-box;
}
.bottom-buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: white;
  padding-top: 16px;
padding-right: clamp(40px, 8vw, 240px);
padding-bottom: 16px;
padding-left: clamp(40px, 8vw, 240px);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
.big-chip {
  flex: 3;
  height: clamp(80px, 2vh, 100px) !important;
  width: 100%;
  font-size:  13px !important;
  padding: 16px 24px;
  border-radius: 12px;
  justify-content: center;
}
.cover-image-wrapper {
  width: clamp(300px, 100%, 800px);
    
  max-width: 800px;
}

.cover-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}





.dashed-upload .v-label {
  font-weight: 500;
  color: #666;
}

.buttons {
  padding: 10px 20px;
  height: clamp(40px, 4vh, 55px);
}

</style>
