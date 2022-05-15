<template>
  <div :class="$style.inputText">
    <input
      :class="$style.input"
      v-bind="$attrs"
      @input="emitInput"
      type="text"
    >
    <span :class="$style.label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseInputText',
  props: {
    value: {
      type: String || null,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    emitInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/form/input.scss";

.inputText {
  position: relative;
}
.input {
  @extend %input;
}
.label {
  @extend %input-label;
}
</style>
