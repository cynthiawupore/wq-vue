<template>
    <div class="Form-item-index">
        <Card>
            <div class="line-bottom">
                <FormItem :title="'交易哈希'" :content="txHash"></FormItem>
            </div>
            <FormItem :title="'额度'" :content="donateAmount"></FormItem>
        </Card>
    </div>
</template>

<script>
    import Card from '../../../../components/Card'
    import FormItem from '../../../../components/Form-item'

    export default {
        name: 'FormItemIndex',
        components:{ FormItem, Card },
        props:['txHash','donateAmount'],
        data: function () {
            return {}
        },
        mounted:function(){},
        methods:{}
    }
</script>

<style lang="less">
    .Form-item-index{
        .line-bottom{
            border-bottom: 1px #EBEBEB solid;
        }
    }
</style>
