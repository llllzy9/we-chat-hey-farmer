import Vue from 'vue';
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);
//引入小仓库
import bbs from './bbs';
import home from './home';
import shopCar from './shopCar';
import center  from './center';


//state:仓库存储数据的地方
//mutations：修改state的唯一手段
//action：处理action，可以书写自己的业务逻辑，也可以处理异步
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便

//对外暴露实例
export default new Vuex.Store({
    modules: {
        bbs,home,shopCar,center
    }
})