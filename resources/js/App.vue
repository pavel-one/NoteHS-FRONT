<template>
  <div id="app">
    <div v-if="login">
      test
    </div>
    <non-auth v-else></non-auth>
  </div>
</template>

<script>
import NonAuth from "./components/non-auth.vue";

export default {
  components: {NonAuth},
  data() {
    return {
      login: false,
    }
  },
  methods: {
    checkAuth: function () {

    }
  },
  mounted() {
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