<template>
  <vs-row>
      <vs-col :w="2">
        <notes-changer @change="change"></notes-changer>
      </vs-col>
      <vs-col :w="9" :offset="1">
        <h2 class="editable" ref="name" @change="name = this.$refs.name.content" style="margin-bottom: 0; margin-left: 40px" contenteditable="true">{{ name }}</h2>
        <div class="editable" ref="description" @change="description = this.$refs.description.content" style="margin-bottom: 30px; margin-left: 40px" contenteditable="true">{{ description }}</div>
        <editor ref="editor" :config="config" :init-data="editor"></editor>
        <pre>{{ editor }}</pre>
      </vs-col>
  </vs-row>
</template>

<script>
import NotesChanger from "@components/notes-changer";

export default {
  components: {NotesChanger},
  data() {
    return {
      name: '',
      description: null,
      editor: {},
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
        onChange: (args) => {
          this.$refs.editor._data.state.editor.save()
                .then((data) => {
                  this.editor = data
                })
        },
      }
    }
  },
  methods: {
    change: function (e) {
      this.editor = e.data ?? null
      this.name = e.name
      this.description = e?.description

      if (!this.editor) {
        this.$refs.editor._data.state.editor.clear()
        return
      }

      this.$refs.editor._data.state.editor.render(this.editor)
    },
  }
}
</script>