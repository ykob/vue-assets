<template>
  <component
    v-bind="$attrs"
    class="button"
    :class="classnames"
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
    buttonType: {
      type: String,
      default: 'common',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: '',
    },
  },
  computed: {
    classnames() {
      return [`${this.buttonType}`]
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
}
</style>
