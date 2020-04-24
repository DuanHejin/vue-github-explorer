<template>
  <div id="app">
    <div class="container">
      <div>
        <SearchBar v-on:onClickSearch="handleSearch"></SearchBar>
      </div>
      <hr>
      <div class="main">
        <Explorer :repo="repo"></Explorer>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import Explorer from './components/Explorer.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    Explorer,
  },
  data() {
    return {
      repo: "",
    }
  },
  methods: {
    handleSearch: function (param) {
      const {repo} = param;
      this.repo = repo;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
