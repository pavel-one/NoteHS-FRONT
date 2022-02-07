<template>
  <div class="root">
    <vs-row :w="12">
      <vs-col vs-type="flex" w="2">
        <sidebar></sidebar>
      </vs-col>

      <vs-col :w="9">
        <vs-row>
          <vs-col style="margin-left: 20px">
            <slot name="header"></slot>
          </vs-col>
        </vs-row>
        <slot></slot>
      </vs-col>
    </vs-row>

  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import AddSiteModal from "../components/add-site-modal.vue";

export default {
  components: {AddSiteModal, Sidebar},
}
</script>