<template>
  <checkbox-basics
    v-bind="$attrs"
    :value="value"
    :checked="checked"
    :desc="desc"
    :disabled="disabled"
    @change="onChange"
  >
    <slot></slot>
  </checkbox-basics>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CheckboxBasics from '@/components/checkbox/CheckboxBasics.vue'

export default defineComponent({
  name: 'CheckboxSingle',
  components: {
    CheckboxBasics,
  },
  props: {
    desc: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [Array, Boolean] as PropType<string[] | boolean>,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    checked(): boolean {
      return Array.isArray(this.modelValue)
        ? this.modelValue.includes(this.value)
        : this.modelValue
    },
  },
  methods: {
    onChange(e: Event) {
      if (this.disabled) return
      if (
        e.currentTarget !== null &&
        e.currentTarget instanceof HTMLInputElement
      ) {
        if (Array.isArray(this.modelValue)) {
          const { value } = e.currentTarget
          let currentValue = [...this.modelValue]

          if (e.currentTarget.checked) {
            currentValue.push(value)
          } else {
            currentValue = currentValue.filter((v) => {
              return v !== value
            })
          }
          this.$emit('update:modelValue', currentValue)
        } else {
          this.$emit('update:modelValue', !this.modelValue)
        }
      }
    },
  },
})
</script>
