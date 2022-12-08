<script lang="ts" setup>
import { checkLogin } from '../utils';
import { useRouter } from 'vue-router'

if (!checkLogin()) {
    const router = useRouter();
    router.replace('/')
}

function submit() {
    alert("这个功能还没写完")
}
</script>

<template>
    <main>
        <input placeholder="Input your text here...">
        <div contenteditable="true"></div>
    </main>

    <button class="submit" @click="submit">Submit</button>
</template>

<style lang="less" scoped>
main {
    display: flex;
    flex-direction: column;
    margin:auto;
    height: calc(100vh - 80px);
    row-gap: 8px    ;

    input {
        border: solid 1px #fff;
        outline: none;
        font-size: 24px;
        transition: all ease .2s;
        
        &:focus {
            border-bottom: solid #666 1px;
        }
    }

    div {
        width: 100%;
        word-wrap: break-word;
        resize: none;
        height: 200px;
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