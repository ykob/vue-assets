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
import { mdiCheck } from '@mdi/js'
import IconBasics from '@/components/icon/IconBasics.vue'

export default defineComponent({
  name: 'CheckboxBasics',
  components: {
    IconBasics,
  },
  props: {
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
  data: () => ({
    icon: mdiCheck,
  }),
  computed: {
    classnames(): string[] {
      return ['cursor-pointer', 'gap-2', 'items-center', 'flex']
    },
    classnamesMark(): string[] {
      const classnamesChecked = this.checked
        ? ['bg-primary-500', 'border-primary-500']
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
  },
})
</script>
