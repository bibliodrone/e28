<!-- BlogPost.vue 
    populates list of posts in BlogPosts with info for each post
-->
<template>
    <div class='blog-post'>
       
         <router-link :to='{ name: "posts", params: {"id" : post.id }}'>
                 <h2 class='post-title'>{{ post.title }}</h2>
        </router-link>
        <div class='post-date'>{{ post.date }}</div>
        <ul id="categories">
            <li v-for='category in post.categories' :key='category'>
                {{ category }}
            </li>
        </ul>
         <hr>
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
<style>
#categories {
    list-style-type:none;
    padding-left: 15px;
}
#categories li {
    display: inline;
    margin: 0px 5px;
    padding: 3px;
    border: 2px solid black;
    font-variant: small-caps;
}
.blog-post{
    margin-left: 10%;
    background-color: white;
    padding: 5px 15px 5px 5px;
}

.post-date {
    display: table;
    margin-left: 15px;
    margin-bottom: 20px;
}

</style>