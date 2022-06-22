<template>
  <view>
    <view class="video-show">
      <view class="video">
        <video
          :src="viedoUrl"
          loop
          autoplay
          controls="false"
          show-loading
          vslide-gesture-in-fullscreen
        ></video>
      </view>
      <uni-segmented-control
        :current="current"
        :values="items"
        @clickItem="onClickItem"
        styleType="text"
        activeColor="#00c170"
        :style-type="styleType"
      ></uni-segmented-control>
      <view class="content">
        <view v-show="current === 0">
          <view class="interact">
            <scroll-view scroll-y="true" class="comments">
              <text style="font-weight:600;color:#161823">欢迎来到{{user}}的直播间-{{title}}</text>
              <view class="output">
                <view class="word" v-for="(item, index) in list" :key="index">
                  <text>{{ item.username }}:</text>
                  <text>{{ item.word }}</text>
                </view>
              </view>
            </scroll-view>
            <view class="input">
              <image
                :src="avatar"
                class="user-avatar"
                mode="aspectFill"
              ></image>
              <input placeholder="聊点什么吧" v-model="ipt" />
              <image
                class="public"
                @click="pub"
                src="../../static/fasong.png"
                style="width: 70rpx; height: 70rpx"
              ></image>
            </view>
            <view class="active">
              <uni-fab
                ref="fab"
                :pattern="pattern"
                :content="content"
                :horizontal="horizontal"
                :vertical="vertical"
                :direction="direction"
                @trigger="trigger"
                class="fabBtn"
              />
            </view>
          </view>
        </view>
        <view v-show="current === 1">
          <scroll-view scroll-y="true" style="height: 60vh">
            <view class="allcard">
              <view
                class="card"
                v-for="card in liveList"
                :key="card.id"
              >
                <uni-card
                  :cover="cover"
                  @click="onClick"
                  spacing="0"
                  margin="10rpx"
                  style="position:relative"
                >
                  <image
                    slot="cover"
                    style="width: 100%; height: 200rpx"
                    :src="card.image"
                    mode="aspectFill"
                  ></image>
                  <text
                    class="uni-body"
                    style="position: absolute; bottom: 80rpx; color: #fff"
                    >-{{ card.username }}-</text
                  >
                  <text class="uni-body">{{ card.title }}</text>
                  <view
                    class="look"
                    style="position: absolute; bottom: 80rpx;right:15rpx; color: #fff"
                  >
                    <uni-icons type="person" size="20" color="#fff"></uni-icons>
                    <text class="uni-body">{{ card.nums }}</text>
                  </view>
                </uni-card>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "FarmerIndex",
  ipt: [],
  data() {
    return {
      user:'牛吨',
      title:'疯狂戴夫的火爆辣椒',
      viedoUrl:'https://vod-progressive.akamaized.net/exp=1654939560~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3926%2F19%2F494632431%2F2233288783.mp4~hmac=9664d0be7f0d4c6adc9b031fa233ae62fa5bdba9df102e61cc0661376e2b535e/vimeo-prod-skyfire-std-us/01/3926/19/494632431/2233288783.mp4',
      items: ["直播互动", "更多直播"],
      current: 0,
      horizontal: "right",
      vertical: "bottom",
      directionStr: "垂直",
      direction: "vertical",
      ipt: "",
      avatar:
        "https://images.pexels.com/photos/12328375/pexels-photo-12328375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      content: [
        {
          iconPath: "/static/gengzhong.png",
          selectedIconPath: "/static/gengzhong.png",
          text: "耕种",
          active: false,
        },
        {
          iconPath: "/static/jiaoshui.png",
          selectedIconPath: "/static/jiaoshui.png",
          text: "浇水",
          active: false,
        },
        {
          iconPath: "/static/feiliao.png",
          selectedIconPath: "/static/feiliao.png",
          text: "肥料",
          active: false,
        },
        {
          iconPath: "/static/shachong.png",
          selectedIconPath: "/static/shachong.png",
          text: "杀虫",
          active: false,
        },
        {
          iconPath: "/static/caizhai.png",
          selectedIconPath: "/static/caizhai.png",
          text: "采摘",
          active: false,
        },
        {
          iconPath: "/static/rengong.png",
          selectedIconPath: "/static/rengong.png",
          text: "人工",
          active: false,
        },
      ],
      pattern: {
        color: "#7A7E83",
        backgroundColor: "#fff",
        selectedColor: "#00c170",
        buttonColor: "#00c170",
        iconColor: "#fff",
      },

      list: [
        {
          id: 0,
          username: "爱吃香蕉的刘华强",
          word: "给你机会你不中用啊",
        },
        {
          id: 1,
          username: "老虎",
          word: "年亲人不要太气盛",
        },
        {
          id: 2,
          username: "小明",
          word: "长大我要当太空人，爷爷奶奶可高兴了",
        },
      ],
      liveList: [
        {
          id: "0",
          image:
            "https://images.pexels.com/photos/6342150/pexels-photo-6342150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          username: "歪币巴布",
          title: "疯狂戴夫的火爆辣椒",
          nums: "20",
        },
        {
          id: "1",
          image:
            "https://images.pexels.com/photos/61379/pexels-photo-61379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          username: "僵尸博士",
          title: "金银花",
          nums: "100",
        },
        {
          id: "2",
          image:
            "https://images.pexels.com/photos/167570/pexels-photo-167570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          username: "袁隆平",
          title: "转基因巨型水稻",
          nums: "1000",
        },
        {
          id: "3",
          image:
            "https://images.pexels.com/photos/4207905/pexels-photo-4207905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          username: "德爷",
          title: "植物的耐受测试",
          nums: "600",
        },
        {
          id: "4",
          image:
            "https://images.pexels.com/photos/129574/pexels-photo-129574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          username: "Ms.yang",
          title: "柠檬树",
          nums: "900",
        },
        {
          id: "5",
          image:
            "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          username: "驱蚊液",
          title: "粉红玫瑰",
          nums: "120",
        },
        {
          id: "6",
          image:
            "https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          username: "手表",
          title: "樱花",
          nums: "20",
        },
        {
          id: "7",
          image:
            "https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          username: "拉乌爷",
          title: "向日葵",
          nums: "6000",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    //评论
    pub() {
      let data = {
        username: "牛吨",
        word: this.ipt,
      };
      this.list.push(data);
    },
    //展开互动
    trigger(e) {
      console.log(e);
      this.content[e.index].active = !e.item.active;
      uni.showModal({
        title: "提示",
        content: `您${this.content[e.index].active ? "选中了" : "取消了"}${
          e.item.text
        }`,
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    //切换分页
    onClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin font {
  font-size: 26rpx;
  font-weight: 600;
}
.video-show {
  background: #ffffff;
  height: 100vh;
  .video {
    video {
      width: 100vw;
    }
  }
  .comments {
    padding: 0 20rpx;
    overflow: hidden;
    height: 655rpx;
    .output {
      display: flex;
      flex-direction: column;
      .word {
        @include font;
        line-height: 50rpx;
        text {
          &:nth-child(1) {
            color: rgb(112, 112, 112);
            margin-right: 10rpx;
          }
        }
      }
    }
  }
  .input {
    position: fixed;
    bottom: 0;
    width: 100vw;
    padding: 10rpx;
    display: flex;
    align-items: center;
    box-shadow: 2rpx 2rpx 10rpx #aaa;
    .user-avatar {
      width: 65rpx;
      height: 65rpx;
      border-radius: 60rpx;
      margin-right: 10rpx;
    }
    input {
      background: rgba(214, 213, 213, 0.447);
      width: 450rpx;
      height: 50rpx;
      border-radius: 50rpx;
      padding: 10rpx 20rpx;
      @include font;
    }
    .public {
    }
  }
  .allcard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card {
      width: 370rpx;
    }
  }
}
</style>