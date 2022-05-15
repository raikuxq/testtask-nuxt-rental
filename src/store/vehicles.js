import { getVehicles } from '@/api/request'

/**
 * @typedef Vehicle
 * @property {String} id
 * @property {String} name
 * @property {String} type
 * @property {String} description
 * @property {String} specificationsText
 * @property {String} teamText
 * @property {String} termText
 * @property {Number} rent
 * @property {String} preview
 * @property {String} image
 */

export const state = () => ({
  /** @type Array.<Vehicle> */
  vehicles: [],
  /** @type <Vehicle.type> */
  activeVehicleType: null,
  /** @type <Vehicle.id> */
  activeVehicleId: null
})

export const mutations = {
  SET_VEHICLES (state, vehicles) {
    state.vehicles = vehicles
  },
  ADD_VEHICLE (state, vehicle) {
    state.vehicles.push(vehicle)
  },
  SET_ACTIVE_TYPE (state, type) {
    state.activeVehicleType = type
  },
  SET_ACTIVE_ID (state, id) {
    state.activeVehicleId = id
  }
}

export const getters = {
  getAllTypes (state) {
    return Array.from(new Set(state.vehicles.map(vehicle => vehicle.type)))
  },
  getFilteredVehicles (state) {
    const hasFilter = Boolean(state.activeVehicleType)

    return hasFilter
      ? state.vehicles.filter(vehicle => vehicle.type === state.activeVehicleType)
      : state.vehicles
  },
  getActiveVehicle (state) {
    const hasActive = Boolean(state.activeVehicleId)

    return hasActive
      ? state.vehicles.find(vehicle => vehicle.id === state.activeVehicleId)
      : null
  }
}

export const actions = {

  /**
   * Update active vehicle type in filter
   *
   * @param commit
   * @param type
   */
  setActiveType ({ commit }, type) {
    commit('SET_ACTIVE_TYPE', type)
  },

  /**
   * Update active vehicle Id
   *
   * @param commit
   * @param id
   */
  setActiveId ({ commit }, id) {
    commit('SET_ACTIVE_ID', id)
  },

  /**
   * Clear active vehicle type in filter
   *
   * @param commit
   */
  clearFilterType ({ commit }) {
    commit('SET_ACTIVE_TYPE', null)
  },

  /**
   * Update vehicles state from remote
   *
   * @param commit
   * @returns {Promise<never>}
   */
  async fetchVehicles ({ commit }) {
    try {
      const vehicles = await getVehicles()
      const vehiclesMapped = vehicles.map(vehicle => {
        return {
          id: vehicle.id,
          type: vehicle.type,
          description: vehicle.description,
          name: vehicle.name,
          rent: vehicle.rent,
          specificationsText: vehicle['specifications_text'],
          teamText: vehicle['team_text'],
          termText:  vehicle['term_text'],
          preview:  vehicle.preview,
          image:  vehicle.image
        }
      })

      commit('SET_VEHICLES', vehiclesMapped)
    } catch (e) {
      return Promise.reject(new Error(e))
    }
  },

  /**
   * Add new vehicle
   *
   * @param commit
   * @param title
   * @param description
   * @param price
   * @param photoUrl
   */
  addVehicle ({ commit }, { title, description, price, photoUrl }) {
    const generatedId = Date.now().toString(16)
    const defaultType = 'custom'

    const vehicle = {
      id: generatedId,
      type: defaultType,
      description: description,
      name: title,
      rent: price,
      specificationsText: 'Specifications test.',
      teamText: 'Team text.',
      termText: 'Term text.',
      preview: 'https://loremflickr.com/160/160/airship?random=5f2bb90af01f47feb86b5da0',
      image: 'https://loremflickr.com/900/900/airship'
    }

    commit('ADD_VEHICLE', vehicle)

    return Promise.resolve(generatedId)
  }
}
