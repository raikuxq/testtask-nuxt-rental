import vehicles from '@/api/vehicles.json'

/** Emulate request */
export const getVehicles = () =>
  new Promise((resolve, reject) => {
    const delay = parseInt(Math.random() * 1000)
    setTimeout(() => {
      resolve(vehicles)
    }, delay)
  })
