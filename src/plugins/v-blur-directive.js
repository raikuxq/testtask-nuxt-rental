import Vue from 'vue'

const blur = ev => setTimeout(() => ev.target.blur(), 0)

const blurElements = (el) => {
  if (el instanceof HTMLSelectElement) {
    el.addEventListener('change', blur)
  } else {
    el.addEventListener('click', blur)
  }
}

Vue.directive('blur', {
  inserted: blurElements,
  update: blurElements
})
