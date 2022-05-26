<template>
  <button-basics :class="classnames" :tag="tag" @click="$emit('click', $event)">
    <icon-basics v-if="icon !== undefined" :d="icon" />
    <slot></slot>
  </button-basics>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ButtonBasics from './ButtonBasics.vue'
import IconBasics from '@/components/icon/IconBasics.vue'

type ButtonType =
  | 'primary'
  | 'secondary'
  | 'information'
  | 'attention'
  | 'success'
  | 'destructive'
  | 'error'
  | 'warning'

export default defineComponent({
  name: 'ButtonBlock',
  components: {
    ButtonBasics,
    IconBasics,
  },
  props: {
    buttonType: {
      type: String as PropType<ButtonType>,
      default: 'primary',
    },
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
      const colorClassnames = (buttonType: ButtonType): string[] => {
        switch (buttonType) {
          case 'primary':
          default:
            return [
              'bg-primary-500',
              'active:bg-primary-600',
              'hover:bg-primary-400',
            ]
          case 'secondary':
            return [
              'bg-secondary-500',
              'active:bg-secondary-600',
              'hover:bg-secondary-400',
            ]
          case 'information':
            return [
              'bg-information-500',
              'active:bg-information-600',
              'hover:bg-information-400',
            ]
          case 'attention':
            return [
              'bg-attention-500',
              'active:bg-attention-600',
              'hover:bg-attention-400',
            ]
          case 'success':
            return [
              'bg-success-500',
              'active:bg-success-600',
              'hover:bg-success-400',
            ]
          case 'destructive':
            return [
              'bg-destructive-500',
              'active:bg-destructive-600',
              'hover:bg-destructive-400',
            ]
          case 'error':
            return ['bg-error-500', 'active:bg-error-600', 'hover:bg-error-400']
          case 'warning':
            return [
              'bg-warning-500',
              'active:bg-warning-600',
              'hover:bg-warning-400',
            ]
        }
      }
      return [
        ...colorClassnames(this.buttonType),
        'gap-2',
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
