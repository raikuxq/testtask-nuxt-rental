import vehicles from '@/api/vehicles.json'

/** Emulate request */
export const getVehicles = () =>
  new Promise((resolve, reject) => {
    resolve(vehicles)
  })
