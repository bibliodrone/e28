import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BlogPosts from './components/BlogPosts.vue';
import BlogCategories from './components/BlogCategories.vue';
import ByCategory from './components/ByCategory.vue'
import BlogPage from './components/BlogPage.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: BlogPosts, name: 'posts' },
  { path: '/categories', component: BlogCategories, name: 'categories' },
  { path: '/by_category', component: ByCategory, name: 'by_category' },
  { path: '/posts/:id', component: BlogPage, name: 'post', props: true },
]


const router = new VueRouter({
  routes:routes,
  mode: 'history'
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
