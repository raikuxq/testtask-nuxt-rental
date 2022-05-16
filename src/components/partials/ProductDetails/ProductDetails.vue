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
          <div :class="$style.tab">
            <nuxt-link :to="subLinkSpecs">
              Specifications
            </nuxt-link>
          </div>
          <div :class="$style.tab">
            <nuxt-link :to="subLinkTeam">
              Team
            </nuxt-link>
          </div>
          <div :class="$style.tab">
            <nuxt-link :to="subLinkTerms">
              Rent terms
            </nuxt-link>
          </div>



        </div>

        <div :class="$style.infoContent">
          <slot name="info">

          </slot>
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
  name: 'ProductDetails',
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

<style module lang="scss" src="./ProductDetails.scss" />
