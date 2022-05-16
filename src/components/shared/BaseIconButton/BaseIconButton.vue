<template>
  <button :class="[$style.button, ...getModifiers]" v-bind="$attrs">
    <svg-icon
      :class="$style.icon"
      :name="icon"
    />
    <span :class="$style.text" aria-hidden="true">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'BaseIconButton',
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    getModifiers () {
      return ({
        [this.$style.hasText]: Boolean(this.text)
      })
    }
  }
}
</script>

<style lang="scss" src="./BaseIconButton.scss" module />
