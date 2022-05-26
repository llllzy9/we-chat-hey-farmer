<template>
  <view class="car-count">
    <!-- 有商品的购物车 -->
    <scroll-view class="cart-box" v-if="cartsList.length > 0">
      <view class="cart-item" v-for="(item, index) in cartsList" :key="item.id">
        <uni-swipe-action>
          <uni-swipe-action-item
            :right-options="options"
            @click="del(item.index)"
            @change="change"
          >
            <view class="cart-view">
              <view>
                <checkbox-group class="selBtn" @change="selected(item)">
                  <label>
                    <checkbox class="selected" :checked="checked" /> </label
                ></checkbox-group>
              </view>
              <view class="goods-detail">
                <view class="goodsImg">
                  <image :src="item.img" mode="aspectFill"></image>
                </view>
                <view class="goodsInfo">
                  <text class="goodsName">{{ item.name }}</text>
                  <view class="goodsParam">{{ item.param }}</view>
                  <view class="goodsPrice"
                    ><text>￥</text>{{ item.price }}</view
                  >
                </view>
              </view>
              <view class="countBox">
                <view class="numSub" @click="changeNum(false, index)">
                  <text style="font-weight: bold;font-size:32rpx">-</text>
                </view>
                <view class="num">{{ item.num }}</view>
                <view class="numAdd" @click="changeNum(true, index)">
                  <text style="font-weight: bold;font-size:32rpx">+</text>
                </view>
              </view>
            </view>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
    </scroll-view>
    <!-- 没有商品的购物车 -->
    <view class="empty" v-else>
      <image
        src="https://images.pexels.com/photos/5650052/pexels-photo-5650052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        mode="widthFix"
        style="width: 550rpx; box-shadow: 20rpx -10rpx 15rpx rgb(210, 210, 210)"
      ></image>
      <view class="empty-text">空空如也的购物车</view>
      <view class="empty-button">去选购</view>
    </view>
    <!-- 底部结算栏 -->
    <view class="bottomBtn">
      <checkbox-group class="selBtn" @change="selectgoods()">
        <label>
          <checkbox :checked="allchecked">全选</checkbox>
        </label>
      </checkbox-group>
      <view class="price"
        >合计：<text>￥</text><text class="num">{{ totalPrice }}</text></view
      >
      <view class="clearBtn">结算</view>
    </view>
  </view>
</template>


