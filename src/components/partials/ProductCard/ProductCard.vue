<template>
  <nuxt-link :class="$style.card" :to="linkProduct">
    <div :class="$style.picture">
      <img v-lazy="picture">
    </div>

    <div :class="$style.content">
      <div :class="$style.title">
        <span :class="$style.titleText">{{ title }}</span>
      </div>

      <div :class="$style.description">
        <p :class="$style.descriptionText">
          {{ description }}
        </p>
      </div>

      <div :class="$style.price" v-if="price">
        <span :class="$style.priceText">{{ price | toCurrency }}/h</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    picture: {
      type: String,
      required: false,
      default: ''
    },
    price: {
      type: Number,
      required: true
    }
  },
  computed: {
    linkProduct () {
      return ({
        name: 'products-id',
        params: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style lang="scss" src="./ProductCard.scss" module />
