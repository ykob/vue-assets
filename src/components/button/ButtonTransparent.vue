<template>
  <button-basics
    :class="classnames"
    :disabled="disabled"
    :icon="icon"
    :icon-size="iconSize"
    :loading="loading"
    :tag="tag"
    @click="$emit('accepted')"
  >
    <slot></slot>
  </button-basics>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ButtonBasics from '@/components/button/ButtonBasics.vue'
import { ButtonSize, IconSize, Semantics } from '@/types/'

export default defineComponent({
  name: 'ButtonTransparent',
  emits: ['accepted'],
  components: {
    ButtonBasics,
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
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String || undefined,
      default: undefined,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    shrink: {
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
      const classnamesColors = (
        buttonType: Semantics,
        disabled: boolean
      ): string[] => {
        if (disabled === true) {
          return ['text-neutral-300']
        }
        switch (buttonType) {
          case 'primary':
          default:
            return [
              'text-primary-500',
              'active:bg-primary-600',
              'hover:bg-primary-400',
            ]
          case 'secondary':
            return [
              'text-secondary-500',
              'active:bg-secondary-600',
              'hover:bg-secondary-400',
            ]
          case 'information':
            return [
              'text-information-500',
              'active:bg-information-600',
              'hover:bg-information-400',
            ]
          case 'attention':
            return [
              'text-attention-500',
              'active:bg-attention-600',
              'hover:bg-attention-400',
            ]
          case 'success':
            return [
              'text-success-500',
              'active:bg-success-600',
              'hover:bg-success-400',
            ]
          case 'destructive':
            return [
              'text-destructive-500',
              'active:bg-destructive-600',
              'hover:bg-destructive-400',
            ]
          case 'error':
            return [
              'text-error-500',
              'active:bg-error-600',
              'hover:bg-error-400',
            ]
          case 'warning':
            return [
              'text-warning-500',
              'active:bg-warning-600',
              'hover:bg-warning-400',
            ]
        }
      }
      const classnamesSizes = (buttonSize: ButtonSize): string[] => {
        switch (buttonSize) {
          case 's':
            if (this.circle) {
              return ['h-7', 'text-sm', 'w-7']
            } else {
              return ['h-6', 'text-sm', this.shrink ? 'px-2' : 'w-full']
            }
          case 'm':
          default:
            if (this.circle) {
              return ['h-9', 'text-base', 'w-9']
            } else {
              return ['h-7', 'text-base', this.shrink ? 'px-3' : 'w-full']
            }
          case 'l':
            if (this.circle) {
              return ['h-11', 'text-lg', 'w-11']
            } else {
              return ['h-8', 'text-lg', this.shrink ? 'px-4' : 'w-full']
            }
        }
      }

      return [
        ...classnamesColors(this.buttonType, this.disabled),
        ...classnamesSizes(this.buttonSize),
        this.circle ? 'rounded-full' : 'rounded',
        this.disabled ? 'pointer-events-none' : 'hover:text-neutral-50',
        'font-medium',
        'relative',
        'transition-colors',
      ]
    },
    iconSize(): IconSize {
      switch (this.buttonSize) {
        case 's':
          return 'xs'
        case 'm':
        default:
          return 's'
        case 'l':
          return 'm'
      }
    },
  },
})
</script>
