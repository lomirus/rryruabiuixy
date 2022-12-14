<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import Comment from '../components/Comment.vue'
import { BASE_URL } from '../config';
import { Post, Res } from '../types';

const route = useRoute();
const postId = parseInt(route.path.split('/')[2])

let post = reactive<Post>({
    title: '',
    content: ''
})

onMounted(async () => {
    const res = await fetch(`${BASE_URL}/api/post/${postId}`)
    const data = await res.json() as Res<Post>;

    if (data.status) {
        console.log(data.data)
        post.title = data.data.title;
        post.content = data.data.content;
    } else {
        alert(`Failed to fetch /post/${postId}: ${data.info}`)
    }
})

function comment() {
    alert('这个功能还没写完')
}
</script>

<template>
    <main>
        <div class="post">
            <p class="title">{{ post.title }}</p>
            <div class="info">
                <span class="op">Admin</span>
                <span class="time">2022-12-08 14:51</span>
            </div>
            <p class="content">{{ post.content }}</p>
        </div>
        <div class="comments">
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
        </div>
        <div class="input">
            <textarea placeholder="Input your comment here..."></textarea>
            <button @click="comment">发 送</button>
        </div>
    </main>

</template>

<style lang="less">
main {
    margin: 36px auto;
    width: 800px;

    .post {
        box-shadow: rgba(0, 0, 0, 0.2) 0 0 12px;
        border-radius: 12px;
        padding: 24px 36px;

        .title {
            font-size: 24px;
            margin: 0 0 8px 0;
        }

        .info {
            display: flex;
            column-gap: 12px;
            margin: 0 0 24px 0;

            .op {
                color: #4d5256;
            }

            .time {
                color: #999;
            }
        }

        .content {
            margin: 0;
            color: #444;
        }
    }

    .comments {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 64px auto;

        box-shadow: rgba(0, 0, 0, 0.2) 0 0 12px;
        border-radius: 12px;
        width: 800px;

        section:not(:last-child) {
            border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
        }
    }

    .input {
        width: 800px;
        height: 120px;
        box-shadow: rgba(0, 0, 0, 0.2) 0 0 12px;
        border-radius: 12px;
        display: flex;
        column-gap: 2px;

        textarea {
            resize: none;
            border: none;
            box-sizing: border-box;
            padding: 12px 18px;
            border-radius: 12px 0 0 12px;
            height: 100%;
            width: 700px;
        }

        button {
            width: 98px;
            height: 100%;
            border: none;
            cursor: pointer;
            font-size: 18px;
            writing-mode: vertical-lr;
            border-radius: 0 12px 12px 0;
        }
    }
}
</style>