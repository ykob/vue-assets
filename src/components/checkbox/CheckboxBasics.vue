<template>
  <label class="checkbox" :disabled="disabled">
    <input
      type="checkbox"
      v-bind="$attrs"
      :value="value"
      :checked="checked"
      :disabled="disabled"
    />
    <div></div>
    <div>
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CheckboxBasics',
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
})
</script>
