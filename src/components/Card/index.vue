<template>
    <div class="Card">
        <div class="Card-box">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
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
    .Card{
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        .Card-box{
            background: #FFFFFF;
            box-shadow: 0 0 9px 0 #DAE8F7;
            border-radius: 4px;
        }
    }
</style>
