<template>
  <base-icon-button
    @click.native="openNotifications"
    icon="notify.svg"
    aria-label="Open notifications"
  />
</template>

<script>
import BaseIconButton from '@/components/_base/BaseIconButton'

export default {
  name: 'WidgetNotification',
  components: {
    BaseIconButton
  },
  methods: {
    openNotifications () {
      /**
       * Showing notifications here
       */
    }
  }
}
</script>
