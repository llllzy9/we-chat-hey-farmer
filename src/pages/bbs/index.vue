<template>
  <view>
    <view class="big-box">
      <view class="trade">
        <view
          class="texts"
          :class="curr == 0 ? 'active' : ''"
          data-index="0"
          @tap="setCurr"
        >
          推荐
        </view>
        <view
          class="texts"
          :class="curr == 1 ? 'active' : ''"
          data-index="1"
          @tap="setCurr"
        >
          附近
        </view>
      </view>
      <view class="container">
        <swiper style="height: 100vh" :current="curr" @change="setCurr">
          <swiper-item>
            <scroll-view scroll-y class="sgscroll">
              <view class="sglist">
                <navigator
                  @click="goDetail(item._id)"
                  class="sglist-item"
                  v-for="(item, index) in recommendlist"
                  :key="index"
                  url="/pages/bbs/bbs_essay/index"
                >
                  <view class="sglist-view">
                    <view class="sglist-title">
                      {{ item.title }}
                    </view>
                    <view class="sglist-user">
                      <text>{{ item.username }}</text>
                    </view>
                    <view class="sglist-desc">
                      <view class="sglist-content">
                        <text>{{ item.content }}</text>
                      </view>
                      <view class="sglist-imglist">
                        <image
                          class="sglist-imglist-img"
                          mode="aspectFill"
                          :src="item.imgurl"
                        ></image>
                      </view>
                    </view>
                    <view class="sglist-flow">
                      <text>{{ item.love_num }}点赞</text>·
                      <text>评论{{ item.comment_num }}</text>
                    </view>
                  </view>
                </navigator>
              </view>
            </scroll-view>
          </swiper-item>
          <swiper-item>
            <scroll-view scroll-y class="sgscroll">
              <view class="sglist">
                <navigator
                  @click="goDetail(item._id)"
                  class="sglist-item"
                  v-for="(item, index) in nearlist"
                  :key="index"
                >
                  <view class="sglist-view">
                    <view class="sglist-title">
                      {{ item.title }}
                    </view>
                    <view class="sglist-user">
                      <text>{{ item.username }}</text>
                    </view>
                    <view class="sglist-desc">
                      <view class="sglist-content">
                        <text>{{ item.content }}</text>
                      </view>
                      <view class="sglist-imglist">
                        <image
                          class="sglist-imglist-img"
                          mode="aspectFill"
                          :src="item.imgurl"
                        ></image>
                      </view>
                    </view>
                    <view class="sglist-flow">
                      <text>{{ item.love_num }}点赞</text>
                      <text>评论{{ item.comment_num }}</text>
                    </view>
                  </view>
                </navigator>
              </view>
            </scroll-view>
          </swiper-item>
        </swiper>
        <view class="addcon">
          <button class="addbtn" @click="toggle('bottom')">
            <uni-popup ref="popup" type="bottom"></uni-popup>
          </button>
          <!-- 底部弹窗 -->
          <view>
            <uni-popup ref="popup" @change="change">
              <view class="popup-content">
                <navigator
                    url="/pages/publish/index"
                    hover-class="navigator-hover"
					class="big"
                    ><view class="ask"
                  ><text>回答问题</text>
					<text>潜力、热点问题等你回答</text>
                  </view
                ></navigator>
				<navigator
                    url="/pages/publish/index"
                    hover-class="navigator-hover"
					class="big"
                    >
                <view class="reply">
                  <text>提个问题</text>
					<text>热心网友为你解答</text>
                </view>
				 </navigator>
				<view class="video">
					<navigator class="small" hover-class="navigator-hover">
						<image src="../../static/shiping.png" mode="widthFill"></image>
						<text>发布视频</text>
					</navigator>
				</view>
				<view class="essay">
					<navigator class="small" hover-class="navigator-hover">
						<image src="../../static/wenzhang.png" mode="widthFill"></image>
						<text>发布文章</text>
					</navigator>
				</view>
				<view class="sell">
					<navigator class="small" hover-class="navigator-hover"> 
						<image src="../../static/mai.png" mode="widthFill"></image>
						<text>我要售卖</text>
					</navigator>
				</view>
              </view>
            </uni-popup>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      curr: 0,
      pageLoad: false,
      isFirst: true,
      start: 0,
      limit: 4,
      recommendlist: [
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
      nearlist: [
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
  },
  methods: {
    setCurr(e) {
      // console.log(e.detail.current)
      let thisCurr = e.detail.current || e.currentTarget.dataset.index || 0;
      // console.log(thisCurr)
      this.curr = thisCurr;
    },
    toggle(type) {
      this.$refs.popup.open(type);
    },
  },
};
</script>

