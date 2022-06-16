<template>
  <component
    class="flex items-center justify-center"
    :is="tag"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonBasics',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
  },
})
</script>
