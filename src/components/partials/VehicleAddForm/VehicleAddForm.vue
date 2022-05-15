<template>
  <div :class="$style.addVehicle">
    <transition name="t-slide-right" appear>
      <div :class="$style.inner">
        <form-container
          :is-valid="isValid"
          @onsubmit="sendForm"
          @close="emitClose"
          title="Add new vehicle"
        >
          <template v-slot:fields>
            <div :class="$style.formItem">
              <base-input-file
                v-model="photoUrl"
                acccept=".png, .jpg, .jpeg"
              />
            </div>

            <div :class="$style.formItem">
              <base-input-text
                v-model.trim.lazy="title"
                placeholder="Name"
              />
            </div>

            <div :class="$style.formItem">
              <base-input-text
                v-model.trim.lazy="description"
                placeholder="Description"
              />
            </div>

            <div :class="$style.formItem">
              <base-input-number
                v-model.number.lazy="price"
                placeholder="Rent price"
                label="$/h"
                min="0"
                step="1"
              />
            </div>
          </template>
        </form-container>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import FormContainer from '@/components/shared/FormContainer/FormContainer'
import BaseInputFile from '@/components/shared/BaseInputFile/BaseInputFile'
import BaseInputNumber from '@/components/shared/BaseInputNumber/BaseInputNumber'
import BaseInputText from '@/components/shared/BaseInputText/BaseInputText'

export default {
  name: 'VehicleAddForm',
  components: {
    FormContainer,
    BaseInputNumber,
    BaseInputText,
    BaseInputFile
  },
  data () {
    return {
      title: '',
      description: '',
      price: 0,
      photoUrl: ''
    }
  },
  computed: {
    isValid () {
      return (
        Boolean(this.title) &&
        Boolean(this.price)
      )
    }
  },
  methods: {
    async sendForm () {
      if (this.isValid) {
        const { title, description, price, photoUrl } = this

        this.$emit('send', {
          title,
          description,
          price,
          photoUrl
        })
      }
    },

    emitClose() {
      return this.$emit('close')
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/assets/style/form/input.scss";

.addVehicle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  @media (max-width: $screen-md) {
    align-items: flex-end;
  }
}

.inner {
  max-width: 600px;
  width: 100%;
  @media (max-width: $screen-md) {
    max-width: none;
  }
}

.formItem {
  @extend %form-input;
}
</style>
