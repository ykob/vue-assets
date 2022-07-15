<template>
  <component
    class="flex items-center justify-center"
    :class="classnames"
    :is="tag"
    @click="handleClick"
  >
    <icon-svg v-if="icon !== undefined" :d="icon" :size="iconSize" />
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconSvg from '@/components/icon/IconSvg.vue'

export default defineComponent({
  name: 'ButtonBasics',
  emits: ['accepted'],
  components: {
    IconSvg,
  },
  props: {
    icon: {
      type: String || undefined,
      default: undefined,
    },
    iconSize: {
      type: String,
      default: 'm',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'button',
    },
  },
  computed: {
    classnames(): string[] {
      if (this.loading === true) {
        return ['pointer-events-none']
      } else {
        return []
      }
    },
  },
  methods: {
    handleClick() {
      if (this.loading === true) return
      this.$emit('accepted')
    },
  },
})
</script>
