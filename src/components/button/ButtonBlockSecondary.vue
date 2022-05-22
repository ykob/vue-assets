<template>
  <button-block :class="classnames" :tag="tag" @click="$emit('click', $event)">
    <slot />
  </button-block>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonBlock from './ButtonBlock.vue'

export default defineComponent({
  name: 'ButtonBlockSecondary',
  components: {
    ButtonBlock,
  },
  props: {
    isLoading: {
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
      return [
        'bg-secondary-500',
        'active:bg-secondary-600',
        'hover:bg-secondary-400',
      ]
    },
  },
})
</script>
