<template>
  <div>
    <vs-navbar center-collapsed :fixed="true">
      <template #left>
        <logo></logo>
      </template>
      <vs-navbar-item @click="$store.commit('CHANGE_COMPONENT', 'SpeedDialPage')" :active="$store.state.component === 'SpeedDialPage'" id="SpeedDialPage">
        <i class='bx bx-customize' ></i>
        Speed Dial
      </vs-navbar-item>
      <vs-navbar-item id="note" @click="$store.commit('CHANGE_COMPONENT', 'NotePage')" :active="$store.state.component === 'NotePage'">
        <i class='bx bx-note' ></i>
        Note Page
      </vs-navbar-item>
      <vs-navbar-item id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item id="license">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat >Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
import Logo from "./logo";

export default {
  components: {Logo}
}
</script>