import Vue from 'vue'

Vue.filter('toCurrency', function (price) {
  const string = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return `${string} $`
})
