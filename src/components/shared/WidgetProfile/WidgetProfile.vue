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

<style lang="scss" src="./WidgetProfile.scss" module />
