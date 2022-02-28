<template>
  <vs-dialog :loading="loading" v-model="active">
    <template #header>
      <h4 class="not-margin">
        Добавить сайт
      </h4>
    </template>

    <div class="con-content">
      <vs-input type="url" label-placeholder="Адрес сайта" v-model="url">
        <template #icon>
          <i class='bx bx-network-chart'></i>
        </template>
      </vs-input>
    </div>

    <template #footer>
      <div class="con-footer">
        <vs-button @click="submit" transparent>
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
      active: false,
      loading: false,
      url: null,
    }
  },
  watch: {
    onActive: function (active) {
      this.active = active
    }
  },
  methods: {
    submit: async function () {
      this.loading = true
      await this.$api.createDial({
        url: this.url
      })
      this.loading = false
      this.$emit('close')
    }
  }
}
</script>