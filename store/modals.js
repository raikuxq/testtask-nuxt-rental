export const state = () => ({
  isFormAddVehicleActive: false
})

export const getters = {
  /**
   * Here can be any modals
   * @param state
   * @returns {boolean}
   */
  isAnyModalActive: state => state.isFormAddVehicleActive,
  isFormAddVehicleActive: state => state.isFormAddVehicleActive
}

export const mutations = {
  SET_FORM_ADD_STATUS (state, status) {
    state.isFormAddVehicleActive = status
  }
}

export const actions = {
  openFormAddVehicle ({ commit }) {
    commit('SET_FORM_ADD_STATUS', true)
  },
  closeFormAddVehicle ({ commit }) {
    commit('SET_FORM_ADD_STATUS', false)
  }
}
