import vehicles from '~/api/data/vehicles.json'
import userData from '~/api/data/user.json'

/** Emulate request */
export const getVehicles = () =>
  new Promise((resolve, reject) => {
    resolve(vehicles)
  })

export const getUserData = () =>
  new Promise((resolve, reject) => {
    resolve(userData)
  })
