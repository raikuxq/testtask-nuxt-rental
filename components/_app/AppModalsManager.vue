<template>
  <div :class="$style.modalsContainer">
    <form-add-vehicle v-if="isFormAddVehicleActive" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FormAddVehicle from '@/components/_forms/FormAddVehicle'

export default {
  name: 'AppModalsContainer',
  components: {
    FormAddVehicle
  },
  computed: {
    ...mapGetters('modals', [
      'isAnyModalActive',
      'isFormAddVehicleActive'
    ])
  }
}
</script>

<style lang="scss" module>
.modalsContainer {
  position: relative;
  height: 100%;
}
</style>
