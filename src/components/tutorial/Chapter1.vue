<script setup>
import { reactive, ref } from 'vue'

const counter = reactive({ count: 0 })
const message = ref('Hello, Vue!')
message.value = '宣言的レンダリング'
</script>

<template>
  <div class="chapter1">
    <h1>Chapter 1 | {{ message }}</h1>
    <div class="content">
      <p>count: {{ counter.count }}</p>
    </div>
    <div class="navigation">
      <RouterLink to="/tutorial/">Back to Tutorial</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.chapter1 {
  padding: 20px;
}

.navigation {
  margin-top: 20px;
}
</style> 