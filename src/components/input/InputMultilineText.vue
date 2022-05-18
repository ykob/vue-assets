<template>
  <textarea
    v-bind="$attrs"
    class="rounded"
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
  border-style: solid;
  border-width: 1px;
}
</style>
