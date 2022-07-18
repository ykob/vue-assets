<template>
  <div class="flex flex-col gap-3 items-baseline" :key="keyPrefix">
    <input
      class="hidden"
      ref="input"
      type="file"
      :disabled="disabled"
      :value="modelValue"
      @change="changeHandler"
    />
    <div class="flex gap-2">
      <button-block
        button-type="information"
        :icon="icons.file"
        shrink
        @click="onClickSelect"
      >
        Select Files
      </button-block>
      <button-block
        v-if="selectedFiles"
        button-type="destructive"
        :icon="icons.close"
        shrink
        @click="onClickClear"
      >
        Clear
      </button-block>
    </div>
    <div
      v-if="!selectedFiles"
      class="bg-neutral-100 border-2 border-dashed border-neutral-400 px-4 py-2 rounded"
    >
      No files are selected.
    </div>
    <div
      v-else
      class="bg-information-50 border-2 border-dashed border-information-300 px-4 py-2 rounded"
    >
      <div v-for="(file, index) in fileList" :key="keyPrefix + '-' + index">
        {{ file.name }} ({{ file.size / 1000 }}kB)
      </div>
    </div>
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
  computed: {
    selectedFiles(): boolean {
      return this.fileList !== null && this.fileList.length > 0
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
