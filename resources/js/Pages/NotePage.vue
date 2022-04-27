<template>
  <div>
    {{ editorjson }}
    <editor ref="editor" @change="change" v-model="editorjson" :config="config" :initialized="onInit"></editor>
  </div>
</template>

<script>
import 'highlightjs/styles/github.css'

export default {
  data() {
    return {
      editorjson: '',
      config: {
        placeholder: 'Начни вводить...',
        tools: {
          header: require('@editorjs/header'),
          list: require('@editorjs/list'),
          checklist: require('@editorjs/checklist'),
          link: require('@editorjs/link'),
          delimiter: require('@editorjs/delimiter'),
          image: require('@editorjs/image'),
          codebox: require('@bomdi/codebox'),
          table: require('editorjs-table'),
          attaches: require('@editorjs/attaches'),
          marker: require('@editorjs/marker'),
          inlineCode: require('@editorjs/inline-code'),
        },
        codebox: {
          themeName: 'github',
          useDefaultTheme: 'dark'
        }
      }
    }
  },
  methods: {
    change: function (e) {
      console.log(e)
    },
    onInit: function (e) {
      console.log(e, 'init editor')
    }
  }
}
</script>