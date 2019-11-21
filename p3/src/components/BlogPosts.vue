<!-- BlogPosts.vue 
Displays a summary list of blog posts with title, date, tags, using sub-component
BlogPost
-->
<template>
    <div id='posts'>
        <blog-post
            v-for='post in posts'
            :key= 'post.id'
            :post='post'
        ></blog-post>
    </div>
</template>
<script>
    import BlogPost from './BlogPost.vue'
    const axios = require('axios');

    export default {
        name: 'BlogPosts',
        components: { BlogPost },
        data: function() {
           return {
                //posts:posts
                posts: []
            }
        },
        mounted() {
            this.posts = axios.get("https://my-json-server.typicode.com/bibliodrone/e28-p3-api/posts")
            .then(response => {
                this.posts = response.data;
            });
        }
    }
</script>
<style>
#posts {
    background-color: oldlace;
}
</style>