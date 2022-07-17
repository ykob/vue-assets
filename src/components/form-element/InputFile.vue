<template>
  <div :key="keyPrefix">
    <input
      class="hidden"
      ref="input"
      type="file"
      :disabled="disabled"
      :value="modelValue"
      @change="changeHandler"
    />
    <button-block :icon="d" shrink @click="clickHandler">
      Select Files
    </button-block>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiFile } from '@mdi/js'
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
    keyPrefix: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  data: (): {
    d: string
    fileList: FileList | null
  } => ({
    d: mdiFile,
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
