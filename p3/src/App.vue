<template>
  <div id="app">
    <blog-posts>
    </blog-posts>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to My Blog"/> -->
  </div>
</template>

<script>
import BlogPosts from './components/BlogPosts.vue'

export default {
  name : 'app', 
  components: {
    BlogPosts
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
