<template>
	<view class="goods-list">
		<view class="goods-title">— — — — — — — —</view>
		<view class="product-list">
			<navigator class="product" v-for="product in productList" :key="product.id" url="/pages/goodsdetail/index">
				<image :src="product.img" mode="widthFix"></image>
				<view class="content">
					<view class="name">{{ product.name }}</view>
					<view class="price">{{ product.price }}</view>
				</view>
			</navigator>
		</view>
		<view class="loading-text">{{ loadingText }}</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
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
			]
		}
	}
}
</script>

<style lang="scss" scoped>
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

			.content {
				font-size: 28rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				line-height: 70rpx;

				.name {
					width: 50%;

					text-align: justify;
					overflow: hidden;
					font-size: 30rpx;
				}

				.price {
					color: #f43939;
					font-size: 30rpx;
					font-weight: 600;
				}
			}
		}
	}
}
</style>