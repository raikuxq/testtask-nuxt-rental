<template>
  <div :class="[$style.layout, ...getClassModifiers]">
    <div :class="[$style.layoutInner, ...getClassModifiers]">
      <header :class="$style.header">
        <the-header />
      </header>

      <main :class="$style.main">
        <nuxt />
      </main>
    </div>


    <transition name="t-fade">
      <div :class="$style.modals" v-if="isAnyModalActive">
        <portal-target name="modal" :class="$style.modalsInner" />
      </div>
    </transition>

  </div>
</template>

<script>
import { Wormhole } from 'portal-vue'


import TheHeader from '@/components/unique/TheHeader/TheHeader'

export default {
  name: 'Layout',
  components: {
    TheHeader,
  },
  computed: {
    getClassModifiers () {
      return ({
        [this.$style.isFixed]: this.isAnyModalActive
      })
    },
    isAnyModalActive () {
      return Wormhole.hasContentFor('modal')
    }
  }
}
</script>

<style lang="scss" module>
@import "~assets/style/variables/varibales.scss";
@import "~assets/style/utils/positioning.scss";

$header-size: 56px;
$header-offset: $offset-500;

.layout {
  background: $color-base-0;
}

.layoutInner {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: $screen-xxxl;
  margin: 0 auto;
  padding: $offset-600 $offset-800;

  @media (max-width: $screen-xl) {
    padding: $offset-300 $offset-400;
  }
  @media (max-width: $screen-md) {
    padding: $offset-150 0;
  }

  &.isFixed {
    max-height: 100vh;
    overflow: hidden;
  }
}

.header {
  height: $header-size;
  margin-bottom: $header-offset;

  @media (max-width: $screen-md) {
    margin-bottom: $offset-100;
  }
}

.main {
  position: relative;
  flex-grow: 1;
  min-height: calc(100vh - #{$header-size + $header-offset + $offset-600 * 2});
}

.modals {
  @extend %full-absolute;
  background: rgba(52, 79, 106, 0.32);
  backdrop-filter: blur(32px);
  overflow-x: hidden;
}

.modalsInner {
  height: 100%;
}

</style>
