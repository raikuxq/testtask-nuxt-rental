<template>
  <transition name="t-fade">
    <div :class="$style.homePage" v-show="isListNotEmpty">
      <div :class="$style.header">
        <div :class="$style.headerTitle">
          <h1 :class="$style.title">
            Rent
          </h1>

          <transition name="t-fade" appear>
            <div :class="$style.filter" v-if="isTypesNotEmpty">
              <product-filter :options="getAllTypes" />
            </div>
          </transition>
        </div>

        <widget-add-product />
      </div>

      <product-list :items="getFilteredVehicles" />
    </div>

  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductList from '@/components/partials/ProductList/ProductList'
import ProductFilter from '@/components/partials/ProductFilter/ProductFilter'
import WidgetAddProduct from '@/components/widgets/WidgetAddProduct/WidgetAddProduct'
import FormAddVehicle from '@/components/partials/VehicleAddForm/VehicleAddForm'

export default {
  name: 'PageHome',
  components: {
    FormAddVehicle,
    ProductList,
    ProductFilter,
    WidgetAddProduct
  },
  head: {
    title: `Rental vehicles | Pepelane`
  },
  data() {
    return {
      isFormAddVehicleShown: false
    }
  },
  computed: {
    ...mapGetters('vehicles', [
      'getFilteredVehicles',
      'getAllTypes'
    ]),
    isListNotEmpty () {
      return this.getFilteredVehicles?.length > 0 || false
    },
    isTypesNotEmpty () {
      return this.getAllTypes?.length > 0 || false
    }
  },
  fetch ({ store, error }) {
    store.dispatch('vehicles/fetchVehicles')
    // store.dispatch('user/fetchUserData')
  }
}
</script>

<style module lang="scss">
@import "~@/assets/style/variables/varibales.scss";
@import "~@/assets/style/base/typography.scss";

.homePage {
  padding: $offset-700 $offset-800;
  background: $color-base-50;
  border-radius: $border-radius-xl;
  height: 100%;
  overflow-clip: padding-box;
  @media (max-width: $screen-xl) {
    padding: $offset-400;
    border-radius: $border-radius-l;
  }
  @media (max-width: $screen-md) {
    border-radius: $border-radius-m;
    padding: $offset-300 $offset-200;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $offset-500;
  @media (max-width: $screen-xl) {
    margin-bottom: $offset-300;
  }
}

.headerTitle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  line-height: 1.3;
  margin-bottom: 0;
  margin-right: $offset-100;
}

.filter {
  @extend %h1;
  line-height: 1;
  margin-bottom: 0;
}
</style>
