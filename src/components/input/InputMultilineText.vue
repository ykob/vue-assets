<template>
  <textarea
    v-bind="$attrs"
    :class="classnames"
    :style="styles"
    :value="value"
    @change="changeHandler"
    @input="inputHandler"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '240px',
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
        height: this.height,
      }
    },
  },
  methods: {
    changeHandler(event: Event): void {
      const { target } = event
      if (!(target instanceof HTMLTextAreaElement)) return
      this.$emit('change', target.value)
    },
    inputHandler(event: Event): void {
      const { target } = event
      if (!(target instanceof HTMLTextAreaElement)) return
      this.$emit('input', target.value)
    },
  },
})
</script>

<style lang="scss" scoped>
textarea {
  appearance: none;
  box-sizing: border-box;
  display: block;
  padding: 16px;
  line-height: 1.5;
  border: 1px solid;
}
</style>
