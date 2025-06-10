<template>
  <div class="tab-sticky">
    <v-tabs v-model="tab" align-tabs="start" class="custom-tabs" stacked color="primary" grow>
      <v-tab value="tab-1" class="custom-tab text-none"> Details </v-tab>
      <v-tab value="tab-2" class="custom-tab text-none">
        <v-row no-gutters align="center" justify="start">
          <v-icon icon="mdi-cash" class="mr-2" />
          Donations ({{ donations.length }})
        </v-row>
      </v-tab>
      <v-tab value="tab-3" class="custom-tab text-none">
        <v-row no-gutters align="center" justify="start">
          <v-icon icon="mdi-account" class="mr-2" />
          Members ({{ members.length }})
        </v-row>
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="tab-1">
        <v-card>
          <v-card-text>
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
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque incidunt
              maxime ipsum, illo odit eos reprehenderit. Quasi nobis nisi aliquam
              temporibus voluptates eius amet, esse officiis incidunt, ducimus natus
              explicabo.
            </p>
            <br />
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
          </v-card-text>
        </v-card>
      </v-tabs-window-item>
      <v-tabs-window-item value="tab-2">
        <v-card class="pa-4">
          <v-list lines="two" density="comfortable">
            <v-list-item v-for="(donation, index) in donations" :key="index">
              <template #prepend>
                <v-avatar color="primary" size="36">
                  <v-icon icon="mdi-cash" />
                </v-avatar>
              </template>
              <v-list-item-title>{{ donation.name }}</v-list-item-title>
              <v-list-item-subtitle>UGX. {{ donation.amount.toLocaleString() }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="tab-3">
        <v-card class="pa-4">
          <v-list lines="two" density="comfortable">
            <v-list-item v-for="(member, index) in members" :key="index">
              <template #prepend>
                <v-avatar color="primary" size="36">
                  <v-icon icon="mdi-account" />
                </v-avatar>
              </template>
              <v-list-item-title>{{ member.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ member.role }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>
<script setup lang="ts">
const tab = ref(null);

const donations = ref([
  { name: "John Doe", amount: 20000 },
  { name: "Jane Smith", amount: 50000 },
  { name: "Emily Aseru", amount: 100000 },
]);

const members = ref([
  { name: "John Doe", role: "Organizer" },
  { name: "Jane Smith", role: "Admin" },
  { name: "Kevin Ziyada", role: "Admin" },
  { name: "Emily Aseru", role: "Member" },
  { name: "Sarah Doe", role: "Member" },
  { name: "Michael Johnson", role: "Member" },
  { name: "Alice Brown", role: "Member" },
]);
</script>

<style scoped>
.tab-sticky {
  position: sticky;
  top: 64px;
  /* Adjust to match your navbar height */
  z-index: 1000;
  background: white;
  border-bottom: 1px solid #eee;
}

.custom-tabs {
  --v-tabs-height: 36px;
  /* Make overall tab container shorter */
  min-height: 36px !important;
  padding: 0 !important;
}

.custom-tab {
  min-height: 32px !important;
  /* Reduce height of each tab */
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  font-size: 13px;
  line-height: 1.2;
}
</style>
