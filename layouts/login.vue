<template>
  <v-app>
    <!-- <v-app-bar>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-app-bar> -->
    <v-navigation-drawer
      color="primary"
      variant="flat"
      location="right"
      :width="drawerWidth"
      class="align-center justify-center"
      floating
    >
      <div>
        <v-card
          color="primary"
          height="80vh"
          elevated="0"
          variant="flat"
          class="pt-12 px-6 d-flex flex-column justify-center align-center text-center"
        >
          <v-img src="/icon.png" width="200" height="100" contained />
          <h1 class="heading2 text-white font-weight-bold mb-1">
            Raise Money with Your Inner Circle
          </h1>

          <p class="text-subtitle-1 mb-6 text-center">
            Create private funding groups with family and friends. Share updates, receive
            pledges, and track progress — all in one place.
          </p>

          <Benefits />
        </v-card>
      </div>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const drawerWidth = ref(0);

const updateWidth = () => {
  drawerWidth.value = window.innerWidth / 2;
};

onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>
