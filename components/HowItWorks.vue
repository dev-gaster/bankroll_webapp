<template>
    <div style="padding: 24px;">
        <v-container class="align-center text-center my-8">
        <h1 align="center" class="heading1 text-black">
      How it Works
    </h1>
    <p class="text-center my-2 subheading">
        Get started in minutes and begin receiving support from those who care about you most.
    </p>
 <v-col cols="12" class="my-16 mx-auto">
    <v-row align="center">
      <v-col cols="12" md="6" class="d-flex justify-start mb-4">
        <div class="text-start" style="max-width: 400px">
                     
  <v-row class="d-flex align-center ">
    
    <div class="avatar-wrapper mr-4">
      <h1 class="text-white mb-0">1</h1>
    </div>

    
    <div class="text-start mt-6" >
      <h2 class="heading2 mb-1">Create Your Campaign</h2>
      <p class="subheading mb-0">
        Set up your campaign with a title, description, and goal amount. Choose a category that best fits your cause.
      </p>
    </div>
  </v-row>

         
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-card rounded="xl" class="overflow-hidden">
          <div class="image-zoom-wrapper">
            <v-img src="/groupphone.jpg" alt="Create Campaign" contain class="zoom-img" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
  
  <v-col cols="12" class="my-16 mx-auto">
    <v-row align="center">
        <v-col cols="12" md="6">
        <v-card rounded="xl" class="overflow-hidden">
          <div class="image-zoom-wrapper">
            <v-img src="/inviting.jpg" alt="Create Campaign" contain class="zoom-img" />
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-end mb-4">
        <div class="text-start" style="max-width: 400px">

          <v-row class="d-flex align-end justify-end" >

            <div class="avatar-wrapper mr-4">
              <h1 class="text-white mb-0">2</h1>
            </div>


    
    <div class="text-end mt-6" >
      <h2 class="heading2 mb-1">Invite Your Circle</h2>
      <p class="subheading mb-0">
        Share your campaign with friends and family to gather support. Use social media or direct links to spread the word.
      </p>
    </div>
  </v-row>

         
        </div>
      </v-col>
      
    </v-row>
  </v-col>
   <v-col cols="12" class="my-16 mx-auto">
    <v-row align="center">
      <v-col cols="12" md="6" class="d-flex justify-start mb-4">
        <div class="text-start" style="max-width: 400px">
                     
  <v-row class="d-flex align-center ">
    
    <div class="avatar-wrapper mr-4">
      <h1 class="text-white mb-0">3</h1>
    </div>

    
    <div class="text-start mt-6" >
      <h2 class="heading2 mb-1">Share & Receive</h2>
      <p class="subheading mb-0">
        Chat with supporters, share updates, and receive pledges in real-time.
      </p>
    </div>
  </v-row>

         
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-card rounded="xl" class="overflow-hidden">
          <div class="image-zoom-wrapper">
            <v-img src="/money.jpg" alt="Create Campaign" contain class="zoom-img" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
        </v-container>
    </div>

</template>
<style scoped>
.image-zoom-wrapper {
  overflow: hidden;
  border-radius: 20px;
}

.zoom-img {
  transition: transform 0.4s ease;
}

.zoom-img:hover {
  transform: scale(1.05);
}

.avatar-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    19deg,
    rgba(33, 105, 188, 1) 0%,
    rgba(54, 56, 187, 1) 35%,
    rgba(115, 41, 186, 1) 100%
  );
  margin-right: 16px; 
}

.avatar-wrapper h1 {
  font-size: 20px;
  margin: 0;
  align-items: end;
}

</style>