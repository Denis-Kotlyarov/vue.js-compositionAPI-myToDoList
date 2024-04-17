<script>
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

export default {
  name: 'AddForm',
  props: {
    placeholder: String,
    btn_text: String
  },

  setup(props, { emit }) {
    const newToDoContent = ref('')
    const addToDo = () => {
      const newToDo = {
        id: uuidv4(),
        content: newToDoContent.value,
        completed: false
      }
      emit('addToDo', newToDo)
      newToDoContent.value = ''
    }

    return {
      addToDo,
      newToDoContent
    }
  }
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
