import { reqGetBannerList } from "../../api";
//home模块的小仓库
const state = {
    //轮播图的数组
    bannerList: []
};
const mutations = {
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    }
};
const actions = {
    //获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data);
            console.log('请求成功');
        }
        console.log('请求失败 ');
    },
    dayin() {
        console.log('test');
    }
};
const getters = {};
export default {
    state, mutations,actions,getters
}
