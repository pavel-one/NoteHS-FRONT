<template>
  <vs-row :w="12" class="speed-dial">
    <vs-col class="card-margin" :w="2" v-if="type === 0">
      <div class="vs-card-content type-2 add-button" @click="triggerModal">
        <div class="vs-card">
          <div class="vs-card__img">
            <i class='bx bx-plus'></i>
          </div>
        </div>
      </div>
    </vs-col>
    <dial @edit="editFunc" @delete="deleteFunc" :ref="'dial-'+item.id" :key="item.id" v-for="(item) in this.dials" :width="2" :item="item"></dial>
    <add-site-modal :on-active="open" @close="triggerModal"></add-site-modal>
    <edit-site-modal @close="closeModal" :on-active="edit.active" :data="edit.data"></edit-site-modal>
  </vs-row>
</template>

<script>
import AddSiteModal from "./add-site-modal.vue";
import EditSiteModal from "./modals/edit-side-modal.vue";
import Dial from "./chunks/dial.vue";

export default {
  props: {
    type: {
      type: Number,
      default: 0
    }
  },
  components: {AddSiteModal, Dial, EditSiteModal},
  data: function () {
    return {
      open: false,
      edit: {
        active: false,
        loading: false,
        data: {}
      },
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
      const dials = await this.$api.getDials(this.type)

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
      //TODO: Сделать внутри компонента, жутко багует, криво выглядит
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
    },

    editFunc: async function (id) {
      this.edit.active = true;
      this.edit.data = await this.$api.getDial(id)
    },
    closeModal: function () {
      this.edit.active = false
      this.updateDials()
    }
  },
  mounted() {
    if (this.type === 1) {
      this.$api.syncDials()
      setTimeout(() => {
        this.updateDials()
      }, 100)
    } else {
      this.updateDials()
    }
  }
}
</script>