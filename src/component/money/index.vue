<template>
    <view class="user_content">
        <!-- 占位置 -->
        <view class="position">

        </view>
        <!--表头-->
        <view class="user_head">
            <view class="user_img domain">
                <view class="userinfo-avatar">账户余额</view>
                <view class="userinfo_name">￥300.00</view>
            </view>
        </view>
        <!--  列表-->
        <view class="n">
            <image class="t" src="../../static/yinghangka.png"></image>
            <text class="h">银行卡</text>
        </view>
        <view class="n">
            <image class="t" src="../../static/chongzhi.png"></image>
            <text class="h">充值</text>
        </view>
        <view class="n">
            <image class="t" src="../../static/tixian.png"></image>
            <text class="h">提现</text>
        </view>
        <view class="n">
            <image class="t" src="../../static/jiaoyijilv.png"></image>
            <text class="h">交易记录</text>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {


        }
    },
}
</script>

<style lang="scss" scoped>
page {
    display: block;
    min-height: 100%;
    background-color: rgb(245, 245, 245);
}

.position {
    height: 25rpx;
}

.user_head {
    position: relative;
    background: #fff;
    padding: 20px 0;
    font-size: 14px;
    color: #ffffff;
    background: $color;
    border-radius: 2%;
}

.user_img {
    margin: 0 auto;
    text-align: center;
    color: #fff;
}

.userinfo_name {
    clear: both;
    width: 100%;
    padding-top: 10px;
    color: #ffffff;
    font-size: 20px
}

.userinfo-avatar {
    font-size: 30px;
    font-weight: bolder;
    text-align: center;
}

.user_edit_con {
    background: #fff;
    margin-top: 10px;
}

.n {
    /* border: solid #007AFF; */
    padding: 24rpx 24rpx;
    display: flex; //同行排列
    align-items: center; //居中对齐
    margin-top: 32rpx;
    /* line-height: 2;//行高 */
    box-shadow: 0 8rpx 16rpx 0 rgba(132, 104, 76, 0.08);
}

.t {
    width: 65rpx;
    height: 65rpx;
    text-align: center;
    font-size: 30rpx;
    pointer-events: 48rpx;
    padding-right: 98rpx;
}
</style>