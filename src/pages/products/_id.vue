<template>
  <transition name="t-fade">
    <product-details
      v-if="getActiveVehicle"
      :id="getActiveVehicle.id"
      :image-url="getActiveVehicle.image"
      :title="getActiveVehicle.name"
      :price="getActiveVehicle.rent"
    >
      <template v-slot:info>
        <nuxt-child
          :key="$route.params.id"
          :specifications-features="getFeatures"
          :specifications-description="getActiveVehicle.specificationsText"
        />
        <nuxt-child
          :key="$route.params.id"
          :team-members="getTeam"
          :team-description="getActiveVehicle.teamText"
        />
        <nuxt-child
          :key="$route.params.id"
          :terms-conditions="getTerms"
          :terms-description="getActiveVehicle.termText"
        />
      </template>
    </product-details>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductDetails from '@/components/partials/ProductDetails/ProductDetails'

import testFeatures from '~/api/data/features.json'
import testTeam from '~/api/data/team.json'
import testTerms from '~/api/data/terms.json'

export default {
  name: 'PageProduct',
  scrollToTop: false,
  components: {
    ProductDetails
  },
  data () {
    return {
      title: 'Rent'
    }
  },
  head () {
    return ({
      title: `${this.title} | Pepelane`
    })
  },
  computed: {
    ...mapGetters('vehicles', [
      'getActiveVehicle'
    ]),
    /**
     * Hardcoded
     */
    getFeatures: () => testFeatures,
    getTeam: () => testTeam,
    getTerms: () => testTerms
  },
  created () {
    this.initData()
  },
  beforeDestroy () {
    this.setActiveId(null)
  },
  beforeRouteEnter (from, to, next) {
    /**
     * Redirect to specification subpage by default
     */
    if (from.name === 'products-id') {
      next({ name: 'products-id-specifications', params: from.params })
    }
    next()
  },
  methods: {
    ...mapActions('vehicles', [
      'setActiveId',
      'fetchVehicles'
    ]),
    async initData () {
      try {
        await this.setActiveId(this.$route.params.id)

        this.title = this.getActiveVehicle.name
      } catch (e) {
        this.$nuxt.error({})
      }
    },
  },
  fetch ({ store, error }) {
    store.dispatch('vehicles/fetchVehicles')
  }
}
</script>
