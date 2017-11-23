<template lang="html">
  <div class="weui-navbar">
		<router-link class="weui-navbar__item" to="/buyers/All">
      <p>校友</p>
    </router-link>
    <router-link class="weui-navbar__item" to="/buyers/class1">
      <p>招聘</p>
    </router-link>
    <router-link class="weui-navbar__item"  to="/buyers/class2">
      <p>相亲</p>
    </router-link>
    <router-link class="weui-navbar__item"  to="/buyers/class3">
      <p>证券</p>
    </router-link>
    <router-link class="weui-navbar__item"  to="/buyers/class4">
      <p>理财</p>
    </router-link>
    <router-link class="weui-navbar__item"  to="/buyers/class5">
      <p>项目</p>
    </router-link>
  </div>
</template>

<script>
export default {
}

</script>

<style lang="css">
.router-link-active{
  background: #fff;
  border: 1px solid #d9d9d9;
  border-bottom: 1px solid #fff;
}
.router-link-active p{
  color: #e84c3d;
}
.router-link-active span{
  border-bottom:2px solid #e84c3d;
}
.weui-navbar{
  position: fixed !important;
  height: 30px;
  background:#f2f2f2;
  border-bottom: 1px solid #d9d9d9;
  width: 7.5rem !important;
}
.weui-navbar a{
  line-height: 29px;
  padding: 0;
  font-size: 15px;
  color: #333;
}
.weui-navbar span{
  display: inline-block;
  height: 100%;
  padding: 0 3px;
}
.weui-flex__item{
  font-size: 14px;
}
.weui-navbar__item{
  margin-bottom: -1px;
  border-radius: 4px 4px 0 0;
}
.weui-navbar:after{
  border: none;
}
 .weui-navbar__item:after{
  border:none;
} 
.tb_content p{
  font-size: 14px;
}
thead{
  background: #fff!important;
}
</style>
