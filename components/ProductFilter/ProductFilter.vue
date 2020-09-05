<template>
  <base-select
    :options="getAllOptions"
    :active-option="getActiveOption"
    @select="selectType"
  />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BaseSelect from '@/components/_base/BaseSelect'

const FILTER_OPTION_ALL = 'whatever'

export default {
  name: 'ProductFilter',
  components: {
    BaseSelect
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState('vehicles', [
      'activeVehicleType'
    ]),
    getAllOptions () {
      const options = [FILTER_OPTION_ALL, ...this.options]
      return options.map(option => ({ label: option, value: option }))
    },
    getActiveOption () {
      return this.activeVehicleType || FILTER_OPTION_ALL
    }
  },
  beforeDestroy () {
    this.clearFilterType()
  },
  methods: {
    ...mapActions('vehicles', [
      'setActiveType',
      'clearFilterType'
    ]),
    selectType (type) {
      const isFilterActive = type !== FILTER_OPTION_ALL

      isFilterActive
        ? this.setActiveType(type)
        : this.clearFilterType()
    }
  }
}
</script>
