<template>
  <view>
    <view class="video-show">
      <view class="video">
        <view class="input">
          <input placeholder="聊点什么吧" />
        </view>
        <video
          src="https://vod-progressive.akamaized.net/exp=1652465275~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4109%2F18%2F470549447%2F2093685386.mp4~hmac=d1f5f1190dc89a70487e1921016db60d757145881a103d98907b61f9a0af9b61/vimeo-prod-skyfire-std-us/01/4109/18/470549447/2093685386.mp4?filename=pexels-karolina-grabowska-5658518.mp4"
          loop
          autoplay
          controls="false"
          show-loading
          title="直播"
          vslide-gesture-in-fullscreen
        ></video>
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

<style lang="scss" scoped>
.video-show {
  .video {
    width: 10%;
    input {
      position: absolute;
      bottom: 80rpx;
      left: 30rpx;
      background: rgba(170, 170, 170, 0.44);
      width: 300rpx;
      height: 80rpx;
      border-radius: 40rpx;
      z-index: 999;
      padding: 10rpx;
    }
    video {
      height: 100vh;
      width: 100vw;
    }
  }
}
</style>