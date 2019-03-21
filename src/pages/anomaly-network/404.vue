<template>
    <div class="notFound">
        <div class="info">
            <img src="../../assets/images/404.png" alt="">
            <p>抱歉,您找的页面不存在 <router-link to="/">回到首页</router-link></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'notFound',
        components:{ },
    }
</script>

<style lang="less">
    .notFound{
        font-size: 14px;
        color: #8a8a8a;
        text-align: center;
        .info{
            padding-top: 150px;
        }
    }
</style>
