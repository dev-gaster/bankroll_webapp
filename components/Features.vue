<template>
  <v-container class="py-16" style="max-width: 1200px; ">
    <h1 align="center" class="heading2">
      Everything You Need to <br />
      <span class="text-secondary">Raise Funds Together</span>
    </h1>
    <p class="text-center my-2 subheading" >
      Combine the ease of group messaging with powerful fundraising tools to reach your goals faster.
    </p>

   <v-row align="stretch" justify="center" class="mt-4">
      <v-col cols="12" md="3" class="py-8">
        
        <FeatureCard
          icon="mdi-account-multiple"
          title="Group Fundraising"
          description="Create private groups with family and friends to raise funds together."
        />
       
        
      </v-col>
       <v-col cols="12" md="3" class="py-8">
        <FeatureCard
          icon="mdi-message"
          title="Real-time Messaging"
          description="Communicate with supporters through familiar chat interface, just like WhatsApp."
          avatarColor="linear-gradient(283deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 100%, rgba(12, 133, 30, 1) 100%)"
        />
       
        
      </v-col>
       <v-col cols="12" md="3" class="py-8">
        <FeatureCard
          icon="mdi-bell"
          title="Smart Notifications"
          description="Get instant updates on new pledges, messages, and milestone achievements."
            avatarColor="linear-gradient(283deg,rgba(242, 106, 2, 1) 0%, rgba(255, 102, 0, 1) 24%, rgba(255, 77, 0, 1) 83%, rgba(245, 13, 5, 1) 100%, rgba(247, 13, 5, 1) 100%)"
          
        />


      </v-col>
       <v-col cols="12" md="3" class="py-8">
        <FeatureCard
          icon="mdi-account-multiple"
          title="Progress Updates"
          description="Share photos, videos, and updates to keep your supporters engaged and informed."
            avatarColor="linear-gradient(283deg,rgba(202, 2, 242, 1) 0%, rgba(170, 0, 255, 1) 55%, rgba(68, 0, 255, 1) 100%, rgba(121, 5, 245, 1) 100%, rgba(122, 5, 247, 1) 97%)"
        />

       
        
      </v-col>
    </v-row>
  </v-container>
</template>
