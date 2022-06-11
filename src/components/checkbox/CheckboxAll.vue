<template>
  <checkbox-basics
    v-bind="$attrs"
    all
    :checked="checkedAll"
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
