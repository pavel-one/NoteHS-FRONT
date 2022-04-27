<template>
  <div class="root">
    <navbar></navbar>
    <vs-row :w="12" class="components-wrapper" justify="center">
      <vs-col :w="9">
        <vs-row>
          <vs-col style="margin-left: 20px; text-align: center">
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
import Navbar from "../components/navbar";

export default {
  components: {Navbar, AddSiteModal, Sidebar},
}
</script>