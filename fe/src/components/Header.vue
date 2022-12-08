<script setup lang="ts">
import { ref } from 'vue'

type LoginState = 'unknown' | 'guest' | 'member'

let loginState = ref<LoginState>('unknown');

const username = localStorage.getItem('username');
const password = localStorage.getItem('password');

if (username && password) {
    loginState = ref('member')
} else {
    loginState = ref('guest')
}

function signOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    location.reload();
}
</script>

<template>
    <header>
        <RouterLink to="/" class="index button">首页</RouterLink>

        <div class="user" v-if="(loginState === 'member')">
            <span class="username button">{{ username }}</span>
            <span class="sign-out button" @click="signOut">Sign Out</span>
        </div>
        <div class="user" v-else-if="(loginState === 'guest')">
            <RouterLink to="/login" class="login button">Login</RouterLink>
        </div>
    </header>
</template>

<style scoped lang="less">
header {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    padding: 0 12px;
    background-color: rgba(0, 0, 0, .05);

    .button {
        padding: 12px 24px;
        border-radius: 24px;
        transition: .2s ease all;
    }

    .index {
        text-decoration: none;
        color: black;

        &:hover {
            background-color: rgba(0, 0, 0, .2);
        }
    }

    .user {
        display: flex;
        column-gap: 12px;

        .username:hover {
            cursor: default;
            background-color: rgba(0, 0, 0, .2);
        }

        .sign-out {
            cursor: pointer;

            &:hover {
                background-color: rgba(255, 0, 0, .2);
            }
        }

        .login {
            cursor: pointer;
            text-decoration: none;
            color: #000;

            &:hover {
                background-color: rgba(0, 0, 255, .2);
            }
        }
    }
}
</style>
