<template>
  <component
    v-bind="$attrs"
    class="button"
    :is="tag"
    :to="to"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonBasics',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
}
</style>
