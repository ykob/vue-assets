<template>
  <h2 class="mb-4 text-3xl">Buttons</h2>
  <div class="flex gap-4 mb-4">
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
  <div class="flex flex-col gap-4">
    <InputText v-model="inputText" />
    <InputMultilineText v-model="InputMultilineText" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonBasics from '@/components/button/ButtonBasics.vue'
import InputMultilineText from '@/components/input/InputMultilineText.vue'
import InputText from '@/components/input/InputText.vue'

export default defineComponent({
  name: 'ViewHome',
  components: {
    ButtonBasics,
    InputMultilineText,
    InputText,
  },
  data: () => ({
    inputText: '',
    InputMultilineText: '',
  }),
})
</script>
