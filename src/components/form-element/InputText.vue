<template>
  <input
    :class="classnames"
    :disabled="disabled"
    :value="modelValue"
    @change="changeHandler"
    @input="inputHandler"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputText',
  emits: ['update:modelValue'],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  computed: {
    classnames(): string[] {
      let classnamesEachStatus: string[] = []

      if (this.disabled) {
        classnamesEachStatus = [
          'bg-neutral-100',
          'border-neutral-300',
          'placeholder-neutral-300',
        ]
      } else {
        classnamesEachStatus = [
          'bg-neutral-50',
          'border-neutral-500',
          'placeholder-neutral-400',
        ]
      }
      return [...classnamesEachStatus, 'border', 'p-4', 'rounded']
    },
  },
  methods: {
    changeHandler(event: Event): void {
      const { target } = event
      if (!(target instanceof HTMLInputElement)) return
      this.$emit('update:modelValue', target.value)
    },
    inputHandler(event: Event): void {
      const { target } = event
      if (!(target instanceof HTMLInputElement)) return
      this.$emit('update:modelValue', target.value)
    },
  },
})
</script>
