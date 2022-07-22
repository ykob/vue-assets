<template>
  <h1 class="mb-8 text-5xl">Vue Assets / Form Elements</h1>
  <h2 class="mt-12 mb-4 text-3xl">Inputs</h2>
  <div class="flex gap-4 mb-4">
    <input-text v-model="inputText" placeholder="placeholder" />
    <input-text v-model="inputText" error placeholder="has error" />
    <input-text v-model="inputText" disabled placeholder="disabled" />
  </div>
  <div class="flex gap-4 mb-4">
    <input-multiline-text
      v-model="inputMultilineText"
      placeholder="placeholder"
    />
    <input-multiline-text
      v-model="inputMultilineText"
      error
      placeholder="has error"
    />
    <input-multiline-text
      v-model="inputMultilineText"
      disabled
      placeholder="disabled"
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
    <checkbox-single v-model="checkBool" disabled value="check">
      Checkbox has boolean
    </checkbox-single>
  </div>
  <h3 class="mb-4 text-xl">Has Error</h3>
  <div class="flex gap-4 mb-4">
    <checkbox-single v-model="checkBool" error value="check">
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
  <h3 class="mb-4 text-xl">Disabled</h3>
  <div class="flex gap-4 mb-4">
    <radio-button v-model="radioValue" disabled value="radio1">
      RadioButton1
    </radio-button>
  </div>
  <h3 class="mb-4 text-xl">Has Error</h3>
  <div class="flex gap-4 mb-4">
    <radio-button v-model="radioValue" error value="radio1">
      RadioButton1
    </radio-button>
  </div>
  <h2 class="mt-12 mb-4 text-3xl">Toggle Switch</h2>
  <div class="flex gap-4 mb-4">
    <toggle-switch v-model="toggleSwitchValue1" />
    <toggle-switch
      v-model="toggleSwitchValue2"
      label-off="False"
      label-on="True"
    />
  </div>
  <h3 class="mb-4 text-xl">Disabled</h3>
  <div class="flex gap-4 mb-4">
    <toggle-switch v-model="toggleSwitchValueDisabled1" disabled />
    <toggle-switch v-model="toggleSwitchValueDisabled2" disabled />
  </div>
  <h3 class="mb-4 text-xl">Has Error</h3>
  <div class="flex gap-4 mb-4">
    <toggle-switch v-model="toggleSwitchValue1" error />
  </div>
  <h2 class="mt-12 mb-4 text-3xl">File</h2>
  <div class="flex gap-4 mb-4">
    <input-file v-model="inputFile" key-prefix="input-file" multiple />
  </div>
  <h3 class="mb-4 text-xl">Disabled</h3>
  <div class="flex gap-4 mb-4">
    <input-file
      v-model="inputFile"
      disabled
      key-prefix="input-file-disabled"
      multiple
    />
  </div>
  <h2 class="mt-12 mb-4 text-3xl">Image</h2>
  <div class="flex gap-4 mb-4">
    <input-image v-model="inputImage" key-prefix="input-image" multiple />
  </div>
  <h3 class="mb-4 text-xl">Disabled</h3>
  <div class="flex gap-4 mb-4">
    <input-image
      v-model="inputImage"
      disabled
      key-prefix="input-image-disabled"
      multiple
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CheckboxAll from '@/components/form-element/CheckboxAll.vue'
import CheckboxSingle from '@/components/form-element/CheckboxSingle.vue'
import InputFile from '@/components/form-element/InputFile.vue'
import InputImage from '@/components/form-element/InputImage.vue'
import InputMultilineText from '@/components/form-element/InputMultilineText.vue'
import InputText from '@/components/form-element/InputText.vue'
import RadioButton from '@/components/form-element/RadioButton.vue'
import ToggleSwitch from '@/components/form-element/ToggleSwitch.vue'

export default defineComponent({
  name: 'ViewFormElements',
  components: {
    CheckboxAll,
    CheckboxSingle,
    InputFile,
    InputImage,
    InputMultilineText,
    InputText,
    RadioButton,
    ToggleSwitch,
  },
  data: (): {
    checkArray: boolean[]
    checkBool: boolean
    inputText: string
    inputMultilineText: string
    radioValue: string
    toggleSwitchValue1: boolean
    toggleSwitchValue2: boolean
    toggleSwitchValueDisabled1: boolean
    toggleSwitchValueDisabled2: boolean
    inputFile: FileList | null
    inputImage: FileList | null
  } => ({
    checkArray: [],
    checkBool: false,
    inputText: '',
    inputMultilineText: '',
    radioValue: '',
    toggleSwitchValue1: false,
    toggleSwitchValue2: false,
    toggleSwitchValueDisabled1: false,
    toggleSwitchValueDisabled2: true,
    inputFile: null,
    inputImage: null,
  }),
})
</script>
