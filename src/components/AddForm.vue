<script>
export default {
  name: 'AddForm',
  props: {
    placeholder: {
      type: String
    },
    btn_text: {
      type: String
    }
  },

  setup() {
    const addToDo = () => {
      console.log('AAA')
    }
  }
}
</script>

<template>
  <form @submit.prevent="addToDo">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" :placeholder="placeholder" />
      </p>
      <p class="control">
        <button class="button is-info">{{ btn_text }}</button>
      </p>
    </div>
  </form>
</template>

<style></style>
