<template>
  <base-button
    @click.native="showForm"
    icon="plus"
    is-separated-icon
    aria-label="Add product"
  >
    <span>Add new</span>

    <portal v-if="isFormAddVehicleShown" to="modal">
      <vehicle-add-form @close="hideForm" @send="processSendForm" />
    </portal>
  </base-button>
</template>

<script>
import { mapActions } from 'vuex'
import BaseButton from '@/components/shared/BaseButton/BaseButton'
import VehicleAddForm from '@/components/partials/VehicleAddForm/VehicleAddForm'

export default {
  name: 'WidgetAddProduct',
  components: {
    VehicleAddForm,
    BaseButton
  },
  data() {
    return {
      isFormAddVehicleShown: false
    }
  },
  methods: {
    ...mapActions('vehicles', [
      'addVehicle'
    ]),
    showForm() {
      this.isFormAddVehicleShown = true;
    },
    hideForm() {
      this.isFormAddVehicleShown = false;
    },
    async processSendForm (vehicleData) {
      const vehicleId = await this.addVehicle(vehicleData)

      await this.$router.push({ name: 'products-id', params: { id: vehicleId } })
    }
  },
}
</script>
