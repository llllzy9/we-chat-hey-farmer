const state = {
    "recommendlist1": [
        {
            id: 0,
            choice: "湖北省-天门市-天门",
            content:
                "天门外国语学校高中部",
            name: "安光耀",
            number: 15527561217,
        },
        {
            id: 1,
            choice: "湖北省-武汉市-洪山区",
            content:
                "武昌首义学院高架桥旁11栋教学楼菜鸟驿站",
            name: "李章源",
            number: 110119121120,
        },
    ]
};
const mutations = {
    ADDRESS(state, data) {
        state.recommendlist1.push(data)
    },
};
const actions = {
    addRess({ commit }, data = {}) {
        commit('ADDRESS', data)
    }
};
const getters = {};
export default {
    state, mutations, actions, getters
}