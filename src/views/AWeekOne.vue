<template>
  <v-container class="pt-16">
    <v-row justify="center">
      <v-card class="pa-4 pb-8" outlined width="600">
        <v-row>
          <v-col cols="6">
            <v-card-title>Week-1</v-card-title>
          </v-col>
          <v-col cols="6">
            <v-card-subtitle class="text-right text-body-1">{{ title }}</v-card-subtitle>
          </v-col>
        </v-row>
        <v-divider class="mx-4"></v-divider>
        <v-row class="pt-10">
          <v-col cols="6">
            <l-button
              @click="counter++"
              class="float-right"
            >
              Add Value
            </l-button>
          </v-col>
          <v-col cols="6">
            <l-button @click="counter--">Subtract</l-button>
          </v-col>
        </v-row>
        <v-banner
          color="primary"
          dark
          rounded
          class="mt-5 mx-8 text-center"
        >
          <span class="text-h6">Counter Value: {{ counter }}</span>
        </v-banner>
        <v-row class="mx-5 mt-5">
          <v-col cols="6">
            <l-text-field
              label="First Name"
              v-model="firstName"
            >
            </l-text-field>
          </v-col>
          <v-col cols="6">
            <l-text-field
              label="Last Name"
              v-model="lastName"
            >
            </l-text-field>
          </v-col>
        </v-row>
        <div class="text-center">
          <l-button @click="reset">Reset counter</l-button>
        </div>
        <v-banner
          color="primary"
          dark
          rounded
          class="mt-5 mx-8 text-center"
        >
          <span class="text-h6">Your name: {{ fullName }}</span>
        </v-banner>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

import LButton from '@/components/button/LButton.vue'
import LTextField from '@/components/form/LTextField'

export default {
data() {
  return {
    title: 'Components Basic',
    counter: 0,
    firstName: '',
    lastName: '',
    total: ''
  }
},
components: {
  LButton,
  LTextField
},
methods: {
  reset() {
    this.counter = 0
    this.firstName = ''
    this.lastName = ''
  },
  counterValue(value) {
    if(value === 'add') {
      this.counter++
      if(this.counter > 10) {
        this.counter = 0
        console.log('Value is reset')
      }
    }
    else {
      this.counter--
      if(this.counter < -10) {
        this.counter = 0
        console.log('Value is reset')
      }
    }
  }
},
computed: {
  fullName () {
    return this.firstName + ' ' + this.lastName
  }
},
watch: {
  counter () {
    if(this.counter > 10 || this.counter < -10) {
      this.counter = 0
      console.log('Value is reset')
    }
  },
  fullName (value) {
    if(value === 'Seak Long') {
      console.log('Your name is True')
    }
  }
}
}
</script>