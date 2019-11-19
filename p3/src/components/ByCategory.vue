<template>
    <div id='featured'>
        <h2>Posts by Category</h2>
        <ul class='byCategory'>
            <li v-for='post in byCategory' :key='post.id'>{{ post.title }} -- {{ post.categories }}</li>
        </ul>
    </div>
</template>

<script>
import { posts } from './blogposts.js'
export default {
    name: 'ByCategory',
    props:['category'],
    computed: {
        byCategory: function() {
            function isMatch(post) {
                return post.categories.includes(this);
            }
            return this.posts.filter(isMatch, this.category);
        }
    },
    data: function() {
        return {
            posts:posts
        }
    }

}
</script>

<style>

</style>