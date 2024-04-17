<script>
export default {
  name: 'ToDoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  //Попробовал заранее сделать удаление, хотя скорее всего тут будет просто фильтрация по done - true/false а не удаление, но мало ли...
  setup(props, { emit }) {
    const deleteToDo = (todo) => {
      emit('deleteToDo', todo.id)
    }
    //Еще заранее сделал пометку для выполненной задачи
    const completedToDo = (todo) => {
      todo.completed = !todo.completed
    }

    return {
      deleteToDo,
      completedToDo
    }
  }
}
</script>

<template>
  <section class="card" :class="{ 'has-background-success-light': todo.completed }">
    <div class="card-content">
      <div class="content columns is-mobile is-vcentered is-centered">
        <p class="column is-10-mobile">
          <!-- <slot></slot> Интересный тег, не хотел удалять-->
          <span :class="{ completed: todo.completed }">{{ todo.content }}</span>
        </p>

        <div class="column is-2">
          <button class="button mr-3 mb-3 commit" @click="completedToDo(todo)">&check;</button>
          <button class="button cross" @click="deleteToDo(todo)">&cross;</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cross:hover {
  background-color: rgb(255, 133, 133);
}
.commit:hover {
  background-color: rgb(168, 255, 133);
}
.completed {
  text-decoration: line-through;
  color: rgba(142, 142, 142, 0.807);
}
.card {
  transition: all 0.3s;
}
</style>
