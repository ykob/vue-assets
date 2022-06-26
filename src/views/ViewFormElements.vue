<template>
  <h1 class="mb-8 text-5xl">Vue Assets / Form Elements</h1>
  <h2 class="mt-12 mb-4 text-3xl">Inputs</h2>
  <div class="flex flex-col gap-4 mb-4">
    <input-text v-model="inputText" placeholder="placeholder" />
  </div>
  <div class="flex flex-col gap-4">
    <input-multiline-text
      v-model="InputMultilineText"
      placeholder="placeholder"
    />
  </div>
  <h2 class="mt-12 mb-4 text-3xl">CheckBox</h2>
  <h3 class="mb-4 text-xl">Array</h3>
  <div class="mb-4">checkArray: {{ checkArray }}</div>
  <div class="flex gap-4 mb-4">
    <checkbox-all v-model="checkArray" :value="['check1', 'check2', 'check3']">
      Check All
    </checkbox-all>
    <checkbox-single v-model="checkArray" value="check1">
      Checkbox1
    </checkbox-single>
    <checkbox-single v-model="checkArray" value="check2">
      Checkbox2
    </checkbox-single>
    <checkbox-single v-model="checkArray" value="check3">
      Checkbox3
    </checkbox-single>
  </div>
  <h3 class="mb-4 text-xl">Boolean</h3>
  <div class="mb-4">checkBool: {{ checkBool }}</div>
  <div class="flex gap-4 mb-4">
    <checkbox-single v-model="checkBool" value="check">
      Checkbox has boolean
    </checkbox-single>
  </div>
  <h3 class="mb-4 text-xl">Disabled</h3>
  <div class="flex gap-4 mb-4">
    <checkbox-single disabled value="check">
      Checkbox has boolean
    </checkbox-single>
  </div>
  <h2 class="mt-12 mb-4 text-3xl">Radio</h2>
  <div class="mb-4">radioValue: {{ radioValue }}</div>
  <div class="flex gap-4 mb-4">
    <radio-button v-model="radioValue" value="radio1">
      RadioButton1
    </radio-button>
    <radio-button v-model="radioValue" value="radio2">
      RadioButton2
    </radio-button>
    <radio-button v-model="radioValue" value="radio3">
      RadioButton3
    </radio-button>
  </div>
  <h2 class="mt-12 mb-4 text-3xl">Toggle Switch</h2>
  <div>
    <toggle-switch v-model="toggleSwitchValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CheckboxAll from '@/components/form-element/CheckboxAll.vue'
import CheckboxSingle from '@/components/form-element/CheckboxSingle.vue'
import InputMultilineText from '@/components/form-element/InputMultilineText.vue'
import InputText from '@/components/form-element/InputText.vue'
import RadioButton from '@/components/form-element/RadioButton.vue'
import ToggleSwitch from '@/components/form-element/ToggleSwitch.vue'

export default defineComponent({
  name: 'ViewFormElements',
  components: {
    CheckboxAll,
    CheckboxSingle,
    InputMultilineText,
    InputText,
    RadioButton,
    ToggleSwitch,
  },
  data: () => ({
    checkArray: [],
    checkBool: false,
    inputText: '',
    InputMultilineText: '',
    radioValue: '',
    toggleSwitchValue: false,
  }),
})
</script>
