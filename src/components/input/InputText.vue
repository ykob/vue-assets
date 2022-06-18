<template>
  <input
    v-bind="$attrs"
    :class="classnames"
    @change="changeHandler"
    @input="inputHandler"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputText',
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classnames(): string[] {
      return [
        'border',
        'border-neutral-500',
        'bg-neutral-50',
        'p-4',
        'placeholder-neutral-400',
        'rounded',
      ]
    },
  },
  methods: {
    changeHandler(event: Event): void {
      const { target } = event
      if (!(target instanceof HTMLInputElement)) return
      this.$emit('change', target.value)
    },
    inputHandler(event: Event): void {
      const { target } = event
      if (!(target instanceof HTMLInputElement)) return
      this.$emit('update:modelValue', target.value)
    },
  },
})
</script>
