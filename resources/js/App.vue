<template>
  <div id="app" ref="app">
    <div v-if="login">
      <root>
        <template #header>
          <h1>{{ $store.state.title }}</h1>
        </template>
        <component v-bind:is="$store.state.component"></component>
      </root>
    </div>
    <non-auth v-else></non-auth>
  </div>
</template>

<script>
import NonAuth from "./components/non-auth.vue";
import Root from "./template/root";

export default {
  components: {Root, NonAuth},
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
    const userPromise = this.$store.getters.user;

    userPromise.then(user => {
      if (user) {
        this.$store.commit('CHANGE_POST', user.settings.post)
        this.$store.commit('CHANGE_COMPONENT', user.settings.component)
      }
    }).catch(error => {
      //TODO: set error
    })

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