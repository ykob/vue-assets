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
    <button-block
      v-if="fileList === null"
      :icon="icons.file"
      shrink
      @click="onClickSelect"
    >
      Select Files
    </button-block>
    <button-block v-else :icon="icons.close" shrink @click="onClickClear">
      Clear
    </button-block>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiCloseCircle, mdiFile } from '@mdi/js'
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
    icons: { [key: string]: string }
    fileList: FileList | null
  } => ({
    icons: {
      file: mdiFile,
      close: mdiCloseCircle,
    },
    fileList: null,
  }),
  methods: {
    changeHandler(event: Event): void {
      const { target } = event
      if (!(target instanceof HTMLInputElement)) return
      this.fileList = target.files
      this.$emit('update:modelValue', target.value)
    },
    onClickSelect() {
      const { input } = this.$refs
      if (!(input instanceof HTMLInputElement)) return
      input.click()
    },
    onClickClear() {
      this.fileList = null
      this.$emit('update:modelValue', '')
    },
  },
})
</script>
