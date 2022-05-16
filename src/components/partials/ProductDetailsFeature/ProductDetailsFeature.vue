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
  name: 'ProductDetailsFeature',
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

<style lang="scss" src="./ProductDetailsFeature.scss" module>
