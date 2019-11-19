<template>
    <div id = "homepage">
        <by-category :category='"general"'></by-category>
        <hr>
        <blog-posts></blog-posts>
        <hr>
        <blog-categories></blog-categories>
        <hr>
        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <a href='#' @click='page = link'>{{ link }}</a>
                </li>
            </ul>
        </nav>

    <component :is='linkComponents[page]'></component>
    </div>
</template>

<script>
import BlogPosts from './BlogPosts.vue'
import ByCategory from './ByCategory.vue'
import BlogCategories from './BlogCategories.vue'

export default {
  name : 'HomePage', 
  components: {
    ByCategory, BlogPosts, BlogCategories
  },
  data: function() {
    return {
      page:'Posts',
      links: ['Posts', 'Categories', 'By_Category'],
      linkComponents: {
        Posts: 'BlogPosts',
        Categories: 'BlogCategories',
        By_Category: 'ByCategory'
      }
    }
  }
}
</script>


<style>

</style>


