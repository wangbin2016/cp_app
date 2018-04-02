<template>
	<div class="newend" id="test">
		<mt-cell title="帐号" :value="body.account_value"></mt-cell>
		<mt-cell title="邮件" :value="body.email_value"></mt-cell>
		<mt-cell title="电话" :value="body.mobile_value"></mt-cell>
		<mt-cell title="地址" :value="body.address_value"></mt-cell>
	</div>
</template>
<style>

</style>
<script>
	import Vue from 'vue'
	import { Field, Button, Cell } from 'mint-ui';
	import common from 'utils/common.js'
	Vue.component(Field.name, Field);
	Vue.component(Button.name, Button);

	export default {
		data: function() {
			return {
				body: {
					account_value: "",
					email_value: "",
					mobile_value: "",
					address_value: ""
				}
			}
		},
		methods: {
			handleClick: function() {
				alert("data.username=" + this.username + " email = " + this.password);
			}
		},
		created() {
			common.checkLogin();
			const url = common.api.member.info;
			const tempData = this.body;
			common.post(url, {}, false, function(data) {
				const body = data.body;
				tempData.account_value = body.account;
				tempData.email_value = body.email;
				tempData.mobile_value = body.mobile;
				tempData.address_value = body.address;
			}, function(data) {

			});

		}
	}
</script>