<template>
  <div class="flex flex-col gap-3 items-baseline" :key="keyPrefix">
    <input
      class="hidden"
      :disabled="disabled"
      :multiple="multiple"
      ref="input"
      type="file"
      @change="changeHandler"
    />
    <div class="flex gap-2">
      <button-block
        button-type="information"
        :disabled="disabled"
        :icon="icons.file"
        shrink
        @click="onClickSelect"
      >
        Select Files
      </button-block>
      <button-block
        v-if="selectedFiles"
        button-type="destructive"
        :disabled="disabled"
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
      <div v-for="(file, index) in modelValue" :key="keyPrefix + '-' + index">
        {{ file.name }} ({{ file.size / 1000 }}kB)
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
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
      type: Object as PropType<FileList | null>,
      default: null,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    selectedFiles(): boolean {
      return this.modelValue !== null && this.modelValue.length > 0
    },
  },
  data: (): {
    icons: { [key: string]: string }
  } => ({
    icons: {
      file: mdiFile,
      close: mdiCloseCircle,
    },
  }),
  methods: {
    changeHandler(event: Event): void {
      const { target } = event
      if (!(target instanceof HTMLInputElement)) return
      this.$emit('update:modelValue', target.files)
    },
    onClickSelect() {
      const { input } = this.$refs
      if (!(input instanceof HTMLInputElement)) return
      input.click()
    },
    onClickClear() {
      this.$emit('update:modelValue', null)
    },
  },
})
</script>
