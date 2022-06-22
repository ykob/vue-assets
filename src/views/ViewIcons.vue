<template>
  <h1 class="mb-8 text-5xl">Vue Assets / Icons</h1>
  <h2 class="mt-12 mb-4 text-3xl">Sizes</h2>
  <div class="flex gap-4 mb-4">
    <icon-basics :d="icon.mdiArrowRight" size="xs" />
    <icon-basics :d="icon.mdiArrowRight" size="s" />
    <icon-basics :d="icon.mdiArrowRight" size="m" />
    <icon-basics :d="icon.mdiArrowRight" size="l" />
    <icon-basics :d="icon.mdiArrowRight" size="xl" />
  </div>
  <div class="flex gap-4">
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
import IconBasics from '@/components/icon/IconBasics.vue'

export default defineComponent({
  name: 'ViewIcons',
  components: {
    IconBasics,
  },
  data: () => ({
    icon: {
      mdiArrowRight,
      mdiGithub,
    },
  }),
})
</script>
