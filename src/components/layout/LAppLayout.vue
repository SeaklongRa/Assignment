<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-card
        outlined
        width="700"
      >
        <slot name="title"></slot>
        <slot></slot>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>