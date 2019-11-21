<!-- BlogCategories: Generates display-list of category tags from all blog posts -->
<template>
    <div id = "categoriesList">
        <h3>Categories</h3>
        <ul>
            <li v-for='(category, id) in categories' :key='id'>-{{ category }}-</li>
        </ul>

    </div>
  
</template>

<script>
const axios = require('axios');

export default {
    name: 'BlogCategories',
    
    data: function() {
        return {
            posts: [],
            categories: []
        };
    },
    methods: {
        loadCategories: function() {
            let categories = this.posts.map(post => post.categories);
            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            this.categories = [...new Set(mergedCategories)].sort();
        }
    },
    mounted() {
        this.posts = axios
            .get("https://my-json-server.typicode.com/bibliodrone/e28-p3-api/posts")
            .then(response => {
                this.posts = response.data;
                this.loadCategories();
            });
    }
}
</script>

<style>
#categoriesList ul {
    list-style: none;
}
#categoriesList li {
    line-height: 2em !important;
    font-variant:small-caps !important;
}
</style>