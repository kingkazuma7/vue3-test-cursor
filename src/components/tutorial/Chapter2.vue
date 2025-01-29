<script setup>
import { ref } from 'vue'

const message = ref('属性バインディング!')
const titleClass = ref('title')
</script>

<template>
  <div class="chapter2">
    <h1 :class="titleClass">Chapter 2 | {{ message }}</h1>
    <div class="content">
      <div :id="dynamicId"></div>
    </div>
    <div class="navigation">
      <RouterLink to="/tutorial/">Back to Tutorial</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.chapter2 {
  padding: 20px;
}

.title {
  color: red;
}

.navigation {
  margin-top: 20px;
}
</style> 