<script setup>
import { RouterView } from 'vue-router'

import HeaderComponent from './components/Header.vue'
</script>

<template>
  <div class="bg-black text-white w-full min-h-screen">
    <HeaderComponent />
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
