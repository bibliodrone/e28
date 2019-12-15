<!-- BlogPage: displays a single full post on its own page -->
<template>
    <div id='blog-page' v-if='post'>
        <h1 class='post-title'>{{ post.title }}</h1>
        <div class='post-date'>{{ post.date }}</div>
        <ul id="categories">
            <li v-for='cat in post.categories' :key='cat'>
                {{ cat }}
            </li>
        </ul>
        <p class='post-content'>{{ post.content }}</p>
        <button id = "addToFavorites" @click='addToFavorites(post.id)'>Add to Favorites</button>

        <transition name='fade'>
            <div class='addToFavorites' v-if='addedFavorite'>Added to favorites!</div>
        </transition>
        <!--
            To do: find some image assets to illustrate posts.
            <img
            v-if='post.id'
            class='blog-image'
            :alt='"Image accompanying  " + post.title'
            :src='"../assets/images/post/" + post.id + ".jpg"'
        /> -->
        <p></p>
        <div id = 'routerLink'>
            <router-link :to='"/"'>&larr; Return to Home Page</router-link>
        </div>
    </div>
</template>

<script>
const axios = require ('axios');
import Favorites from './Favorites'
export default {
    name: 'BlogPage',
    props: ['id'],
    data: function() {
        return {
            post:null,
            addedFavorite: false
            };
        //return {};
    },
    mounted() {
            this.post = axios.get("https://my-json-server.typicode.com/bibliodrone/e28-p3-api/posts/" + this.id)
            .then(response => {
                this.post= response.data;
            });
    },
    methods: {
        addToFavorites: function(post_id) {
            let faves = new Favorites();
            faves.add(post_id);
            //this.$store.commit('setFavorites', post_id)
            this.addedFavorite = true;
            setTimeout(() => (this.addedFavorite = false), 2000);

        }
    }
};
</script>

<style>
#blog-page {
    margin-left: 10%;
}
#addToFavorites{
    border-radius: 3px;
    color: green;
    font-weight: bold;
    
}
.post-content {
    margin-top: 40px;
    margin-bottom: 25px;
}
.post-title {
    text-align: left;
}
.post-date {
    font-style: italic;
}
#routerLink {
    margin-top: 35px;
    font-weight: bold;
}
</style>