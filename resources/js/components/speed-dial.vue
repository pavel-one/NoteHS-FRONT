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
    <vs-col class="card-margin" :key="item.id" v-for="(item) in this.dials" :w="2">
      <vs-card type="2">
        <template #title>
          <h3>{{ item.name }}</h3>
        </template>
        <template #img>
          <img :src="'http://app.loc/' + item.screen" :alt="item.name">
        </template>
        <template #text>
          <p>
            {{ item.description }}
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
      dials: [],
    }
  },
  methods: {
    triggerModal: function () {
      this.open = !this.open
    },
    updateDials: async function () {
      const loading = this.$vs.loading()
      console.log(await this.$api.getDials())
      this.dials = await this.$api.getDials()
      loading.close()
    },
  },
  mounted() {
    this.updateDials()
  }
}
</script>