<template>
    <view>
        <view class="search">
            <myheader></myheader>
        </view>
        <view class="fenyemian">
            <view class="pick">
                <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
                    activeColor="#4cd964"></uni-segmented-control>
            </view>
            <view class="content">
                <view v-show="current === 0">
                    111111111111
                </view>
                <view v-show="current === 1">
                    2222222222
                </view>
                <view v-show="current === 2">
                    33333333333333
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import myheader from "../../../component/header/index.vue";
export default {
    name: 'refund',

    data() {
        return {
            items: ['收藏', '关注', '足迹'],
            current: 0
        };
    },

    mounted() {

    },

    methods: {
        onClickItem(e) {
            if (this.current != e.currentIndex) {
                this.current = e.currentIndex;
            }
        },
        back() {
            uni.navigateBack();
        }
    },

    components: {
        myheader,
    },
};
</script>

<style lang="scss" scoped>
.pick {
    background: #ffffff;
}

.fenyemian {
    margin-top: 12px;
}
</style>