<template>
	<view class="container">
		<u-empty class="noData" :show="recommendlist1.length == 0" text="收货地址为空"></u-empty>
		<view style="height: 100vh">
			<swiper-item>
				<view scroll-y class="sgscroll">
					<view class="sglist">
						<view class="sglist-item" v-for="(item, index) in recommendlist1" :key="index">
							<view class="sglist-view">
								<view class="sglist-title">
									{{ item.choice }}
								</view>
								<view class="sglist-desc">
									<view class="sglist-content">
										<text>{{ item.content }}</text>
									</view>
									<navigator class="sglist-imglist" @click="remove($index)">
										<image class="sglist-imglist-img" mode="aspectFill"
											src="../../../static/del.png"></image>
									</navigator>

								</view>
								<view class="sglist-flow">
									<text>{{ item.name }}</text>
									<text>{{ item.number }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<navigator url="/pages/center/center_link/index">
				<button type="submit" style="z-index:99;" class="btn btn-block">新增地址</button>
			</navigator>
		</view>
	</view>
</template>
 
<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			url: "../../center/center_link",
		}
	},
	methods: {
		remove(index) {
			this.recommendlist1.splice(index, 1)
		}
	},
	computed: {
		...mapState({
			recommendlist1: (state) => state.center.recommendlist1,
		})
	}
};


</script>
			
<style lang="scss">
.btn-block {
	width: 80%;
	height: 50px;
	border-radius: 15px;
	border: 4rpx solid #fff;
	overflow: hidden;
	background-color: #2ccf8c;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, 400%);
	color: #fff;
	text-align: center;
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
		font-size: 30rpx;
		margin-top: 4px;
	}

	.sglist-desc {
		font-size: 35rpx;
		font-weight: 700;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.sglist-content {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			padding-right: 10rpx;
			margin-top: 6px;
		}

		.sglist-imglist {
			image {
				width: 45rpx;
				height: 50rpx;
				border-radius: 10rpx;
			}
		}
	}

	.sglist-flow {

		font-size: 28rpx;
		font-weight: 500;
		margin-top: 6px;

		text {
			margin-right: 20rpx;
		}
	}


}
</style>>

