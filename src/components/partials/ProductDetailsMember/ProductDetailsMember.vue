<template>
  <div :class="$style.member">
    <div :class="$style.picture">
      <img :class="$style.pictureImg" v-lazy="imageUrl">
    </div>
    <div :class="$style.info">
      <div :class="$style.name">
        <h3>{{ name }}</h3>
      </div>
      <div :class="$style.description">
        <p>{{ jobTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailsMember',
  props: {
    name: {
      type: String,
      required: true
    },
    jobTitle: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./ProductDetailsMember.scss" module />
