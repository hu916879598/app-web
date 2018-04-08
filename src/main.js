// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//导入Vue框架
import Vue from 'vue'

//导入主视图文件
import App from './App'

//导入路由
import router from './router'

//导入click事件
import FastClick from 'fastclick'

//导入Mint-ui框架
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

import { Lazyload } from 'mint-ui';

Vue.use(Lazyload, {
  preLoad: 5,
  error: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1523111641&di=4080eca42e5604810f0cb6dc5b2f8f29&src=http://image.tianjimedia.com/uploadImages/2015/316/41/W681IFB316QV_241134271169.jpg',
  loading: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1523111641&di=4080eca42e5604810f0cb6dc5b2f8f29&src=http://image.tianjimedia.com/uploadImages/2015/316/41/W681IFB316QV_241134271169.jpg',
  attempt: 5
})
//导入公共样式
import '@/common/css/index'

import instruc from '@common/js/instruc'
import rem from '@common/js/rem'

Vue.use(Mint);

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
