/**
 *
 * 功能说明：    路由
 *
 * */

import Vue from 'vue'
import Router from 'vue-router'
import { config } from './config'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: config
})

export default router
