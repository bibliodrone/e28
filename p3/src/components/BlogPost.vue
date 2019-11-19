<template>
    <div class='blog-post'>
        <hr>
        <!--<p>Post number {{ post.id }}</p> -->
        <h1 class='post-title'>{{ post.title }}</h1>
        <div class='post-date'>{{ post.date }}</div>
        <div class='post-category'> {{ post.categories }}</div>
        <ul id="categories">
            <li v-for="category in post.categories" :key="category.id">
                {{ post.category }}
            </li>
        </ul>
        <!-- <p class='post-content'>{{ post.content }}</p> -->

    </div>
</template>
<script>
export default {
    name:'BlogPost',
    props: ['post'],
    data: function() {
        return {
            posts: null,
        };
    }, 
}

</script>