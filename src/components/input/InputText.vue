<template>
  <input
    v-bind="$attrs"
    :class="classnames"
    :style="styles"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
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
})
</script>

<style lang="scss" scoped>
input {
  height: 44px;
  appearance: none;
  box-sizing: border-box;
  padding-right: 16px;
  padding-left: 16px;
  border: 1px solid;
}
</style>
