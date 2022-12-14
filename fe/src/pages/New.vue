<script lang="ts" setup>
import { checkLogin } from '../utils';
import { useRouter } from 'vue-router'
import { BASE_URL } from '../config';
import { Res } from '../types';

const router = useRouter();

let title = '';
let content = '';

if (!checkLogin()) {
    router.replace('/')
}

async function submit() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const res = await fetch(`${BASE_URL}/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            title,
            content
        })
    })
    const data = await res.json() as Res<number>;

    if (data.status) {
        router.replace(`/post/${data.data}`)
    } else {
        alert(`Failed to post: ${data.info}`)
    }
}
</script>

<template>
    <main>
        <input placeholder="Input your title here..." v-model="title">
        <textarea placeholder="Input your text here..." v-model="content"></textarea>
    </main>

    <button class="submit" @click="submit">Submit</button>
</template>

<style lang="less" scoped>
main {
    display: flex;
    flex-direction: column;
    margin: auto;
    height: calc(100vh - 80px);
    row-gap: 8px;

    input {
        border: solid 1px #fff;
        outline: none;
        font-size: 24px;
        transition: all ease .2s;

        &:focus {
            border-bottom: solid #666 1px;
        }
    }

    textarea {
        width: 100%;
        word-wrap: break-word;
        resize: none;
        height: 640px;
        border: none;
        outline: none;
    }
}

.submit {
    background-color: #ddd;
    width: 128px;
    height: 64px;
    position: fixed;
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
    border: none;
    font-size: 16px;
    font-family: serif;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.4) 0 0 12px;
        background-color: #eee;
    }
}
</style>