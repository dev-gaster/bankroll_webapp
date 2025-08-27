<template>
  <v-dialog :fullscreen="$vuetify.display.mobile" max-width="600">
    <template #activator="{ props: activatorProps }">
      <v-card
        v-if="$vuetify.display.smAndUp"
        v-bind="activatorProps"
        class="pa-2 d-none d-sm-flex"
        width="250"
        height="40"
        color="grey lighten-4"
        variant="tonal"
        autofocus
        rounded
        style="cursor: pointer; align-items: center; gap: 8px; border-radius: 20px"
      >
        <v-icon>mdi-magnify</v-icon>
        <div>Search Bankroll</div>
      </v-card>
      <v-btn v-else class="d-flex d-sm-none" icon v-bind="activatorProps" variant="text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
    <template #default="{ isActive }">
      <v-card
        :rounded="$vuetify.display.mobile ? false : true"
        :style="{ borderRadius: $vuetify.display.mobile ? '0px' : '10px' }"
      >
        <v-toolbar flat color="white">
          <v-text-field
            v-model="searchQuery"
            append-inner-icon="mdi-close"
            variant="solo"
            tile
            single-line
            hide-details
            flat
            color="primary"
            :placeholder="`Search ${tab} on bankroll `"
            :aria-placeholder="`Search ${tab} on bankroll `"
            prepend-inner-icon="mdi-magnify"
            @click:append-inner="isActive.value = !isActive"
          />
          <template #extension>
            <v-tabs v-model="tab" align-tabs="title" density="compact">
              <v-tab v-for="item in items" :key="item" :text="item" :value="item" />
            </v-tabs>
          </template>
        </v-toolbar>
        <v-divider />
        <v-card-text
          class="mt-4"
          :style="{
            height: $vuetify.display.mobile ? '100vh' : '85vh',
          }"
        >
          <!-- show search results here -->
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
const tab = ref(null);
const searchQuery = ref("");
const items = ["campaigns", "people", "communities"];
</script>
<style lang="scss" scoped>
.no-border-field .v-input__slot {
  border: none !important;
  box-shadow: none !important;
}
</style>
