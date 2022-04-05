<template>
  <h2>Buttons</h2>
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
