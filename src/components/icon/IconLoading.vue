<template>
  <icon-svg :d="d" class="animate-spin text-current" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiLoading } from '@mdi/js'
import IconSvg from '@/components/icon/IconSvg.vue'

export default defineComponent({
  name: 'IconLoading',
  components: {
    IconSvg,
  },
  props: {},
  data: () => ({
    d: mdiLoading,
  }),
})
</script>
