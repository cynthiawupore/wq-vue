<template>
    <div class="List-loading-more">
        <img src="../../assets/images/loading.png" alt="" class="loading-icon">
        <span class="txt">正在获取数据</span>
    </div>
</template>

<script>
    export default {
        name: 'ListLoadingMore',
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
    .List-loading-more{
        text-align: center;
        .loading-icon{
            width: 24px;
            height: 24px;
            vertical-align: middle;
            animation:loading 1s infinite;
            -webkit-animation:loading 1s infinite;
        }
        .txt{
            font-size: 12px;
            color: #8a8a8a;
            vertical-align: middle;
            margin-left: 10px;
        }

        @-moz-keyframes loading {
            0% { -moz-transform: rotate(0deg); }
            100% { -moz-transform: rotate(360deg); }
        }
        @-webkit-keyframes loading {
            0% { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes loading {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    }
</style>
