<template>
  <button :class="[$style.button, ...getModifiers]" v-blur>
    <span :class="$style.text">
      <slot />
    </span>

    <span :class="$style.icon" v-if="icon">
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

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";

.button {
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  border: none;

  border-radius: $border-radius-xs;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &.isFullwidth {
    display: flex;
    width: 100%;
  }

  // default button
  &:not(.isSeparated) {
    padding: $offset-200 $offset-400;
    @media (max-width: $screen-md) {
      padding: $offset-100 $offset-300;
    }

    background-color: $brand-primary-400;
    color: #ffffff;
    transition: $transition-s;

    &:hover {
      background-color: $brand-primary-500;
    }

    &:focus {
      outline: none;
      background-color: $brand-primary-600;
    }
  }

  // button with separated icon
  &.isSeparated {
    padding: 0;
    color: $brand-primary-400;
    background: none;

    &:hover {
      color: $brand-primary-500;

      .icon {
        background-color: $brand-primary-500;
        box-shadow: 0 0 15px -5px $brand-primary-500;
      }
    }

    &:focus {
      color: $brand-primary-600;
      outline: none;

      .icon {
        background-color: $brand-primary-600;
      }
    }

    .text {
      margin: 0 $offset-150;
      @media (max-width: $screen-md) {
        margin: 0;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      width: 48px;
      background-color: $brand-primary-400;
      border-radius: $border-radius-s;
      transition: $transition-s;
      @media (max-width: $screen-md) {
        width: 32px;
        height: 32px;
        border-radius: $border-radius-xxs;
      }
    }

  }
}

.text {
  display: inline-block;
  padding: 0 $offset-100;
  font-size: $font-size-m;
  line-height: 1;
  color: currentColor;
  transition: $transition-s;
}

.iconSvg {
  width: 24px;
  height: 24px;
  color: #ffffff;
}

</style>
