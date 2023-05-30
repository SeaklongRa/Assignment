<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
    :color="color"
    :outlined="outlined"
    block
    dark
  >
    <slot></slot>
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
    }
  }
}
</script>