<script setup>
//Imports
import AddForm from '@/components/AddForm.vue'
import ToDoItem from '@/components/ToDoItem.vue'
import { reactive } from 'vue'

//Works with todos
const todos = reactive([])
addEventListener('DOMContentLoaded', () => {
  //Ищу в localStorage
  console.log('App Mounted')
  if (localStorage.getItem('todo_items'))
    todos.push(...JSON.parse(localStorage.getItem('todo_items')))
})

const pushNewToDo = (newTodo) => {
  todos.push(newTodo)
  localStorage.setItem('todo_items', JSON.stringify(todos)) //Сохраняю в localStorage
}

//Заранее пробую функцию удаления
const deleteToDo = (id) => {
  todos.splice(
    todos.findIndex((todo) => todo.id === id),
    1
  )
  console.log(todos.findIndex((todo) => todo.id === id))
  localStorage.setItem('todo_items', JSON.stringify(todos)) //Сохраняю в localStorage
}

//Обновляю localStorage при изменения статуса
const completeToDo = () => {
  localStorage.setItem('todo_items', JSON.stringify(todos))
}
</script>

<template>
  <header class="my-5 has-text-centered">
    <h1 class="title">Привет, composition API! Мы отлично сработаемся!</h1>
  </header>
  <div class="container is-max-desktop px-3">
    <add-form placeholder="Add a new todo..." btn_text="Add" @addToDo="pushNewToDo"></add-form>
    <div class="items-list" v-for="todo in todos" :key="todo.id">
      <to-do-item
        class="my-2"
        :todo="todo"
        @deleteToDo="deleteToDo"
        @completedToDo="completeToDo"
      ></to-do-item>
    </div>
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
