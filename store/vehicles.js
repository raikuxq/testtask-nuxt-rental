import { getVehicles } from '@/api/request'

/**
 * @typedef Vehicle
 * @property {String} id
 * @property {String} name
 * @property {String} type
 * @property {String} description
 * @property {String} specifications_text
 * @property {String} team_text
 * @property {String} term_text
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

      commit('SET_VEHICLES', vehicles)
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
      name: title,
      rent: price,
      description,
      'specifications_text': 'Consectetur esse ex et sunt. Excepteur irure fugiat adipisicing ipsum reprehenderit laboris aliqua Lorem minim nostrud mollit reprehenderit. Voluptate fugiat pariatur pariatur eu incididunt. Laborum reprehenderit sit laboris magna dolore fugiat officia consectetur officia tempor eiusmod. Exercitation Lorem laboris amet ipsum. Dolor exercitation aute incididunt labore cupidatat eu ipsum laborum occaecat sit Lorem.\n\nEst aliqua culpa dolore occaecat incididunt consectetur aute cupidatat velit sint veniam qui adipisicing. Aliqua consequat labore in eiusmod Lorem cillum irure culpa nisi. Mollit ad ad incididunt fugiat dolore officia commodo occaecat labore. Ut elit consectetur consectetur dolore tempor ad culpa consequat. Qui dolor cillum quis exercitation eiusmod ad nulla aute.',
      'team_text': 'Ex elit qui ullamco quis ex consectetur nulla aliqua adipisicing amet tempor duis. Incididunt cillum reprehenderit dolore enim ea. Minim duis ipsum est ut id sint voluptate. Quis ad laborum amet fugiat nulla deserunt non ad adipisicing excepteur ullamco sint quis. Elit qui sit irure proident quis Lorem et eiusmod do quis.',
      'term_text': 'Ut consectetur dolor labore non velit voluptate sint enim cillum ad labore. Adipisicing minim sunt labore sit anim culpa cillum laboris proident dolor do sint. In esse cupidatat id sit eiusmod culpa quis.\n\nIn ullamco pariatur sit in excepteur ipsum incididunt reprehenderit aliqua minim. Deserunt cillum consectetur ut velit fugiat cupidatat elit ullamco adipisicing pariatur. Aute qui qui magna culpa proident ad labore qui est.\n\nAmet velit nisi ea eiusmod reprehenderit cillum aliqua do ut. Consectetur elit nostrud nulla fugiat laborum aliqua sit. Laboris magna consectetur qui ex. Sunt irure magna quis amet dolore.',
      'preview': 'https://loremflickr.com/160/160/airship?random=5f2bb90af01f47feb86b5da0',
      'image': 'https://loremflickr.com/900/900/airship'
    }

    commit('ADD_VEHICLE', vehicle)

    return Promise.resolve(generatedId)
  }
}
