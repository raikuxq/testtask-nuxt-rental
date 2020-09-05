<template>
  <div :class="$style.specifications">
    <div :class="$style.description">
      <p>{{ specificationsDescription }}</p>
    </div>

    <div :class="$style.features" v-if="hasSpecifications">
      <h2>Features:</h2>

      <div
        :class="$style.featuresItem"
        v-for="feature in specificationsFeatures"
        :key="feature.title"
      >
        <feature
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Feature from '@/components/Feature/Feature'

export default {
  name: 'SubRouteSpecifications',
  components: {
    Feature
  },
  props: {
    specificationsDescription: {
      type: String,
      required: false,
      default: ''
    },
    specificationsFeatures: {
      type: Array || null,
      required: false,
      default: null
    }
  },
  computed: {
    hasSpecifications () {
      return this.specificationsFeatures?.length > 0
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/base/typography.scss";
@import "~@/assets/style/variables/varibales.scss";

.description {
  margin-bottom: $offset-400;
}

.featuresItem {
  margin-bottom: $offset-300;
}

</style>
