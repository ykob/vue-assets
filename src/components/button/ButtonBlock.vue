<template>
  <button-basics :class="classnames" :tag="tag" @click="$emit('click', $event)">
    <slot />
  </button-basics>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonBasics from './ButtonBasics.vue'

export default defineComponent({
  name: 'ButtonBlock',
  components: {
    ButtonBasics,
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
        'h-10',
        'px-4',
        'rounded',
        'text-neutral-50',
        'transition-colors',
        'w-full',
      ]
    },
  },
})
</script>
