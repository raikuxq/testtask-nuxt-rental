<template>
  <svg-icon :class="$style.logo" :name="getIconPath" />
</template>

<script>
export default {
  name: 'AppBrandLogo',
  computed: {
    isDarkThemeActive () {
      return this.$nuxt.$colorMode.value === 'dark'
    },
    getIconPath () {
      return this.isDarkThemeActive ? 'brand-logo-dark.svg' : 'brand-logo.svg'
    }
  }
}
</script>

<style lang="scss" module>
.logo {
  width: 100%;
  height: 100%;
}
</style>
