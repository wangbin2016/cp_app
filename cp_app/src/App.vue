<template>
  <div>
  	<!--
      	作者：offline
      	时间：2018-03-18
      	描述：
      <mt-header id="hd" fixed title="彩票"></mt-header>
      -->
    <headComponent></headComponent>
  	<div id="content" class="routerview">
  		<transition name="fade" mode="out-in">
  			<router-view></router-view>
  		</transition>
  </div>
<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/info">
				<span class="mui-icon mui-icon-contact"></span> 
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">1</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
import headComponent from 'comp/head'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
  	headComponent
  }
  ,
  created (){
  	//当app.vue创建完成以后，自动加载Home.vue模块
		// window.location='/#/Home';
  }
}
</script>

<style>
  @import '../statics/css/muihead.css';
body{
	background-color:white;
}
.mint-tab-item-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 5px
}
.routerview{d
	margin-top: 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
