//bbs模块的小仓库
const state = {
    "likeNum": 11,
    "commentsNum": 6,
};
const mutations = {
    sumLike(state) {
        state.likeNum--
    },
    addLike(state) {
        state.likeNum++
    },
    addComments(state) {
        state.commentsNum++
    }
};
const actions = {};
const getters = {};
export default {
    state, mutations,actions,getters
}
