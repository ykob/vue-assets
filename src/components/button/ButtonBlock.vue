<template>
  <button-basics :class="classnames" :tag="tag" @click="$emit('click', $event)">
    <icon-basics v-if="icon !== undefined" class="mr-2" :d="icon" />
    <slot></slot>
  </button-basics>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonBasics from './ButtonBasics.vue'
import IconBasics from '@/components/icon/IconBasics.vue'

export default defineComponent({
  name: 'ButtonBlock',
  components: {
    ButtonBasics,
    IconBasics,
  },
  props: {
    icon: {
      type: String || undefined,
      default: undefined,
    },
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
