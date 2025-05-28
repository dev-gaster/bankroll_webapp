<template>
  <div>
   
    <Campaigns
    image="/girl.jpeg"
    title="Help Sarah Fight Leukemia"
    description="Organised by John Doe"
    
    />
    <div class="tab-sticky">
  <Tab />
</div>


    <h1>Campaign Details</h1>
    <p>Here you can find the details of the campaign with ID: {{ id }}</p>
    <TwoHeaders
      title="Most Searched"
      link="/"
    />
     <v-container class="mb-4">
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
          :showEnding="true"
          :current="70"
          :total="100"
        />
      </v-col>
    </v-row>
  </v-container>
    


  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Tab from '../Tab.vue';

const route = useRoute();
const id = route.params.id;
</script>


