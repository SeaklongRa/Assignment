<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
    :color="color"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: () => 'primary'
    }
  }
}
</script>