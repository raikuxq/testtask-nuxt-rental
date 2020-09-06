<template>
  <div :class="[$style.layout, ...getClassModifiers]">
    <header :class="$style.header">
      <app-header />
    </header>

    <main :class="$style.main">
      <nuxt />
    </main>

    <transition name="t-fade">
      <div :class="$style.modals" v-if="isAnyModalActive">
        <app-modals-manager />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppHeader from '@/components/_app/AppHeader'
import AppModalsManager from '~/components/_app/AppModalsManager'

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppModalsManager
  },
  computed: {
    ...mapGetters('modals', [
      'isAnyModalActive',
      'isFormAddVehicleActive'
    ]),
    getClassModifiers () {
      return ({
        [this.$style.isFixed]: this.isAnyModalActive
      })
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/utils/positioning.scss";

$header-size: 56px;
$header-offset: $offset-500;

.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: $screen-xxxl;
  margin: 0 auto;
  padding: $offset-600 $offset-800;
  background: $color-base-0;

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
}

</style>
