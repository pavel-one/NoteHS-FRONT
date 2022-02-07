<template>
  <vs-row :w="12" class="speed-dial">
    <vs-col class="card-margin" :w="2">
      <div class="vs-card-content type-2 add-button" @click="triggerModal">
        <div class="vs-card">
          <div class="vs-card__img">
            <i class='bx bx-plus'></i>
          </div>
        </div>
      </div>
    </vs-col>
    <vs-col class="card-margin" :key="index" v-for="col,index in 20" :w="2">
      <vs-card type="2">
        <template #title>
          <h3>Тестовая ссылка</h3>
        </template>
        <template #img>
          <img src="https://via.placeholder.com/350x350" alt="">
        </template>
        <template #text>
          <p>
            Тестовое описание тестовой ссылки
          </p>
        </template>
      </vs-card>
    </vs-col>
    <add-site-modal :on-active="open" @close="triggerModal"></add-site-modal>
  </vs-row>
</template>

<script>
import AddSiteModal from "./add-site-modal.vue";

export default {
  components: {AddSiteModal},
  data: function () {
    return {
      open: false,
    }
  },
  methods: {
    triggerModal: function () {
      this.open = !this.open
    }
  }
}
</script>