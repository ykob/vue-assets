<template>
  <component
    class="flex items-center justify-center"
    :class="classnames"
    :is="tag"
    @click="handleClick"
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
    loading: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'button',
    },
  },
  computed: {
    classnames(): string[] {
      if (this.loading === true) {
        return ['pointer-events-none']
      } else {
        return []
      }
    },
  },
  methods: {
    handleClick() {
      if (this.loading === true) return
      this.$emit('accepted')
    },
  },
})
</script>
