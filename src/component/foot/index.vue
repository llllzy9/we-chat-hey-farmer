<template>
	<view>
		<uni-card title="基础卡片" extra="额外信息">
			<text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
		</uni-card>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
			avatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
			extraIcon: {
				color: '#4cd964',
				size: '22',
				type: 'gear-filled'
			}
		}
	},
	methods: {
		onClick(e) {
			console.log(e)
		},
		actionsClick(text) {
			uni.showToast({
				title: text,
				icon: 'none'
			})
		}
	}
}
</script>

<style>
</style>