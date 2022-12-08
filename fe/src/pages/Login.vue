<script setup lang="ts">
let username = '';
let password = '';

function register() {
    console.log('register')
}

function login() {
    if (!username) {
        alert('用户名不能为空')
        return;
    }
    if (!password) {
        alert('密码不能为空')
        return;
    }
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    location.replace('/')
}
</script>

<template>
    <main>
        <div class="form">
            <span>Username</span>
            <input v-model="username">
            <span>Password</span>
            <input type="password" v-model="password">
        </div>
        <div class="buttons">
            <button @click="register">Register</button>
            <button @click="login">Login</button>
        </div>
    </main>
</template>

<style scoped lang="less">
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20vh auto;
    width: 640px;
    padding: 48px 0;
    border-radius: 24px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 30px;
}

.form {
    display: grid;
    grid-template-columns: 100px 1fr;
    row-gap: 8px;
    width: 480px;

    input {
        height: 24px;
        padding: 6px 16px;
        font-size: 18px;
        border-radius: 999px;
        background-color: #ddd;
        border: none;
    }
}

.buttons {
    margin-top: 24px;
    display: flex;
    column-gap: 24px;

    button {
        border: none;
        padding: 12px 24px;
        border-radius: 999px;
        font-size: 16px;
        cursor: pointer;
    }
}
</style>