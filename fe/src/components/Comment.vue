<template>
    <section>
        <div class="info">
            <span class="op">Admin</span>
            <span class="time">2022-12-08 14:51</span>
        </div>
        <p class="content">你说的对，但是《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。游戏发生在一个被称作「提瓦特」的幻想世界，在这里，被神选中的人将被授予「神之眼」，导引元素之力。你将扮演一位名为「旅行者」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘「原神」的真相。</p>
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