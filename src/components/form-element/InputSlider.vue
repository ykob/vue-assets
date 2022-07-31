<template>
  <div class="flex items-center w-full">
    <div
      v-if="showValue"
      class="mr-2 shrink-0 text-ellipsis text-right"
      :style="stylesValue"
    >
      {{ value }}
    </div>
    <div
      class="flex h-6 items-center mx-3 relative w-full z-0"
      ref="main"
      @mousedown.prevent="onMouseDown"
      @touchstart.prevent="onTouchStart"
    >
      <div :class="classnamesKnob" :style="stylesKnob"></div>
      <div class="bg-neutral-200 h-1 relative rounded-full w-full z-0">
        <div :class="classnamesLine" :style="stylesLine"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputSlider',
  emits: ['update:modelValue'],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 1,
    },
    step: {
      type: Number,
      default: 0.01,
    },
    showValue: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    width: 0,
    left: 0,
  }),
  computed: {
    classnamesKnob(): string[] {
      let classnamesColors: string[] = []

      if (this.disabled === true) {
        classnamesColors = ['bg-neutral-400']
      } else {
        classnamesColors = ['bg-primary-500']
      }
      return [
        ...classnamesColors,
        this.disabled === true ? '' : 'cursor-pointer',
        'absolute',
        'drop-shadow',
        'h-5',
        'rounded-full',
        'w-5',
        'z-10',
      ]
    },
    classnamesLine(): string[] {
      let classnamesColors: string[] = []

      if (this.disabled === true) {
        classnamesColors = ['bg-neutral-300']
      } else {
        classnamesColors = ['bg-primary-200']
      }
      return [...classnamesColors, 'absolute', 'h-full']
    },
    ratio(): number {
      return Math.max(
        Math.min((this.modelValue - this.min) / (this.max - this.min), 1),
        0
      )
    },
    stylesKnob(): { [key: string]: string } {
      return {
        left: `calc(${this.ratio * 100}% - 10px)`,
        top: 'calc(50% - 10px)',
      }
    },
    stylesLine(): { [key: string]: string } {
      return {
        width: `${this.ratio * 100}%`,
      }
    },
    stylesValue(): { [key: string]: string } {
      const int = String(this.max)
      const float = String(this.step).split('.')[1]
      return {
        width: `${
          (float ? int.length + float.length : int.length) / 2 + 0.5
        }em`,
      }
    },
    value(): string {
      const float = String(this.step).split('.')[1]
      return float
        ? this.modelValue.toFixed(float.length)
        : String(this.modelValue)
    },
  },
  methods: {
    calcValue(x: number): number {
      const step = (x - this.left) / this.width
      const valueRoundMinMax = Math.max(
        Math.min(step * (this.max - this.min) + this.min, this.max),
        this.min
      )
      return Math.round(valueRoundMinMax / this.step) * this.step
    },
    onMouseDown(e: MouseEvent) {
      if (this.disabled === true) return
      this.setSize()
      this.$emit('update:modelValue', this.calcValue(e.pageX))
      window.addEventListener('mousemove', this.onMouseMove)
      window.addEventListener('mouseup', this.onMouseUp)
    },
    onMouseMove(e: MouseEvent) {
      this.$emit('update:modelValue', this.calcValue(e.pageX))
    },
    onMouseUp() {
      window.removeEventListener('mousemove', this.onMouseMove)
      window.removeEventListener('mouseup', this.onMouseUp)
    },
    onTouchEnd() {
      window.removeEventListener('touchmove', this.onTouchMove)
      window.removeEventListener('touchend', this.onTouchEnd)
    },
    onTouchMove(e: TouchEvent) {
      this.$emit('update:modelValue', this.calcValue(e.touches[0].pageX))
    },
    onTouchStart(e: TouchEvent) {
      if (this.disabled === true) return
      this.setSize()
      this.$emit('update:modelValue', this.calcValue(e.touches[0].pageX))
      window.addEventListener('touchmove', this.onTouchMove)
      window.addEventListener('touchend', this.onTouchEnd)
    },
    setSize() {
      if (!(this.$refs.main instanceof HTMLElement)) return
      const elm = this.$refs.main.getBoundingClientRect()

      this.width = elm.width
      this.left = elm.left
    },
  },
})
</script>
