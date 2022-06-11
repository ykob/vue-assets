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
      <icon-basics v-show="checked" :d="icon" size="s" />
    </div>
    <div>
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiCheck, mdiCheckAll } from '@mdi/js'
import IconBasics from '@/components/icon/IconBasics.vue'

export default defineComponent({
  name: 'CheckboxBasics',
  components: {
    IconBasics,
  },
  props: {
    all: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classnames(): string[] {
      return [
        'block',
        'cursor-pointer',
        'flex',
        'gap-2',
        'items-center',
        'leading-4',
        'p-1',
        'rounded',
        'transition-colors',
        'active:bg-information-200',
        'hover:bg-information-100',
      ]
    },
    classnamesMark(): string[] {
      const classnamesChecked = this.checked
        ? ['bg-information-500', 'border-information-500']
        : ['bg-neutral-50', 'border-neutral-500']
      return [
        ...classnamesChecked,
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
