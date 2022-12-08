<script setup lang="ts">
function register() {
    console.log('register')
}

function login() {
    
}
</script>

<template>
    <main>
        <div class="form">
            <span>Username</span>
            <input>
            <span>Password</span>
            <input type="password">
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