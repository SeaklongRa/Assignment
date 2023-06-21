<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
    :color="color"
    :outlined="outlined"
    block
    dark
  >
    <v-icon v-if="iconLeft">{{ iconLeft }}</v-icon>
    <slot></slot>
    <v-icon v-if="iconRight">{{ iconRight }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: () => 'blue'
    },
    outlined: {
      type: Boolean,
      default: () => false
    },
    iconLeft: {
      type: String,
      default: () => ''
    },
    iconRight: {
      type: String,
      default: () => ''
    }
  }
}
</script>