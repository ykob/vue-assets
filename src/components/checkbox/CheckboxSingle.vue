<template>
  <checkbox-basics
    v-bind="$attrs"
    :value="value"
    :checked="modelValue.includes(value)"
    :disabled="disabled"
    :desc="desc"
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
      type: Array as PropType<string[]>,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onChange(e: Event) {
      if (
        e.currentTarget !== null &&
        e.currentTarget instanceof HTMLInputElement
      ) {
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
      }
    },
  },
})
</script>
