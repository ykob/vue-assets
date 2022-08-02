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
        :disabled="disabled"
        :icon="icons.image"
        shrink
        @click="onClickSelect"
      >
        Select Images
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
    <template v-if="!disabled">
      <div
        v-if="!selectedFiles"
        class="bg-neutral-100 border-2 border-dashed border-neutral-400 px-4 py-2 rounded"
      >
        No Images are selected.
      </div>
      <div v-else class="flex flex-wrap gap-4">
        <div
          v-for="(image, index) in images"
          :class="classnamesSelected"
          :key="keyPrefix + '-' + index"
        >
          <img
            class="block h-max-full object-contain w-max-full"
            alt=""
            :src="image"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mdiCloseCircle, mdiImage } from '@mdi/js'
import ButtonBlock from '../button/ButtonBlock.vue'

export default defineComponent({
  components: { ButtonBlock },
  name: 'InputImage',
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
    classnamesSelected(): string[] {
      const classnamesColors = (error: boolean): string[] => {
        if (error === true) {
          return [
            'bg-error-100',
            'border-2',
            'border-dashed',
            'border-error-500',
          ]
        } else {
          return ['bg-neutral-100']
        }
      }

      return [
        ...classnamesColors(this.error),
        'flex',
        'h-40',
        'justify-center',
        'items-center',
        'overflow-hidden',
        'rounded',
        'shadow w-40',
      ]
    },
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
