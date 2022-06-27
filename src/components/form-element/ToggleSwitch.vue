<template>
  <button :class="classnamesContainer" @click="onClick">
    <span :class="classnamesKnob"> {{ label }} </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToggleSwitch',
  props: {
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
      return [
        'bg-neutral-300',
        'flex',
        'h-9',
        'items-center',
        'px-1',
        'rounded-full',
        'w-24',
      ]
    },
    classnamesKnob(): string[] {
      const classnamesColors =
        this.modelValue === true
          ? ['bg-primary-500', 'text-neutral-50']
          : ['bg-neutral-50', 'text-primary-500']
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
      this.$emit('update:modelValue', !this.modelValue)
    },
  },
})
</script>
