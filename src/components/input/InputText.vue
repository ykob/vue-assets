<template>
  <input
    v-bind="$attrs"
    :class="classnames"
    :style="styles"
    @change="changeHandler"
    @input="inputHandler"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '100%',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classnames(): { [key: string]: boolean } {
      return {
        error: this.error,
      }
    },
    styles(): { [key: string]: string } {
      return {
        width: this.width,
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
      this.$emit('input', target.value)
    },
  }
})
</script>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  height: 44px;
  appearance: none;
  padding-right: 16px;
  padding-left: 16px;
  border: 1px solid;
}
</style>
