<template>
  <div :class="$style.feature">
    <div :class="$style.icon">
      <svg-icon
        :class="$style.iconSvg"
        :name="icon"
      />
    </div>

    <div :class="$style.content">
      <div :class="$style.title">
        <h3>{{ title }}</h3>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/base/typography.scss";

.feature {
  display: flex;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 80px;
  height: 96px;
  margin-right: $offset-300;
  background: $color-base-50;
  border-radius: $border-radius-s;
}

.iconSvg {
  width: 32px;
  height: 32px;
  color: $color-base-300;
}

.content {
  padding-top: $offset-200;
}

.title {
  margin-bottom: $offset-100;
}
</style>
