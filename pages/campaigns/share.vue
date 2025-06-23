<template>
  <div class="d-flex flex-column align-center justify-center text-center fill-height px-4">
    <div>
      <v-icon size="48">mdi-share-variant</v-icon>
    </div>
    <div class="text-h6 mb-2">Share Campaign</div>
    <div class="text-subtitle-1 mb-4">
      Share this campaign with your friends and family to help us reach our goal.
    </div>

    <div class="mb-2" style="width: 20%;">
      <v-btn color="primary" variant="flat" block>
        Share on Link
      </v-btn>
    </div>
    <div class="mb-2" style="width: 20%;">
      <v-btn color="primary" variant="tonal" block>
        Skip
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
