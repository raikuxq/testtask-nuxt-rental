<template>
  <div :class="$style.addVehicle">
    <transition name="t-slide-right" appear>
      <div :class="$style.inner">
        <base-form-container
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
        </base-form-container>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import BaseFormContainer from '@/components/shared/BaseFormContainer/BaseFormContainer'
import BaseInputFile from '@/components/shared/BaseInputFile/BaseInputFile'
import BaseInputNumber from '@/components/shared/BaseInputNumber/BaseInputNumber'
import BaseInputText from '@/components/shared/BaseInputText/BaseInputText'

export default {
  name: 'VehicleAddForm',
  components: {
    BaseFormContainer,
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

<style lang="scss" src="./VehicleAddForm.scss" module />
