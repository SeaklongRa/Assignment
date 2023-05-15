<template>
  <v-text-field
    v-bind="$attrs"
    v-on="$listeners"
    :label="label"
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
    }
  }
}
</script>