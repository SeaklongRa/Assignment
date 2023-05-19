<template>
  <v-container>
    <div id="todo-list-example">
      <v-form @submit.prevent="addNewTodo">
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col cols="8">
                <v-row align="center">
                  <v-col cols="2" class="pa-0"><label class="pa-0 ma-0">Add a todo: </label></v-col>
                  <v-col
                    cols="10"
                  >
                    <v-text-field
                      v-model="newTodoText"
                      id="new-todo"
                      placeholder="E.g. Feed the cat"
                      class="pa-0 ma-0"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4">
                <v-btn @click="addNewTodo">Add</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-form>
      <div class="d-flex flex-wrap">
        <div
          is="todo-item"
          v-for="(todo, index) in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="todos.splice(index, 1)"
        >
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>

import TodoItem from '@/components/todo/TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  data () {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        },
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addNewTodo () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>