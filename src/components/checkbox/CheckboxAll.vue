<template>
  <checkbox-basics
    v-bind="$attrs"
    all
    :checked="checkedAll"
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
  name: 'CheckboxAll',
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
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  computed: {
    checkedAll(): boolean {
      return (
        this.modelValue.filter((o) => {
          return this.value.includes(o)
        }).length === this.value.length
      )
    },
  },
  methods: {
    onChange(e: Event) {
      if (this.disabled) return
      if (
        e.currentTarget !== null &&
        e.currentTarget instanceof HTMLInputElement
      ) {
        this.$emit(
          'update:modelValue',
          this.checkedAll === false ? [...this.value] : []
        )
      }
    },
  },
})
</script>