<script>
import uniBadge from "../../component/uni-swipe-action/uni-swipe-action.vue";
export default {
  name: "FarmerIndex",
  components: {
    uniBadge,
  },

  data() {
    return {
      options: [
        {
          text: "删除",
          style: {
            backgroundColor: "#00c170",
            fontSize: "30rpx",
          },
          handler: () => del(index),
        },
      ],
      cartsList: [
        {
          id: 0,
          img: "https://images.pexels.com/photos/1000057/pexels-photo-1000057.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "黄土地",
          param: "2m²",
          price: "108",
          num: 1,
          flag: false,
        },
        {
          id: 1,
          img: "https://images.pexels.com/photos/1097016/pexels-photo-1097016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "红土地",
          param: "1m²",
          price: "132",
          num: 2,
          flag: false,
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/1366088/pexels-photo-1366088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "黑土地",
          param: "3m²",
          price: "168",
          num: 3,
          flag: false,
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/539855/pexels-photo-539855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "绿土地",
          param: "2m²",
          price: "121",
          num: 1,
          flag: false,
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/539855/pexels-photo-539855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "绿土地",
          param: "2m²",
          price: "121",
          num: 2,
          flag: false,
        },
      ],
      lay_type: 0,
      num: 0,
      totalPrice: 0,
      allchecked: false,
      checked: false,
    };
  },

  mounted() {
    this.getTotalPrice();
  },

  methods: {
    getTotalPrice() {
      let price = 0;
      this.cartsList.map((item, index) => {
        if (item.flag) {
          price += item.num * item.price;
        }
      });
      this.totalPrice = price.toFixed(2);
    },
    changeNum(bool, index) {
      let cartsIndex = this.cartsList[index];
      if (bool) {
        cartsIndex.num++;
      } else {
        if (cartsIndex.num <= 1) {
          return;
        }
        cartsIndex.num--;
      }
      this.getTotalPrice();
    },
    onClick(e) {
      console.log(
        "点击了" +
          (e.position === "left" ? "左侧" : "右侧") +
          e.content.text +
          "按钮"
      );
      console.log(this);
    },
    change(e, index) {
      console.log("当前状态：" + e + "，下标：" + index);
    },
    del(index) {
      this.cartsList.splice(index, 1);
      this.getTotalPrice();
    },
    selected(item) {
      item.flag = !item.flag;
      if (!item.flag) {
        this.allchecked = false;
      } else {
        const a = this.cartsList.forEach((item) => {
          return item.flag === true;
        });
        if (a) {
          this.allchecked = true;
        } else {
          this.allchecked = false;
        }
      }
      this.getTotalPrice();
    },
    selectgoods() {
      this.allchecked = !this.allchecked;
      if (this.allchecked) {
        this.cartsList.map((item) => {
          this.checked = true;
          item.flag = true;
        });
      } else {
        this.checked = false;
        this.cartsList.map((item) => {
          item.flag = false;
        });
      }
      this.getTotalPrice();
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-box {
  background: #f4f3f3;
}
.cart-item {
  margin-top: 20rpx;
}
.cart-view {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20rpx;
  font-size: 26rpx;
  border-radius: 15rpx;
  background: rgb(255, 255, 255);
  box-shadow: -2rpx -5rpx 10rpx rgb(213, 213, 213);
  .selBtn {
    width: 45rpx;
    height: 45rpx;
    margin-right: 20rpx;
  }
  .goods-detail {
    flex: 4;
    display: flex;
    .goodsImg {
      width: 160rpx;
      height: 160rpx;
      border-radius: 5rpx;
      margin-right: 20rpx;
    }
    .goodsInfo {
      display: flex;
      flex-direction: column;
      background: #ffffff;
      .goodsName {
        font-size: 32rpx;
        color: #333333;
      }
      .goodsParam {
        margin: 5rpx 0 15rpx 0;
        font-size: 28rpx;
        color: #999999;
      }
      .goodsPrice {
        color: #e60012;
        font-size: 34rpx;
        text {
          font-size: 28rpx;
        }
      }
    }
  }
  .countBox {
    flex: 1;
    display: flex;
    align-items: center;
    margin-right: 30rpx;
    .num {
      text-align: center;
      width: 50rpx;
      background: #f4f3f3;
      margin: 0 20rpx;
      border-radius: 30prx;
    }
  }
}

//底部结算栏
.bottomBtn {
  position: fixed;
  bottom: 0;
  height: 100rpx;
  width: 100vw;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(0, 0, 0);
  box-shadow: -5rpx -2rpx 5rpx rgb(167, 166, 166);
  z-index: 99;
  .selBtn {
    margin-left: 20rpx;
  }
  .price {
    display: flex;
    align-items: center;
    text {
      font-weight: bold;
      color: #e60012;
    }
    .num {
      font-size: 36rpx;
    }
  }
  .clearBtn {
    width: 260rpx;
    height: 80rpx;
    background: $color;
    color: #ffffff;
    text-align: center;
    border-radius: 60rpx;
    line-height: 80rpx;
    margin-right: 20rpx;
  }
}
//没有商品时
.empty {
  position: relative;
  top: 220rpx;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  &-text {
    color: #808080;
    margin-bottom: 50rpx;
    margin-top: 10rpx;
  }
  &-button {
    width: 300rpx;
    height: 90rpx;
    color: $color;
    border: 1rpx solid $color;
    text-align: center;
    line-height: 90rpx;
    border-radius: 48rpx;
  }
}
</style>