<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
            <router-link exact :to='{ name: link }'>
            {{ link }}
            </router-link>
        </li>    
      </ul>
     </nav> 
    
     <router-view></router-view>
    
  </div>
</template>

<script>

// To Do: Add page showing posts matching specific categories chosen
// by the user. This might be a more complex feature than it sounds...

export default {
  name : 'app', 
  components: {},
  data: function() {
    return {
      links:['categories', 'homepage', 'favorites']
    };
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1000px;
}
h1 {
  text-align: center;
}
nav {
  padding: 5px 15px;
  background-color: lightgray;
  text-align: center;
}

nav ul {
  list-style-type: none;
  padding-left: 10%;
}
nav li {
  display: inline;
  margin: 0px 10px;
  background: snow;
  padding: 5px;
  border-radius: 5px;
  }
</style>
