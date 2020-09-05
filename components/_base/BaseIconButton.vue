<template>
  <button :class="[$style.button, ...getModifiers]" v-blur>
    <svg-icon
      :class="$style.icon"
      :name="icon"
    />
    <span :class="$style.text">{{ text }}</span>
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

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~assets/style/base/typography.scss";

.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: $transition-s;
  @media (max-width: $screen-md) {
    width: 35px;
    height: 35px;
  }

  &.hasText {
    @media (min-width: $screen-xl-min) {
      width: auto;
    }
  }
}

.icon {
  width: 24px;
  height: 24px;
  color: $color-base-200;
  transition: $transition-s;
  pointer-events: none;
  @media (max-width: $screen-md) {
    width: 20px;
    height: 20px;
  }

  .button.hasText & {
    margin: 0 $offset-200;
  }
}

.icon,
.text {
  .button:hover & {
    color: $color-base-300;
  }

  .button:focus & {
    color: $color-base-600;
  }
}

.text {
  @extend %text;
  display: flex;
  align-items: center;
  font-size: $font-size-m;
  transition: $transition-s;
  @media (max-width: $screen-xl) {
    display: none;
  }
}
</style>
