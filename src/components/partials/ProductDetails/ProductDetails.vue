<template>
  <div :class="$style.productDetails">
    <div :class="$style.picture">
      <img :class="$style.pictureImg" v-lazy="imageUrl">
    </div>

    <div :class="$style.content">
      <div :class="$style.heading">
        <h1 :class="$style.title">
          {{ title }}
        </h1>
      </div>

      <div :class="$style.info">
        <div :class="$style.infoNav">
          <nuxt-link :class="$style.tab" :to="subLinkSpecs" v-blur>
            Specifications
          </nuxt-link>
          <nuxt-link :class="$style.tab" :to="subLinkTeam" v-blur>
            Team
          </nuxt-link>
          <nuxt-link :class="$style.tab" :to="subLinkTerms" v-blur>
            Rent terms
          </nuxt-link>
        </div>

        <div :class="$style.infoContent">
          <nuxt-child
            :key="$route.params.id"
            :specifications-features="specificationFeatures"
            :specifications-description="specificationText"
            :team-members="teamMembers"
            :team-description="teamText"
            :terms-conditions="termConditions"
            :terms-description="termText"
          />
        </div>
      </div>

      <div :class="$style.action">
        <div :class="$style.actionInfo" v-if="price">
          <span :class="$style.actionText">Rent for</span>
          <span :class="$style.actionPrice">{{ price | toCurrency }}/h</span>
        </div>

        <div :class="$style.actionBtn">
          <base-button
            @click.native="requestProduct"
            aria-label="Details"
          >
            <span>Rent now</span>
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/shared/BaseButton/BaseButton'

export default {
  name: 'Product',
  components: {
    BaseButton
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    specificationText: {
      type: String,
      required: false,
      default: ''
    },
    specificationFeatures: {
      type: Array || null,
      required: false,
      default: null
    },
    teamText: {
      type: String,
      required: false,
      default: ''
    },
    teamMembers: {
      type: Array || null,
      required: false,
      default: null
    },
    termText: {
      type: String,
      required: false,
      default: ''
    },
    termConditions: {
      type: Array || null,
      required: false,
      default: null
    }
  },
  computed: {
    subLinkSpecs () {
      return ({
        ...this.$route,
        name: 'products-id-specifications'
      })
    },
    subLinkTeam () {
      return ({
        ...this.$route,
        name: 'products-id-team'
      })
    },
    subLinkTerms () {
      return ({
        ...this.$route,
        name: 'products-id-terms'
      })
    }
  },
  methods: {
    requestProduct () {
      /**
       * Rent request here
       */
    }
  }
}
</script>

<style module lang="scss">
@import "~@/assets/style/variables/varibales.scss";

$picture-percent: 50%;
$picture-percent-xxl: 55%;
$picture-max-height: 700px;
$picture-max-height-md: 530px;
$picture-max-height-xs: 330px;

.productDetails {
  display: flex;
  justify-content: space-between;
  @media (max-width: $screen-lg) {
    flex-direction: column;
    padding: 0 $offset-300 $offset-300;
  }
  @media (max-width: $screen-md) {
    padding: 0 $offset-200 $offset-800;
  }
}

.picture {
  height: $picture-max-height;
  max-width: $picture-percent;
  width: 100%;
  overflow: hidden;
  border-radius: $border-radius-m;
  background: $color-base-50;
  @media (max-width: $screen-xxl) {
    max-width: $picture-percent-xxl;
  }
  @media (max-width: $screen-lg) {
    height: $picture-max-height-md;
    max-width: none;
    margin-bottom: $offset-500;
  }
  @media (max-width: $screen-md) {
    height: $picture-max-height-xs;
    border-radius: $border-radius-s;
    margin-bottom: $offset-300;
  }
}

.pictureImg {
  object-fit: cover;
  object-position: center center;
}

.content {
  margin-left: $offset-800;
  max-width: calc(100% - #{$picture-percent} - #{$offset-800});
  flex-grow: 1;
  padding: $offset-700 0 0;
  @media (max-width: $screen-xxl) {
    max-width: calc(100% - #{$picture-percent-xxl} - #{$offset-800});
  }
  @media (max-width: $screen-xl) {
    padding-top: $offset-300;
  }
  @media (max-width: $screen-lg) {
    margin: 0;
    padding: 0;
    max-width: none;
  }
}

.heading {
  margin-bottom: $offset-400;
  @media (max-width: $screen-md) {
    margin-bottom: $offset-200;
  }
}

.title {
  margin: 0;
}

.info {
  margin-bottom: $offset-400;
}

.infoNav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: $offset-400;
  @media (max-width: $screen-md) {
    margin-bottom: $offset-250;
  }
}

.tab {
  font-size: $font-size-m;
  font-weight: 600;
  color: $color-base-300;
  transition: $transition-s;
  text-decoration: none;
  margin-right: $offset-400;
  @media (max-width: $screen-md) {
    margin-right: $offset-300;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: $color-base-500;
  }
}

.action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $offset-200 $offset-400;
  background: $color-base-50;
  border-radius: $border-radius-s;
  @media (max-width: $screen-md) {
    position: fixed;
    left: $offset-200;
    bottom: $offset-200;
    padding: $offset-200 $offset-300;
    width: calc(100% - #{$offset-200 * 2});
    box-shadow: 0 0 $offset-300 0 $color-base-50;
  }
}

.actionInfo {
  font-weight: 600;
  font-size: $font-size-l;
  @media (max-width: $screen-md) {
    font-size: $font-size-m;
  }
}

.actionText {
  color: $color-base-400;
}

.actionPrice {
  color: $brand-secondary-400;
}

</style>

<style lang="scss">
@import "~@/assets/style/variables/varibales.scss";

.nuxt-link-active {
  color: $brand-primary-400;
  &:hover {
    color: $brand-primary-400;
    cursor: default;
  }
}
</style>
