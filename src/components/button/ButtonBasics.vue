<template>
  <component
    class="flex items-center justify-center"
    :class="classnames"
    :is="tag"
    @click="handleClick"
  >
    <span
      v-if="loading === true"
      class="absolute flex h-full items-center justify-center left-0 top-0 w-full"
    >
      <icon-loading :size="iconSize" />
    </span>
    <span :class="classnamesInner">
      <icon-svg v-if="icon !== undefined" :d="icon" :size="iconSize" />
      <slot></slot>
    </span>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import IconLoading from '@/components/icon/IconLoading.vue'
import IconSvg from '@/components/icon/IconSvg.vue'
import { IconSize } from '@/types/'

export default defineComponent({
  name: 'ButtonBasics',
  emits: ['accepted'],
  components: {
    IconLoading,
    IconSvg,
  },
  props: {
    icon: {
      type: String || undefined,
      default: undefined,
    },
    iconSize: {
      type: String as PropType<IconSize>,
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
    classnamesInner(): string[] {
      const classnamesBase = ['flex', 'gap-1', 'items-center']
      return this.loading ? [...classnamesBase, 'opacity-0'] : classnamesBase
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
