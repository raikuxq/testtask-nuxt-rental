<template>
  <form
    :class="$style.form"
    @submit.prevent="emitSubmit"
    v-on-clickaway="emitClose"
  >
    <div :class="$style.header">
      <span :class="$style.title">{{ title }}</span>

      <button
        type="button"
        :class="$style.close"
        @click="emitClose"
      >
        <svg-icon
          :class="$style.closeSvg"
          name="cross.svg"
        />
      </button>
    </div>

    <div :class="$style.fields">
      <slot name="fields"/>
    </div>

    <div :class="$style.actions">
      <slot name="actions">
        <base-button
          is-fullwidth
          :disabled="!isValid"
        >
          <span>Complete</span>
        </base-button>
      </slot>
    </div>
  </form>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'
import BaseButton from '~/components/_base/BaseButton'

export default {
  name: 'AppForm',
  components: {
    BaseButton
  },
  directives: {
    onClickaway
  },
  props: {
    title: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    emitSubmit () {
      if (this.isValid) {
        this.$emit('onsubmit')
      }
    },
    emitClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/base/typography.scss";

.form {
  position: relative;
  width: 100%;
  padding: $offset-800 $offset-900;
  background: $color-base-0;
  border-radius: $border-radius-l 0 0 $border-radius-l;
  @media (max-width: $screen-xl) {
    padding: $offset-400 $offset-400;
  }
  @media (max-width: $screen-md) {
    padding: $offset-300 $offset-200;
    border-radius: $border-radius-m $border-radius-m 0 0;
  }
}

.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $offset-500;
  @media (max-width: $screen-md) {
    margin-bottom: $offset-300;
  }
}

.title {
  @extend %h1;
  margin-bottom: 0;
}

.close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  padding: 0;
  margin: 0;
  border-radius: $border-radius-s;
  background: $color-base-50;
  cursor: pointer;
  user-select: none;
  transition: $transition-s ease;

  &:hover {
    box-shadow: inset 0 0 0 2px $color-base-100;

    .closeSvg {
      color: $color-base-600;
    }
  }

  &:focus {
    box-shadow: inset 0 0 15px -10px $brand-primary-500;
  }
}

.closeSvg {
  width: 24px;
  height: 24px;
  color: $color-base-500;
  transition: $transition-s ease;
}

.fields {
  display: flex;
  flex-direction: column;
  margin-bottom: $offset-500;
  @media (max-width: $screen-md) {
    margin-bottom: $offset-300;
  }
}

.actions {
  display: flex;
  justify-content: stretch;
  width: 100%;
}
</style>
