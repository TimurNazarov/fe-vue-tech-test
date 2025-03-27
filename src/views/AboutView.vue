<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import { Button, Dialog } from "primevue";

const AboutExtraInfo = defineAsyncComponent(
  () => import("@/components/about/ExtraInfo.vue"),
);

const showDialog = ref(false);
</script>

<template>
  <div class="app-container">
    <h2>About Page</h2>

    <Button label="Learn more" @click="showDialog = true" />

    <Dialog
      v-model:visible="showDialog"
      modal
      header="More Info"
      style="max-width: 500px"
    >
      <AboutExtraInfo />
    </Dialog>
  </div>
</template>
