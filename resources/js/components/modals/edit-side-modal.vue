<template>
  <vs-dialog v-model="active" :loading="loading" @close="$emit('close')">
    <template #header>
      <div style="text-align: center; max-width: 400px">
        <h4 class="not-margin">
          Редактировать
        </h4>
      </div>
    </template>
    <div @click="changePhoto" class="preview-wrapper">
      <dial class="preview" :item="form" :width="12" type="5" :readonly="true"></dial>
      <div class="change-photo-wrapper">
        <vs-button
            circle
            icon
            floating
            shadow
            size="xl"
            @click="changePhoto"
        >
          <i class='bx bx-sync'></i>
        </vs-button>
      </div>
    </div>
    <br><br><br>


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
      <input  type="file" accept="image/*" hidden @change="changePhotoEvent" ref="imageInput">
    </div>

    <template #footer>
      <div class="footer-dialog">
        <vs-button block>
          Сохранить
        </vs-button>
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
  methods: {
    changePhoto: function () {
      this.$refs.imageInput.click()
    },
    changePhotoEvent: function (event) {
      const file = event.target.files[0]
      this.form.screen = URL.createObjectURL(file)
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
  .preview-wrapper {
    position: relative;

    .vs-button {
      transition: .25s;
      opacity: 0;
    }

    .preview {
      transition: .2s;

      .vs-button--size-xl .vs-button__content {
        font-size: 5em !important;
      }
    }

    &:hover {
      cursor: pointer;

      .preview {
        opacity: .3;
      }
      .vs-button {
        opacity: 1;
      }
    }

    .change-photo-wrapper {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
</style>