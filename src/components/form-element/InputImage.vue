<template>
  <div class="flex flex-col gap-3 items-baseline" :key="keyPrefix">
    <input
      class="hidden"
      accept="image/png, image/jpeg"
      :disabled="disabled"
      :multiple="multiple"
      ref="input"
      type="file"
      @change="changeHandler"
    />
    <div class="flex gap-2">
      <button-block
        button-type="information"
        :icon="icons.image"
        shrink
        @click="onClickSelect"
      >
        Select Images
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
      No Images are selected.
    </div>
    <div v-else class="flex flex-wrap gap-4">
      <div
        v-for="(image, index) in images"
        class="bg-neutral-100 h-40 rounded w-40"
        :key="keyPrefix + '-' + index"
      >
        <img class="block h-full object-contain w-full" alt="" :src="image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mdiCloseCircle, mdiImage } from '@mdi/js'
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
    images(): string[] {
      if (this.modelValue === null) {
        return []
      } else {
        const images = []
        for (let i = 0; i < this.modelValue.length; i++) {
          images.push(URL.createObjectURL(this.modelValue[i]))
        }
        return images
      }
    },
  },
  data: (): {
    icons: { [key: string]: string }
  } => ({
    icons: {
      image: mdiImage,
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
