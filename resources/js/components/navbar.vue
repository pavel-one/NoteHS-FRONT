<template>
  <vs-navbar center-collapsed v-model="active" :fixed="true">
    <vs-navbar-item :active="active === 'guide'" id="guide">
      Guide
    </vs-navbar-item>
    <vs-navbar-item :active="active === 'docs'" id="docs">
      Documents
    </vs-navbar-item>
  </vs-navbar>
</template>


<script>
export default {
  data() {
    return {
      active: 'guide'
    }
  }
}
</script>