<template>
  <div id="app">
    <header-component/>
    <main-component/>
  </div>
</template>

<script>
import Header from './components/header/index.vue'
import Main from './components/main/index.vue'

export default {
  name: 'app',
  components: {
    'header-component': Header,
    'main-component': Main
  }
}
</script>