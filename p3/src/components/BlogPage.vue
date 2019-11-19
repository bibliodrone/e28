<template>
    <div id='blog-page'>
        <h1>Post {{ id }}</h1>
    </div>
</template>

<script>
export default {
    name: 'BlogPage',
    props: ['id'],
    data: function() {
        return {};
    }
};
</script>