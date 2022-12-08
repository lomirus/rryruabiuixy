<script setup lang="ts">
import PostPreview from '../components/PostPreview.vue';
import { RouterLink } from 'vue-router';
// import { useRouter } from 'vue-router'

// const username = localStorage.getItem('username');
// const password = localStorage.getItem('password');

// if (username && password) {
//     // fetch feed stream...
// } else {
//     const router = useRouter();
//     router.replace('/login')
// }
</script>

<template>
    <div class="list">
        <PostPreview></PostPreview>
        <PostPreview></PostPreview>
        <PostPreview></PostPreview>
        <PostPreview></PostPreview>
    </div>
    <RouterLink to="/new" class="new-post">New Post</RouterLink>
</template>

<style lang="less">
.list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px auto;


    box-shadow: rgba(0, 0, 0, 0.2) 0 0 12px;
    border-radius: 12px;
    width: 800px;

    section:not(:last-child) {
        border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
    }
}

.new-post {
    background-color: #ddd;
    width: 128px;
    height: 64px;
    position: absolute;
    right: 64px;
    bottom: 64px;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease .4s;
    text-decoration: none;
    color: black;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.4) 0 0 12px;
        background-color: #eee;
    }
}
</style>