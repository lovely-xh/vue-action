const routers = [
	{
		path: '/top-navigation',
		meta: {
			title: '顶部导航'
		},
		component: (resolve) => require(['../views/top-navigation.vue'], resolve)
	 },
	 {
		path: '/top-left-navigation',
		meta: {
			title: '顶部导航 侧边栏'
		},
		component: (resolve) => require(['../views/top-left-navigation.vue'], resolve)
	 },
	 {
		path: '/left-navigation',
		meta: {
			title: '侧边栏'
		},
		component: (resolve) => require(['../views/left-navigation.vue'], resolve)
	 },
	 {
		path: '/suspend',
		meta: {
			title: '吊顶'
		},
		component: (resolve) => require(['../views/suspend.vue'], resolve)
	 },
	 {
		path: '*',
		redirect: '/suspend'
	 }
 ];

 export default routers;
