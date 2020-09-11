<template>
  <transition name="t-fade" appear>
    <div :class="$style.error">
      <div :class="$style.main">
        <h1 :class="$style.title">
          {{ getErrorTitle }}
        </h1>

        <div :class="$style.info" v-if="shouldGoToHomepage">
          <span :class="$style.message">Go back to the homepage:</span>
          <base-button
            @click.native="goToHomePage"
            aria-label="Homepage"
          >
            <span>Homepage</span>
          </base-button>
        </div>

        <div :class="$style.info" v-else>
          <span :class="$style.message">Please refresh the page</span>
          <base-button
            @click.native="refreshPage"
            aria-label="Reload page"
          >
            <span>Reload page</span>
          </base-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseButton from '@/components/_base/BaseButton'

export default {
  components: {
    BaseButton
  },
  props: {
    error: {
      type: Object || null,
      default: null
    }
  },
  head: {
    title: `An error has occured | Pepelane`
  },
  computed: {
    getErrorTitle () {
      if (this.error) {
        switch (this.error.statusCode) {
          case 400:
            return 'Bad Request'
          case 401:
            return 'Unauthorized'
          case 403:
            return 'Forbidden'
          case 404:
            return 'Page not found'
          default:
            return 'An error has occured'
        }
      } else {
        return 'An error has occured'
      }
    },
    shouldGoToHomepage () {
      if (this.error) {
        switch (this.error.statusCode) {
          case 400:
          case 401:
          case 403:
          case 404:
            return true
          default:
            return false
        }
      } else {
        return false
      }
    }
  },
  methods: {
    refreshPage () {
      this.$router.go(0)
    },
    goToHomePage () {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/base/typography.scss";
@import "~@/assets/style/utils/positioning.scss";

.error {
  @extend %full-absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $border-radius-xl;
  background: $color-base-50;

}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.message {
  @extend %text;
  font-size: $font-size-s;
  margin-bottom: $offset-500;
}

</style>
