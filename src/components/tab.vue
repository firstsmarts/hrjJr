<template lang="html">
  <div class="weui-tabbar Bottom">
      <router-link class="weui-tabbar__item" to="/index">
        <div class="weui-tabbar__label">
            <p>
                <svg class="icon Ico" aria-hidden="true">
                    <use xlink:href="#icon-jifenbang"></use>
                </svg>
            </p>
            <p class="IcoText">积分榜</p>
        </div>
    </router-link>
    
    <router-link class="weui-tabbar__item" to="/buyers">
        <div class="weui-tabbar__label">
        <p>
            <svg class="icon Ico" aria-hidden="true">
                <use xlink:href="#icon-woshimaijia"></use>
            </svg>
        </p>
            <p class="IcoText">信息墙</p>
        </div>
    </router-link>
    <router-link class="weui-tabbar__item" to="/seller">
        <div class="weui-tabbar__label">
            <p>
                <svg class="icon Ico" aria-hidden="true">
                    <use xlink:href="#icon-woshimaijia1"></use>
                </svg>
            </p>
            <p class="IcoText">发信息</p>
        </div>
    </router-link>
    
  </div>
</template>

<script>
export default {
}

</script>
<style lang="css" scoped>
    .weui-tabbar:before{
        border-top: 1px solid #e7e7e7!important;
    }
    /*.router-link-exact-active p{
        color: #e84c3d!important;
    }*/
    .weui-tabbar{
          left: 0;
          position: fixed !important;
    }
    .Bottom{
          height: .95rem;
          background: #ffffff;
    }
    .Bottom p{
          font-size: .26rem;
          color: #999999;
    }
    .Ico{
        font-size: .6rem;
        position: relative;
        top: -0.1rem;
    }
    .IcoText{
        position: relative;
        top:-.25rem;
    }
    .router-link-exact-active p{
      color: red;
    }
    .router-link-active p{
      color: red;
    }
    .weui-tabbar{
      position: fixed !important;
    }
</style>
