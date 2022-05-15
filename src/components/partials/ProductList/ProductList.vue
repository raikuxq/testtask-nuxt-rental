<template>
  <div :class="$style.list">
    <div
      :class="$style.listItem"
      v-for="item in items"
      :key="item.id"
    >
      <product-card
        :key="item.id"
        :id="item.id"
        :price="item.rent"
        :picture="item.preview"
        :title="item.name"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/partials/ProductCard/ProductCard'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/utils/grid.scss";

$gap-desktop: $offset-400;
$gap-mobile: $offset-150;

.list {
  @media (min-width: $screen-lg-min) {
    @include gridContainer($gap-desktop)
  }

  @media (max-width: $screen-lg) {
    @include gridContainer($gap-mobile)
  }
}

.listItem {
  @media (min-width: $screen-xxl-min) {
    @include gridItem(4, $gap-desktop)
  }

  @media (min-width: $screen-lg-min) and (max-width: $screen-xxl) {
    @include gridItem(3, $gap-desktop)
  }

  @media (min-width: $screen-sm-min) and (max-width: $screen-lg) {
    @include gridItem(2, $gap-mobile)
  }

  @media (max-width: $screen-sm) {
    @include gridItem(1, $gap-mobile)
  }
}

</style>
