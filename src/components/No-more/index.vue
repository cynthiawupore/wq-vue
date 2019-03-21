<template>
    <div class="No-more">
        <p class="txt">不要再拉了，我也是有底线哒~</p>
    </div>
</template>

<script>
    export default {
        name: 'NoMore',
        components:{},
        props:[],
        data: function () {
            return {}
        },
        mounted:function(){},
        methods:{}
    }
</script>

<style lang="less">
    .No-more{
        text-align: center;
        padding: 20px 0;
        .txt{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #C1C1C1;
            letter-spacing: 0.44px;
        }
    }
</style>
