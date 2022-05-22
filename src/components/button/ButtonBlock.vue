<template>
  <button-basics
    v-bind="$attrs"
    :class="classnames"
    :tag="tag"
    :to="to"
    @click="$emit('click', $event)"
  >
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
    to: {
      type: String || undefined,
      default: undefined,
    },
  },
  computed: {
    classnames(): string[] {
      return ['h-10', 'px-4', 'rounded', 'text-neutral-50', 'w-full']
    },
  },
})
</script>
