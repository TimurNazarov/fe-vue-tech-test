<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

import ContactForm from '@/components/contact-us/ContactForm.vue'
import ContactSuccess from '@/components/contact-us/ContactSuccess.vue'

// simulated overhead
await new Promise((resolve) => setTimeout(resolve, 300))

const loading = ref(false)
const submitted = ref(false)

const handleFormSubmission = async (values: Record<string, string>) => {
  loading.value = true

  try {
    await axios.post('https://httpbin.org/post', values)
    submitted.value = true
  } catch (err) {
    console.error('Submission failed:', err)
    // Optionally show an error toast
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="contact-us app-container">
    <component :is="submitted ? ContactSuccess : ContactForm" @submitted="handleFormSubmission" :loading="loading" />
  </div>
</template>

<style scoped>
.contact-us {
  padding: 2rem;
}
</style>
