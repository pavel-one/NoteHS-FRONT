<template>
  <div class="non-auth">
    <logo></logo>
    <div ref="loadBlock" class="load-block"></div>
    <div class="content">
      <vs-alert  :page.sync="page" :progress="percent" closable v-model="active">
        <template #title>
          Необходима авторизация
        </template>
        <template #page-1>
          Прежде, чем мы начнем, вы должны авторизоваться в своем Google аккаунте
        </template>
        <template #page-2>
          Авторизация необходима для того, чтобы мы смогли синхронизировать данные вашего рабочего пространства с нашим
          сервером
        </template>
      </vs-alert>
    </div>


  </div>
</template>

<script>
import Logo from './logo.vue';

export default {
  components: {Logo},
  data: () => ({
    percent: 0,
    page: 1,
    maxPage: 2,
    active: true
  }),
  methods: {
    changePage: function () {
      if (this.percent >= 100) {
        this.percent = 0

        if (this.page >= this.maxPage) {
          this.page = 1
        } else {
          this.page += 1
        }

      } else {
        this.percent += 2.5
      }

    }
  },
  mounted() {
    setInterval(() => {
        this.changePage()
    }, 125)
    this.$vs.loading({
      target: this.$refs.loadBlock,
      // color: 'dark',
      opacity: "0",
      type: "rectangle"
    })
  }
}
</script>
<style lang="scss">
.non-auth {
  margin: auto;
  max-width: 600px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content {
    max-width: 600px;
  }
  .load-block {
    height: 40px;
    position: relative;
  }
  .logo {
    font-size: 12em;
    position: relative;
  }
}
</style>