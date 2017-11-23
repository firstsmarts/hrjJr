<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import tab from './components/tab.vue'

export default {
  name: 'app',
  components: {tab}
}
</script>

<style>
body{
  max-width: 7.5rem;
  margin: 0 auto;
  list-style: none;
  background: #f2f2f2;
  height: 100%;
}
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
    vertical-align: middle;
}
li {
    list-style: none outside none;
}
a:visited{
  color: #333;
}
html{
  height: 100%;
}
.router-link-active{
  color: red;
}
.tb_content{
  display: inline-block;
  text-align: left;
  min-height: .8rem;
}
.tb_content p{
  padding: .2rem;
}
.class1 .weui-flex__item{
  display: inline-block;
  width: 25%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  margin: 0 auto;
}
.icon {
      width: 1em; height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
   }
 .bg_dialog{
   position: fixed;
   width: 7.5rem;
   height: 100%;
   background: rgba(121,121,121,0.6);
   z-index: 999;
   top: 0;
 }
 .more_info{
   position: absolute;
   top: 50%;
   height: 4.5rem;
   width: 5.8rem;
   left: 50%;
   margin-left: -2.9rem;
   margin-top: -2rem;
   border-radius: 5px 5px 0 0 ;
   background: #fff;
 }
 .more_info h3{
   border-radius: 5px 5px 0 0 ;
   background: #eeeeee;
   height: .8rem;
   line-height: .8rem;
   text-align: center;
 }
 .btn-suc{
   width: 5rem;
   line-height: .8rem;
   font-size: 14px;
   height: .8rem;
   margin-bottom: .2rem;
   border-radius: .05rem;
 }
 .btn_list{
   position: absolute;
   bottom: 0.4rem;
   width: 100%;
 }

 .more_msg{
   text-align: left;
   padding:.3rem .3rem 0;
 }
 .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
    margin: 0 5px;
 }
 .swiper-pagination-bullet-active{
   opacity: 1;
    background: #007aff;
 }
 .swiper-wrapper{
   display: flex;
 }
 .swiper-container{
   overflow: hidden;
 }
</style>
