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
          <textarea
            placeholder="对问题补充说明，可以更快获得解答（选填）"
            v-model="more"
          />
        </view>
        <view class="addimg">
        <image v-for="(item,index) in imgArr" :src="item" :key="index" mode="aspectFill">
          <view class="push" @click="uploadImg"></view>
        </view>
        <view class="pblBtn">
          <navigator
            url="/pagesA/bbs/index"
            open-type="switchTab"
            @click="publish"
            ><text>发布</text></navigator
          >
        </view>
      </view>
      <!-- <view class="footer">
        <view class="littleicon"
          ><image src="../../static/tupian.png" mode="widthFill"></image
        ></view>
        <view class="littleicon"
          ><image src="../../static/duomeiti.png" mode="widthFill"></image
        ></view>
        <view class="littleicon"
          ><image src="../../static/aite.png" mode="widthFill"></image
        ></view>
        <view class="littleicon"
          ><image src="../../static/lianjie.png" mode="widthFill"></image
        ></view>
        <view class="littleicon"
          ><image src="../../static/chehui.png" mode="widthFill"></image
        ></view>
        <view class="littleicon"
          ><image src="../../static/chongzuo.png" mode="widthFill"></image
        ></view>
      </view> -->
    </view>
  </view>
</template>

<script>
export default {
  name: "FarmerIndex",
  data() {
    return {
      message: "",
      more: "",
      imgArr: [],
    };
  },
  methods: {
    publish() {
      let messageData = {
        title: this.message,
        username: "牛吨",
        imgurl:[...this.imgArr],
        content: this.more,
        comment_num: 0,
        love_num: 0,
      };
      this.$store.dispatch("addEssay", messageData);
    },
    uploadImg() {
      let that = this;
      uni.chooseImage({
        success(res) {
          that.imgArr = res.tempFilePaths;
        },
      });
    },
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
    .pblBtn {
      float: right;
      width: 130rpx;
      color: $color;
      text-align: center;
      font-size: 32rpx;
      font-weight: 600;
    }
  }
  .footer {
    height: 8vh;
    width: 100vw;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-shadow: -2rpx -2rpx 10rpx #eee;
    .littleicon image {
      width: 30rpx;
      height: 30rpx;
    }
  }
}
.addimg{
  display: flex;
  image{
    padding: 10rpx;
    width: 200rpx;
    height: 200rpx;
  }
  .push{
    width: 210rpx;
    height: 210rpx;
    border: 2rpx solid #aaa;
    border-radius: 20rpx;
    background-image: url(../../static/jia.png);
    background-repeat: no-repeat;
    background-size: 120rpx;
    background-position: center;
  }
}
</style>