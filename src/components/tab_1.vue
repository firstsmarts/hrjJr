<template lang="html">
  <div class="weui-tabbar">
		<router-link class="weui-tabbar__item" to="/index">
      <p class="weui-tabbar__label">积分榜</p>
    </router-link>
    <router-link class="weui-tabbar__item" to="/buyers">
      <p class="weui-tabbar__label">我是买家</p>
    </router-link>
    <router-link class="weui-tabbar__item" to="/seller">
      <p class="weui-tabbar__label">我是卖家</p>
    </router-link>
  </div>
</template>

<script>
export default {
}

</script>
<style lang="css">
.router-link-exact-active p{
  color: red;
}
.weui-tabbar{
  position: fixed !important;
}
</style>
