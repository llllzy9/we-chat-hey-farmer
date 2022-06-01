<template>
  <view>
    <view class="comments-view">
      <view class="header">
        <text>全部评论</text>
      </view>
      <text class="slot">评论{{ getCommentsNum }}</text>
      <scroll-view class="container" scroll-y="true">
        <view class="commentsList">
          <view
            class="commentsItem"
            v-for="(item, index) in commentsList"
            :key="item.id"
          >
            <view class="commentsShow">
              <view class="user">
                <view class="avatar">
                  <image :src="item.avatar" mode="aspectFill"></image>
                </view>
                <view class="comment">
                  <text>{{ item.username }}</text>
                  <view class="word">
                    {{ item.content }}
                  </view></view
                >
              </view>
              <view class="tool">
                <text class="time">{{ item.time }}</text>
                <view class="active">
                  <view class="reply">
                    <image
                      src="../../static/pinglun.png"
                      mode="aspectFit"
                    ></image>
                  </view>
                  <view class="like" @click="changeLike(index)">
                    <view class="likeBtn"
                      ><image
                        :src="
                          !item.isLike
                            ? '../../static/like.png'
                            : '../../static/likeSelected.png'
                        "
                        mode="aspectFit"
                      ></image>
                    </view>
                    <text class="likeNum"> {{ item.likeNum }} </text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    <view class="footer">
      <view class="posts">
        <input
          v-model="myWord"
          placeholder="友善评论，文明你我他"
          class="ipt"
        />
        <button class="btn" size="mini" type="primary" @click="posts">
          发布
        </button>
      </view>
    </view>
  </view>
</template>

<script>
import moment from "moment";
//引入mapState
 import { mapState } from 'vuex'
export default {
  name: "",

  data() {
    return {
      time: "",
      scrollTop: 0,
      myWord: "",
      old: {
        scrollTop: 0,
      },
      commentsNum: 0,
      commentsList: [
        {
          id: 0,
          avatar:
            "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
          username: "杨丹婷小狗",
          content:
            "我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视",
          time: "2020-02-20 8:11",
          likeNum: "10",
          isLike: false,
        },
        {
          id: 1,
          avatar:
            "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
          username: "杨丹婷小狗",
          content:
            "我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视",
          time: "2020-02-20 8:11",
          likeNum: "1",
          isLike: false,
        },
        {
          id: 2,
          avatar:
            "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
          username: "杨丹婷小狗",
          content:
            "我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视",
          time: "2020-02-20 8:11",
          likeNum: "22",
          isLike: false,
        },
        {
          id: 3,
          avatar:
            "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
          username: "杨丹婷小狗",
          content:
            "我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视",
          time: "2020-02-20 8:11",
          likeNum: "2",
          isLike: false,
        },
        {
          id: 4,
          avatar:
            "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
          username: "杨丹婷小狗",
          content:
            "我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视我是小狗，我爱上吃鄙视",
          time: "2020-02-20 8:11",
          likeNum: "9",
          isLike: false,
        },
      ],
    };
  },

  mounted() {
    this.getDate();
  },
  computed:{
    //获取store数据
   getCommentsNum() {
     return this.$store.state.bbs.commentsNum;
   }
  },

  methods: {
    //点赞功能
    changeLike(index) {
      if (this.commentsList[index].isLike) {
        this.commentsList[index].likeNum--;
        this.commentsList[index].isLike = false;
        uni.showToast({
          title: "取消点赞",
          duration: 500,
        });
      } else {
        this.commentsList[index].likeNum++;
        this.commentsList[index].isLike = true;
        uni.showToast({
          title: "点赞成功",
          duration: 500,
        });
      }
    },
    //发表评论
    posts() {
      let userData = {
        avatar:
          "https://images.pexels.com/photos/1119770/pexels-photo-1119770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "沙比",
        content: "我是啥比",
        time: this.time,
        likeNum: "0",
        isLike: false,
      };
      this.commentsList.unshift(userData);
      this.$store.commit('addComments')

    },
    //获取当前时间
    getDate() {
      this.time = moment().format("YYYY-MM-DD h:mm");
    },
  },
};
</script>

<style lang="scss" scoped>
.comments-view {
  padding: 20rpx;
  .header {
    text-align: center;
    font-size: 36rpx;
    font-weight: 600;
    padding-top: 10rpx;
  }
  .slot {
    font-size: 32rpx;
    font-weight: 600;
  }
  .container {
    padding: 0 10rpx;
    margin-top: 10rpx;
    height: 74vh;
    .commentsList {
      display: flex;
      flex-direction: column;
      padding: 0 10rpx;
      .commentsItem {
        margin-bottom: 30rpx;
        .commentsShow {
          .user {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            line-height: 45rpx;
            .avatar {
              flex: 1;
              image {
                width: 80rpx;
                height: 80rpx;
                border-radius: 60rpx;
              }
            }

            .comment {
              flex: 8;
              margin-left: 20rpx;
              text {
                font-weight: 600;
                font-size: 28rpx;
              }
              .word {
                margin-top: 15rpx;
                font-weight: 500;
              }
            }
          }
          .tool {
            margin-left: 100rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .time {
              color: rgb(102, 102, 102);
              font-size: 28rpx;
            }
            .active {
              margin-right: 20rpx;
              display: flex;
              align-items: center;
              .reply {
                margin-right: 20rpx;
                image {
                  width: 50rpx;
                  height: 50rpx;
                }
              }
              .like {
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-right: 20rpx;
                .likeBtn {
                  image {
                    width: 50rpx;
                    height: 50rpx;
                  }
                }
                .likeNum {
                  font-size: 24rpx;
                }
              }
            }
          }
        }
      }
    }
  }
}
.footer {
  box-shadow: 1rpx -1rpx 3rpx #aaa;
  .posts {
    display: flex;
    padding: 20rpx;
    justify-content: center;
    align-items: center;
    .ipt {
      border: none;
      flex: 10;
    }
    .btn {
      flex: 1;
    }
  }
}
</style>