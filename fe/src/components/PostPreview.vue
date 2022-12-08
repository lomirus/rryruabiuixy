<template>
    <section>
        <RouterLink to="/post/1">在英语短句中都是作形容词使用,可以用来形容人的情绪</RouterLink>
        <div class="info">
            <span class="op">Admin</span>
            <span class="time">2022-12-08 14:51</span>
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