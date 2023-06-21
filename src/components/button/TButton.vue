<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
    :class="getComputedStyle"
  >
    <v-icon v-if="iconLeft">{{ iconLeft }}</v-icon>
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    iconLeft: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    getComputedStyle () {
      return {
        'px-4': true,
        'rounded-lg': true
      }
    }
  }
}
</script>