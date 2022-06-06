<template>
	<view class="container">
		<swiper style="height: 100vh">
			<swiper-item>
				<view scroll-y class="sgscroll">
					<view class="sglist">
						<view class="sglist-item" v-for="(item, index) in recommendlist" :key="index">
							<view class="sglist-view">
								<view class="sglist-title">
									{{ item.choice }}
								</view>

								<view class="sglist-desc">
									<view class="sglist-content">
										<text>{{ item.content }}</text>
									</view>
									<navigator class="sglist-imglist" url="/pages/center/center_link/index">
										<image class="sglist-imglist-img" mode="aspectFill" :src="item.imgurl"></image>
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

		</swiper>

	</view>
</template>
 
<script>
export default {
	data() {
		return {
			url: "../../center/center_link",
			recommendlist: [
				{
					id: 0,
					choice: "湖北省-天门市-天门",
					imgurl:
						"../../../static/change.png",
					content:
						"天门外国语学校高中部",
					name: "安光耀",
					number: 15527561217,
				},
				{
					id: 1,
					choice: "湖北省-武汉市-洪山区",
					imgurl:
						"../../../static/change.png",
					content:
						"资本新时代：日本家庭草莓农场种植技术！从草莓田培育、定值、施肥、蔬果、采收到品控都是严格把控。",
					name: "李章源",
					number: 110119121120,
				},

			],
		}
	},
	methods: {
		onClick(e) {
			console.log(e)
		},
		actionsClick(text) {
			uni.showToast({
				title: text,
				icon: 'none'
			})
		}
	}
}
</script>
			
<style lang="scss">
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
		font-size: 36rpx;
		font-weight: 700;
		margin-top: 4px;
	}

	.sglist-desc {
		font-size: 28rpx;
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
			margin-top: 4px;
		}

		.sglist-imglist {
			image {
				width: 50rpx;
				height: 40rpx;
				border-radius: 10rpx;
			}
		}
	}

	.sglist-flow {
		color: rgb(157, 157, 157);
		font-size: 26rpx;
		font-weight: 500;
		margin-top: 4px;

		text {
			margin-right: 20rpx;
		}
	}
}
</style>>

