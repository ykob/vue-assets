<template>
  <h2 class="mt-12 mb-4 text-3xl">Button Block</h2>
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
    <button-block buttonSize="s" :icon="icon.mdiGithub">
      Button S
    </button-block>
    <button-block buttonSize="s" buttonType="secondary" :icon="icon.mdiGithub">
      Button S
    </button-block>
    <button-block buttonSize="m" :icon="icon.mdiGithub">
      Button M
    </button-block>
    <button-block buttonSize="m" buttonType="secondary" :icon="icon.mdiGithub">
      Button M
    </button-block>
    <button-block buttonSize="l" :icon="icon.mdiGithub">
      Button L
    </button-block>
    <button-block buttonSize="l" buttonType="secondary" :icon="icon.mdiGithub">
      Button L
    </button-block>
  </div>
  <h3 class="mb-4 text-xl">Circle</h3>
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
  <h2 class="mt-12 mb-4 text-3xl">Button Outline</h2>
  <div class="flex gap-4 mb-4">
    <button-outline buttonType="primary"> Button </button-outline>
    <button-outline buttonType="secondary"> Button </button-outline>
    <button-outline buttonType="information"> Button </button-outline>
    <button-outline buttonType="attention"> Button </button-outline>
    <button-outline buttonType="success"> Button </button-outline>
    <button-outline buttonType="destructive"> Button </button-outline>
    <button-outline buttonType="error"> Button </button-outline>
    <button-outline buttonType="warning"> Button </button-outline>
  </div>
  <h3 class="mb-4 text-xl">With Icon</h3>
  <div class="flex gap-4 mb-4">
    <button-outline buttonType="primary" :icon="icon.mdiGithub">
      Button
    </button-outline>
    <button-outline buttonType="secondary" :icon="icon.mdiGithub">
      Button
    </button-outline>
    <button-outline buttonType="information" :icon="icon.mdiGithub">
      Button
    </button-outline>
    <button-outline buttonType="attention" :icon="icon.mdiGithub">
      Button
    </button-outline>
    <button-outline buttonType="success" :icon="icon.mdiGithub">
      Button
    </button-outline>
    <button-outline buttonType="destructive" :icon="icon.mdiGithub">
      Button
    </button-outline>
    <button-outline buttonType="error" :icon="icon.mdiGithub">
      Button
    </button-outline>
    <button-outline buttonType="warning" :icon="icon.mdiGithub">
      Button
    </button-outline>
  </div>
  <h3 class="mb-4 text-xl">Sizes</h3>
  <div class="flex gap-4 mb-4">
    <button-outline buttonSize="s" :icon="icon.mdiGithub">
      Button S
    </button-outline>
    <button-outline
      buttonSize="s"
      buttonType="secondary"
      :icon="icon.mdiGithub"
    >
      Button S
    </button-outline>
    <button-outline buttonSize="m" :icon="icon.mdiGithub">
      Button M
    </button-outline>
    <button-outline
      buttonSize="m"
      buttonType="secondary"
      :icon="icon.mdiGithub"
    >
      Button M
    </button-outline>
    <button-outline buttonSize="l" :icon="icon.mdiGithub">
      Button L
    </button-outline>
    <button-outline
      buttonSize="l"
      buttonType="secondary"
      :icon="icon.mdiGithub"
    >
      Button L
    </button-outline>
  </div>
  <h3 class="mb-4 text-xl">Circle</h3>
  <div class="flex gap-4 mb-4">
    <button-outline buttonSize="s" circle>
      <icon-basics :d="icon.mdiGithub" size="s" />
    </button-outline>
    <button-outline buttonSize="s" buttonType="secondary" circle>
      <icon-basics :d="icon.mdiGithub" size="s" />
    </button-outline>
    <button-outline buttonSize="m" circle>
      <icon-basics :d="icon.mdiGithub" size="m" />
    </button-outline>
    <button-outline buttonSize="m" buttonType="secondary" circle>
      <icon-basics :d="icon.mdiGithub" size="m" />
    </button-outline>
    <button-outline buttonSize="l" circle>
      <icon-basics :d="icon.mdiGithub" size="l" />
    </button-outline>
    <button-outline buttonSize="l" buttonType="secondary" circle>
      <icon-basics :d="icon.mdiGithub" size="l" />
    </button-outline>
  </div>
  <h2 class="mt-12 mb-4 text-3xl">Button Transparent</h2>
  <div class="flex gap-4 mb-4">
    <button-transparent buttonType="primary"> Button </button-transparent>
    <button-transparent buttonType="secondary"> Button </button-transparent>
    <button-transparent buttonType="information"> Button </button-transparent>
    <button-transparent buttonType="attention"> Button </button-transparent>
    <button-transparent buttonType="success"> Button </button-transparent>
    <button-transparent buttonType="destructive"> Button </button-transparent>
    <button-transparent buttonType="error"> Button </button-transparent>
    <button-transparent buttonType="warning"> Button </button-transparent>
  </div>
  <h3 class="mb-4 text-xl">With Icon</h3>
  <div class="flex gap-4 mb-4">
    <button-transparent buttonType="primary" :icon="icon.mdiArrowRight">
      Button
    </button-transparent>
    <button-transparent buttonType="secondary" :icon="icon.mdiArrowRight">
      Button
    </button-transparent>
    <button-transparent buttonType="information" :icon="icon.mdiArrowRight">
      Button
    </button-transparent>
    <button-transparent buttonType="attention" :icon="icon.mdiArrowRight">
      Button
    </button-transparent>
    <button-transparent buttonType="success" :icon="icon.mdiArrowRight">
      Button
    </button-transparent>
    <button-transparent buttonType="destructive" :icon="icon.mdiArrowRight">
      Button
    </button-transparent>
    <button-transparent buttonType="error" :icon="icon.mdiArrowRight">
      Button
    </button-transparent>
    <button-transparent buttonType="warning" :icon="icon.mdiArrowRight">
      Button
    </button-transparent>
  </div>
  <h3 class="mb-4 text-xl">Sizes</h3>
  <div class="flex gap-4 mb-4">
    <button-transparent buttonSize="s" :icon="icon.mdiArrowRight">
      Button S
    </button-transparent>
    <button-transparent
      buttonSize="s"
      buttonType="secondary"
      :icon="icon.mdiArrowRight"
    >
      Button S
    </button-transparent>
    <button-transparent buttonSize="m" :icon="icon.mdiArrowRight">
      Button M
    </button-transparent>
    <button-transparent
      buttonSize="m"
      buttonType="secondary"
      :icon="icon.mdiArrowRight"
    >
      Button M
    </button-transparent>
    <button-transparent buttonSize="l" :icon="icon.mdiArrowRight">
      Button L
    </button-transparent>
    <button-transparent
      buttonSize="l"
      buttonType="secondary"
      :icon="icon.mdiArrowRight"
    >
      Button L
    </button-transparent>
  </div>
  <h3 class="mb-4 text-xl">Circle</h3>
  <div class="flex gap-4 mb-4">
    <button-transparent buttonSize="s" circle>
      <icon-basics :d="icon.mdiGithub" size="s" />
    </button-transparent>
    <button-transparent buttonSize="s" buttonType="secondary" circle>
      <icon-basics :d="icon.mdiGithub" size="s" />
    </button-transparent>
    <button-transparent buttonSize="m" circle>
      <icon-basics :d="icon.mdiGithub" size="m" />
    </button-transparent>
    <button-transparent buttonSize="m" buttonType="secondary" circle>
      <icon-basics :d="icon.mdiGithub" size="m" />
    </button-transparent>
    <button-transparent buttonSize="l" circle>
      <icon-basics :d="icon.mdiGithub" size="l" />
    </button-transparent>
    <button-transparent buttonSize="l" buttonType="secondary" circle>
      <icon-basics :d="icon.mdiGithub" size="l" />
    </button-transparent>
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
import { mdiArrowRight, mdiGithub } from '@mdi/js'
import ButtonBlock from '@/components/button/ButtonBlock.vue'
import ButtonOutline from '@/components/button/ButtonOutline.vue'
import ButtonTransparent from '@/components/button/ButtonTransparent.vue'
import IconBasics from '@/components/icon/IconBasics.vue'
import InputMultilineText from '@/components/input/InputMultilineText.vue'
import InputText from '@/components/input/InputText.vue'

export default defineComponent({
  name: 'ViewHome',
  components: {
    ButtonBlock,
    ButtonOutline,
    ButtonTransparent,
    IconBasics,
    InputMultilineText,
    InputText,
  },
  data: () => ({
    icon: {
      mdiArrowRight,
      mdiGithub,
    },
    inputText: '',
    InputMultilineText: '',
  }),
})
</script>
