<template>
  <div>
    <input
      class="hidden"
      ref="input"
      type="file"
      :disabled="disabled"
      :value="modelValue"
      @change="changeHandler"
    />
    <button-block shrink @click="clickHandler">Select Files.</button-block>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonBlock from '../button/ButtonBlock.vue'

export default defineComponent({
  components: { ButtonBlock },
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
    clickHandler() {
      const { input } = this.$refs
      if (!(input instanceof HTMLInputElement)) return
      input.click()
    },
  },
})
</script>
