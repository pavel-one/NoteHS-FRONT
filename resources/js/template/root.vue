<template>
  <div class="root">
    <navbar></navbar>
    <div style="height: 40px"></div>
    <vs-row :w="12" justify="center">
      <slot></slot>
    </vs-row>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import AddSiteModal from "../components/add-site-modal.vue";

export default {
  components: {AddSiteModal, Navbar},
}
</script>