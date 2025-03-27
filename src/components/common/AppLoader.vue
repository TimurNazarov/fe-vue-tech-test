<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'
</script>

<template>
  <div class="loader-overlay">
    <ProgressSpinner />
  </div>
</template>

<style scoped>
.loader-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, .9);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
