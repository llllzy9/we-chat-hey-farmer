<template>
  <view>
    <view class="pbs">
      <view class="plr">
        <view class="smlipt">
          <input
            v-model="message"
            placeholder="输入问题并以问号结尾"
            class="input-title"
            @focus="isactive"
          />
        </view>
        <view class="bigipt">
          <textarea placeholder="对问题补充说明，可以更快获得解答（选填）" v-model="more" />
        </view>
        <view class="pblBtn">
            <navigator url="/pages/bbs/index"
            open-type="switchTab" @click="publish"><text>发布问题</text></navigator>
        </view>
      </view>
      <view class="footer">
          <view class="littleicon"><image  src="../../static/tupian.png" mode></image></view>
          <view class="littleicon"><image src="../../static/duomeiti.png" mode="widthFill"></image></view>
          <view class="littleicon"><image src="../../static/aite.png" mode="widthFill"></image></view>
          <view class="littleicon"><image src="../../static/lianjie.png" mode="widthFill"></image></view>
          <view class="littleicon"><image src="../../static/chehui.png" mode="widthFill"></image></view>
          <view class="littleicon"><image src="../../static/chongzuo.png" mode="widthFill"></image></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "FarmerIndex",
  data() {
    return {
      message:'',
      more:'',
    };
  },
  methods: {
    publish(){
      let messageData = {
          title: this.message,
          username: "牛吨",
          imgurl:
            "https://images.pexels.com/photos/7944397/pexels-photo-7944397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          content:this.more,
          comment_num: 0,
          love_num: 0,
      };
      this.$store.dispatch('addEssay',messageData);
      console.log(123);
    }
  },
};
</script>

<style lang="scss" scoped>
.pbs {
  .plr {
       padding: 40rpx;
    .smlipt {
        margin-bottom: 10rpx;
      .input-title {
          border-bottom: 2rpx solid rgb(174, 174, 174);
      }
    }
    .bigipt {
        margin-top: 20rpx;
    }
    .pblBtn{
        float: right;
        width: 130rpx;
        color: $color;
        text-align: center;
        font-size: 32rpx;
        font-weight: 600;
    }
  }
  .footer{
      height: 8vh;
      width: 100vw;
      position: fixed;
      bottom: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      box-shadow: -2rpx -2rpx 10rpx #eee;
      .littleicon image{
          width: 30rpx;
          height: 30rpx;
      }
  }
}
</style>