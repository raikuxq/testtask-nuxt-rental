<template>
  <base-icon-button
    :icon="getIcon"
    :text="getText"
    @click.native="changeTheme"
    aria-label="Toggle theme"
  />
</template>

<script>
import BaseIconButton from '@/components/shared/BaseIconButton/BaseIconButton'

export default {
  name: 'WidgetTheme',
  components: {
    BaseIconButton
  },
  computed: {
    isDarkThemeActive () {
      return this.$nuxt.$colorMode.value === 'dark'
    },
    getIcon () {
      return this.isDarkThemeActive ? 'day.svg' : 'night.svg'
    },
    getText () {
      return this.isDarkThemeActive ? 'Day mod' : 'Night mod'
    }
  },
  methods: {
    changeTheme () {
      this.$nuxt.$colorMode.preference = this.isDarkThemeActive ? 'light' : 'dark'
    }
  }
}
</script>