<style lang="scss">
.big-box {
  background: rgb(241, 241, 241);
}
.trade {
  position: sticky;
  top: 0rpx;
  z-index: 99;
  display: flex;
  justify-content: space-evenly;
  background: #fff;
  font-size: 32rpx;
}
.trade view {
  text-align: center;
  width: 50px;
}
.trade .texts.active {
  border-bottom: 8rpx solid $color;
  font-weight: bold;
  font-size: 36rpx;
}
.trade .texts {
  padding-bottom: 10rpx;
}
.container {
}
.sgscroll {
  height: 100vh;
}
.sglist {
  display: flex;
  flex-direction: column;
}
.sglist-item {
  margin-bottom: 15rpx;
  background: #fff;
  box-shadow: 0rpx 5rpx 10rpx #d7d7d7;
  .sglist-view {
    width: 95vw;
    margin: 0 auto;
    padding: 20rpx 10rpx;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .sglist-title {
    width: 600rpx;
    font-size: 36rpx;
    font-weight: 700;
  }
  .sglist-user {
    margin-top: 10rpx;
    font-weight: bold;
    color: rgb(75, 75, 75);
    font-size: 24rpx;
  }
  .sglist-desc {
    font-size: 28rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .sglist-content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      padding-right: 10rpx;
    }
    .sglist-imglist {
      image {
        width: 150rpx;
        height: 110rpx;
        border-radius: 10rpx;
      }
    }
  }
  .sglist-flow {
    color: rgb(157, 157, 157);
    font-size: 26rpx;
    font-weight: 500;
    text {
      margin-right: 20rpx;
    }
  }
}
.addbtn {
  position: fixed;
  bottom: 20rpx;
  right: 30rpx;
  background: url(../../static/添加.png);
  background-repeat: no-repeat;
  background-size: 90rpx 90rpx;
  width: 90rpx;
  height: 90rpx;
  border-radius: 60rpx;
}
.navigator-hover {
  background-color: rgba(205, 205, 205, 0.171);
  opacity: 0.9;
}
//底部弹窗
.popup-content {
  height: 50vh;
  background: #ffffff;
  border-radius: 35rpx 35rpx 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  view:nth-child(1),view:nth-child(2){
	  height: 180rpx;
	  width: 300rpx;
	  border-radius: 30rpx;
	  margin-top: 50rpx;
	  padding-left: 30rpx;
	  padding-top: 30rpx;
	  box-shadow: 2rpx 7rpx 10rpx rgb(184, 184, 184);
	  text{
		  line-height: 40rpx;
	  }
	  text:nth-child(1){
	  font-size: 32rpx;
	  color: #fff;
	  font-weight: 600;
	  }
	  text:nth-child(2){
		  font-size: 24rpx;
		  color: #e8e8e8;
	  }
  }
  view:nth-child(3),view:nth-child(4),view:nth-child(5){
	  height: 150rpx;
	  width: 170rpx;
	  border-radius: 30rpx;
  }
  .ask{
	  display: flex;
	  flex-direction: column;
	  background: url(../../static/回答.png);
	  background-color: #1296db;
	  background-size: 100rpx 100rpx;
	  background-repeat: no-repeat;
	  background-position: right bottom;
  }
  .reply{
	  display: flex;
	  flex-direction: column;
	  background: url(../../static/提问.png);
	  background-color: $color;
	  background-size: 100rpx 100rpx;
	  background-repeat: no-repeat;
	  background-position: right bottom;
  }
  .video{
	  image{
		  width: 90rpx;
		  height: 90rpx;
	  }
  }
  .essay{
	  image{
		  width: 90rpx;
		  height: 90rpx;
	  }
  }
  .sell{
	  image{
		  width: 90rpx;
		  height: 90rpx;
	  }
  }
  .big{
  }
  .small{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 24rpx;
	font-weight: 600;
  }
}
</style>
