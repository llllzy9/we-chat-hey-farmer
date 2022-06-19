<template>
    <view class="content">
        <!-- 占位 -->
        <view class="seat"></view>
        <!-- 盒子 -->
        <view class="box" v-for="item in goods" :key="item.id">
            <view class="box-left">
                <image :src="item.img" class="img"></image>
            </view>
            <view class="box-center">
                <view class="name">
                    <view class="gtip">
                        {{ item.tip }}
                    </view>
                    {{ item.name }}
                </view>
            </view>
            <view class="box-right">

                <view class="price">
                    {{ item.price }}
                </view>

            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            goods: [
                {
                    id: 0,
                    name: "黄土地，以种植香蕉等作物为主",
                    img: "https://images.pexels.com/photos/11965284/pexels-photo-11965284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    price: "￥168/月",
                    tip: "自营"
                },
                {
                    id: 1,
                    img: "https://images.pexels.com/photos/7728869/pexels-photo-7728869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    name: "黑土地，以种植甘蔗等作物为主",
                    price: "￥128/月",
                    tip: "自营"
                },
                {
                    id: 2,
                    img: "https://images.pexels.com/photos/7728016/pexels-photo-7728016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    name: "绿土地，以种植蔬菜等作物为主",
                    price: "￥155/月",
                    tip: "自营"
                },
                {
                    id: 3,
                    img: "https://images.pexels.com/photos/4207901/pexels-photo-4207901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    name: "红土地，以种植苹果等作物为主",
                    price: "￥175/月",
                    tip: "自营"
                },
                {
                    id: 4,
                    img: "https://images.pexels.com/photos/121629/pexels-photo-121629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    name: "褐土地，以种植芒果等作物为主",
                    price: "￥130/月",
                    tip: "自营"
                },
                {
                    id: 5,
                    img: "https://images.pexels.com/photos/4202255/pexels-photo-4202255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    name: "紫土地，以种植葡萄等作物为主",
                    price: "￥190/月",
                    tip: "自营"
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
    background-color: #fffbfb;

    .seat {
        height: 25rpx;
    }

    .box {
        margin: 0 auto;
        width: 672rpx;
        height: 228rpx;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        box-shadow: 0 8rpx 16rpx 0 rgba(132, 104, 76, 0.08);
        border-radius: 24rpx;
        align-items: center;

        .box-left {
            display: flex;
            justify-content: space-around;

            .img {
                width: 176rpx;
                height: 166rpx;
                margin-left: 10rpx;
                border-radius: 8%;
                border: 1px solid rgb(199, 225, 227);
                margin-left: 30rpx;
            }
        }

        .box-center {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;

            .name {
                margin-left: 35rpx;
                display: flex;
                color: #3E3E3E;
                font-size: 30rpx;
                text-align: justify;
                flex-direction: column-reverse;

                .gtip {
                    font-size: 20rpx;
                    font-weight: 500;
                    background: rgb(252, 51, 51);
                    border-radius: 6rpx;
                    color: rgb(255, 255, 255);
                    height: 30rpx;
                    width: 50rpx;
                    margin-top: 5rpx;
                    flex-wrap: none;
                    padding-left: 8rpx;
                }
            }
        }

        .box-right {
            width: 220rpx;
            display: flex;
            height: 136rpx;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;


            .price {
                color: #DD6C26;
                font-weight: bold;
                margin-right: 10rpx;
            }
        }
    }
}
</style>