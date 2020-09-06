<template>
  <transition name="t-fade">
    <product-details
      v-if="getActiveVehicle"
      :id="getActiveVehicle.id"
      :image-url="getActiveVehicle.image"
      :title="getActiveVehicle.name"
      :price="getActiveVehicle.rent"
      :specification-text="getActiveVehicle.specifications_text"
      :team-text="getActiveVehicle.team_text"
      :term-text="getActiveVehicle.term_text"
      :specification-features="getFeatures"
      :team-members="getTeam"
      :term-conditions="getTerms"
    />
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductDetails from '@/components/ProductDetails/ProductDetails'

import testFeatures from '@/api/features.json'
import testTeam from '@/api/team.json'
import testTerms from '@/api/terms.json'

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
  beforeMount () {
    this.initData()
    this.handleScroll()
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

        if (!this.getActiveVehicle) {
          await this.fetchVehicles()
        }

        this.title = this.getActiveVehicle.name
      } catch (e) {
        this.$nuxt.error({})
      }
    },
    handleScroll () {
      if (process.client) {
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>
