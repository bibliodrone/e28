<template>
    <div class='product'>
       <!-- <div class='product-name'>{{ product.name }}</div>
         <router-link :to='"/product/" + product.id'> -->
        <router-link :to="{ name: 'product', params: {'id': product.id}}">
                <img
            class='product-thumb'
            :alt='"Product image of  " + product.name'
            :src='"./../assets/images/products/" + product.id + ".jpg"'
        />
        </router-link>
        <!-- <p class='product-description'>{{ product.description }}</p>
        <div class='product-price'>${{ product.price }}</div> -->
    </div>
</template>

<script>
export default {
    name: 'ShowProduct',
    props: ['product']
};
</script>

<style>
</style>
