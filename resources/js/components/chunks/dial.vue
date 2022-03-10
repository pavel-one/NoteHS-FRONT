<template>
  <vs-col class="card-margin" :w="width">
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
        <img v-if="!item.default" :src="'http://app.loc/' + item.screen" :alt="item.name">
        <img v-else :src="item.screen" :alt="item.name">
      </template>
      <template #text>
        <div>
          <p>
            {{ item.description }}
          </p>
        </div>
        <vs-button-group v-if="!item.default">
          <vs-button
              color="primary"
              icon
              floating
              @click="$emit('edit', item.id)"
          >
            <i class='bx bx-edit-alt'></i>
          </vs-button>
          <vs-button
              color="danger"
              icon
              floating
              @click.prevent="$emit('delete', item.id)"
          >
            <i class='bx bx-trash'></i>
          </vs-button>
        </vs-button-group>
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
    }
  }
}
</script>