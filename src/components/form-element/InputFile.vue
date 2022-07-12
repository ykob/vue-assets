<template>
  <input type="file" :disabled="disabled" :value="modelValue" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputFile',
})
</script>
