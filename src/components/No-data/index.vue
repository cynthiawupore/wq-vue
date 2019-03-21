<template>
    <div class="No-data">
        <p><img src="../../assets/images/no-data@2x.png" alt=""></p>
        <p class="txt">暂无相关数据</p>
    </div>
</template>

<script>
    export default {
        name: 'NoData',
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
    .No-data{
        text-align: center;
        padding: 30px 0;
        .txt{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #C1C1C1;
            letter-spacing: 0.44px;
        }
    }
</style>
