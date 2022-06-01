import Vue from 'vue'
import App from './App'
import 'common/public.css';
//引入仓库
import store from './store/index';

import moment from 'moment';

Vue.prototype.$moment = moment;
moment.locale('zh-cn')
Vue.config.productionTip = false;


App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
