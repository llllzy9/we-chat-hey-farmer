<template>
    <view>
        <view class="fenyemian">
            <view class="pick">
                <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
                    activeColor="#4cd964"></uni-segmented-control>
            </view>
            <view class="content">
                <view v-show="current === 0">
                    <money></money>
                </view>
                <view v-show="current === 1">
                    <care></care>
                </view>
                <view v-show="current === 2">
                    <foot></foot>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import myheader from "../../../component/header/index.vue";
import foot from '../../../component/foot/index.vue'
import care from '../../../component/care/index.vue'
import money from '../../../component/money/index.vue'
export default {
    name: 'refund',

    data() {
        return {
            items: ['钱包', '关注', '足迹'],
            current: 1
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
        foot,
        care,
        money
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