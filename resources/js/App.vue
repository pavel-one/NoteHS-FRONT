<template>
  <div id="app">
    Test app
  </div>
</template>

<script>
export default {
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
    chrome.identity.getProfileUserInfo(function(userInfo) {
      console.log(userInfo)
      console.log('UserID', userInfo.id);
    });
    //tabs
    chrome.tabs.query({}, function(tabs) {
      console.log(tabs)
    } );
  }
}
</script>