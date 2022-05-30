<template>
  <button-basics :class="classnames" :tag="tag" @click="$emit('click', $event)">
    <icon-basics v-if="icon !== undefined" :d="icon" />
    <slot></slot>
  </button-basics>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ButtonBasics from '@/components/button/ButtonBasics.vue'
import IconBasics from '@/components/icon/IconBasics.vue'
import { Semantics } from '@/types/'

type ButtonSize = 's' | 'm' | 'l'

export default defineComponent({
  name: 'ButtonBlock',
  components: {
    ButtonBasics,
    IconBasics,
  },
  props: {
    buttonSize: {
      type: String as PropType<ButtonSize>,
      default: 'm',
    },
    buttonType: {
      type: String as PropType<Semantics>,
      default: 'primary',
    },
    circle: {
      type: Boolean,
      default: false,
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
      const colorClassnames = (buttonType: Semantics): string[] => {
        switch (buttonType) {
          case 'primary':
          default:
            return [
              'border-primary-500',
              'text-primary-500',
              'active:bg-primary-600',
              'active:border-primary-600',
              'hover:bg-primary-400',
              'hover:border-primary-400',
            ]
          case 'secondary':
            return [
              'border-secondary-500',
              'text-secondary-500',
              'active:bg-secondary-600',
              'active:border-secondary-600',
              'hover:bg-secondary-400',
              'hover:border-secondary-400',
            ]
          case 'information':
            return [
              'border-information-500',
              'text-information-500',
              'active:bg-information-600',
              'active:border-information-600',
              'hover:bg-information-400',
              'hover:border-information-400',
            ]
          case 'attention':
            return [
              'border-attention-500',
              'text-attention-500',
              'active:bg-attention-600',
              'active:border-attention-600',
              'hover:bg-attention-400',
              'hover:border-attention-400',
            ]
          case 'success':
            return [
              'border-success-500',
              'text-success-500',
              'active:bg-success-600',
              'active:border-success-600',
              'hover:bg-success-400',
              'hover:border-success-400',
            ]
          case 'destructive':
            return [
              'border-destructive-500',
              'text-destructive-500',
              'active:bg-destructive-600',
              'active:border-destructive-600',
              'hover:bg-destructive-400',
              'hover:border-destructive-400',
            ]
          case 'error':
            return [
              'border-error-500',
              'text-error-500',
              'active:bg-error-600',
              'active:border-error-600',
              'hover:bg-error-400',
              'hover:border-error-400',
            ]
          case 'warning':
            return [
              'border-warning-500',
              'text-warning-500',
              'active:bg-warning-600',
              'active:border-warning-600',
              'hover:bg-warning-400',
              'hover:border-warning-400',
            ]
        }
      }
      const sizeClassnames = (buttonSize: ButtonSize): string[] => {
        switch (buttonSize) {
          case 's':
            return [this.circle ? 'w-7' : 'w-full', 'h-7']
          case 'm':
          default:
            return [this.circle ? 'w-10' : 'w-full', 'h-10']
          case 'l':
            return [this.circle ? 'w-14' : 'w-full', 'h-14']
        }
      }

      return [
        ...colorClassnames(this.buttonType),
        ...sizeClassnames(this.buttonSize),
        ...(this.circle ? ['drop-shadow-md', 'rounded-full'] : ['rounded']),
        'bg-neutral-50',
        'border-2',
        'border-solid',
        'gap-2',
        'transition-colors',
        'hover:text-neutral-50',
      ]
    },
  },
})
</script>
