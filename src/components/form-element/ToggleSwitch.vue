<template>
  <button :class="classnamesContainer">
    <span :class="classnamesKnob"> {{ label }} </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToggleSwitch',
  computed: {
    classnamesContainer(): string[] {
      return [
        'bg-neutral-300',
        'flex',
        'h-8',
        'items-center',
        'px-1',
        'rounded-full',
        'w-20',
      ]
    },
    classnamesKnob(): string[] {
      return [
        'bg-primary-500',
        'flex',
        'font-bold',
        'h-6',
        'items-center',
        'justify-center',
        'rounded-full',
        'text-neutral-50',
        'w-12',
      ]
    },
    label(): string {
      return 'OFF'
    },
  },
})
</script>
