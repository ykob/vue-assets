<template>
  <button-basics
    :class="classnames"
    :disabled="disabled"
    :icon="icon"
    :icon-size="buttonSize"
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
import { ButtonSize, Semantics } from '@/types/'

export default defineComponent({
  name: 'ButtonOutline',
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
          return ['border-neutral-300', 'text-neutral-300']
        }
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
      const classnamesSizes = (buttonSize: ButtonSize): string[] => {
        switch (buttonSize) {
          case 's':
            return [
              'h-7',
              'text-sm',
              this.circle ? 'w-7' : this.shrink ? 'px-2' : 'w-full',
            ]
          case 'm':
          default:
            return [
              'h-10',
              'text-base',
              this.circle ? 'w-10' : this.shrink ? 'px-4' : 'w-full',
            ]
          case 'l':
            return [
              'h-12',
              'text-lg',
              this.circle ? 'w-12' : this.shrink ? 'px-6' : 'w-full',
            ]
        }
      }

      return [
        ...classnamesColors(this.buttonType, this.disabled),
        ...classnamesSizes(this.buttonSize),
        ...(this.circle ? ['drop-shadow-md', 'rounded-full'] : ['rounded']),
        this.disabled ? 'pointer-events-none' : 'hover:text-neutral-50',
        'bg-white',
        'border-2',
        'border-solid',
        'font-medium',
        'relative',
        'transition-colors',
      ]
    },
  },
})
</script>
