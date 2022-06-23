<template>
  <h1 class="mb-8 text-5xl">Vue Assets / Icons</h1>
  <h2 class="mt-12 mb-4 text-3xl">Sizes</h2>
  <div class="flex gap-4 mb-4">
    <icon-svg :d="icon.mdiArrowRight" size="xs" />
    <icon-svg :d="icon.mdiArrowRight" size="s" />
    <icon-svg :d="icon.mdiArrowRight" size="m" />
    <icon-svg :d="icon.mdiArrowRight" size="l" />
    <icon-svg :d="icon.mdiArrowRight" size="xl" />
  </div>
  <div class="flex gap-4">
    <icon-svg :d="icon.mdiGithub" size="xs" />
    <icon-svg :d="icon.mdiGithub" size="s" />
    <icon-svg :d="icon.mdiGithub" size="m" />
    <icon-svg :d="icon.mdiGithub" size="l" />
    <icon-svg :d="icon.mdiGithub" size="xl" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiArrowRight, mdiGithub } from '@mdi/js'
import IconSvg from '@/components/icon/IconSvg.vue'

export default defineComponent({
  name: 'ViewIcons',
  components: {
    IconSvg,
  },
  data: () => ({
    icon: {
      mdiArrowRight,
      mdiGithub,
    },
  }),
})
</script>
