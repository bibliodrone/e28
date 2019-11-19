<template>
    <div id = "categoriesList">
        <h3>Categories</h3>
        <ul>
            <li v-for='(category, id) in categories' :key='id'>-{{ category }}-</li>
        </ul>

    </div>
  
</template>

<script>
import { posts } from './blogposts.js'

export default {
    name: 'BlogCategories',
    computed: {
        categories:function() {
            let categories = this.posts.map(post => post.categories);
            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            return [...new Set(mergedCategories)].sort();
        }   
    },
    data: function() {
        return {
            posts:posts
        }
    }
}
</script>

<style scoped>
#categoriesList ul {
    list-style: none;
}

#categoriesList li {
    display: inline;
}
</style>