<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Comment from '../components/Comment.vue'

const route = useRoute();
const id = parseInt(route.path.split('/')[2])

// id 后面用

function comment() {
    alert('这个功能还没写完')
}
</script>

<template>
    <main>
        <div class="post">
            <p class="title">在英语短句中都是作形容词使用,可以用来形容人的情绪</p>
            <div class="info">
                <span class="op">Admin</span>
                <span class="time">2022-12-08 14:51</span>
            </div>
            <p class="content">ASD(Autism Spectrum
                Disorder)孤独症谱系障碍,是一系列复杂的神经发展障碍性疾病，能影响孩子的社交，行为和交流方面的能力。有孤独症谱系障碍的人，其大脑处理信息的方式异于常人。孤独症谱系障碍共有三类：自闭症（或典型自闭症），阿斯伯格综合征和待分类的广泛性发展障碍（PDD-NOS）。
            </p>
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