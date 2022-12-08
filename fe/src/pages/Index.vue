<script setup lang="ts">
import { useRouter } from 'vue-router'

const username = localStorage.getItem('username');
const password = localStorage.getItem('password');

if (username && password) {
    // fetch feed stream...
} else {
    const router = useRouter();
    router.replace('/login')
}
</script>

<template>
    Index
</template>