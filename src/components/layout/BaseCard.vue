<template>
  <v-card v-if="isHide" class="ma-2" width="210" height="210">
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-row align="center">
            <v-col cols="10" class="pa-0">
              <h3 class="text-subtitle blue--text pl-2">$ : {{ price }}</h3>
            </v-col>
            <v-col cols="2" class="pa-0">
              <l-button
                small
                icon
                @click="$emit('remove')"
              >
                <v-icon color="red">mdi-close</v-icon>
              </l-button>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="pa-0 d-flex justify-center">
          <h2 class="text-subtitle blue--text">{{ title }}</h2>  
        </v-col>
        <v-col cols="12" class="pa-0 d-flex justify-center">
          <img
            height="110"
            src="@/assets/gallery.png"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="pt-0">
      <l-button
        outlined
        @click="$emit('hide')"
      >
        Hide Card
      </l-button>
    </v-card-actions>
  </v-card>
</template>

<script>

import LButton from '../button/LButton.vue'

export default {
  components: {
    LButton
  },
  props: {
    isHide: {
      type: Boolean,
      default: () => true
    },
    title: {
      type: String,
      default: () => 'Default Title'
    },
    price: {
      type: Number,
      require: true
    }
  }
}
</script>