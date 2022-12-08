<script setup lang="ts">
import PostPreview from '../components/PostPreview.vue';
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

</style>