<template>
  <div :class="$style.wrap">
    <input
      :class="$style.input"
      v-bind="$attrs"
      @input="updateFile"
      type="file"
    >

    <div :class="$style.icon">
      <svg-icon :class="$style.iconSvg" name="picture-add.svg" />
    </div>

    <div :class="$style.filename" v-if="selectedFiles">
      <span>{{ selectedFiles }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInputFile',
  data () {
    return {
      file: null
    }
  },
  computed: {
    selectedFiles () {
      const fullPath = this.file?.toString()

      const fileName = fullPath?.split('\\').pop() || ''

      return fileName
    }
  },
  watch: {
    file (val) {
      this.emitFile(val)
    }
  },
  methods: {
    emitFile () {
      this.$emit('select', this.file)
    },
    updateFile (e) {
      this.file = e.target.value
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/form/input.scss";
@import "~@/assets/style/utils/positioning.scss";

.wrap {
  @extend %input;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  @media (max-width: $screen-md) {
    height: 250px;
  }
}

.input {
  @extend %full-absolute;
  opacity: 0;
  user-select: none;
  cursor: pointer;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 10px;
  background: $color-base-0;
  border-radius: $border-radius-s;
}

.iconSvg {
  width: 100%;
  height: 100%;
  color: $brand-primary-400
}

.filename {
  @extend %text;
  margin-top: $offset-200;
  font-size: $font-size-s;
}

</style>
