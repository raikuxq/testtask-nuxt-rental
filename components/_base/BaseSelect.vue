<template>
  <div :class="$style.wrap">
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

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~assets/style/base/typography.scss";
@import "~@/assets/style/utils/positioning.scss";

.wrap {
  position: relative;
  display: flex;
  align-items: center;
  color: $brand-primary-400;
  transition: $transition-s;

  &:hover {
    color: $brand-primary-500;
  }
}

.select {
  padding-left: 5px;
  padding-right: 35px;
  border: none;
  color: currentColor;
  font-weight: 600;
  background: none;
  appearance: none;
  user-select: none;
  box-shadow: none;
  cursor: pointer;
  @media (max-width: $screen-md) {
    padding-right: $offset-200;
  }

  &::-ms-expand {
    display: none;
  }
}

.option {
  font-size: $font-size-l;
  font-weight: 600;
  color: $color-base-500;
}

.arrow {
  @extend %center-y-absolute;
  right: 0;
  width: 32px;
  height: 32px;
  pointer-events: none;
  @media (max-width: $screen-md) {
    width: 16px;
    height: 16px;
  }
}

</style>
