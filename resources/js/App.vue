<template>
  <div id="app" ref="app">
    <div v-if="login">
      <root>
        <a-button type="primary">Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
      </root>
    </div>
    <non-auth v-else></non-auth>
  </div>
</template>

<script>
import NonAuth from "./components/non-auth.vue";
import Logo from "./components/logo";
import Root from "./template/root";
import SpeedDial from "./components/speed-dial.vue";

export default {
  components: {Root, Logo, NonAuth, SpeedDial},
  data() {
    return {
      login: true,
      active: false
    }
  },
  methods: {
    checkAuth: function () {
      chrome.identity.getProfileUserInfo(userInfo => {
        this.login = !!userInfo.id;
      });
    }
  },
  mounted() {
    this.checkAuth();
    this.$api.getUserInfo()

    //Закладки
    chrome.bookmarks.getTree(items => {
      console.log(items)
    })
    //tabs
    chrome.tabs.query({}, function (tabs) {
      console.log(tabs)
    });
  }
}
</script>