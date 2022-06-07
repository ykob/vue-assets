<template>
  <button-basics :class="classnames" :tag="tag" @click="$emit('click', $event)">
    <icon-basics v-if="icon !== undefined" :d="icon" :size="buttonSize" />
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
      const sizeClassnames = (buttonSize: ButtonSize): string[] => {
        switch (buttonSize) {
          case 's':
            return ['h-7', 'text-sm', this.circle ? 'w-7' : 'w-full']
          case 'm':
          default:
            return ['h-10', 'text-base', this.circle ? 'w-10' : 'w-full']
          case 'l':
            return ['h-14', 'text-lg', this.circle ? 'w-14' : 'w-full']
        }
      }

      return [
        ...colorClassnames(this.buttonType),
        ...sizeClassnames(this.buttonSize),
        ...(this.circle ? ['drop-shadow-md', 'rounded-full'] : ['rounded']),
        'gap-2',
        'text-neutral-50',
        'transition-colors',
      ]
    },
  },
})
</script>
