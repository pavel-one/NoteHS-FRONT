<template>
  <vs-dialog v-model="active">
    <template #header>
      <h4 class="not-margin">
        Добавить сайт
      </h4>
    </template>


    <div class="con-content">
      <vs-input type="url" label-placeholder="Адрес сайта">
        <template #icon>
          <i class='bx bx-network-chart'></i>
        </template>
      </vs-input>
    </div>

    <template #footer>
      <div class="con-footer">
        <vs-button @click="test" transparent>
          Ок
        </vs-button>
        <vs-button @click="$emit('close')" dark transparent>
          Отменить
        </vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
export default {
  props: ['onActive'],
  data: function () {
    return {
      active: false
    }
  },
  watch: {
    onActive: function (active) {
      this.active = active
    }
  },
  methods: {
    test: function () {
      this.$emit('close-test')
    }
  }
}
</script>