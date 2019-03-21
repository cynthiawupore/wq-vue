<template>
    <div class="index">
        index
    </div>
</template>

<script>
    import network from '../../network'
    import { resDataPretreat } from '../../mixin'

    export default {
        name: 'index',
        mixins: [ resDataPretreat ],
        components:{},
        props:[],
        data: function () {
            return {}
        },
        mounted:function(){},
        methods:{
            // 例子：处理返回: 查询列表
            handlerList:function(res){
                // todo... 处理返回的数据
            },

            // 例子：请求接口: 查询列表
            getList:async function () {
                let params = {}
                const queryList = await network.blockChain.home.queryList(params)
                this.resDataPretreat(queryList, this.handlerList)
            },
        }
    }
</script>

<style lang="less"></style>
