<script>
export default {
  name: 'ToDoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <section class="card">
    <div class="card-content">
      <div class="content columns is-mobile is-vcentered">
        <p class="column is-10-mobile">
          <!-- <slot></slot> Интересный тег, не хотел удалять-->
          {{ todo.content }}
        </p>

        <div class="column is-2">
          <button class="button mr-3 mb-3 commit">&check;</button>
          <button class="button cross">&cross;</button>
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
</style>
