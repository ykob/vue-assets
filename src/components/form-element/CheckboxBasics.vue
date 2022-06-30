<template>
  <label :class="classnames" :disabled="disabled">
    <input
      type="checkbox"
      v-bind="$attrs"
      :value="value"
      class="hidden"
      :checked="checked"
      :disabled="disabled"
    />
    <div :class="classnamesMark">
      <icon-svg v-show="checked" :d="icon" size="s" />
    </div>
    <div>
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiCheck, mdiCheckAll } from '@mdi/js'
import IconSvg from '@/components/icon/IconSvg.vue'

export default defineComponent({
  name: 'CheckboxBasics',
  components: {
    IconSvg,
  },
  props: {
    all: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    classnames(): string[] {
      let classnamesEachStatus: string[] = []

      if (this.disabled) {
        classnamesEachStatus = ['pointer-events-none', 'text-neutral-300']
      } else if (this.error) {
        classnamesEachStatus = ['text-error-500']
      } else {
        classnamesEachStatus = [
          'active:bg-information-200',
          'hover:bg-information-100',
        ]
      }
      return [
        ...classnamesEachStatus,
        'block',
        'cursor-pointer',
        'flex',
        'gap-2',
        'items-center',
        'leading-4',
        'p-1',
        'rounded',
        'transition-colors',
      ]
    },
    classnamesMark(): string[] {
      let classnamesEachStatus: string[] = []

      if (this.checked) {
        classnamesEachStatus = ['bg-information-500', 'border-information-500']
      } else if (this.disabled) {
        classnamesEachStatus = ['bg-neutral-100', 'border-neutral-300']
      } else if (this.error) {
        classnamesEachStatus = ['bg-error-50', 'border-error-500']
      } else {
        classnamesEachStatus = ['bg-neutral-50', 'border-neutral-500']
      }
      return [
        ...classnamesEachStatus,
        'border',
        'flex',
        'h-5',
        'items-center',
        'justify-center',
        'rounded',
        'text-neutral-50',
        'w-5',
      ]
    },
    icon(): string {
      return this.all ? mdiCheckAll : mdiCheck
    },
  },
})
</script>
