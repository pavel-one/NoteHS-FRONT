<template>
  <div class="changer">
    <div class="item" v-for="note in notes">
      <div class="name">
        {{ note.name }}
      </div>
      <div class="description">
        {{ note.description }}
      </div>
      <div class="updated">
        {{ note.date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        {
          name: 'Тестовая заметка 1',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
        {
          name: 'Тестовая заметка 2',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
        {
          name: 'Тестовая заметка 3',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
        {
          name: 'Тестовая заметка 4',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
        {
          name: 'Тестовая заметка 5',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
        {
          name: 'Тестовая заметка 6',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
        {
          name: 'Тестовая заметка 7',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .changer {

  }
</style>