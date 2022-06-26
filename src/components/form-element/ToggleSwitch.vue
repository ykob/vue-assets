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
      return [
        'bg-primary-500',
        'flex',
        'font-bold',
        'h-7',
        'items-center',
        'justify-center',
        'rounded-full',
        'text-neutral-50',
        'w-16',
      ]
    },
    label(): string {
      return this.modelValue ? 'ON' : 'OFF'
    },
  },
  methods: {
    onClick() {
      this.$emit('update:modelValue', !this.modelValue)
    },
  },
})
</script>
