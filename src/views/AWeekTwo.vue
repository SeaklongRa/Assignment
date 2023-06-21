<template>
  <v-container fluid style="width: 80%;">
    <v-card>
      <v-card-title class="blue white--text">
        <v-row>
          <v-col cols="4">
            Week-2
          </v-col>
          <v-col 
            cols="4" class="text-center">
            Add Cards
          </v-col>
          <v-col cols="4" class="text-right">
            Component Advance
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-actions class="pa-4">
        <v-row>
          <v-col cols="2">
            <v-form ref="form">
              <v-card 
                color="blue" 
                elevation="0"
                dark 
                class="mb-7 py-3 text-center"
              >
                <span class="text-body font-weight-medium">Input Data</span>
              </v-card>
              <l-text-field
                label="Title"
                left_icon="mdi-alpha-t-box"
                v-model="newCard.title"
                :rules="[
                  (v) => !!v || 'Title is required'
                ]"
              ></l-text-field>
              <l-text-field
                label="Price"
                left_icon="mdi-currency-usd"
                type="number"
                hide-spin-buttons
                v-model="newCard.price"
                :rules="[
                  (v) => !!v || 'Price is required'
                ]"
              ></l-text-field>
              <l-button @click="addCard">
                <v-icon left>mdi-plus-box-multiple</v-icon>
                ADD
              </l-button>
              <v-row>
                <v-col cols="6" class="mt-3 pr-1">
                  <v-badge
                    :content="count"
                    :value="count"
                    color="red"
                    overlap
                    left
                  >
                    <l-button
                      @click="hideCardAll"
                      :color="count > 0 ? 'red' : 'blue'"
                      class="px-8"
                      outlined
                    >
                      Hide
                    </l-button>
                  </v-badge>
                </v-col>
                <v-col cols="6" class="mt-3 pl-1">
                  <l-button @click="showCard">
                    Show
                  </l-button>
                </v-col>
              </v-row>
              <l-button
                color="red"
                outlined
                class="mt-3"
                @click="deleteCard"
              >
                <v-icon left>mdi-close-box-multiple</v-icon>
                Remove
              </l-button>
            </v-form>
          </v-col>
          <v-col cols="10" class="pl-1">
            <v-card
              outlined
              height="680"
              class="pa-2"
            >
              <div class="d-flex flex-wrap">
                <base-card
                  v-for="(card, index) in todoCard"
                  :key="index"
                  :title="card.title"
                  :price="card.price"
                  :is-hide="card.isHide"
                  @remove="deleteIndex(index)"
                  @hide="hideCard(card)"
                >
                </base-card>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

import LTextField from '@/components/form/LTextField.vue'
import LButton from '@/components/button/LButton.vue'
import BaseCard from '@/components/layout/BaseCard.vue'

export default {
  components: {
    LTextField,
    LButton,
    BaseCard
  },
  data () {
    return {
      count: 0,
      highlight: false,
      form: {
        password: '',
        confirmPassword: ''
      },
      newCard: {
        title: '',
        price: null,
      },
      todoCard: [
        {
          id: 1,
          title: 'Vital',
          price: 0.25,
          isHide: true
        },
        {
          id: 2,
          title: 'Coca Cola',
          price: 0.50,
          isHide: true
        },
        {
          id: 3,
          title: 'Vigor',
          price: 0.75,
          isHide: true
        },
      ],
    }
  },
  methods: {
    showCard () {
      this.todoCard.forEach(item => item.isHide = true)
      this.count = 0
    },
    hideCardAll () {
      this.count = 0
      this.todoCard.forEach(item => {
        item.isHide = false
        this.count++
      })
    },
    hideCard (val) {
      val.isHide = false
      this.count++
    },
    deleteCard () {
      this.todoCard.splice(0, this.todoCard.length)
      this.count = 0
    },
    deleteIndex (value) {
      this.todoCard.splice(value, 1)
    },
    addCard () {
      if(this.$refs.form.validate()) {
        this.todoCard.push({
          id: this.todoCard.length + 1,
          title: this.newCard.title,
          price: parseFloat(this.newCard.price),
          isHide: true
        })
        this.newCard.title = ''
        this.newCard.price = null
        this.$refs.form.resetValidation()
      }
    }
  }
}
</script>