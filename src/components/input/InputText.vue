<template>
  <input
    v-bind="$attrs"
    class="placeholder-neutral-400 rounded"
    :class="classnames"
    @change="changeHandler"
    @input="inputHandler"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classnames(): { [key: string]: boolean } {
      return {
        'border-neutral-500': this.error === false,
        'bg-neutral-50': true,
      }
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

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  height: 44px;
  appearance: none;
  padding-right: 16px;
  padding-left: 16px;
  border-style: solid;
  border-width: 1px;
}
</style>
