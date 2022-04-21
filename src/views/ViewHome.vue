<template>
  <h2 class="mb-4 text-3xl">Buttons</h2>
  <div class="flex gap-4">
    <ButtonBasics> Button </ButtonBasics>
    <ButtonBasics class="text-neutral-50 bg-primary-500"> Button </ButtonBasics>
    <ButtonBasics class="text-neutral-50 bg-secondary-500">
      Button
    </ButtonBasics>
    <ButtonBasics class="text-neutral-50 bg-information-500">
      Button
    </ButtonBasics>
    <ButtonBasics class="text-neutral-50 bg-attention-500">
      Button
    </ButtonBasics>
    <ButtonBasics class="text-neutral-50 bg-success-500"> Button </ButtonBasics>
    <ButtonBasics class="text-neutral-50 bg-destructive-500">
      Button
    </ButtonBasics>
    <ButtonBasics class="text-neutral-50 bg-error-500"> Button </ButtonBasics>
    <ButtonBasics class="text-neutral-50 bg-warning-500"> Button </ButtonBasics>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonBasics from '@/components/button/ButtonBasics.vue'

export default defineComponent({
  name: 'ViewHome',
  components: {
    ButtonBasics,
  },
})
</script>
