<template>
  <div :class="$style.terms">
    <div :class="$style.description">
      <p>{{ termsDescription }}</p>
    </div>

    <div :class="$style.conditions" v-if="termsConditions.length">
      <h2>Additional conditions:</h2>
      <ul>
        <li v-for="condition in termsConditions">
          {{ condition }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubRouteTerms',
  props: {
    termsDescription: {
      type: String,
      required: true
    },
    termsConditions: {
      type: Array || null,
      required: false,
      default: null
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
</style>
