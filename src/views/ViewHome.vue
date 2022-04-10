<template>
  <h2 class="mb-4 text-3xl">Buttons</h2>
  <ButtonBasics> Button Basics </ButtonBasics>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonBasics from '@/components/button/ButtonBasics.vue'

export default defineComponent({
  name: 'ViewHome',
  components: {
    ButtonBasics,
  },
})
</script>
