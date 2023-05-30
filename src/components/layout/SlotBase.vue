<template>
  <div>
    Slow Slot {{ slotMessage }}
    <slot :slotMessage="slotMessage"></slot>
    <template class="header">
      <slot name="header">
        <h1>Default Header</h1>
        <v-btn>Add Slot</v-btn>
      </slot>
    </template>
    <template class="content">
      <slot name="content"></slot>
    </template>
    <template class="footer">
      <slot name="footer"></slot>
    </template>
    <ul>
      <li
        v-for="todo in filteredTodos"
        v-bind:key="todo.id"
      >
        <slot name="todo" v-bind:todo="todo">
          {{ todo.name }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slotMessage: 'Hello Slot',
      filteredTodos: [
        {
          id: 0,
          name: 'A'
        },
        {
          id: 1,
          name: 'B'
        }
      ]
    }
  }
}
</script>