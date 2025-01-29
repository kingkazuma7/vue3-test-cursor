<template>
  <div class="tutorial">
    <h1>Tutorial</h1>
    <nav>
      <RouterLink to="/tutorial/chap1">Chapter 1</RouterLink> |
      <RouterLink to="/tutorial/chap2">Chapter 2</RouterLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Tutorial'
}
</script>

<style scoped>
.tutorial {
  padding: 20px;
}
</style>
