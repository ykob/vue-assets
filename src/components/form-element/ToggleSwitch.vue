<template>
  <button :class="classnamesContainer" :disabled="disabled" @click="onClick">
    <span :class="classnamesKnob"> {{ label }} </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToggleSwitch',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    labelOff: {
      type: String,
      default: 'OFF',
    },
    labelOn: {
      type: String,
      default: 'ON',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classnamesContainer(): string[] {
      let classnamesColors: string[] = []

      if (this.error) {
        classnamesColors = ['bg-error-200']
      } else {
        classnamesColors = ['bg-neutral-200']
      }
      return [
        ...classnamesColors,
        'flex',
        'h-9',
        'items-center',
        'px-1',
        'rounded-full',
        'w-24',
      ]
    },
    classnamesKnob(): string[] {
      let classnamesColors: string[] = []

      if (this.disabled) {
        classnamesColors =
          this.modelValue === true
            ? ['bg-neutral-300', 'text-neutral-200']
            : ['bg-neutral-100', 'text-neutral-300']
      } else if (this.error) {
        classnamesColors =
          this.modelValue === true
            ? ['bg-error-500', 'text-error-50']
            : ['bg-error-50', 'text-error-500']
      } else {
        classnamesColors =
          this.modelValue === true
            ? ['bg-primary-500', 'text-neutral-50']
            : ['bg-neutral-50', 'text-primary-500']
      }
      return [
        ...classnamesColors,
        this.modelValue ? 'translate-x-6' : 'translate-x-0',
        'drop-shadow',
        'flex',
        'font-bold',
        'h-7',
        'items-center',
        'justify-center',
        'rounded-full',
        'transition-all',
        'w-16',
      ]
    },
    label(): string {
      return this.modelValue ? this.labelOn : this.labelOff
    },
  },
  methods: {
    onClick() {
      if (this.disabled === true) return
      this.$emit('update:modelValue', !this.modelValue)
    },
  },
})
</script>
