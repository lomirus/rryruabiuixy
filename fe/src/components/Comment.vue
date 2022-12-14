<script setup lang="ts">
defineProps({
    op: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})
</script>

<template>
    <section>
        <div class="info">
            <span class="op">{{ op }}</span>
            <span class="time">{{ time }}</span>
        </div>
        <p class="content">{{ content }}</p>
    </section>
</template>

<style lang="less" scoped>
section {
    width: 100%;
    padding: 20px 36px;
    box-sizing: border-box;

    .info {
        display: flex;
        column-gap: 12px;

        .op {
            font-weight: bold;
            color: #393d41;
        }

        .time {
            color: #ccc;
        }
    }

    p {
        margin: 8px 0 0 0;
        color: #444;
    }
}
</style>