<template>
  <v-container fluid style="width: 70%;">
    <t-button width="300" iconLeft="">
      Add-1
    </t-button>
    <v-btn class="px-4 rounded-lg">Add-2</v-btn>
  </v-container>
</template>

<script>

import TButton from '@/components/button/TButton.vue'

export default {
  components: {
    TButton
  }
}
</script>