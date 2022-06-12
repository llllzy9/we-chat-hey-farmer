import Vue from 'vue'
import App from './App'
import 'common/public.css';
import store from './store/index';

Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
  ...App,
  store,
})
app.$mount()
