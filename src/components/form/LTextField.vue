<template>
  <v-text-field
    v-bind="$attrs"
    v-on="$listeners"
    :label="label"
    :prepend-inner-icon="left_icon"
    outlined
    dense
  >
    <slot></slot>
  </v-text-field>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => "Number"
    },
    left_icon: {
      type: String,
      default: () => ''
    }
  }
}
</script>