import VueRouter from 'vue-router'
import vueResource from 'vue-resource'

import Home from 'comp/Home/Home'
import member from 'comp/member/info'
import login from 'comp/member/login'
import regist from 'comp/member/regist'
import car from 'comp/car/car'
import search from 'comp/search/search'

//图文资讯组件
import imgcontentnews from 'comp/news/ImgContentNew'
//图文资讯详细内容显示组件
import showNewsDetial from 'comp/news/showDetial'
//图片分享组件
import photolist from 'comp/photo/photolist'


export default new VueRouter({
	linkActiveClass: 'mui-active', //可以修改router-link-active 为mui-active来解决tab栏的选中bug
	mode: 'history', //不想看到#号则配置这个 (可以用来解决与html本身锚点冲突的问题)
	routes: [{
			path: '/',
			redirect: '/Home',
			meta: {
				title: '首页入口'
			}
		},
		{
			path: '/Home',
			component: Home
		},
		{
			path: '/member',
			component: member,
			meta: {
				title: ''
			}
		},
		{
			path: '/login',
			component: login
		},
		{
			path: '/regist',
			component: regist
		},
		{
			path: '/car',
			component: car
		},
		{
			path: '/search',
			component: search
		},
		{
			path: '/news/imgcontentnews',
			component: imgcontentnews
		}, //图文资讯
		{
			path: '/news/showdetial/:id',
			component: showNewsDetial
		}, //图文资讯详细
		{
			path: '/photolist',
			component: photolist
		}

	]
})