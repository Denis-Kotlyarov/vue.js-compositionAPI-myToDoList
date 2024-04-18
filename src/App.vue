<script setup>
//Imports
import AddForm from '@/components/AddForm.vue'
import ToDoItem from '@/components/ToDoItem.vue'
import { reactive, watch, onMounted } from 'vue'
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'
import { db } from '@/firebase'

//Works with todos
const todos = reactive([])
const todoCollRef = collection(db, 'todos')

let load = true

onMounted(() => {
  onSnapshot(todoCollRef, (querySnapshot) => {
    //Обработчик моментальных снимков. Что-то вроде слушателя изменений по данному пути
    const fbTodos = []
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        completed: doc.data().completed
      }
      //Заносим наши документы в массив
      fbTodos.push(todo)
    })
    //Обнуляем так-как при обновление данных локальный массив дублируется
    //Переносим данные в локальный реактивный массив
    todos.splice(0, todos.length, ...fbTodos.sort((a, b) => a.content.localeCompare(b.content)))
    //Я не понял по какой логике он сортирует, поэтому вставил эту сортировку, худо бедно, но лучше чем было...
  })
})

const pushNewToDo = (newTodo) => {
  addDoc(todoCollRef, {
    content: newTodo.content,
    completed: newTodo.completed
  })
}

//Заранее пробую функцию удаления
const deleteToDo = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}

const updateCompleted = async (todo) => {
  await updateDoc(doc(collection(db, 'todos'), todo.id), {
    completed: todo.completed
  })
}

//Слежу за изменением todos для обновления localStorage
watch(
  todos,
  (newTodos) => {
    //localStorage.setItem('todo_items', JSON.stringify(newTodos))
    if (todos.length > 0) load = false
  },
  { deep: true }
)
</script>

<template>
  <header class="my-5 has-text-centered">
    <h1 class="title">Привет, composition API! Мы отлично сработаемся!</h1>
  </header>
  <div class="container is-max-desktop px-3">
    <add-form
      class="my-3"
      placeholder="Add a new todo..."
      btn_text="Add"
      @addToDo="pushNewToDo"
    ></add-form>
    <img class="loading" src="@/assets/cat-loading.gif" alt="loading" v-show="load" />
    <div class="items-list" v-for="todo in todos" :key="todo.id">
      <to-do-item
        class="my-2"
        :todo="todo"
        @deleteToDo="deleteToDo"
        @completedToDo="updateCompleted"
      ></to-do-item>
    </div>
  </div>
</template>

<style>
@import 'bulma/css/bulma.min.css';
.loading {
  margin: 30px 200px;
  border-radius: 200px;
}
</style>
