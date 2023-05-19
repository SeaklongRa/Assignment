<template>
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError}"
  >
    <span v-if="awesome" :style="{ color: color, fontSize: fontSize}">My name's Alien</span>
    <span v-else>Oh no</span>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <v-divider></v-divider>
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
    <ul id="example-2">
      <li v-for="(item, index) in items" :key="item.message">
        {{ parentMessage }} - {{ index }} - {{ item.message}}
      </li>
    </ul>
    <ul id="v-for-object" class="demo">
      <li v-for="(value, name, index) in object" :key="value">
        {{ index }}. {{ name }}: {{ value }}
      </li>
    </ul>
    <v-divider></v-divider>
    <li v-for="(n, index) in evenNumbers" :key="n"
    >
      {{ index }}: {{ n }}
    </li>
    <v-divider></v-divider>
    <ul v-for="set in sets" :key="set.set">
      <li v-for="n in even(set)" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      awesome: false,
      color: 'blue',
      fontSize: '20px',
      type: 'B',
      parentMessage: 'Parent',
      items: [
        { message: 'Foo'},
        { message: 'Bar'}
      ],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      numbers: [1, 2, 3, 4, 5],
      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}
</script>