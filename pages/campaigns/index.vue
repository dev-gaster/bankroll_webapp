<template>
    <CampaignHeader/>
    <TwoHeaders
    title="Most Searched"
    link="/"
    />
     <v-container class="mb-4">
    <v-row>
      <v-col
        v-for="n in 4"
        :key="n"
        cols="12"
        sm="6"
        md="6"
        lg="3"
        class="mb-4"
      >
        <Campaigns
          title="Help Sarah Fight Leukemia"
          description="Sarah is a bright 9-year-old battling leukemia. Help her family afford chemotherapy and travel expenses."
          image="/girl.jpeg"
          goal="UGX 20,000,000"
          organizer="John Doe"
          :showEnding="true"
        />
      </v-col>
    </v-row>
  </v-container>
    
    
</template>