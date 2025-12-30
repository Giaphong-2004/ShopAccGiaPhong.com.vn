<template>
  <div id="app">
    <Header v-if="$route.meta.showHeader" />
    <Snow />
    <main :class="{ 'with-header': $route.meta.showHeader }">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Snow from './components/Snow.vue'

export default {
  name: 'App',
  components: {
    Header,
    Snow
  }
}
</script>

<style>
@import './assets/style.css';

main {
  min-height: 100vh;
}

main.with-header {
  padding-top: 72px;
}
</style>