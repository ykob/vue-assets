<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="block fill-current"
    :height="px"
    viewBox="0 0 24 24"
    :width="px"
  >
    <path :d="d" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconSvg',
  props: {
    d: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'm',
    },
  },
  computed: {
    px(): string {
      switch (this.size) {
        case 'xs':
          return '12px'
        case 's':
          return '16px'
        case 'm':
        default:
          return '24px'
        case 'l':
          return '32px'
        case 'xl':
          return '40px'
      }
    },
  },
})
</script>
