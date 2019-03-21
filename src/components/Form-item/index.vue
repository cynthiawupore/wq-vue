<template>
    <div class="Form-item">
        <el-row :gutter="20">
            <el-col :span="7" class="title">
                <span>{{title || '---'}}</span>
            </el-col>
            <el-col :span="17" class="content">
                <div v-occupy="{ data: content, config }"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'FormItem',
        components:{},
        props:['title','content'],
        data: function () {
            return {
                config: {
                    width: '100%',
                    height: '15px',
                    background: '#f7f7f7'
                }
            }
        },
        mounted:function(){},
        methods:{}
    }
</script>

<style lang="less">
    .Form-item{
        width: 100%;
        box-sizing: border-box;
        padding: 15px 20px;
        .title{
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #666666;
            letter-spacing: 0;
        }
        .content{
            font-family: PingFangSC-Medium;
            font-size: 12px;
            color: #666666;
            letter-spacing: 0;
        }
    }
</style>
