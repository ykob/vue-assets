<template>
  <input
    type="file"
    :disabled="disabled"
    :value="modelValue"
    @change="changeHandler"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputFile',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  data: (): {
    fileList: FileList | null
  } => ({
    fileList: null,
  }),
  methods: {
    changeHandler(event: Event): void {
      const { target } = event
      if (!(target instanceof HTMLInputElement)) return
      this.fileList = target.files
      this.$emit('update:modelValue', target.value)
    },
  },
})
</script>
