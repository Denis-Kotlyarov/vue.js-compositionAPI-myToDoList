<script setup>
//Imports
import AddForm from '@/components/AddForm.vue'
import ToDoItem from '@/components/ToDoItem.vue'
import { reactive } from 'vue'

//Works with todos
const todos = reactive([
  {
    id: 'id1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicingt. Alias earum?',
    done: false
  },
  {
    id: 'id2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus hic earum!',
    done: true
  }
])
</script>

<template>
  <header class="my-5 has-text-centered">
    <h1 class="title">Привет, composition API! Мы отлично сработаемся!</h1>
  </header>
  <div class="container is-max-desktop px-2">
    <add-form placeholder="Add a new todo..." btn_text="Add"></add-form>
    <div class="items-list" v-for="todo in todos" :key="todo.id">
      <to-do-item class="my-2" :todo="todo"></to-do-item>
    </div>
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
