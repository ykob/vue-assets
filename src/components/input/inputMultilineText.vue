<template>
  <textarea
    v-bind="$attrs"
    :class="classnames"
    :style="styles"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
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
})
</script>

<style lang="scss" scoped>
textarea {
  appearance: none;
  box-sizing: border-box;
  display: block;
  padding: 16px;
  border: 1px solid;
  line-height: 1.5;
}
</style>
