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

<style lang="scss" src="./ProductList.scss" module />
