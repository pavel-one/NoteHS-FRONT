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
      <vs-card :ref="'dial-'+item.id" type="2">
        <template #title>
          <h3>{{ item.name }}</h3>
        </template>
        <template v-if="!item.screen" #img>
          <div class="image-placeholder">
            <i class='bx bxs-image'></i>
          </div>
        </template>
        <template v-else #img>
          <img :src="'http://app.loc/' + item.screen" :alt="item.name">
        </template>
        <template #text>
          <p>
            {{ item.description }}
          </p>
          <vs-button-group>
            <vs-button
                color="primary"
                icon
                floating
            >
              <i class='bx bx-trash' ></i>
            </vs-button>
            <vs-button
                color="danger"
                icon
                floating
            >
              <i class='bx bx-trash' ></i>
            </vs-button>
          </vs-button-group>
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
      if (!this.open) {
        this.updateDials()
      }
    },
    updateDials: async function () {
      const loading = this.$vs.loading()
      this.dials = await this.$api.getDials()
      this.dials.forEach((item, index) => {
        if (!item.final) {
          setTimeout(() => {
            this.checkDial(item.id, index)
          }, 100)
        }
      })
      loading.close()
    },
    checkDial: async function (id, index) {
      const loading = this.$vs.loading({
        target: this.$refs['dial-' + id][0].$el,
      })


      const intervalId = setInterval(async () => {
        const response = await this.$api.getDial(id)

        if (response.final) {
          this.dials[index].screen = response.screen
          this.dials[index].name = response.name
          this.dials[index].description = response.description
          this.dials[index].url = response.url
          this.dials[index].final = response.final
          loading.close()
          clearInterval(intervalId)
        }
      }, 500)
    }
  },
  mounted() {
    this.updateDials()
  }
}
</script>