<template>
  <vs-row>
    {{ editorjson }}
      <vs-col :w="2">
        <notes-changer></notes-changer>
      </vs-col>
      <vs-col :w="9" :offset="1">
        <editor ref="editor" @change="change" v-model="editorjson" :config="config" :initialized="onInit"></editor>
      </vs-col>
  </vs-row>
</template>

<script>
import NotesChanger from "@components/notes-changer";

export default {
  components: {NotesChanger},
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
          codebox: require('@/vendor/codebox/dist/index.min'),
          table: require('editorjs-table'),
          attaches: require('@editorjs/attaches'),
          marker: require('@editorjs/marker'),
          inlineCode: require('@editorjs/inline-code'),
        },
        // codebox: {
        //   themeName: 'github',
        //   useDefaultTheme: 'dark'
        // }
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