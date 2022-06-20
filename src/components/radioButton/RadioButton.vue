<template>
  <label :class="classnames" :disabled="disabled">
    <input
      type="radio"
      v-bind="$attrs"
      :value="value"
      class="hidden"
      :checked="checked"
      :disabled="disabled"
      @change="onChange"
    />
    <div :class="classnamesMark"></div>
    <div>
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RadioButton',
  props: {
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  computed: {
    checked(): boolean {
      return this.modelValue === this.value
    },
    classnames(): string[] {
      let classnamesEachStatus: string[] = []

      if (this.disabled) {
        classnamesEachStatus = ['pointer-events-none', 'text-neutral-300']
      } else {
        classnamesEachStatus = [
          'active:bg-information-200',
          'hover:bg-information-100',
        ]
      }
      return [
        ...classnamesEachStatus,
        'block',
        'cursor-pointer',
        'flex',
        'gap-2',
        'items-center',
        'leading-4',
        'p-1',
        'rounded',
        'transition-colors',
      ]
    },
    classnamesMark(): string[] {
      let classnamesEachStatus: string[] = []

      if (this.checked) {
        classnamesEachStatus = ['bg-information-500', 'border-information-500']
      } else if (this.disabled) {
        classnamesEachStatus = ['bg-neutral-100', 'border-neutral-300']
      } else {
        classnamesEachStatus = ['bg-neutral-50', 'border-neutral-500']
      }
      return [
        ...classnamesEachStatus,
        'border',
        'flex',
        'h-5',
        'items-center',
        'justify-center',
        'rounded-full',
        'text-neutral-50',
        'w-5',
      ]
    },
  },
  methods: {
    onChange(e: Event) {
      if (this.disabled) return
      if (
        e.currentTarget !== null &&
        e.currentTarget instanceof HTMLInputElement
      ) {
        this.$emit('update:modelValue', this.value)
      }
    },
  },
})
</script>
