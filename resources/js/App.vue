<template>
  <div id="app" ref="app">
    <div v-if="login">
      <root>
        <template #header>
          <h1>Быстрый доступ</h1>
        </template>
        <speed-dial></speed-dial>

        <vs-row>
          <vs-col style="margin-left: 20px">
            <h2>Поплярные сайты</h2>
          </vs-col>
        </vs-row>
        <speed-dial :type="1"></speed-dial>
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
        // this.login = false;
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