<template>
  <footer class="footer">
    <div class="container">
      <span v-html="settings" />
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      settings: "Copyright &copy; 2019",
    }
  },
}
</script>

<style scoped>
.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}
</style>