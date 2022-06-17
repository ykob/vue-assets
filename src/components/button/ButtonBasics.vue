<template>
  <component
    class="flex items-center justify-center"
    :is="tag"
    @click="$emit('accepted')"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonBasics',
  emits: ['accepted'],
  props: {
    tag: {
      type: String,
      default: 'button',
    },
  },
})
</script>
