<template>
  <div id="app">
    <!--<home-page></home-page>-->
    <!--<blog-posts></blog-posts>
    <hr>
    <blog-categories></blog-categories>
    <hr>
    <by-category :category='"general"'></by-category>
    <hr> -->

    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
            <router-link exact :to='{ name: link }'>
            {{ link }}
            </router-link>
        </li>    
      </ul>
     </nav> 
     <!--<component :is='linkComponents[page]'></component>-->
    
      <router-view></router-view>
    

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to My Blog"/> -->
  </div>
</template>

<script>
//import BlogPosts from './components/BlogPosts.vue'
//import HomePage from './components/HomePage.vue'
//import ByCategory from './components/ByCategory.vue'
//import BlogCategories from './components/BlogCategories.vue'

export default {
  name : 'app', 
  components: {
    //ByCategory, BlogPosts, BlogCategories
  },
  data: function() {
    return {
      links:['posts', 'categories', 'by_category'],
      //page:'Posts',
      //links: ['Posts', 'Categories', 'By_Category'],
      //linkComponents: {
      //  Posts: 'BlogPosts',
      //  Categories: 'BlogCategories',
      //  By_Category: 'ByCategory'
    };
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
