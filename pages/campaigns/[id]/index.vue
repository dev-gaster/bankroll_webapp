<template>
    <div>
    <Campaigns
    image="/girl.jpeg"
    title="Help Sarah Fight Leukemia"
    description="Organised by John Doe"
    />
    <div class="tab-sticky">

      <v-card
  class="pa-4 mb-4 rounded-xl d-block d-md-none"
  color="primary"
  variant="tonal"
>
  <div class="d-flex align-center justify-space-between mb-4">
    <div class="flex-1">
      <h3>Raised: UGX 12,000,000</h3>
      <div>
        <p><strong>Goal:</strong> UGX 20,000,000</p>
        <p><strong>Days left:</strong> 23</p>
      </div>
    </div>
    <div flex-1 class="mr-2">
      <CircularProgress
        :current="60"
        :total="100"
        :size="50"
        :width="6"
        color="primary"
        bg-color="#FFFFFF"
      />
    </div>
  </div>

  <div class="d-flex">
    <div class="flex-1 mr-2">
      <v-btn color="primary" variant="tonal" block>Share</v-btn>
    </div>
    <div class="flex-1 mr-2">
      <v-btn color="primary" variant="outlined" block>Join</v-btn>
    </div>
    <div class="flex-1">
      <v-btn color="primary" variant="flat" block>Donate</v-btn>
    </div>
  </div>
</v-card>


      <h2>Campaign Details</h2>
      <br >
          <div>
            Sarah is a bright, kind-hearted 9-year-old with a love for storytelling,
            drawing, and helping others. She dreams of becoming a doctor one day so she
            can heal and care for people in need just like the doctors she now sees every
            week. In March this year, Sarah was diagnosed with acute lymphoblastic
            leukemia, a type of cancer that affects the blood and bone marrow. Since then,
            life has drastically changed for her and our family. What used to be simple
            daily routines have turned into long hospital stays, intense chemotherapy
            sessions, and many nights filled with uncertainty. Despite the pain and
            fatigue, Sarah has remained strong and hopeful always wearing her signature
            smile and bringing comfort to others around her, even in the hospital ward.
            But now, we need your help. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sint sapiente iste ab fugit dolorum sed quia nisi est itaque
            dolor asperiores, veritatis nam earum. Sint minima ut officiis nam maiores?
            <br>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque incidunt
              maxime ipsum, illo odit eos reprehenderit. Quasi nobis nisi aliquam
              temporibus voluptates eius amet, esse officiis incidunt, ducimus natus
              explicabo.
            </p>
            <br>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque incidunt
              maxime ipsum, illo odit eos reprehenderit. Quasi nobis nisi aliquam
              temporibus voluptates eius amet, esse officiis incidunt, ducimus natus
              explicabo.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque incidunt
              maxime ipsum, illo odit eos reprehenderit. Quasi nobis nisi aliquam
              temporibus voluptates eius amet, esse officiis incidunt, ducimus natus
              explicabo.
            </p>
          </div>
 
   
    <v-divider class="my-6"/>
    

      <h1>Updates</h1>
      <br>
      
  <span><strong>May 9th 2025</strong></span>
  <span> by Amanda Peterson, Organizer</span>
  <br>
  <br>
  <p>Sarah has shown remarkable progress in her treatment. The funds raised have been instrumental in covering her medical expenses and travel costs for treatment.</p>
  <br>
  <p>We are grateful for the continued support from everyone. Your contributions have made a significant difference in Sarah's life.</p>
  <br>
  <p>We will continue to provide updates as Sarah's journey progresses. Thank you for being part of this campaign.</p>
  <br>
  <v-divider class="my-2"/>

          
<v-card
  class=" my-4 rounded d-block d-md-none"

  variant="flat"
