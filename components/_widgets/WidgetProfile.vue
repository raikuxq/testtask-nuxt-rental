<template>
  <div :class="$style.profile">
    <div :class="$style.name">
      <span :class="$style.nameText">Bessie Cooper</span>
    </div>
    <div :class="$style.picture">
      <img :class="$style.pictureImg" v-lazy="'/test-data/images/profile.jpg'">
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetProfile',
  props: {
    photoUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/base/typography.scss";

.profile {
  display: flex;
  align-items: center;
}

.name {
  margin: 0 $offset-200;
  @media (max-width: $screen-md) {
    display: none;
  }
}

.nameText {
  font-weight: 600;
  font-size: $font-size-m;
  color: $color-base-500;
}

.picture {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: $color-base-50;
  overflow: hidden;
  @media (max-width: $screen-md) {
    width: 32px;
    height: 32px;
  }
}

.pictureImg {
  object-fit: cover;
  object-position: center center;
}
</style>
