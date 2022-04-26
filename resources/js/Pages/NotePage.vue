<template>
  <div>
    {{ editorjson }}
    <editor ref="editor" :config="config" :initialized="onInit"></editor>
  </div>
</template>

<script>
import 'highlightjs/styles/github.css'

export default {
  data() {
    return {
      editorjson: '',
      config: {
        tools: {
          header: require('@editorjs/header'),
          list: require('@editorjs/list'),
          inlineCode: require('@editorjs/inline-code'),
          personality: require('@editorjs/personality'),
          codebox: require('@bomdi/codebox'),
          link: require('@editorjs/link'),
          marker: require('@editorjs/marker'),
          table: require('@editorjs/table'),
          delimiter: require('@editorjs/delimiter'),
          quote: require('@editorjs/quote'),
          image: require('@editorjs/image'),
          warning: require('@editorjs/warning'),
          checklist: require('@editorjs/checklist'),
          attaches: require('@editorjs/attaches'),
        },
        codebox: {
          themeName: 'github', // Optional
          useDefaultTheme: 'dark' // Optional. This also determines the background color of the language select drop-down
        }
      }
    }
  },
  methods: {
    onInit: function (e) {
      console.log(e, 'init editor')
    }
  }
}
</script>