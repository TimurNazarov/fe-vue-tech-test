<script setup lang="ts">
import { Form, FormField } from '@primevue/forms'
import { InputText, Message, Button, Textarea } from 'primevue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import type { FormSubmitEvent } from '@primevue/forms/form'
import { contactFormSchema } from '@/utils/schemas/contactForm.ts'

defineProps<{
  loading?: boolean
}>()


const emit = defineEmits<{
  (e: 'submitted', data: Record<string, string>): void
}>()
const onFormSubmit = (result: FormSubmitEvent) => {
  if(result.valid) {
    emit('submitted', result.values)
  }
}
</script>

<template>
  <div class="contact-form">
    <Form
        @submit="onFormSubmit"
        :resolver="zodResolver(contactFormSchema)"
        :validate-on-submit="true"
    >
      <!-- Email -->
      <FormField v-slot="$field" name="email" initialValue="">
        <label for="email">Email</label>
        <InputText id="email" v-bind="$field" type="text" placeholder="Email" :disabled="loading" />
        <Message
            v-if="$field?.invalid"
            severity="error"
            size="small"
            variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <!-- First Name -->
      <FormField v-slot="$field" name="firstname" initialValue="">
        <label for="firstname">First Name</label>
        <InputText id="firstname" v-bind="$field" type="text" placeholder="First Name" :disabled="loading" />
        <Message
            v-if="$field?.invalid"
            severity="error"
            size="small"
            variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <!-- Last Name -->
      <FormField v-slot="$field" name="lastname" initialValue="">
        <label for="lastname">Last Name</label>
        <InputText id="lastname" v-bind="$field" type="text" placeholder="Last Name" :disabled="loading" />
        <Message
            v-if="$field?.invalid"
            severity="error"
            size="small"
            variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <!-- Details -->
      <FormField v-slot="$field" name="details" initialValue="">
        <label for="details">Details</label>
        <Textarea id="details" v-bind="$field" rows="4" placeholder="Details" auto-resize :disabled="loading" />
        <Message
            v-if="$field?.invalid"
            severity="error"
            size="small"
            variant="simple"
        >
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <Button type="submit" severity="secondary" label="Submit" :loading="loading" />
    </Form>
  </div>
</template>

<style scoped>

.contact-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  box-sizing: border-box;
}
</style>
