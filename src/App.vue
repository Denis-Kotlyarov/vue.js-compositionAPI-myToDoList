<script setup>
//Imports
import AddForm from '@/components/AddForm.vue'
import ToDoItem from '@/components/ToDoItem.vue'
import { reactive, watch, onMounted } from 'vue'
import db from '@/firebase/index.js'

//Works with todos
const todos = reactive([])
onMounted(() => {
  //Ищу в localStorage
  console.log('App Mounted')
  if (localStorage.getItem('todo_items')) {
    todos.push(...JSON.parse(localStorage.getItem('todo_items')))
  }
})

const pushNewToDo = (newTodo) => {
  todos.push(newTodo)

  //Записываю в бд
  // db.collection('todos')
  //   .set({
  //     id: newTodo.id,
  //     content: newTodo.content,
  //     completed: newTodo.completed
  //   })
  //   .then(() => {
  //     console.log('Todo added')
  //   })
  //   .catch((error) => {
  //     console.log(error.message)
  //   })
}

//Заранее пробую функцию удаления
const deleteToDo = (id) => {
  todos.splice(
    todos.findIndex((todo) => todo.id === id),
    1
  )

  //Удаляю из бд
  //db.collection('todos').doc(id).delete()
}

//Слежу за изменением todos для обновления localStorage
watch(
  todos,
  (newTodos) => {
    // const takes_data = db.collection('todos')
    localStorage.setItem('todo_items', JSON.stringify(newTodos))
  },
  { deep: true }
)
</script>

<template>
  <header class="my-5 has-text-centered">
    <h1 class="title">Привет, composition API! Мы отлично сработаемся!</h1>
  </header>
  <div class="container is-max-desktop px-3">
    <add-form placeholder="Add a new todo..." btn_text="Add" @addToDo="pushNewToDo"></add-form>
    <div class="items-list" v-for="todo in todos" :key="todo.id">
      <to-do-item class="my-2" :todo="todo" @deleteToDo="deleteToDo"></to-do-item>
    </div>
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
