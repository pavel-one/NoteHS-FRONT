<template>
  <vs-dialog v-model="active" :loading="loading" @close="$emit('close')">
    <template #header>
      <div style="text-align: center; max-width: 400px">
        <h4 class="not-margin">
          Редактировать
        </h4>
      </div>
    </template>
    <dial class="preview" :item="form" :width="12" type="5" :readonly="true"></dial>
    <br><br><br><br>


    <div class="edit-form">
      <vs-input v-model="form.name" >
        <template #icon>
          <i class='bx bx-rename'></i>
        </template>
      </vs-input>
      <br>
      <div class="vs-input-parent vs-input-parent--state-null  vs-component--primary">
        <div class="vs-input-content">
          <textarea v-model="form.description" id="vs-input--125" class="vs-input vs-input--has-icon">
            {{ form.description }}
          </textarea>
          <span class="vs-input__icon">
            <i class="bx bx-text"></i>
          </span>
          <div class="vs-input__affects">
            <div class="vs-input__affects__1"></div>
            <div class="vs-input__affects__2"></div>
            <div class="vs-input__affects__3"></div>
            <div class="vs-input__affects__4"></div>
          </div>
        </div>
      </div>
      <br>
      <vs-input v-model="form.url">
        <template #icon>
          <i class='bx bx-link' ></i>
        </template>
      </vs-input>
    </div>

    <template #footer>
      <div class="footer-dialog">
        <vs-button block>
          Сохранить
        </vs-button>

        <div class="new">
          Тест
        </div>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
import Dial from "../chunks/dial";
export default {
  components: {Dial},
  props: ['onActive', 'loading', 'data'],
  watch: {
    onActive: function (active) {
      this.active = active
    },
    data: function (data) {
      this.form = data
    }
  },
  data: function () {
    return {
      active: false,
      form: {
        name: '',
        description: '',
        url: '',
      }
    }
  },
  mounted() {
    console.log(this.active)
  }
}
</script>

<style lang="scss">
  .edit-form {
    width: 100%;

    input {
      width: 100%;
    }

    textarea {
      width: 100%;
    }
  }
  .preview .vs-card-content.type-5 .vs-card .vs-card__text {
    transform: translate(0);
    opacity: 1;
    -webkit-box-shadow: 0 0 30px 0 rgba(0, 0, 0, var(--vs-shadow-opacity));
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, var(--vs-shadow-opacity));
  }
</style>