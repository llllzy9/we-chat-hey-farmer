<template>
  <view class="wrapper">
    <!-- 个人资料 -->
    <view class="profile">
      <view class="meta">
        <!-- 头像 -->
        <image class="avatar" v-if="!canIUseGetUserProfile" :src="url"></image>
        <!-- 用户名 -->
        <text class="nickname"> {{ nickname }}</text>

        <view class="content">
          <!-- 点击登录按钮 -->
          <button v-if="canIUseGetUserProfile" class="bottoms" type="primary" open-type="getPhoneNumber"
            withCredentials="true" lang="zh_CN" @click="wxGetUserInfo">
            点击登录</button>
        </view>


      </view>
    </view>
    <view class="move">
      <!-- 统计 -->
      <view class="count">

        <navigator class="cell" url="/pages/center/center_collection/index"> 0 <text>收藏商品</text> </navigator>
        <navigator class="cell" url="/pages/center/center_care/index"> 0 <text>关注商品</text> </navigator>
        <navigator class="cell" url="/pages/center/center_foot/index"> 99+ <text>我的足迹</text> </navigator>
      </view>
      <!-- 我的订单 -->
      <view class="orders">
        <view class="title">我的订单</view>
        <view class="sorts">
          <navigator class="icon-bill" v-for="item in paylist" :key="item.id" :url="item.url">
            <image :src="item.icon" mode="widthFix"></image>
            <text style="color: #827f8b">{{ item.name }}</text>
          </navigator>

        </view>
      </view>
      <!-- 地址管理 -->
      <navigator class="address icon-arrow" url="/pages/center/center_address/index"> 收货地址 </navigator>
      <!-- 其它 -->
      <view class="extra">
        <navigator class="item icon-arrow" url="/pages/center/center_link/index">联系客服</navigator>
        <button open-type="feedback" class="item icon-arrow">意见反馈</button>
      </view>
    </view>
  </view>
</template>


<script>
export default {
  name: 'FarmerIndex',

  data() {
    return {
      canIUseGetUserProfile: true,
      url: '',
      nickname: '',
      paylist: [
        {
          id: 1,
          icon: '../../static/total.png',
          url: '/pages/center/center_totalorder/index',
          name: "全部订单"
        },
        {
          id: 2,
          icon: '../../static/waitpay.png',
          url: '/pages/center/center_waitpay/index',
          name: "待付款"
        },
        {
          id: 4,
          icon: '../../static/waitsent.png',
          url: '/pages/center/center_refund/index',
          name: "待发货"
        },
        {
          id: 3,
          icon: '../../static/waitreceive.png',
          url: '/pages/center/center_waitreceive/index',
          name: "待收货"
        }
      ]
    };
  },

  mounted() { },

  methods: {
    // 授权用户信息
    wxGetUserInfo() {
      let that = this
      wx.getUserProfile({
        desc: "获取你的昵称、头像、地区及性别",
        success: (infoRes) => {
          console.log(infoRes, '----信息---')
          this.canIUseGetUserProfile = false;
          this.url = infoRes.userInfo.avatarUrl;
          this.nickname = infoRes.userInfo.nickName;
        },
      })
    },
  }

};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;

  width: 100%;
  background-color: #f4f4f4;
}

.profile {
  height: 375rpx;
  background-color: $color;
  display: flex;
  justify-content: center;
  align-items: center;

  .meta {
    .avatar {
      display: block;
      width: 140rpx;
      height: 140rpx;
      border-radius: 50%;
      border: 4rpx solid #fff;
      overflow: hidden;
      margin: auto;
    }

    .nickname {
      display: block;
      text-align: center;
      margin-top: 20rpx;
      font-size: 30rpx;
      color: #fff;
    }
  }
}

.count {
  display: flex;
  margin: 0 20rpx;
  height: 100rpx;
  text-align: center;
  border-radius: 14rpx;
  background-color: #fff;

  position: relative;
  top: -20rpx;

  .cell {
    flex: 1;
    padding-top: 16rpx;
    font-size: 27rpx;
    color: #333;
  }

  text {
    display: block;
    font-size: 24rpx;
  }
}

.orders {
  margin: 0rpx 20rpx 0 20rpx;
  padding: 20rpx 0;
  background-color: #fff;
  border-radius: 6rpx;


  .title {
    padding-left: 20rpx;
    font-size: 30rpx;
    color: #333;
    padding-bottom: 20rpx;
    border-bottom: 1rpx solid #eee;
  }

  .sorts {
    .icon-bill {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    padding-top: 30rpx;
    text-align: center;
    display: flex;
  }

  .icon-bill image {
    height: 60rpx;
    width: 60rpx;
  }

  [class*="icon-"] {
    flex: 1;
    font-size: 24rpx;

    &::before {
      display: block;
      font-size: 48rpx;
      margin-bottom: 8rpx;
      color: #ea4451;
    }
  }
}

.address {
  line-height: 1;
  background-color: #fff;
  font-size: 30rpx;
  padding: 25rpx 0 25rpx 20rpx;
  margin: 10rpx 20rpx 2rpx 20rpx;
  color: #333;
  border-radius: 4rpx;
}

.extra {
  margin: 0 20rpx;
  background-color: #fff;
  border-radius: 4rpx;


  .item {
    line-height: 1;
    padding: 25rpx 0 25rpx 20rpx;
    border-bottom: 1rpx solid #eee;
    font-size: 30rpx;
    color: #333;
  }

  button {
    text-align: left;
    background-color: #fff;

    &::after {
      border: none;
      border-radius: 3%;
    }
  }
}

.icon-arrow {
  position: relative;

  &::before {
    position: absolute;
    top: 50%;
    right: 20rpx;
    transform: translateY(-50%);
  }
}

.move {
  margin-top: 34rpx;
}
</style>