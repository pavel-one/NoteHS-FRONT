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
      <div class="actions">
        <!--
        <vs-button color="primary"
                   icon
                   floating
                   gradient
                   size="mini"
                   circle>
          <i class='bx bx-sync'></i>
        </vs-button>
        -->
        <vs-button color="dark"
                   border
                   icon
                   floating
                   gradient
                   size="mini"
                   circle>
          <i class='bx bxs-share-alt' ></i>
        </vs-button>
        <vs-button color="danger"
                   icon
                   floating
                   gradient
                   size="mini"
                   circle>
          <i class='bx bx-trash'></i>
        </vs-button>
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
          id: 1,
          name: 'Тестовая заметка',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
        {
          id: 2,
          name: 'Тестовая заметка',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
        {
          id: 3,
          name: 'Тестовая заметка',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
        {
          id: 4,
          name: 'Тестовая заметка',
          description: 'Ну какая то заметка',
          date: '1 неделя назад',
        },
        {
          id: 5,
          name: 'Тестовая заметка',
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
    height: 500px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-track {
      background: #eee;
    }

    &::-webkit-scrollbar-thumb {
      background: #dde7ff;
    }

    .item {
      margin: .5em 0;
      transition: .25s;
      padding: 10px;
      position: relative;

      .actions {
        display: flex;
        flex-direction: row;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        align-items: center;
        opacity: 0;
        transition: .15s;
      }

      .name {
        font-weight: bold;
        color: rgb(25,91,255);
      }

      .description {
        font-size: .9em;
        color: #999;
      }

      .updated {
        color: #777;
        margin-top: 5px;
      }

      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }

      &.active, &:hover {
        cursor: pointer;
        background: #dde7ff;
        box-shadow: 3px 3px 10px rgba(#dde7ff,.7);

        .actions {
          opacity: 1;
        }
      }
    }
  }
</style>