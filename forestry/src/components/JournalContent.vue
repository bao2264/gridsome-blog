<template>
  <div class="journal-content" v-html="html" />
</template>

<script>
import MarkdownIt from "markdown-it"
export default {
  props: {
    content: String,
  },
  computed: {
    html() {
      const md = new MarkdownIt()
      return md.render(this.content)
    },
  },
}
</script>

<style>
p {
  line-height: 1.5;
  font-size: 1.15rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4,
h5,
h6 {
  font-size: 1.15rem;
}
</style>
