<template>
  <div>
    <view class="goods-detail">
      <view class="detail-view">
        <view class="goods-img" style="height:50vh">
          <swiper class="swiper" circular style="height:100%">
            <swiper-item
              v-for="(item, index) in goodsDetail.imageUrl"
              :key="index"
            >
              <image :src="item" mode="aspectFill"></image>
            </swiper-item>
          </swiper>
        </view>
        <view class="goods">
          <view class="goods-price">
            <text style="font-size: 36rpx">￥</text
            ><text>{{ goodsDetail.price }}</text>
          </view>
          <view class="goods-title">
            <text class="goods-label">{{ goodsDetail.label }}</text>
            <text>{{ goodsDetail.title }}</text>
          </view>
          <view class="goods-info">
            <text>{{ goodsDetail.info }}</text>
          </view>
        </view>
      </view>
      <view class="goods-card">
        <view class="moretit">
          <text class="moreRe"> 相关推荐 </text>
          <text class="more" @click="goto"> 查看全部> </text>
        </view>
        <view class="more-goods">
          <view class="morelist" v-for="item in morelist" :key="item.id">
            <navigator class="goods-tabs">
              <view class="card">
                <image :src="item.cover" mode="aspectFill"></image>
                <text class="goods-title">{{ item.title }}</text>
                <text class="goods-price">￥{{ item.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </view>
      <view class="goods-carts">
        <uni-goods-nav
          :options="options"
          :fill="true"
          :button-group="buttonGroup"
          @click="onClick"
          @buttonClick="buttonClick"
        />
      </view>
    </view>
  </div>
</template>

<script>
export default {
  name: "FarmerIndex",

  data() {
    return {
      goodsDetail: {
        imageUrl: [
          "https://images.pexels.com/photos/4207901/pexels-photo-4207901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/4207901/pexels-photo-4207901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        price: "123.00",
        label: "自营",
        title: "撒哈拉大沙漠鎏金精华绿洲生命之源",
        info: "【海蓝之谜开学季】会员之高享受17重礼，即刻入会单笔订单满1000元加赠30ml生命精华水，更多礼赠甄选",
      },
      morelist: [
        {
          id: 0,
          price: 32,
          cover:
            "https://images.pexels.com/photos/186841/pexels-photo-186841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "宁夏柑子",
        },
        {
          id: 1,
          price: 4,
          cover:
            "https://images.pexels.com/photos/2254097/pexels-photo-2254097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "广西甘蔗",
        },
        {
          id: 2,
          price: 12,
          cover:
            "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "新疆葡萄",
        },
        {
          id: 3,
          price: 10,
          cover:
            "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "东北大米",
        },
        {
          id: 4,
          price: 12,
          cover:
            "https://images.pexels.com/photos/2683373/pexels-photo-2683373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "云南丑橘",
        },
        {
          id: 5,
          price: 9,
          cover:
            "https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "湖南辣椒",
        },
      ],
      options: [
        {
          icon: "chat",
          text: "客服",
        },
        {
          icon: "cart",
          text: "购物车",
          info: 2,
          url: "pages/shopcar/index",
        },
      ],
      buttonGroup: [
        {
          text: "加入购物车",
          backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
          color: "#fff",
        },
        {
          text: "立即购买",
          backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
          color: "#fff",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    onClick(e) {
      uni.showToast({
        title: `点击${e.content.text}`,
      });
      if (e.content.text == "购物车") {
        console.log("跳转购物车");
        uni.switchTab({
          url: "/pages/shopcar/index",
        });
      } else {
        console.log("跳转客服");
      }
    },
    goto() {
      uni.navigateTo({
        url: "/pagesB/shoplist/index",
      });
    },
    buttonClick(e) {
      console.log(e);
      this.options[2].info++;
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-detail {
  background: #eee;
  height: 100vh;
}
.detail-view {
  display: flex;
  flex-direction: column;
  .goods {
    margin: 20rpx;
    padding: 15rpx 30rpx;
    background: #ffffff;
    border-radius: 20rpx;
  }
  .goods-img image {
    height: 50vh;
  }
  .goods-price {
    font-size: 48rpx;
    font-weight: bold;
    color: rgb(250, 39, 39);
    margin-bottom: 10rpx;
  }
  .goods-title {
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 32rpx;
    .goods-label {
      background: red;
      color: #ffffff;
      font-size: 24rpx;
      margin-right: 10rpx;
      text-align: center;
      width: 30px;
    }
  }
  .goods-info {
    margin-top: 15rpx;
    color: rgba(149, 149, 149, 0.933);
    font-size: 24rpx;
  }
}
.goods-card {
  background: #ffffff;
  margin: 0 20rpx;
  padding: 20rpx;
  border-radius: 30rpx;
  .moretit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .moreRe {
      font-weight: 600;
      font-size: 34rpx;
    }
    .more {
      font-size: 28rpx;
      color: $color;
      font-weight: 600;
      margin-right: 20rpx;
    }
  }
  .more-goods {
    margin-top: 10rpx;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .morelist {
      width: 30%;
      .goods-tabs {
        margin-top: 30rpx;
        border-radius: 20rpx;
        .card {
          display: flex;
          flex-direction: column;
          .goods-price {
            bottom: 40rpx;
            width: 100%;
            color: rgb(246, 56, 94);
          }
          image {
            width: 100%;
            height: 170rpx;
            border-radius: 20rpx;
            box-shadow: 2rpx 3rpx 5rpx #aaa;
          }
          .goods-title {
            margin-top: 10rpx;
            font-size: 30rpx;
            font-weight: 500;
          }
        }
      }
    }
  }
}
.goods-carts {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  left: var(--window-left);
  right: var(--window-right);
  bottom: 0;
  box-shadow: -5rpx -3rpx 10rpx rgba(217, 217, 217, 0.933);
}
.more-goods::after {
  content: "";
  margin-top: 30rpx;
  width: 100vw;
  height: 70rpx;
  background: #aaa;
}
</style>