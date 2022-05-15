<template>
  <div :class="$style.profile">
    <div :class="$style.name">
      <span :class="$style.nameText">{{ nameLabel }}</span>
    </div>
    <div :class="$style.picture">
      <img :class="$style.pictureImg" v-lazy="photoUrl">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WidgetProfile',
  computed: {
    ...mapState('user', [
      'userData'
    ]),
    nameLabel() {
      return this.userData.name
    },
    photoUrl() {
      return this.userData.photo
    }
  },
  fetch () {
    this.$store.dispatch('user/fetchUserData')
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
