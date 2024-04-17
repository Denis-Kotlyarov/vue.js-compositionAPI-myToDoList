<script setup>
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

const props = defineProps({
  placeholder: String,
  btn_text: String
})

const emits = defineEmits(['addToDo'])

const newToDoContent = ref('')
const addToDo = () => {
  const newToDo = {
    id: uuidv4(),
    content: newToDoContent.value,
    completed: false
  }
  emits('addToDo', newToDo)
  newToDoContent.value = ''
}
</script>

<template>
  <form @submit.prevent="addToDo">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" :placeholder="placeholder" v-model="newToDoContent" />
      </p>
      <p class="control">
        <button class="button is-info" :disabled="!newToDoContent">{{ btn_text }}</button>
      </p>
    </div>
  </form>
</template>

<style></style>
