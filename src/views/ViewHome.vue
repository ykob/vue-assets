<template>
  <h2 class="mb-4 text-3xl">Buttons</h2>
  <div class="flex gap-4 mb-4">
    <button-block> Button </button-block>
    <button-block-primary> Button </button-block-primary>
    <button-block-secondary> Button </button-block-secondary>
    <button-block class="text-neutral-50 bg-information-500">
      Button
    </button-block>
    <button-block class="text-neutral-50 bg-attention-500">
      Button
    </button-block>
    <button-block class="text-neutral-50 bg-success-500"> Button </button-block>
    <button-block class="text-neutral-50 bg-destructive-500">
      Button
    </button-block>
    <button-block class="text-neutral-50 bg-error-500"> Button </button-block>
    <button-block class="text-neutral-50 bg-warning-500"> Button </button-block>
  </div>
  <div class="flex flex-col gap-4 mb-4">
    <input-text v-model="inputText" placeholder="placeholder" />
  </div>
  <div class="flex flex-col gap-4">
    <input-multiline-text
      v-model="InputMultilineText"
      placeholder="placeholder"
    />
  </div>
  <h2 class="mb-4 text-3xl">Icons</h2>
  <div class="flex gap-4 mb-4">
    <icon-basics :d="icon.mdiGithub" size="xs" />
    <icon-basics :d="icon.mdiGithub" size="s" />
    <icon-basics :d="icon.mdiGithub" size="m" />
    <icon-basics :d="icon.mdiGithub" size="l" />
    <icon-basics :d="icon.mdiGithub" size="xl" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiGithub } from '@mdi/js'
import ButtonBlock from '@/components/button/ButtonBlock.vue'
import ButtonBlockPrimary from '@/components/button/ButtonBlockPrimary.vue'
import ButtonBlockSecondary from '@/components/button/ButtonBlockSecondary.vue'
import IconBasics from '@/components/icon/IconBasics.vue'
import InputMultilineText from '@/components/input/InputMultilineText.vue'
import InputText from '@/components/input/InputText.vue'

export default defineComponent({
  name: 'ViewHome',
  components: {
    ButtonBlock,
    ButtonBlockPrimary,
    ButtonBlockSecondary,
    IconBasics,
    InputMultilineText,
    InputText,
  },
  data: () => ({
    icon: {
      mdiGithub,
    },
    inputText: '',
    InputMultilineText: '',
  }),
})
</script>
