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
              <!-- 单个帖子 -->
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
          </button>
          <!-- 底部弹窗 -->
          <view>
            <uni-popup ref="popup">
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
import {mapState} from 'vuex';
export default {
  data() {
    return {
      curr: 0,
      pageLoad: false,
      isFirst: true,
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
  computed:{
    ...mapState({
      recommendlist:(state)=>state.bbs.recommendlist,
      nearlist:(state)=>state.bbs.nearlist
    })
  }
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
