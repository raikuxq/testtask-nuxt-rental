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
import WidgetMessage from '@/components/widgets/WidgetMessage/WidgetMessage'
import WidgetNotification from '@/components/widgets/WidgetNotification/WidgetNotification'
import WidgetTheme from '@/components/widgets/WidgetTheme/WidgetTheme'
import WidgetProfile from '@/components/widgets/WidgetProfile/WidgetProfile'
import TheBrandLogo from '@/components/TheBrandLogo'

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

<style module lang="scss">
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/base/typography.scss";

.theHeader {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: $screen-md) {
    padding: 0 $offset-200;
  }
}

.brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.widgets {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 100%;
  height: 100%;
  max-width: 170px;
  margin-right: 65px;
  transition: $transition-s ease;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  @media (max-width: $screen-md) {
    max-width: 115px;
    margin-right: 0;
  }
}

.title {
  @extend %text;
  font-size: $font-size-m;
  @media (max-width: $screen-lg) {
    display: none;
  }
}

.theme {
  margin-right: $offset-1100;
  @media (max-width: $screen-xl) {
    margin: 0;
  }
}

.panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: $offset-50;
  margin-right: $offset-300;
  @media (max-width: $screen-xl) {
    margin-left: 0;
    margin-right: $offset-300;
  }
}

.panelItem {
  margin: 0 $offset-50;
  @media (max-width: $screen-xl) {
    margin: 0;
  }
}
</style>
