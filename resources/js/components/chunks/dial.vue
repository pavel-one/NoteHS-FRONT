<template>
  <vs-col class="card-margin" :w="width">
    <vs-card :ref="'dial-'+item.id" :type="type">
      <template #title>
        <h3>{{ item.name }}</h3>
      </template>
      <template v-if="!item.screen" #img>
        <div class="image-placeholder">
          <i class='bx bxs-image'></i>
        </div>
      </template>
      <template v-else #img>
        <img v-if="!item.default" :src="$api.backendUrl + item.screen" :alt="item.name">
        <img v-else :src="item.screen" :alt="item.name">
      </template>
      <template #text>
        <div>
          <p>
            {{ item.description }}
          </p>
        </div>
      </template>
      <template v-if="!readonly" #buttons>
        <div v-if="!item.default">
          <vs-button
              color="primary"
              icon
              floating
              gradient
              circle
              @click="$emit('edit', item.id)"
          >
            <i class='bx bx-edit-alt'></i>
          </vs-button>
          <vs-button
              color="danger"
              icon
              gradient
              floating
              circle
              @click.prevent="$emit('delete', item.id)"
          >
            <i class='bx bx-trash'></i>
          </vs-button>
        </div>
      </template>
    </vs-card>
  </vs-col>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    },
    width: {
      type: Number,
      default: 2
    },
    type: {
      type: String,
      default: 5
    },
    readonly: {
      type: Boolean,
      default: false
    }
  }
}
</script>