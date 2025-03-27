<script setup lang="ts">
import AppLoader from "@/components/common/AppLoader.vue";
import AppHeader from "@/components/common/AppHeader.vue";
</script>

<template>
  <AppHeader />

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Suspense timeout="0">
        <component :is="Component"></component>
        <template #fallback>
          <AppLoader />
        </template>
      </Suspense>
    </template>
  </RouterView>
</template>
