<template>
  <h2 class="mb-4 text-3xl">Buttons</h2>
  <div class="flex gap-4 mb-4">
    <button-block buttonType="primary"> Button </button-block>
    <button-block buttonType="secondary"> Button </button-block>
    <button-block buttonType="information"> Button </button-block>
    <button-block buttonType="attention"> Button </button-block>
    <button-block buttonType="success"> Button </button-block>
    <button-block buttonType="destructive"> Button </button-block>
    <button-block buttonType="error"> Button </button-block>
    <button-block buttonType="warning"> Button </button-block>
  </div>
  <h3 class="mb-4 text-xl">With Icon</h3>
  <div class="flex gap-4 mb-4">
    <button-block buttonType="primary" :icon="icon.mdiGithub">
      Button
    </button-block>
    <button-block buttonType="secondary" :icon="icon.mdiGithub">
      Button
    </button-block>
    <button-block buttonType="information" :icon="icon.mdiGithub">
      Button
    </button-block>
    <button-block buttonType="attention" :icon="icon.mdiGithub">
      Button
    </button-block>
    <button-block buttonType="success" :icon="icon.mdiGithub">
      Button
    </button-block>
    <button-block buttonType="destructive" :icon="icon.mdiGithub">
      Button
    </button-block>
    <button-block buttonType="error" :icon="icon.mdiGithub">
      Button
    </button-block>
    <button-block buttonType="warning" :icon="icon.mdiGithub">
      Button
    </button-block>
  </div>
  <h3 class="mb-4 text-xl">Sizes</h3>
  <div class="flex gap-4 mb-4">
    <button-block buttonSize="s"> Button S </button-block>
    <button-block buttonSize="s" buttonType="secondary">
      Button S
    </button-block>
    <button-block buttonSize="m"> Button M </button-block>
    <button-block buttonSize="m" buttonType="secondary">
      Button M
    </button-block>
    <button-block buttonSize="l"> Button L </button-block>
    <button-block buttonSize="l" buttonType="secondary">
      Button L
    </button-block>
  </div>
  <h3 class="mb-4 text-xl">Sizes</h3>
  <div class="flex gap-4 mb-4">
    <button-block buttonSize="s" circle>
      <icon-basics :d="icon.mdiGithub" size="s" />
    </button-block>
    <button-block buttonSize="s" buttonType="secondary" circle>
      <icon-basics :d="icon.mdiGithub" size="s" />
    </button-block>
    <button-block buttonSize="m" circle>
      <icon-basics :d="icon.mdiGithub" size="m" />
    </button-block>
    <button-block buttonSize="m" buttonType="secondary" circle>
      <icon-basics :d="icon.mdiGithub" size="m" />
    </button-block>
    <button-block buttonSize="l" circle>
      <icon-basics :d="icon.mdiGithub" size="l" />
    </button-block>
    <button-block buttonSize="l" buttonType="secondary" circle>
      <icon-basics :d="icon.mdiGithub" size="l" />
    </button-block>
  </div>
  <h2 class="mt-12 mb-4 text-3xl">Inputs</h2>
  <div class="flex flex-col gap-4 mb-4">
    <input-text v-model="inputText" placeholder="placeholder" />
  </div>
  <div class="flex flex-col gap-4">
    <input-multiline-text
      v-model="InputMultilineText"
      placeholder="placeholder"
    />
  </div>
  <h2 class="mt-12 mb-4 text-3xl">Icons</h2>
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
import IconBasics from '@/components/icon/IconBasics.vue'
import InputMultilineText from '@/components/input/InputMultilineText.vue'
import InputText from '@/components/input/InputText.vue'

export default defineComponent({
  name: 'ViewHome',
  components: {
    ButtonBlock,
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
