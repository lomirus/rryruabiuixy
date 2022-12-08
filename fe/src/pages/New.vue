<script lang="ts" setup>
function submit() {
    alert("还没写完")
}
</script>

<template>
    <main>
        <input>
        <textarea></textarea>
    </main>

    <button class="submit" @click="submit">Submit</button>
</template>

<style lang="less" scoped>
main {
    display: flex;
    flex-direction: column;

    input {}

    textarea {
        resize: vertical;
    }
}

.submit {
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
    border: none;
    font-size: 16px;
    font-family: serif;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.4) 0 0 12px;
        background-color: #eee;
    }
}
</style>