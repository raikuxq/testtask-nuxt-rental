<template>
  <form
    :class="$style.form"
    v-on-clickaway="emitClose"
    @keyup.esc.prevent="emitClose"
    @submit.prevent="emitSubmit"
  >
    <div :class="$style.header">
      <span :class="$style.title">{{ title }}</span>

      <button
        :class="$style.close"
        @click="emitClose"
        type="button"
      >
        <svg-icon
          :class="$style.closeSvg"
          name="cross.svg"
        />
      </button>
    </div>

    <div :class="$style.fields">
      <slot name="fields" />
    </div>

    <div :class="$style.actions">
      <slot name="actions">
        <base-button
          :disabled="!isValid"
          is-fullwidth
          aria-label="Complete"
        >
          <span>Complete</span>
        </base-button>
      </slot>
    </div>
  </form>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'
import BaseButton from '@/components/shared/BaseButton/BaseButton'

export default {
  name: 'BaseFormContainer',
  components: {
    BaseButton
  },
  directives: {
    onClickaway
  },
  props: {
    title: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    emitSubmit () {
      if (this.isValid) {
        this.$emit('onsubmit')
      }
    },
    emitClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" src="./BaseFormContainer.scss" module />
