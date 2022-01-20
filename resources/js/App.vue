<template>
  <div id="app" ref="app">
    <div v-if="login">
      <root></root>
    </div>
    <non-auth v-else></non-auth>
  </div>
</template>

<script>
import NonAuth from "./components/non-auth.vue";
import Logo from "./components/logo";
import Root from "./template/root";

export default {
  components: {Root, Logo, NonAuth},
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

    //Закладки
    chrome.bookmarks.getTree(items => {
      console.log(items)
    })
    //top sites
    chrome.topSites.get(item => {
      console.log('top sites', item)
    })
    //Profile google
    chrome.identity.getProfileUserInfo(function (userInfo) {
      console.log(userInfo)
      console.log('UserID', userInfo.id);
    });
    //tabs
    chrome.tabs.query({}, function (tabs) {
      console.log(tabs)
    });
  }
}
</script>