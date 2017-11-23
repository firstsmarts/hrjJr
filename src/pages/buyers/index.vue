<template lang="html">
  <div class="buyers" >
    <bar></bar>
    <router-view></router-view>
  </div>
</template>

<script>
import bar from './components/bar.vue'
export default {
  components: { bar }
}
</script>

<style lang="css">
  .buyers{
    text-align: center;
  }
  ._v-content{
    padding-bottom: 50px;
  }
  tr td.weui-flex__item{
    margin: 0;
    height: 26px;
    line-height: .4rem;
    /* padding: 0.625rem 0; */
    padding-top: 0.125rem;
  }
  .tb_content p{
    padding: 0.125rem;
  }
  thead{
    height: auto !important;
  }
  thead .weui-flex__item{
    height: auto;
    line-height: .4rem;
    padding: 0.15rem 0;
  }
  .tb_content{
    min-height: 0;
  }
</style>
