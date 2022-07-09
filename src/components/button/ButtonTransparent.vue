<template>
  <button-basics
    :class="classnames"
    :loading="loading"
    :tag="tag"
    @click="$emit('accepted')"
  >
    <span
      v-if="loading === true"
      class="absolute flex h-full items-center justify-center left-0 top-0 w-full"
    >
      <icon-loading :size="iconSize" />
    </span>
    <span :class="classnamesInner">
      <icon-svg v-if="icon !== undefined" :d="icon" :size="iconSize" />
      <slot></slot>
    </span>
  </button-basics>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ButtonBasics from '@/components/button/ButtonBasics.vue'
import IconLoading from '@/components/icon/IconLoading.vue'
import IconSvg from '@/components/icon/IconSvg.vue'
import { Semantics } from '@/types/'

type ButtonSize = 's' | 'm' | 'l'

export default defineComponent({
  name: 'ButtonTransparent',
  emits: ['accepted'],
  components: {
    ButtonBasics,
    IconLoading,
    IconSvg,
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
      const colorClassnames = (buttonType: Semantics): string[] => {
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
      const sizeClassnames = (buttonSize: ButtonSize): string[] => {
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
        ...colorClassnames(this.buttonType),
        ...sizeClassnames(this.buttonSize),
        this.circle ? 'rounded-full' : 'rounded',
        'font-medium',
        'relative',
        'transition-colors',
        'hover:text-neutral-50',
      ]
    },
    classnamesInner(): string[] {
      const classnamesBase = ['flex', 'gap-1', 'items-center']
      return this.loading ? [...classnamesBase, 'opacity-0'] : classnamesBase
    },
    iconSize(): string {
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
