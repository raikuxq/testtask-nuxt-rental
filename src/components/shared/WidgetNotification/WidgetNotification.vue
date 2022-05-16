<template>
  <base-icon-button
    @click.native="openNotifications"
    icon="notify.svg"
    aria-label="Open notifications"
  />
</template>

<script>
import BaseIconButton from '@/components/shared/BaseIconButton/BaseIconButton'

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
