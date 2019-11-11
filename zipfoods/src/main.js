import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ProductsPage from './components/pages/ProductsPage.vue';
import ProductPage from '.components/pages/ProductPage.vue';
import HomePage from './components/pages/HomePage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

// :id is a path 'segment' or parameter; can be referenced in ProductPage.vue
// as an instance variable. or by making it a 'prop' as below (and declared in the
// view file also).
const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/products', name: 'products', component: ProductsPage },
  { path: '/product/:id', name:'product', component: ProductPage, props: true },
  { path: '/categories', name: 'categories', component: CategoriesPage }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')