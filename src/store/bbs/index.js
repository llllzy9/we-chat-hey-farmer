//bbs模块的小仓库
const state = {
    "likeNum": 11,
    "commentsNum": 6,
    "recommendlist": [
        {
            id: 0,
            title: "新手种植该怎样选择土壤？",
            username: "牛吨",
            imgurl:
                "https://images.pexels.com/photos/7944397/pexels-photo-7944397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "目前可以用来种植的培养土，令郎满目种类繁多，很多人都不清楚要购买什么样的土壤才合适，所以这里就对土壤做个简单的介绍。",
            love_num: 1090,
            comment_num: 21,
        },
        {
            id: 1,
            title: "如何在家云种草莓？",
            username: "做物业",
            imgurl:
                "https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "资本新时代：日本家庭草莓农场种植技术！从草莓田培育、定值、施肥、蔬果、采收到品控都是严格把控。",
            love_num: 908,
            comment_num: 12,
        },
        {
            id: 2,
            title: "蔬菜种植时间表",
            username: "牛郎",
            imgurl:
                "https://images.pexels.com/photos/89267/pexels-photo-89267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "炎夏：豌豆、油菜、芦笋、芥菜等。蔬菜种植时间的选择，大家都有各自的说法和点子。",
            love_num: 98,
            comment_num: 6,
        },
        {
            id: 3,
            title: "种植中草药的几条黄金定律",
            username: "螺蛳粉",
            imgurl:
                "https://images.pexels.com/photos/6034375/pexels-photo-6034375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "土专家：特别是像发展中草药材种植的农民朋友。一、首先要甄选出适合当地种植的中药药材。",
            love_num: 70,
            comment_num: 3,
        },
        {
            id: 4,
            title: "中国各个省份主要农作物种植地图",
            username: "老友粉",
            imgurl:
                "https://images.pexels.com/photos/8602985/pexels-photo-8602985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "勤劳的小蜜蜂：来源|2018年统计年鉴 小麦种植的情况 玉米种植的情况 稻谷种植的情况 数据来源：2018年统计年鉴。",
            love_num: 320,
            comment_num: 54,
        },
        {
            id: 5,
            title: "最美的风景",
            username: "李谱",
            imgurl:
                "https://images.pexels.com/photos/11774056/pexels-photo-11774056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "在广西梧州有这么一个地方,那里山清水秀，绿水长安，人们亲切和蔼，热情助人，是一个桃园市外的好地方。",
            love_num: 160,
            comment_num: 20,
        },
    ],
    "nearlist": [
        {
            id: 0,
            title: "土壤的主要成分是什么？",
            username: "样单挺",
            imgurl:
                "https://images.pexels.com/photos/4207908/pexels-photo-4207908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "其中固态主要包括矿物质和有机物质（也叫腐物质），液态主要是土壤溶液，及土壤水分种溶解了很多物质，气态主要是土壤气体。",
            love_num: 10,
            comment_num: 2,
        },
        {
            id: 1,
            title: "如何增肥你的土壤？",
            username: "培植美学指南",
            imgurl:
                "https://images.pexels.com/photos/7944403/pexels-photo-7944403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "经常喜欢翻弄花园里的土壤，挪移植物；再花园上冻之前，我会为来年的春天做一些",
            love_num: 908,
            comment_num: 12,
        },
        {
            id: 2,
            title: "土壤下的奇妙世界",
            username: "理单院",
            imgurl:
                "https://images.pexels.com/photos/1466434/pexels-photo-1466434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "土壤破面示意图，展现了土壤的生物多样性，有了土壤，才有了多姿多彩的世界霉菌特有的种群。",
            love_num: 98,
            comment_num: 6,
        },
        {
            id: 3,
            title: "农村出现大量荒废的田地",
            username: "里张元",
            imgurl:
                "https://images.pexels.com/photos/92657/pexels-photo-92657.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "里长元：这就导致了大量农田闲置放荒。满是杂草的天地 放荒的农田 这么多农田是我们祖辈一辈子辛苦得到的。",
            love_num: 70,
            comment_num: 3,
        },
        {
            id: 4,
            title: "现在农村好多天地都荒废了，能不能拿来种植？",
            username: "央张里",
            imgurl:
                "https://images.pexels.com/photos/10854318/pexels-photo-10854318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content:
                "三妹：可以的，现在农村好多田地都荒废了，租他们的土地就可以进行种植了。",
            love_num: 320,
            comment_num: 54,
        },
        {
            id: 5,
            title: "最美的风景",
            username: "李谱",
            imgurl:
                "https://images.pexels.com/photos/11774056/pexels-photo-11774056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content: "在广西梧州有这么一个地方",
            love_num: 160,
            comment_num: 20,
        },
    ],
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
    },
    ADDESSAY(state, data) {
        state.recommendlist.push(data)
    }
};
const actions = {
    addEssay({ commit }, data = {}) {
        commit('ADDESSAY', data)
    }
};
const getters = {};
export default {
    state, mutations, actions, getters
}
