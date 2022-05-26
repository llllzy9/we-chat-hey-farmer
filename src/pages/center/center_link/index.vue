<template>
    <view class="conten">
        <view class="hand">
            <view class="list">
                <span>姓名：</span>
                <input type="text" placeholder='请输入姓名' v-model="cityForm.name"></input>
            </view>
            <view class="list">
                <span>电话：</span>
                <input type="text" placeholder='请输入联系电话' v-model="cityForm.phone"></input>
            </view>
            <view class="list">
                <view class="address">地址:</view>
                <pickerAddress @change="cityChange"><i>{{ cityTitle }}</i></pickerAddress>
            </view>
            <view class="list">
                <span>详细地址：</span>
                <textarea placeholder="请输入详细地址,例如:XX街道XX栋XX号楼XX层" v-model="cityForm.address" />
            </view>
        </view>
        <view class="btn" @click="saveClick" form-type="submit" type="primary">
            <p>提交</p>
        </view>
    </view>
</template>
 
<script>
import pickerAddress from '../../../component/city/city.vue'
export default {
    data() {
        return {
            cityTitle: '请选择：省、市、区',
            cityForm: {
                name: '', //名字
                phone: '', //电话
                province: '', //地址
                city: '', //城市
            },
        }
    },
    methods: {
        cityChange(data) { //城市选择
            this.cityTitle = data.data.join('-')
            this.cityForm.province = this.cityTitle.split('-')[0] //省
            this.cityForm.city = this.cityTitle.split('-')[1] //市
            this.cityForm.district = this.cityTitle.split('-')[2] //区
            this.cityForm.city = this.cityTitle //把获取到的值赋值给  this.cityForm.city
        },
        saveClick() { //点击提交
            if (!this.cityForm.name) {
                uni.showToast({
                    title: '请输入姓名',
                    icon: 'none'
                })
            } else if (!this.cityForm.phone) {
                uni.showToast({
                    title: '请输入电话',
                    icon: 'none'
                })
            } else if (!this.cityForm.province) {
                uni.showToast({
                    title: '请选择省',
                    icon: 'none'
                })
            } else if (!this.cityForm.city) {
                uni.showToast({
                    title: '请选择市',
                    icon: 'none'
                })
            } else if (!this.cityForm.district) {
                uni.showToast({
                    title: '请选择区',
                    icon: 'none'
                })
            } else if (!this.cityForm.address) {
                uni.showToast({
                    title: '请输入详细地址',
                    icon: 'none'
                })
            } else {
                //输入完后的一些具体操作
                uni.showToast({
                    title: '提交成功'
                })
                this.cityTitle = '请选择：省、市、区'
                this.cityForm = ''
            }
        }
    },
    components: {
        pickerAddress
    },
}
</script>
 
<style>
.hand {
    /* box-shadow: 0 0 10px rgb(0 0 0 / 30%); */
    background-color: #fff;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 30rpx;
    padding: 0 10rpx;
    box-sizing: border-box;
    border-radius: 20rpx;
}

.hand .list {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 30rpx 0;
    border-bottom: 1px solid #ccc;
}

.address {

    font-weight: bold;
    font-style: normal;
    padding-right: 100rpx;
}

.hand .list:last-child {
    display: block;
    border-bottom: none;
}

.hand .list b {
    font-size: 30rpx;

    padding-left: 5rpx;
}


.hand .list i {
    flex: 1;
    font-size: 30rpx;
    color: #8f8f94;
    font-weight: bold;
    font-style: normal;
}

.hand .list textarea {
    width: 100%;
    margin-top: 20rpx;
    border: none;
    background-color: #FAFAFA;
    height: 150rpx;
    border-radius: 40rpx;
    padding: 30rpx;
    box-sizing: border-box;
    font-weight: bold;
}

.hand .list /deep/uni-picker {
    width: 100%;
    flex: 3;
}

.hand .list span {
    flex: 1;
    font-size: 30rpx;

    font-weight: bold;
}

.hand .list input {
    flex: 3;
    font-size: 30rpx;

    font-weight: bold;
    box-sizing: border-box;
}

.btn {
    width: 80%;
    height: 50px;
    border-radius: 10px;
    border: 4rpx solid #fff;
    overflow: hidden;
    margin: 0 auto;
}

.btn p {
    font-size: 35rpx;
    padding: 20rpx 0;
    text-align: center;
    color: #fff;
    display: block;
    background-color: #2ccf8c;
    border-radius: 20rpx;
}
</style>