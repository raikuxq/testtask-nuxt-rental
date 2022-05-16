<template>
  <div :class="$style.inputNumber">
    <input
      :class="$style.input"
      v-bind="$attrs"
      @input="emitInput"
      type="number"
      inputmode="numeric"
    >
    <span :class="$style.label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseInputNumber',
  props: {
    value: {
      type: Number || null,
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

<style lang="scss" src="./BaseInputNumber.scss" module />
