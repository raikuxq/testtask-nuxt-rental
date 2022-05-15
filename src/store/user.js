import { getUserData } from '@/api/request'

/**
 * @typedef UserData
 * @property {String} name
 * @property {String} photo
 */

export const state = () => ({
  /** @type UserData */
  userData: {}
})

export const mutations = {
  SET_USER_DATA (state, userData) {
    state.userData = userData
  }
}

export const getters = {

}

export const actions = {
  /**
   * Update userData state from remote
   *
   * @param commit
   * @returns {Promise<never>}
   */
  async fetchUserData ({ commit }) {
    try {
      const userData = await getUserData()
      const userDataMapped = {
          name: userData.name,
          photo: userData.photoUrl,
        }


      commit('SET_USER_DATA', userDataMapped)
    } catch (e) {
      return Promise.reject(new Error(e))
    }
  }
}
