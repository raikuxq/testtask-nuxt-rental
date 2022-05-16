<template>
  <div :class="$style.wrapSelect">
    <select
      :class="$style.select"
      @change="emitSelect"
    >
      <option
        :class="$style.option"
        v-for="option in options"
        :value="option.value"
        :selected="option === activeOption"
      >
        {{ option.label }}
      </option>
    </select>
    <svg-icon
      :class="$style.arrow"
      name="arrow-down.svg"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    activeOption: {
      type: String,
      required: true
    }
  },
  methods: {
    emitSelect (e) {
      this.$emit('select', e.target.value)
    }
  }
}
</script>

<style lang="scss" src="./BaseSelect.scss" module />
