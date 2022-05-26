<template>
	<view>
        <!-- 搜索 -->
         <view class="search">
             <myheader></myheader>
        </view>
        <!-- 分页 -->
		<view class="inv-h-w">
			<view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="changeTab(0)">全部</view>
			<view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="changeTab(1)">待付款</view>
			<view :class="['inv-h',Inv==2?'inv-h-se':'']" @click="changeTab(2)">待发货</view>
			<view :class="['inv-h',Inv==3?'inv-h-se':'']" @click="changeTab(3)">待收货</view>
			<view :class="['inv-h',Inv==4?'inv-h-se':'']" @click="changeTab(4)">已完成</view>
		</view>
		<!-- 内容 -->
		<view class="swiper-content">
			<view v-if="Inv==Inv" class="content style-default">
				<goods-order :list="tlist" :types="Inv" class="item"></goods-order>
			</view>
		</view>
	</view>
</template>
 
<script>
	import goodsOrder from "../../../component/goods-order"
    import myheader from "../../../component/header/index.vue";
	export default {
        name:'center_receive',
		components: {
			goodsOrder,
            myheader
		},
		data() {
			return {
				Inv: 3,
				list: [], //真正的列表数据
				tlist:[]//处理的页面展示数据
			}
		},
		onShow() {
			// 模拟从后台拿到的数据
			var list = [{
					id: '0',
					name: '黄土地',
					price: 168,
					count: 1,
					img: 'https://images.pexels.com/photos/11965284/pexels-photo-11965284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					types: 9
				},
				{
					id: '1',
					name: '西伯利亚土地',
					price: 15,
					count: 1,
					img: 'https://images.pexels.com/photos/121629/pexels-photo-121629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					types: 1
				},
				{
					id: '2',
					name: '黑土地',
					price: 12,
					count: 1,
					img: 'https://images.pexels.com/photos/7728869/pexels-photo-7728869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					types: 2
				}, {
					id: '3',
					name: '绿土地',
					price: 30,
					count: 1,
					img: 'https://images.pexels.com/photos/7728016/pexels-photo-7728016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					types: 4
				}, {
					id: '4',
					name: '红土地',
					price: 30,
					count: 1,
					img: 'https://images.pexels.com/photos/4207901/pexels-photo-4207901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					types: 3
				},
				{
					id: '5',
					name: '紫土地',
					price: 12,
					count: 1,
					img: 'https://images.pexels.com/photos/4202255/pexels-photo-4202255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					types: 9
				}
			]
			// list数组中为每一项添加双向绑定的属性---这个属性要在页面显示(onShow)添加
			list.forEach(el => el.isChecked = false);
			this.list = list;
			this.tlist = list;//真实数据赋值给页面数据
		},
		methods: {
			changeTab(Inv) {
				var that = this;
				that.Inv = Inv;
				var arr = [];
				that.list.map(item => {//遍历真实数据，拿到所需要的数据放在页面数据tlist中，展示在页面上
					if(item.types == Inv){
						arr.push(item);
					}
				})
				that.tlist = arr;
				if(Inv == 0){//获取全部数据
					that.tlist = that.list;
				}
				//滚动到顶部
				uni.pageScrollTo({
					duration: 0, //过渡时间必须为0，否则运行到手机会报错
					scrollTop: 0 //滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离（如res.top - data.top）
				})
			},
		}
	}
</script>
 
<style lang="scss">
.search{
    display: flex;
    position: fixed;
    top:0px;
    	width: 100%;
}

	.inv-h-w {
		background-color: #FFFFFF;
		height: 100upx;
		display: flex;
		position: fixed;
		top: 35px;
		width: 100%;
        margin-bottom: 100px;
	}
 
	.inv-h {
		font-size: 30upx;
		flex: 1;
		text-align: center;
		height: 80upx;
		line-height: 100upx;
	}
 
	.inv-h-se {
		color: #00c170;
		font-weight: bold;
		border-bottom: 6rpx solid #00c170;
	}
 
	.swiper-content {
		margin-top: 130rpx;
		.content {
			width: 670rpx;
			margin: 0 auto 65rpx;
            margin-top: 90px;
		}
	}
    .search{
        display: block;
        margin-bottom: 1px;
    }
</style>