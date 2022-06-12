import Vue from 'vue';
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);
import center from './center'

export default new Vuex.Store({
    modules: {
        center
    }
})