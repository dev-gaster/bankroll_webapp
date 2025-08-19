<template>
  <div class="hero-section">
    <div class="hero-wrapper">
      <v-container class="d-flex align-center justify-center" style="min-height: 90vh">
        <v-row class="fill-height" align="center" justify="space-between">
          <v-col cols="12" md="7">
            <BubbleDesign class="mb-2" style="border-radius: 25px" text="WhatsApp Style Fundraising" />
            <h1 class="heading1">
              Raise Money with Your <br />
              <span style="color: #f2d252">Inner Circle</span>
            </h1>
            <p class="my-4 subheading" style="color: #ffffff; max-width: 600px; font-size: 1.2rem !important">
              <span class="main-desc">Create private funding groups with family and friends. Share updates,
                receive pledges, and track progress just like your favorite messaging
                app.</span>
              Bring people together in a
              <span class="text-yellow font-weight-bold">MORE ORGANIZED WAY</span>
            </p>
            <v-row>
              <v-col class="d-flex" cols="auto">
                <v-btn size="large" class="text-none" variant="flat" color="#ffffff" style="
                    font-weight: 500;
                    font-size: clamp(0.775rem, 1.5vw, 1rem);
                    color: #5936bb;
                    margin-right: 8px;
                  ">
                  Start fundraising
                </v-btn>
                <v-btn class="text-none" size="large" variant="outlined" color="#5936BB" style="
                    font-weight: 500;
                    font-size: clamp(0.775rem, 1.5vw, 1rem);
                    color: #fdd257;
                  ">
                  Explore campaigns
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <!-- card section -->
          <v-col cols="12" md="5" class="py-8 mx-auto d-flex flex-column align-start justify-start"
            style="height: 100%">
            <v-card class="glass pa-4" width="100%" min-height="350">
              <v-row class="w-100">
                <v-col cols="12" md="12" class="pa-2 d-flex align-start justify-start" style="height: 100%">
                  <div style="max-width: 300px; width: fit-content">
                    <InitialCard />
                  </div>
                </v-col>
              </v-row>

              <v-row class="w-100">
                <v-col cols="12" class="pa-2 d-flex align-end justify-end" style="height: 100%">
                  <div style="max-width: 300px; width: fit-content">
                    <MessageCards text="I have contributed $100" backgroundColor="rgba(42, 62, 247, 0.932)"
                      maxWidth="344" variant="sent" />
                  </div>
                </v-col>
              </v-row>
              <v-row class="w-100">
                <v-col cols="12" md="12" class="pa-2 d-flex align-start justify-start" style="height: 100%">
                  <div style="max-width: 300px; width: fit-content">
                    <MessageCards text="Thank you for your contribution!" backgroundColor="#ffffff" maxWidth="344"
                      variant="received" textColor="#000000" />
                  </div>
                </v-col>
              </v-row>
              <v-row class="w-100">
                <v-col cols="12" class="pa-2 d-flex align-center justify-center" style="height: 100%">
                  <div style="width: 100%">
                    <TransparentButton />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(153deg,
      rgba(33, 78, 188, 1) 0%,
      rgba(89, 54, 187, 1) 35%,
      rgba(115, 41, 186, 1) 64%,
      rgba(133, 68, 201, 1) 82%,
      rgba(92, 62, 176, 1) 100%);
}

.hero-wrapper {
  background-image:
    /* Base gradient */
    linear-gradient(153deg,
      rgba(33, 78, 188, 1) 0%,
      rgba(89, 54, 187, 1) 35%,
      rgba(115, 41, 186, 1) 64%,
      rgba(133, 68, 201, 1) 82%,
      rgba(92, 62, 176, 1) 100%),
    /* Radial burst at top-right */
    radial-gradient(circle at 85% 10%, rgba(253, 210, 87, 0.4) 0%, transparent 30%),
    /* Circle expanding in the middle-right */
    radial-gradient(circle at 70% 50%,
      rgba(248, 192, 39, 0.74) 0%,
      rgba(253, 210, 87, 0.3) 20%,
      transparent 40%),
    /* Fading radial on the bottom-left */
    radial-gradient(circle at 20% 90%, rgba(253, 210, 87, 0.2) 0%, transparent 40%);

  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  width: 100%;
  min-height: 100vh;
}

.box-shadow {
  box-shadow: -6px 51px 91px -9px rgba(253, 210, 87, 0.75);
}

/* Background styles */
.firstcard {
  background-color: #643694;
  background-image: radial-gradient(at 47% 33%, hsl(48, 86%, 64%) 0, transparent 79%),
    radial-gradient(at 82% 65%, hsl(222.58, 70%, 43%) 0, transparent 55%);
}

/* Glassmorphism card effect */
.card {
  backdrop-filter: blur(0px) saturate(108%);
  -webkit-backdrop-filter: blur(0px) saturate(108%);
  background-color: rgba(239, 238, 232, 0.09);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.185);
}

.glass {
  backdrop-filter: blur(0px) saturate(108%);
  -webkit-backdrop-filter: blur(0px) saturate(108%);
  background-color: rgba(239, 238, 232, 0.09);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.185);
}

/* Generated by https://generator.ui.glass/ */
</style>
