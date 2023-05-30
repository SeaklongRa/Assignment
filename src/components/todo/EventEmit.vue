<template>
  <div>
    <v-btn @click="emitCustomEvent">Emit Event</v-btn>
    <v-btn @click="$emit('enlarge-text', 1)">Enlarge text</v-btn>
  </div>
</template>

<script>

export default {
  methods: {
    emitCustomEvent() {
      this.$emit('custom-event-name', { message: 'My custom message'})
    }
  }
}
</script>