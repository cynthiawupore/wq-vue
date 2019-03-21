/**
 *
 * 功能说明：    接口返回数据预处理
 *
 * */

import { apiCustomCode } from '../config'
import { Message } from 'element-ui';
import Vue from 'vue'

Vue.prototype.$message = Message

const resDataPretreat = {
    methods: {
        resDataPretreat(res, func) {
            if(res.respCode){
                if(res.respCode === apiCustomCode.SUCCESS){
                    if (typeof(func) === 'function') {
                        func(res.content);
                    }
                }else if(res.respCode === apiCustomCode.FAIL){
                    this.$message.error('请求失败');

                }else if(res.respCode === apiCustomCode.PROCESSING){
                    this.$message.error('请求处理中');

                }else if(res.respCode === apiCustomCode.ARGUMENT_EXCEPTION){
                    this.$message.error('请求参数错误');

                }else if(res.respCode === apiCustomCode.UNKNOWN_EORROR){
                    this.$message.error('接口未知错误');

                }else if(res.respCode === apiCustomCode.SYSTEM_EORROR){
                    this.$message.error('服务端系统错误');

                }else{
                    this.$message.error(res.respMsg);
                }
            }else{
                this.$message.error('返回参数code错误');
            }
        },
    }
}

export {
    resDataPretreat
}
