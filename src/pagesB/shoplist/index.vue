<template>
  <div>
    <view class="shopbox">
        <view class="header">
            <view class="myheader">
        <myheader></myheader>
        </view>
        <view class="pick">
            <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#4cd964"></uni-segmented-control>
                   </view>
        <view class="content">
            <view v-show="current === 0">
            
            </view>
            <view v-show="current === 1">

            </view>
            <view v-show="current === 2">

            </view>
        </view>
        </view>
               <view class="place"></view>
      <view class="listbox">
        <view class="goods-list">
          <navigator class="goods-item" v-for="item in goodslist" :key="item.id" url="/pagesB/goodsdetail/index">
            <view class="goods-view">
              <view class="goods-img"
                ><image :src="item.img" mode="	aspectFill"></image
              ></view>
              <view class="goods-info">
                <view class="goods-title">
                  <text class="title-text">{{ item.title }}</text>
                </view>
                <view class="goods-label">
                  <text class="gtip">{{ item.tip }}</text>
                  <text v-for="tap in item.tap" :key="tap" class="gtap">{{
                    tap
                  }}</text>
                </view>
                <view class="goods-price">
                  <text style="font-size:24rpx">￥</text>
                  <text class="price-text">{{ item.price }}.00</text>
                </view>
                <view class="goods-note">
                  <text>销量{{ item.slogan }}</text>
                  <text class="goods-place">{{ item.place }}
                      <text style="margin-left:10rpx;color:black;font-weight:500">详情 ></text>
                  </text>
                </view>
              </view>
            </view>
          </navigator>
        </view>
      </view>
    </view>
  </div>
</template>

<script>
import myheader from "../../component/header/index.vue"
export default {
  name: "FarmerIndex",
    components:{
        myheader
    },
  data() {
    return {
      goodslist: [
        {
          id: 0,
          img: "https://images.pexels.com/photos/1414126/pexels-photo-1414126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "本土猕猴桃",
          tip: "广西",
          tap: ["绿色", "无添加"],
          price: "4",
          slogan: "100",
          place: "广西梧州",
        },
        {
          id: 1,
          img: "https://images.pexels.com/photos/59830/melons-water-melons-fruit-green-59830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "大棚的瓜",
          tip: "刘华强",
          tap: ["金瓜子"],
          price: "30",
          slogan: "1",
          place: "河北保定",
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "橘右京",
          tip: "自种",
          tap: ["酸甜可口"],
          price: "2",
          slogan: "99",
          place: "广东",
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "苹果",
          tip: "自营",
          tap: ["包甜脆"],
          price: "5",
          slogan: "39",
          place: "湖北武汉",
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "胡罗卜素B套餐",
          tip: "折扣",
          tap: ["划算"],
          price: "10",
          slogan: "12",
          place: "福建福州",
        },
        {
          id: 5,
          img: "https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "卷心菜",
          tip: "超大",
          tap: ["转基因培养"],
          price: "6",
          slogan: "999",
          place: "湖南长沙",
        },
      ],
      items: ['综合排序', '销量', '价格'],
      current: 0
    };
  },

  mounted() {},

  methods: {
       onClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
       },
       back(){
           uni.navigateBack();
       }
  },
};
</script>

<style lang="scss" scoped>
.place {
  height: 180rpx;
  background: #ffffff;
  margin-bottom: 10rpx;
}
.pick{
    background:#ffffff ;
}
.header{
    position: fixed;
    background:#ffffff ;
    width: 100vw;
    z-index: 999;
}
.listbox {
  width: 100%;
  .goods-list {
    display: flex;
    flex-direction: column;
    background: #ffff;
    .goods-item {
      height: 220rpx;
      width: 95vw;
      margin: 10rpx auto;
      .goods-view {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .goods-img image {
          width: 230rpx;
          height: 200rpx;
          border-radius: 20rpx;
        }
        .goods-info {
          display: flex;
          flex-direction: column;
          margin-left: 20rpx;
          .goods-title {
            font-size: 36rpx;
            font-weight: 500;
            margin-bottom: 10rpx;
          }
          .goods-label {
              display: flex;
              text-align: center;
            .gtip {
              font-size: 20rpx;
              font-weight: 500;
              background: rgb(252, 51, 51);
              border-radius: 10rpx;
              color: rgb(255, 255, 255);
              padding: 3rpx 5rpx;
              margin-bottom: 10rpx;
            }
            .gtap {
              background: #eee;
              font-size: 20rpx;
              color: rgb(103, 103, 103);
              border-radius: 30rpx;
              padding: 5rpx 10rpx;
              font-weight: 500;
              margin-bottom: 10rpx;
              margin-left: 10rpx;
            }
          }
          .goods-price{
              color: red;
              .price-text{
                  font-size: 30rpx;
                  font-weight: bold;
              }
          }
          .goods-note{
              display: flex;
              flex-direction: column;
              font-size: 25rpx;
              color: rgb(111, 111, 111);
          }
        }
      }
    }
  }
}
</style>