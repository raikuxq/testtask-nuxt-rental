<template>
  <div :class="$style.inputFile">
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
      // return null
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

<style lang="scss" src="./BaseInputFile.scss" module />
