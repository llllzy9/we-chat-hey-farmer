<template>
  <view>
    <!-- 头部导航栏 -->
    <view class="header">
      <view class="window-title">
        <text class="title-text">Hey!farmer</text>
      </view>
      <myheader></myheader>
    </view>
    <!-- 占位 -->
    <view class="place"></view>
    <!-- 轮播图 -->
    <view class="swiper-view">
      <swiper
        indicator-dots
        :indicator-active-color="indicatorColor"
        autoplay
        circular
        class="swiper"
      >
        <swiper-item v-for="image in bannerList" :key="image.id">
          <image :src="image.imageurl" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>
    <!-- 小菜单 -->
    <view class="grid-all">
      <view class="grid-list">
        <navigator
          class="grid-item"
          v-for="item in gridList"
          :key="item.id"
          url="/pages/shoplist/index"
        >
          <image :src="item.icon"></image>
          <text style="color: #827f8b">{{ item.name }}</text>
        </navigator>
      </view>
    </view>
    <!-- 热门推荐 -->
    <view class="pick">
      <view class="box">
        <view class="title">
          <view class="big">随心看</view>
          <view class="small">实时监控，隔空操作</view>
        </view>
        <view class="live-video">
          <navigator url="/pages/live/index">
          <image src="https://file.uizhw.com/czsj/works/pic/bbfd5289-a399-4eee-9ff2-68058a9dd770.gif" mode="widthFill" ></image>
          </navigator>
        </view>
      </view>
    </view>
    <!-- 商品列表 -->
    <view class="goods-list">
      <view class="goods-title">— 猜你喜欢 —</view>
      <view class="product-list">
        <navigator
          class="product"
          v-for="product in productList"
          :key="product.id"
          url="/pages/goodsdetail/index"
        >
          <image :src="product.img" mode="widthFix"></image>
          <view class="name">{{ product.name }}</view>
          <view class="info">
            <view class="price">{{ product.price }}</view>
            <view class="slogan">{{ product.slogan }}</view>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ loadingText }}</view>
    </view>
  </view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
				avatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
				extraIcon:{
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}
			}
		},
		methods: {
			onClick(e){
				console.log(e)
			},
			actionsClick(text){
				uni.showToast({
					title:text,
					icon:'none'
				})
			}
		}
	}
</script>

