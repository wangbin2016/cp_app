<template>
	<div class="newend" id="test">
		<mt-field label="用户名" placeholder="请输入用户名" v-model="body.account"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="body.password"></mt-field>
		<mt-field label="邮件" placeholder="请输入邮件" v-model="body.email"></mt-field>
		<mt-field label="呢称" placeholder="请输入呢称" v-model="body.nikename"></mt-field>
		<mt-field label="手机" placeholder="请输入手机" v-model="body.mobile"></mt-field>
		<div class="">
			<mt-button size="large" @click.native="handleClick">注册</mt-button>
			<router-link to="/login" slot="left">
				<mt-button icon="back">登录</mt-button>
			</router-link>
		</div>
	</div>
</template>
<style>

</style>
<script>
	import common from 'utils/common.js'
	import Vue from 'vue'
	import { Field, Button } from 'mint-ui';

	Vue.component(Field.name, Field);
	Vue.component(Button.name, Button);

	export default {
		data: function() {
			return {
				body: {
					account: "",
					password: "",
					email: "",
					nikename: "",
					mobile: ""
				}
			}
		},
		methods: {
			handleClick: function() {
				const url = common.api.member.regist;
				common.post(url,this.body,false,function(data){
					Toast({
						message: '注册成功',
						position: 'middle',
						duration: 1000
					})
					common.gotoUrl("/info");
				},function(data){
					Toast({
						message: '注册失败',
						position: 'middle',
						duration: 1000
					});
				});
			}
		},
		created() {}
	}
</script>