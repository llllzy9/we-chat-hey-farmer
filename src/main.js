import Vue from 'vue'
import App from './App'
import 'common/public.css';


Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
