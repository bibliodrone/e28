<!-- src/components/BlogPosts.vue -->
<template>
    <div id='posts'>
        <h2>Blog posts</h2>
        <blog-post
            v-for='post in posts'
            :key= 'post.id'
            :post='post'
        ></blog-post>
    </div>
</template>
<script>
    import { posts } from './blogposts.js'
    import BlogPost from './BlogPost.vue'
    export default {
        name: 'BlogPosts',
        components: { BlogPost },
        data: function() {
           return {
                post: null
                }
        }
    }
</script>