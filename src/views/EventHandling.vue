<template>
  <v-container>
    <div>
      <v-btn @click="greet">Greet</v-btn>
      <v-btn @click="say('Hi')">Say hi</v-btn>
      <v-btn @click="say('What')">Say what</v-btn>
      <v-btn @click="warn('Form cannot be submitted yet.', $event)">Submit</v-btn>
      <br><br>
      {{ message }} : {{ value }}
      <br><br>
      <event-emit @custom-event-name="setMessage" @enlarge-text="onEnlargeText" />
      <l-custom-input v-model="content"></l-custom-input>
      <label>{{ content }}</label>
      <div
        class="static"
        v-if="hasError"
        :class="{ active: isActive, 'text-red': hasError }"
        :style="{ backgroundColor: 'red', width: '20px', height: '50px'}"
      >
        <v-btn @click="showMessage">Hello</v-btn>
      </div>
      <v-btn @click="hasError = false">Hide</v-btn>
      <v-btn @click="hasError = true">Show</v-btn>
      <slot-base>
        <template v-slot="slotMessage">
          <v-btn>Add</v-btn>
          <v-btn>Delete</v-btn>
          This is {{ content = slotMessage.slotMessage }}
        </template>
        <template v-slot:header>
          <h1>Header</h1>
          <v-btn>Add Slot</v-btn>
        </template>
        <template v-slot:content>
          <h4>Content</h4>
        </template>
        <template v-slot:footer>
          <h4>Footer</h4>
        </template>
        <template v-slot:todo="{ todo }">
          {{ todo.id }} + {{ todo.name }}
        </template>
      </slot-base>
      <span class="red">Hello: {{ content }}</span>
      <br>
      <template>
        <v-btn @click="comp = 'ComponentA'">
          Component A
        </v-btn>
        <v-btn @click="comp = 'ComponentB'">
          Component B
        </v-btn>
        <component :is="comp"/>
      </template>
    </div>
    <component-g/>
  </v-container>
</template>

<script>

import EventEmit from '@/components/todo/EventEmit.vue'
import LCustomInput from '@/components/form/LCustomInput.vue'
import SlotBase from '@/components/layout/SlotBase.vue'
import ComponentA from '@/components/dynamicComp/ComponentA.vue'
import ComponentB from '@/components/dynamicComp/ComponentB.vue'
import ComponentG from '@/components/dynamicComp/ComponentG.vue'

export default {
  components: {
    EventEmit,
    LCustomInput,
    SlotBase,
    ComponentA,
    ComponentB,
    ComponentG
  },
  data () {
    return {
      comp: 'ComponentA',
      isActive: false,
      hasError: true,
      name: 'Vue.js',
      message: 'Hi',
      value: 0,
      content: ''
    }
  },
  methods: {
    greet (event) {
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    },
    say (message) {
      alert(message)
    },
    warn (message, event) {
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    setMessage(payload) {
      this.message = payload.message
    },
    onEnlargeText (enlargeAmount) {
      this.value += enlargeAmount
    },
    showMessage () {
      alert('Hello world')
    }
  }
}
</script>

<!-- <style scoped>
.text-red {
  background-color: red;
  width: 20px;
  height: 20px;
}
</style> -->