<template>
    <view class="goods-list">
        <view class="goods-title">— 猜你喜欢 —</view>
        <view class="product-list">
            <navigator class="product" v-for="product in productList" :key="product.id" url="/pages/goodsdetail/index">
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
</template>

<script>
export default {

}
</script>

<style>
</style>