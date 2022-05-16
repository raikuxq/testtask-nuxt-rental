<template>
  <button :class="[$style.button, ...getModifiers]" v-bind="$attrs">
    <span :class="$style.text" aria-hidden="true">
      <slot />
    </span>

    <span :class="$style.icon" v-if="icon" aria-hidden="true">
      <svg-icon :class="$style.iconSvg" :name="icon" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    icon: {
      type: String,
      required: false,
      default: ''
    },
    isFullwidth: {
      type: Boolean,
      required: false,
      default: false
    },
    isSeparatedIcon: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    hasSeparatedIcon () {
      return Boolean(this.icon) && Boolean(this.isSeparatedIcon)
    },
    getModifiers () {
      return ({
        [this.$style.isSeparated]: this.hasSeparatedIcon,
        [this.$style.isFullwidth]: this.isFullwidth
      })
    }
  }
}
</script>

<style lang="scss" src="./BaseButton.scss" module />
