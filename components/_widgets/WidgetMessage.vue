<template>
  <base-icon-button
    @click.native="openMessages"
    icon="message.svg"
  />
</template>

<script>
import BaseIconButton from '@/components/_base/BaseIconButton'

export default {
  name: 'WidgetMessage',
  components: {
    BaseIconButton
  },
  methods: {
    openMessages () {
      /**
       * Showing messages here
       */
    }
  }
}
</script>
