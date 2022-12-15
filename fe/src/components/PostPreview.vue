<script lang="ts" setup>
import { formatTimeStamp } from '../utils'

defineProps({
    op: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <section>
        <RouterLink :to="`/post/${id}`">{{ title }}</RouterLink>
        <div class="info">
            <span class="op">{{ op }}</span>
            <span class="time">{{ formatTimeStamp(time) }}</span>
        </div>
    </section>
</template>

<style lang="less" scoped>
section {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 36px;
    display: flex;
    flex-direction: column;
    row-gap: 6px;

    a {
        text-decoration: none;
        color: #32363a;

        &:hover {
            text-decoration: underline;
        }
    }

    .info {
        display: flex;
        column-gap: 12px;

        .op {
            font-weight: bold;
            color: #778087;
        }

        .time {
            color: #ccc;
        }
    }
}
</style>