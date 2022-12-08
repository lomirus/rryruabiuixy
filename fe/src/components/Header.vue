<script setup lang="ts">

</script>

<template>
    <header>
        <RouterLink to="/" class="index button">首页</RouterLink>
        <div class="user">
            <span class="username button">Admin</span>
            <span class="sign-out button">Sign Out</span>
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
    }
}
</style>
