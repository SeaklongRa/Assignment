<template>
  <v-container class="fill-hight">
    <v-card class="pa-5">
      <v-row>
        <v-col cols="12">
          <v-row align="center">
            <v-col cols="3">
              <l-text-field
                label="Value-1"
                v-model="value1"
              >
              </l-text-field>
            </v-col>
            <v-col cols=1><span class="ma-8">+</span></v-col>
            <v-col cols="3">
              <l-text-field
                label="Value-2"
                v-model="value2"
              >
              </l-text-field>
            </v-col>
            <v-col cols=1><span class="ma-8">=</span></v-col>
            <v-col cols="4">
              <l-text-field
                label="Total"
                :value="sum"
              >
              </l-text-field>
            </v-col>
          </v-row>
          <v-row class="px-3">
            <l-button @click="add">Add++</l-button>
            <span class="pa-2"> Value Increment: {{ valueIncrement }}</span>
            <l-button @click="sub">Sub--</l-button>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

import LTextField from '@/components/form/LTextField'
import LButton from '@/components/button/LButton.vue'

  export default {
    name: 'SumValue',
    components: {
      LTextField,
      LButton
    },
    data() {
      return {
        value1: 0,
        value2: 0,
        valueIncrement: 0,
        total: 0
      }
    },
    methods: {
      add() {
        console.log('add')
        this.valueIncrement++
        if(this.valueIncrement > 10) {
          this.valueIncrement = 0
        }
      },
      sub() {
        console.log('sub')
        this.valueIncrement--
      },
      // sum() {
      //   console.log('sum')
      //   if(this.value1 === "" || this.value2 === "")
      //     return
      //   return parseInt(this.value1) + parseInt(this.value2)
      // }
    },
    watch: {
      valueIncrement (value) {
        if(value > 10) {
          this.valueIncrement = 0
        }
      },
      sum (value) {
        if(value > 100) {
          this.value1 = 0
          this.value2 = 0
          console.log('value larger 100')
        }
      }
    },
    computed: {
      sum () {
        console.log('sum computed')
        if(this.value1 === "" || this.value2 === "") {
          return
        }
        return parseInt(this.value1) + parseInt(this.value2)
      }
    },
    // watch: {
    //   value1: function () {
    //     if(this.value1 === ""){
    //       return
    //     }
    //     this.sum = parseInt(this.value1) + parseInt(this.value2)
    //   },
    //   value2: function () {
    //     if(this.value2 === ""){
    //       return
    //     }
    //     this.sum = parseInt(this.value1) + parseInt(this.value2)
    //   }
    // }
  }
</script>
