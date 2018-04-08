import axios from 'axios'

export default {
	//接口配置
	api: {
		member: {
			base: "/api/user-service/",
			regist: "/api/user-service/member/regist",
			login: "/api/user-service/member/login",
			info: "/api/user-service/member/info",
			checkLogin:"/api/user-service/member/checkLogin"
		},
		plan: {
			detail: ""
		}
	},
	LOGIN_INFO:"login_info"
	,
	/**
	 * 公共请求方法
	 * url 地址
	 * param 参数
	 * showSpinner 是否显示加载中的效果
	 * successFn 请求成功后回调方法
	 * faileFn 请求失败后回调方法
	 */ 
	post(url, param, showSpinner, successFn, faileFn) {
		console.log("url+paramscccurlurl:" + url);
		console.log("url+paramsccc:" + JSON.stringify(param));
		const loginInfo= this.getCache(this.LOGIN_INFO);
		if(loginInfo != null){
			const loginInfoObj = JSON.parse(loginInfo);
			param.token=loginInfoObj.token;
			param.account=loginInfoObj.account
		}
		const tempFn = this.gotoUrl;
		
		axios.get(url, {
				params: param
		}).then(function(response) {
				
				if(response.data.code == "100001"){
					tempFn.gotoUrl('/login');
					return;
				}
				
				if(response.data.code == "000000") {
					successFn(response.data);
				} else {
					faileFn(response.data);
				}
			})
			.catch(function(response) {
				console.log(response);
			})
	}
	,
	getCache(key){
		return sessionStorage.getItem(key);
	},
	putCache(key,value){
		sessionStorage.setItem(key,value);
	},
	checkLogin(){
		const loginInfo = this.getCache(this.LOGIN_INFO)
		if(loginInfo == null || loginInfo==""){
			this.gotoUrl('/login');
		}
		
	},
	gotoUrl(url){
		window.location.href=url;
	}
}