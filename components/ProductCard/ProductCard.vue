<template>
  <nuxt-link :class="$style.card" :to="linkProduct">
    <div :class="$style.picture">
      <img v-lazy="picture">
    </div>

    <div :class="$style.content">
      <div :class="$style.title">
        <h3>{{ title }}</h3>
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

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/base/typography.scss";

$picture-size: 88px;

.card {
  display: flex;
  justify-content: space-between;
  min-height: 164px;
  height: 100%;
  padding: $offset-300 $offset-400;
  border-radius: $border-radius-l;
  background: $color-base-0;
  text-decoration: none;
  transition: $transition-s ease;
  @media (max-width: $screen-md) {
    padding: $offset-250;
    border-radius: $border-radius-m;
  }

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 35px -20px $color-base-200;
    @media (min-width: $screen-lg) {
      transform: scale(1.1);
    }
  }
}

.title {
  margin-bottom: $offset-150;
}

.content {
  flex-grow: 1;
  padding: $offset-150 0 0;
}

.description {
  margin-bottom: $offset-200;
}

.descriptionText {
  font-size: $font-size-xs;
}

.priceText {
  font-weight: 600;
  font-size: $font-size-s;
  color: $brand-secondary-400;
}

.picture {
  max-width: $picture-size;
  min-width: $picture-size;
  height: $picture-size;
  overflow: hidden;
  margin-right: $offset-300;
  transition: $transition-s ease;
  background-color: $color-base-50;
  border-radius: $border-radius-m;
  @media (max-width: $screen-md) {
    border-radius: $border-radius-s;
  }
}
</style>
