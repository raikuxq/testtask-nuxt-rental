<template>
  <base-button
    @click.native="openFormAddVehicle"
    icon="plus"
    is-separated-icon
    aria-label="Add product"
  >
    <span>Add new</span>
  </base-button>
</template>

<script>
import { mapActions } from 'vuex'
import BaseButton from '@/components/_base/BaseButton'

export default {
  name: 'WidgetAddProduct',
  components: {
    BaseButton
  },
  methods: {
    ...mapActions('modals', [
      'openFormAddVehicle'
    ])
  }
}
</script>
