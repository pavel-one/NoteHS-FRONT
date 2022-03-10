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
    <dial @delete="deleteFunc" :ref="'dial-'+item.id" :key="item.id" v-for="(item) in this.dials" :width="2" :item="item"></dial>
    <add-site-modal :on-active="open" @close="triggerModal"></add-site-modal>
  </vs-row>
</template>

<script>
import AddSiteModal from "./add-site-modal.vue";
import Dial from "./chunks/dial.vue";

export default {
  components: {AddSiteModal, Dial},
  data: function () {
    return {
      open: false,
      dials: [{
        id: 1,
        name: 'Разработка вашего ПО',
        screen: 'images/pavel_one.png',
        description: 'Разработка ПО на заказ',
        default: true,
        final: true
      }],
      defaultDials: [{
        id: 1,
        name: 'Разработка вашего ПО',
        screen: 'images/pavel_one.png',
        description: 'Разработка ПО на заказ',
        default: true,
        final: true
      }]
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
      const dials = await this.$api.getDials()

      if (dials) {
        this.dials = dials
      } else {
        this.dials = this.defaultDials
      }

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
    },

    deleteFunc: async function (id) {
      await this.$api.deleteDial(id)
      await this.updateDials()
    }
  },
  mounted() {
    this.updateDials()
  }
}
</script>