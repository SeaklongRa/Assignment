<template>
  
      <v-card class="ma-2 pa-2" width="200" height="200">
        {{ title }}
        <v-btn
          @click="$emit('remove')"
        >
          Remove
        </v-btn>
      </v-card>
    
</template>

<script>
export default {
  props: {
    title: String,
  }
}
</script>