<template>
    <div class="To-top" @click="toTop()" v-if="scrollTop > winH * 2">
        <img src="../../assets/images/top.png" alt="" class="top">
    </div>
</template>

<script>
    export default {
        name: 'ToTop',
        components:{},
        props:[],
        data: function () {
            return {
                scrollTop:0,
                winH:window.screen.height
            }
        },
        mounted:function(){
            window.addEventListener('scroll', () => {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                this.scrollTop = scrollTop
            }, true);
        },
        methods:{
            toTop:function () {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
        }
    }
</script>

<style lang="less">
    .To-top{
        width: 35px;
        height: 35px;
        background: #e6e6e6;
        border-radius: 50%;
        overflow: hidden;
        position: fixed;
        z-index: 9;
        right: 20px;
        bottom: 20px;
        .top{
            width: 21px;
            height: 21px;
            margin: 0 auto;
            margin-top: 7px;
            display: block;
        }
    }
</style>
