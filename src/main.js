import Vue from 'vue'
import App from './App'
import 'common/public.css';
//引入仓库
import store from './store/index';
//引入时间插件
import moment from 'moment';
//引入mockjs
import Mock from 'mockjs';
//引入mockServe.js----mock数据
import '@/mock/mockServer';

Vue.prototype.$moment = moment;
moment.locale('zh-cn')
Vue.config.productionTip = false;


App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
