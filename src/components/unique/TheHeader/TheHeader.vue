<template>
  <div :class="$style.theHeader">
    <div :class="$style.brand">
      <nuxt-link id="logo" :class="$style.logo" to="/">
        <the-brand-logo />
      </nuxt-link>
      <span :class="$style.title">World's first affordable airsharing</span>
    </div>

    <div :class="$style.widgets">
      <div :class="$style.theme">
        <widget-theme />
      </div>
      <div :class="$style.panel">
        <div :class="$style.panelItem">
          <widget-message />
        </div>
        <div :class="$style.panelItem">
          <widget-notification />
        </div>
      </div>
      <div :class="$style.profile">
        <widget-profile />
      </div>
    </div>
  </div>
</template>

<script>
import WidgetMessage from '@/components/shared/WidgetMessage/WidgetMessage'
import WidgetNotification from '@/components/shared/WidgetNotification/WidgetNotification'
import WidgetTheme from '@/components/shared/WidgetTheme/WidgetTheme'
import WidgetProfile from '@/components/shared/WidgetProfile/WidgetProfile'
import TheBrandLogo from '@/components/shared/BaseLogoBrand/BaseLogoBrand'

export default {
  name: 'TheHeader',
  components: {
    WidgetTheme,
    WidgetNotification,
    WidgetMessage,
    WidgetProfile,
    TheBrandLogo
  }
}
</script>

<style module src="./TheHeader.scss" lang="scss" />