<script>
import myheader from "../../component/header/index.vue";
export default {
  name: "FarmerIndex",
  components: {
    myheader,
  },
  data() {
    return {
      indicatorColor: "#66CC99",
      bannerList: [
        {
          id: 1,
          imageurl:
            "https://images.pexels.com/photos/9721352/pexels-photo-9721352.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 2,
          imageurl:
            "https://images.pexels.com/photos/4505161/pexels-photo-4505161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: 3,
          imageurl:
            "https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
      gridList: [
        {
          id: 1,
          icon: "../../static/land.png",
          name: "土地",
        },
        {
          id: 2,
          icon: "../../static/seed.png",
          name: "种子",
        },
        {
          id: 3,
          icon: "../../static/food.png",
          name: "果蔬",
        },
      ],
      pickList: [
        {
          goods_id: 0,
          img: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          price: "￥168",
          slogan: "限时抢购",
        },
        {
          goods_id: 1,
          img: "https://images.pexels.com/photos/3401479/pexels-photo-3401479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          price: "￥168",
          slogan: "精选商品",
        },
        {
          goods_id: 2,
          img: "https://images.pexels.com/photos/59661/pexels-photo-59661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          price: "￥168",
          slogan: "今日疯抢",
        },
      ],
      productList: [
        {
          goods_id: 0,
          img: "https://images.pexels.com/photos/11965284/pexels-photo-11965284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "黄土地",
          price: "￥168/月",
          slogan: "1235人付款",
        },
        {
          goods_id: 1,
          img: "https://images.pexels.com/photos/7728869/pexels-photo-7728869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "黑土地",
          price: "￥128/月",
          slogan: "1235人付款",
        },
        {
          goods_id: 2,
          img: "https://images.pexels.com/photos/7728016/pexels-photo-7728016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "绿土地",
          price: "￥155/月",
          slogan: "1235人付款",
        },
        {
          goods_id: 3,
          img: "https://images.pexels.com/photos/4207901/pexels-photo-4207901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "红土地",
          price: "￥175/月",
          slogan: "1235人付款",
        },
        {
          goods_id: 4,
          img: "https://images.pexels.com/photos/4207905/pexels-photo-4207905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "褐土地",
          price: "￥130/月",
          slogan: "1235人付款",
        },
        {
          goods_id: 5,
          img: "https://images.pexels.com/photos/4202255/pexels-photo-4202255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "紫土地",
          price: "￥190/月",
          slogan: "1235人付款",
        },
        {
          goods_id: 6,
          img: "https://images.pexels.com/photos/4503265/pexels-photo-4503265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "蓝土地",
          price: "￥209/月",
          slogan: "1235人付款",
        },
        {
          goods_id: 7,
          img: "https://images.pexels.com/photos/9324368/pexels-photo-9324368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "白土地",
          price: "￥251/月",
          slogan: "1235人付款",
        },
        {
          goods_id: 8,
          img: "https://images.pexels.com/photos/121629/pexels-photo-121629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "广西土地",
          price: "￥108/月",
          slogan: "1235人付款",
        },
        {
          goods_id: 9,
          img: "https://images.pexels.com/photos/7944412/pexels-photo-7944412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "武汉土地",
          price: "￥88/月",
          slogan: "1235人付款",
        },
      ],
    };
  },

  mounted() {
    //派发action：通过Vuex发起ajax请求，将数据仓储在仓库中
    this.$store.dispatch('getBannerList');
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0rpx;
  padding-top: 40rpx;
  width: 100vw;
  height: 13vh;
  background-color: $color;
  z-index: 999;
  box-sizing: border-box;
}
.window-title {
  width: 100vw;
  text-align: center;
}
.title-text {
  font-size: 36rpx;
  letter-spacing: 3rpx;
  font-weight: bold;
  color: #ffffff;
}
.place {
  margin-bottom: 10rpx;
}
/* 轮播图 */
.swiper {
  width: 95vw;
  margin: 0 auto;
}
/* 小菜单 */
.grid-all {
  background-color: $color;
  border-radius: 60rpx 60rpx 0 0;
  padding-top: 10rpx;
  margin-top: 10rpx;
}
.grid-list {
  display: flex;
  justify-content: center;
  height: 150rpx;
  width: 95vw;
  margin: 0 auto;
  margin-top: 10rpx;
  border-radius: 30rpx;
  background-color: #fff;
}
.grid-item {
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.grid-item image {
  width: 80rpx;
  height: 80rpx;
}
.grid-item text {
  color: #ffffff;
  font-size: 24rpx;
  font-weight: bold;
  margin-top: 10rpx;
}
/* 热门推荐 */
.pick {
  width: 95%;
  padding: 0 2.5vw 2.5vw 2.5vw;
  padding-top: 20rpx;
  background: linear-gradient(to bottom, $color 0%, #ffffff 105%);
  .box {
    width: 100%;
    border-radius: 20rpx;
    background-color: #ffffff;
    box-shadow: 2px 2px 5px #d4d3d3;
    .title {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      height: 60rpx;
      border-bottom: solid 1rpx #eee;
      padding-bottom: 10rpx;
      font-weight: bold;
      .big {
        font-size: 34rpx;
        padding-left: 20rpx;
        color: #46434f;
      }
      .small {
        font-size: 24rpx;
        padding-left: 20rpx;
        color: #827f8b;
      }
    }
    .live-video image{ 
      width: 100%;
      height: 300rpx;
    }
  }
}
/* 商品列表 */
.goods-list {
  background-color: #ffffff;
  .goods-title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60rpx;
    color: #979797;
    font-size: 24rpx;
  }
  .product-list {
    width: 95%;
    padding: 0 2.5% 2.5vw 2.5%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .product {
      width: 48.75%;
      border-radius: 20rpx;
      background-color: #fff;
      margin: 0 0 15rpx 0;
      box-shadow: 1px 1px 10px #d4d3d3;
      image {
        width: 100%;
        border-radius: 20rpx 20rpx 0 0;
      }
      .name {
        width: 92%;
        padding: 10rpx 4%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-align: justify;
        overflow: hidden;
        font-size: 30rpx;
      }
      .info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 92%;
        padding: 10rpx 4% 10rpx 4%;

        .price {
          color: #e65339;
          font-size: 30rpx;
          font-weight: 600;
        }
        .slogan {
          color: #807c87;
          font-size: 24rpx;
        }
      }
    }
  }
}
// .product-list {
//   width: 95%;
//   padding: 0 2.5% 2.5vw 2.5%;
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
// }
// .product {
//   width: 48.75%;
//   border-radius: 20rpx;
//   background-color: #fff;
//   margin: 0 0 15rpx 0;
//   box-shadow: 1px 1px 10px #d4d3d3;
// }
// .product image {
//   width: 100%;
//   border-radius: 20rpx 20rpx 0 0;
// }
// .name {
//   width: 92%;
//   padding: 10rpx 4%;
//   display: content-box;
//   box-orient: vertical;
//   line-clamp: 2;
//   text-align: justify;
//   overflow: hidden;
//   font-size: 30rpx;
// }
// .info {
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
//   width: 92%;
//   padding: 10rpx 4% 10rpx 4%;
// }
// .price {
//   color: #e65339;
//   font-size: 30rpx;
//   font-weight: 600;
// }
// .slogan {
//   color: #807c87;
//   font-size: 24rpx;
// }
</style>