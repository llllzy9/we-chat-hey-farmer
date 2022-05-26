<template>
  <view>
    <view class="header">
      <view class="search">
        <view><icon type="search" size="30rpx" class="icon"></icon></view>
        <view><input placeholder="西伯利亚土地"/></view>
        <view><button>搜索</button></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "FarmerIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scope>
.search {
  display: flex;
  justify-content: space-around;
  align-items:center;
  height: 65rpx;
  background-color: #ffffff;
  border-radius: 60rpx;
  border: 4rpx solid #00c170;
  box-sizing: border-box;
}
.search button{
    border-radius: 70rpx;
    background: #00c170;
    height: 60rpx;
    color: #ffffff;
    text-align: center;
    line-height: 60rpx;
    font-size: 24rpx;
    transform:translateX(1rpx)
}
.search view:nth-child(1) {
    flex: 0;
    margin: 0 20rpx;
}
.search view:nth-child(2) {
    flex: 3;
}
.search view:nth-child(3){
    
    }
</style>