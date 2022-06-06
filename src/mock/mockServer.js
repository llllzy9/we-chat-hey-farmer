//引入mockjs模块
import Mock from 'mockjs';
//把JSON数据格式引入进来【json数据格式没有对外暴露但是可以引入，因为webpack默认对外暴露的】
import banner from './banner.json';


//mock数据：第一个参数请求地址   第二个参数：请求数据
Mock.mock("/mock/banner", { code: 200, data: banner });//模拟首页大的轮播图的数据