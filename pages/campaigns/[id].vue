<template>
  <div class="page-wrapper">
    <v-card class="main-content" color="white" variant="flat" rounded="xl">
      <NuxtPage />
    </v-card>

    <div class="sidebar-wrapper">
      <div class="sticky-sidebar">
        <v-card class="sidebar-card sticky-card" variant="flat" color="transparent" style="
            background-color: transparent !important;
            box-shadow: none !important;
            border: none !important;
          ">
          <v-card class="sidebar-card" color="primary" variant="tonal" rounded="xl">
            <div class="text-black">
              <v-row>
                <v-col cols="8">
                  <h3>Raised: UGX. 12,500,000</h3>
                  <p>Goal: UGX. 20,000,000</p>
                </v-col>
                <v-col>
                  <CircularProgress :current="20" :total="100" :size="60" :width="8" color="primary"
                    bg-color="#FFFFFF" />
                </v-col>
              </v-row>

              <v-btn class="mt-2" color="primary" variant="flat" block>Donate</v-btn>

              <div class="d-flex mt-2">
                <div class="flex-1 mr-2">
                  <v-btn color="primary" variant="tonal" block>Share</v-btn>
                </div>
                <div class="flex-1">
                  <v-btn color="primary" variant="outlined" block>Join</v-btn>
                </div>
              </div>

              <v-divider class="my-2" />

              <v-list dense class="text-subtitle-1 text-primary text-left">
                <v-list-item style="cursor: pointer" @click="showDonatorDialog = true">
                  <v-avatar size="40" tile variant="tonal" class="mr-2" style="border-radius: 5px !important">
                    <v-icon>mdi-cash</v-icon>
                  </v-avatar>
                  <span>100 people just donated</span>
                  <InfoDialog v-model="showDonatorDialog" title="Donations" :items="donators" />
                </v-list-item>

                <v-list-item style="cursor: pointer" @click="showMemberDialog = true">
                  <v-avatar size="40" tile variant="tonal" class="mr-2" style="border-radius: 5px !important">
                    <v-icon>mdi-account-multiple</v-icon>
                  </v-avatar>
                  <span>156 Members</span>
                  <InfoDialog v-model="showMemberDialog" title="Members" :items="members" />
                </v-list-item>
              </v-list>
            </div>
          </v-card>

          <v-card class="mt-4" color="primary" variant="tonal" rounded="xl">
            <v-card-title class="text-h6">Organizer</v-card-title>
            <v-card-text>
              <div style="display: flex; align-items: center; gap: 12px">
                <v-avatar size="48">
                  <img src="/girl.jpeg" />
                </v-avatar>
                <div>
                  <h3>Amanda Peterson</h3>
                  <p>Kampala, Uganda</p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showDonatorDialog = ref(false);
const showMemberDialog = ref(false);

const donators = [
  { id: 1, name: "Alice", amount: 50 },
  { id: 2, name: "Bob", amount: 75 },
  { id: 3, name: "Cathy", amount: 100 },
  { id: 3, name: "Cathy", amount: 100 },
  { id: 4, name: "David", amount: 200 },
  { id: 5, name: "Eva", amount: 150 },
  { id: 6, name: "Frank", amount: 300 },
  { id: 7, name: "Grace", amount: 250 },
  { id: 8, name: "Hank", amount: 400 },
  { id: 9, name: "Ivy", amount: 350 },
];
const members = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Brown", email: "bob@example.com" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com" },
  { id: 6, name: "Diana Evans", email: "diana@example.com" },
  { id: 7, name: "Ethan Foster", email: "ethan@example.com" },
  { id: 8, name: "Fiona Green", email: "fiona@example.com" },
  { id: 9, name: "George Harris", email: "george@example.com" },
  { id: 10, name: "Hannah Ivers", email: "hannah@example.com" },
];
</script>

<style scoped>
.page-wrapper {
  display: flex;
  gap: 24px;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: flex-start;
}

.main-content {
  flex: 1;
  padding: 8px;

  scrollbar-width: none;
  -ms-overflow-style: none;
}

.main-content::-webkit-scrollbar {
  display: none;
}

.sidebar-wrapper {
  width: 350px;
  flex-shrink: 0;
}

.sticky-sidebar {
  position: static;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-card {
  padding: 24px;
  box-sizing: border-box;
}

.sticky-card {
  position: fixed;
  top: 100px;
  z-index: 1;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 800px) {
  .page-wrapper {
    flex-direction: column;
  }

  .sidebar-wrapper {
    display: none;
  }

  .sticky-sidebar {
    position: static;
  }
}

html,
body {
  height: 100%;
  overflow-y: auto;
}
</style>
