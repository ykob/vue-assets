<template>
  <div class="flex items-center w-full">
    <div
      v-if="showValue"
      class="mr-3 shrink-0 text-ellipsis text-right"
      :style="stylesValue"
    >
      {{ modelValue }}
    </div>
    <div
      class="flex h-6 items-center relative w-full z-0"
      ref="main"
      @mousedown.prevent="onMouseDown"
      @touchstart.prevent="onTouchStart"
    >
      <div
        class="absolute bg-primary-500 cursor-pointer drop-shadow h-5 rounded-full w-5 z-10"
        :style="stylesKnob"
      ></div>
      <div
        class="bg-neutral-200 h-1 relative mr-3 ml-3 rounded-full w-full z-0"
      >
        <div class="absolute bg-primary-200 h-full" :style="stylesLine"></div>
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
    ratio(): number {
      return Math.max(
        Math.min((this.modelValue - this.min) / (this.max - this.min), 1),
        0
      )
    },
    stylesKnob(): { [key: string]: string } {
      return {
        left: `calc(${this.ratio * 100}% - ${24 * this.ratio}px)`,
        top: 'calc(50% - 10px)',
      }
    },
    stylesLine(): { [key: string]: string } {
      return {
        width: `${this.ratio * 100}%`,
      }
    },
    stylesValue(): { [key: string]: string } {
      return {
        width: `${String(this.max).length / 2}em`,
      }
    },
  },
  methods: {
    calcValue(x: number): number {
      const step = (x - this.left) / this.width
      const valueRoundMinMax = Math.max(
        Math.min(step * (this.max - this.min) + this.min, this.max),
        this.min
      )
      const valueRoundStep =
        Math.round(valueRoundMinMax / this.step) * this.step
      const stepFloatLength = String(this.step).split('.')[1]
      const value =
        stepFloatLength === undefined
          ? valueRoundStep
          : Math.round(valueRoundStep * parseFloat(stepFloatLength) * 10) /
            parseFloat(stepFloatLength) /
            10

      return value
    },
    onMouseDown(e: MouseEvent) {
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
