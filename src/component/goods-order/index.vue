<template name="goods-order">
	<view>
		<view class="list" v-for="item in list" :key='item.id'>
			<view class="left">
				<image :src="item.img" class="img"></image>
			</view>
			<view class="center flex-1 ml-3 ">
				<view class="name">
					<view class="text-truncate">{{ item.name }}</view>

				</view>
				<view class="price">
					￥{{ item.price }}/月
				</view>
			</view>
			<view class="right mr-2">
				<view v-if="types == 0"
					:class="['types d-flex align-items-center justify-content-center', item.types == 1 || item.types == 2 || item.types == 3 ? 'types_dfk' : item.types == 4 ? 'types_ywc' : item.types == 9 ? 'types_yqx' : '']">
					{{ item.types == 1 ? "待付款" : item.types == 2 ? "待发货" : item.types == 3 ? "待收货" : item.types == 4 ? "已完成" : item.types == 9 ? "已取消" : "无" }}
				</view>
				<view v-if="types == 1" class="types types_dfk d-flex align-items-center justify-content-center">
					待付款
				</view>
				<view v-if="types == 2" class="types types_dfk d-flex align-items-center justify-content-center">
					待发货
				</view>
				<view v-if="types == 3" class="types types_dfk d-flex align-items-center justify-content-center">
					待收货
				</view>
				<view v-if="types == 4" class="types types_ywc d-flex align-items-center justify-content-center">
					已完成
				</view>
				<view v-if="types == 9" class="types types_yqx d-flex align-items-center justify-content-center">
					已取消
				</view>
				<view class="count">
					x{{ item.count }}
				</view>
			</view>
		</view>
	</view>
</template>
 
<script>
export default {
	name: "goods-order",
	data() {
		return {

		};
	},
	// 此处定义传入的数据,属性
	props: {
		list: {
			type: Array,
			value: null
		},
		types: {
			type: Number,
			value: null
		}
	},
	//组件生命周期
	created: function (e) {

	},
	methods: {

	}

}
</script>
 
<style lang="scss">
.list {
	width: 672rpx;
	height: 208rpx;
	background: #fff;
	box-shadow: 0 8rpx 16rpx 0 rgba(83, 66, 49, 0.08);
	border-radius: 24rpx;
	margin-top: 32rpx;
	display: flex;
	justify-content: space-around;
	align-items: center;

	.left {
		display: flex;

		.img {
			width: 136rpx;
			height: 136rpx;
			margin-left: 10rpx;
			border-radius: 8%;
		}
	}

	.center {
		width: 170rpx;
		display: flex;
		height: 136rpx;
		flex-direction: column;
		justify-content: space-between;

		.name {
			font-size: 26rpx;
			color: #3E3E3E;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.size {
			font-size: 22rpx;
			color: #8D8D8D;
		}

		.price {
			color: #DD6C26;
			font-weight: bold;
		}
	}

	.right {
		display: flex;
		height: 136rpx;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		.count {
			font-size: 22rpx;
			color: #8D8D8D;
		}

		.types {
			width: 120rpx;
			height: 50rpx;
			display: inline-block;
			text-align: center;
			color: #FFFFFF;
		}

		.types_dfk,
		.types_dfh,
		.types_dsh,
		{

		color: #2994FA;
	}

	.types_ywc {
		color: #0BC261;
	}

	.types_yqx {
		color: #FF976A;
	}

}
}
</style>