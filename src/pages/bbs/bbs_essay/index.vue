<template>
  <div class="essay-view">
    <view class="essay-header">
      <view class="essayTitle">{{ essayList.title }}</view>
      <view class="essayuser">
        <view class="essayAvatar">
          <image :src="essayList.avatar" mode="aspectFill"></image>
        </view>
        <view class="userName">
          <text>{{ essayList.username }}</text>
        </view>
        <view class="time">
          <text>{{ essayList.time }}</text>
        </view>
      </view>
    </view>
    <view class="essay-container">{{ essayList.container }}</view>
    <view class="essay-footer">
      <view class="likeBtn">
          <image src="../../../static/like.png" mode="aspectFit"></image>
        <text class="likeNum">{{ essayList.likeNum }}</text>
      </view>
      <view class="comments">
          <image src="../../../static/pinglun.png" mode="aspectFit"></image>
        <text class="commentsNum">{{ essayList.commentsNum }}</text>
      </view>
    </view>
  </div>
</template>

<script>
export default {
  name: "WeChatHeyFarmerIndex",

  data() {
    return {
      essayList: {
        title: "如何实现禾下乘凉梦",
        username: "袁隆平院士",
        avatar:
          "https://images.pexels.com/photos/7944397/pexels-photo-7944397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        time: "2020.10.15",
        container: `禾下乘凉梦是 “杂交水稻之父”袁隆平对杂交水稻高产的一个理想追求，是袁隆平的中国梦，梦想到禾下乘凉，梦里水稻长得有高粱那么高，子粒有花生米那么大。
        作为杂交水稻之父，袁隆平一直有两个梦，一个是禾下乘凉梦，一个是杂交水稻覆盖全球梦。`,
        likeNum: 10,
        commentsNum: 1,
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.essay-view {
  padding: 0 30rpx;
  .essay-header {
    margin-top: 10rpx;
    .essayTitle {
      font-size: 38rpx;
      font-weight: 700;
      letter-spacing: 2rpx;
      padding: 10rpx;
    }
    .essayuser {
      display: flex;
      justify-content: flex-start;
      margin: 20rpx 0;
      .essayAvatar {
        image {
          width: 80rpx;
          height: 80rpx;
          border-radius: 60rpx;
        }
      }
      .userName {
        font-weight: 600;
      }
      .time {
        color: #aaa;
        font-size: 28rpx;
      }
    }
  }
  .essay-container {
      margin-top: 20rpx;
      text-indent: 60rpx;
      line-height: 50rpx;
  }
  .essay-footer {
      width: 100vw;
      height: 8vh;
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 2rpx 0rpx 7rpx #aaa;
    .likeBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        background: $color;
        width: 200rpx;
        height: 70rpx;
        border-radius: 30rpx;
        justify-self: start;
        image{
            width: 50rpx;
            height: 50rpx;
        }
      .likeNum {
          font-size: 26rpx;
          font-weight: 600;
          color: white;
      }
    }
    .comments {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        image{
            width: 50rpx;
            height: 50rpx;
        }
      .commentsNum {
          font-size: 26rpx;
          color: rgb(84, 84, 84);
      }
    }
  }
}
</style>