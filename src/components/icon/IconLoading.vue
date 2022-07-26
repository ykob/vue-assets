<template>
  <icon-svg class="animate-spin text-current" :d="d" :size="size" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mdiLoading } from '@mdi/js'
import { IconSize } from '@/types/'
import IconSvg from '@/components/icon/IconSvg.vue'

export default defineComponent({
  name: 'IconLoading',
  components: {
    IconSvg,
  },
  props: {
    size: {
      type: String as PropType<IconSize>,
      default: 'm',
    },
  },
  data: () => ({
    d: mdiLoading,
  }),
})
</script>
