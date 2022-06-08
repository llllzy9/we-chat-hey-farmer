import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

const store = new Vuex.Store({//创建store仓库
    state: {//共享的数据
        recommendlist: 123
    }
})

export default store;