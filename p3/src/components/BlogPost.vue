<!-- src/components/BlogPost.vue -->
<template>
    <div class='blog-post'>
        <div class='post-date'>{{ post.date }}</div>
        <div class='post-title'>{{ post.title }}</div>
        <p class='post-content'>{{ post.content }}</p>
    </div>
</template>
<script>
import { posts } from './blogposts.js'
export default {
    name:'BlogPost',
    props: ['date', 'title', 'content'],
    data: function() {
        return {
            posts: null
        };
    }
}

</script>