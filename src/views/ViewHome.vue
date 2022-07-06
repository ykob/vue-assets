<template>
  <h1 class="mb-8 text-5xl">Vue Assets</h1>
  <div class="flex flex-col gap-2 items-start">
    <button-transparent
      :icon="icon.mdiArrowRight"
      tag="router-link"
      to="/buttons"
      shrink
    >
      Buttons
    </button-transparent>
    <button-transparent
      :icon="icon.mdiArrowRight"
      tag="router-link"
      to="/form-elements"
      shrink
    >
      Form Elements
    </button-transparent>
    <button-transparent
      :icon="icon.mdiArrowRight"
      tag="router-link"
      to="/icons"
      shrink
    >
      Icons
    </button-transparent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiArrowRight } from '@mdi/js'
import ButtonTransparent from '@/components/button/ButtonTransparent.vue'

export default defineComponent({
  name: 'ViewHome',
  components: { ButtonTransparent },
  data: () => ({
    icon: {
      mdiArrowRight,
    },
  }),
})
</script>
