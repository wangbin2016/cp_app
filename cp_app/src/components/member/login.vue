

<template>
	<div class="newend" id="test">
		<mt-field label="用户名" placeholder="请输入用户名" v-model="body.account"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="body.password"></mt-field>
		<div class="">
			<mt-button @click.native="handleClick">登录</mt-button>
			<router-link class="mui-tab-item" to="/regist">
				<mt-button>注册</mt-button>
			</router-link>
		</div>
	</div>
</template>
<style>

</style>
<script>
	import VueRouter from 'vue-router'
	import common from 'utils/common.js'
	import Vue from 'vue'
	import { Field, Button, Toast } from 'mint-ui';

	Vue.component(Field.name, Field);
	Vue.component(Button.name, Button);
	Vue.component(Toast.name, Toast);

	export default {
		data() {
			return {
				body: {
					account: "",
					password: ""
				}
			}
		},
		methods: {
			handleClick: function() {
				if(this.body.account.length == 0) {
					Toast({
						message: '请输入帐号',
						position: 'middle',
						duration: 1000
					});
					return;
				}
				if(this.body.password.length == 0) {
					Toast({
						message: '请输入密码',
						position: 'middle',
						duration: 1000
					});
					return;
				}
				const url = common.api.member.login;
				common.post(url, this.body, false, successFn, failFn);
			}
		},
		created() {},

	}
	
	function successFn (data) {
		console.log("success:::" + JSON.stringify(data));
		common.putCache(common.LOGIN_INFO,JSON.stringify(data.body));
		Toast({
		  message: "登录成功",
		  position: 'middle',
		  duration: 2000
		});
		common.gotoUrl("/info");
	}
	function failFn(data) {
		console.log("fail:::" + JSON.stringify(data));
		Toast({
		  message: data.data.text,
		  position: 'middle',
		  duration: 2000
		});
		
	}
</script>