>
  <div class="mb-4">
    <div class="">
       <h2 class="mb-2" style="margin: 0;">Donations</h2>
   <div>
    <v-card
      v-for="(donator, index) in donators.slice(0, 3)"
      :key="index"
      class="pa-3 mb-2"
      variant="tonal"
       color="primary"
      elevation="0"
      width="100%"
    >
      <v-row no-gutters align="center">
        <v-col cols="auto">
          <v-avatar size="40" class="mr-3" tile variant="tonal" rounded>
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </v-col>
        <v-col>
          <h4 class="text-subtitle-1 font-weight-medium mb-1">
            {{ donator.name || 'No Name' }}
          </h4>
          <div v-if="donator.amount" class="text-body-2">Donated: ${{ donator.amount }}</div>
        </v-col>
      </v-row>
    </v-card>
  </div>
    </div>
    <div flex-1 class="mr-2 d-flex justify-end">
      <v-btn color="primary" variant="outlined" class="mt-sm-0 mt-2" @click="showDonatorDialog = true">
      View All
    </v-btn>
     <InfoDialog
    v-model="showDonatorDialog"
    title="Donations"
    :items="donators"
  />
    </div>
  </div>

  
</v-card>
          
   <br>
   <h2 class="mb-2" style="margin: 0;">Organizer</h2>
    <div style="display: flex; align-items: center; gap: 12px;">
  <v-avatar size="48">
    <img src="/girl.jpeg" alt="Organizer Avatar" style="object-fit: cover; width: 100%; height: 100%;" >
  </v-avatar>
  <div>
    
    <h3 style="margin: 0;">Amanda Peterson</h3>
    <p style="margin: 0;">Kampala, Uganda</p>
  </div>


</div>

   <br>
   <br>


   <h2 class="mb-2">Words of kindness</h2>

   <SupportMessage
  name="Amanda Peterson"
  amount="UGX 50,000"
  message="Wishing you all the best! You`ve got this 💪"
  avatar="/girl.jpeg"
/>
<SupportMessage
  name="Amanda Peterson"
  amount="UGX 50,000"
  message="Wishing you all the best! You`ve got this 💪"
  avatar="/girl.jpeg"
/>

  <v-divider class="my-2"/>
 <v-row class="py-4" align="center" justify="space-between">
  <v-col cols="12" sm="6">
    <div class="d-flex flex-column">
      <div class="text-body-1 mb-2">
        <span class="font-weight-bold">Created on:</span>
        <span> May 1st, 2025</span>
      </div>
    </div>
  </v-col>

  <v-col cols="12" sm="6" class="d-flex justify-sm-end justify-start">
    <v-btn color="error" variant="outlined" class="mt-sm-0 mt-2">
      Report fundraiser
    </v-btn>
  </v-col>
</v-row>

  

  <v-divider class="my-2"/>




    

    <TwoHeaders
      title="Most Searched"
      link="/"
    />
    <v-row>
      <v-col
        v-for="n in 2"
        :key="n"
        cols="12"
        sm="6"
        md="6"
        lg="6"
        class="mb-4"
      >
        <Campaigns
          title="Help Sarah Fight Leukemia"
          description="Sarah is a bright 9-year-old battling leukemia. Help her family afford chemotherapy and travel expenses."
          image="/girl.jpeg"
          goal="UGX 20,000,000"
          organizer="John Doe"
          :show-ending="true"
          :current="70"
          :total="100"
        />
      </v-col>

    </v-row>
    </div>

    


  </div>

  
</template>

<script setup lang="ts">
const showDonatorDialog = ref(false);


const donators = [
  { id: 1, name: 'Alice', amount: 50 },
  { id: 2, name: 'Bob', amount: 75 },
  { id: 3, name: 'Cathy', amount: 100 },
  { id: 3, name: 'Cathy', amount: 100 },
  { id: 4, name: 'David', amount: 200 },
  { id: 5, name: 'Eva', amount: 150 },
  { id: 6, name: 'Frank', amount: 300 },
  { id: 7, name: 'Grace', amount: 250 },
  { id: 8, name: 'Hank', amount: 400 },
  { id: 9, name: 'Ivy', amount: 350 },

];
</script>

<style>
.tab-sticky {
  position: sticky;
  top: 0; 
  z-index: 10;
  background: white;
  padding: 12px 0;
}
</style>



