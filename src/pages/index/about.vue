<template lang="html">
   	<div class="IntroText">
		<!-- <p>华尔街金融玩家俱乐部位于武汉汉街的印象华尔街咖啡馆。秉持“公益交流”与“无功不受禄”的理念，俱乐部推出了金融信息免费评级、零管理费代客理财、每周六公益金融茶话会和每月20号金融才子佳人联谊会等服务，旨在为同行和玩家提供靠谱的业务收入、投资收益及社交福利。欢迎金融同行和玩家垂询02787883688，或加微信13986063648。</p> -->
    <p>华尔街人民公社位于武汉汉街的印象华尔街咖啡。印象华尔街咖啡是武汉首家“金融+公益”主题生活馆，目前已开设楚河店和水果湖店，并推出了如下优惠活动：</p>
	   <div class="playerForm">
      <table>
        <tr>
          <td>客户类型</td>
          <td>优惠标准</td>
          <td>说明</td>
        </tr>
        <tr>
          <td>非群友客户</td>
          <td>原价</td>
          <td>指“华尔街人民公社群”</td>
        </tr>
        <tr>
          <td>群友客户</td>
          <td>8.8折</td>
          <td>同上</td>
        </tr>
        <tr>
          <td>团体客户</td>
          <td>8.8折</td>
          <td>3人及以上</td>
        </tr><tr>
          <td>合作企业及其成员</td>
          <td>7.7折</td>
          <td>与公司签有战略合作协议</td>
        </tr><tr>
          <td>充值卡会员</td>
          <td>充100送20（即8.3折）</td>
          <td>充200送50（即8折），充500送150（即7.7折）</td>
        </tr><tr>
          <td>月/年卡会员</td>
          <td>月卡199元，半年卡1099元，年卡1999元</td>
          <td>每天可任选咖啡茗茶等饮品一份，每周还可免费请朋友体验一次</td>
        </tr>
      </table>
    </div>
    <div class="PhotoWall">
			<div class="PhotoWall_text">楚河店</div>
			<img :src="PhotoWallUrl">
		</div>
		<div class="map">
			<div class="PhotoWall_text_a">地址:武汉市武昌区楚河文化街&nbsp;(汉街歌笛桥旁)</div>
			<img :src="MapUrl">
		</div>
		<div class="PhotoWall">
			<div class="PhotoWall_texts">水果湖店</div>
			<img :src="PhotoWallUrla">
		</div>
		<div class="map M_bottom">
			<div class="PhotoWall_text_a">地址:武汉市武昌区东湖路89号&nbsp;(水果湖一中旁)</div>
		</div>
	</div>
</template>
<script>
import Photowall from '../../assets/images/zp_1.png'
import Photowalla from '../../assets/images/zp_3.png'
import MapImg from '../../assets/images/zp_2.png'
 	export default {
 		data(){
		return{
 			PhotoWallUrl:Photowall,
 			MapUrl:MapImg,
 			PhotoWallUrla:Photowalla
 		}
 		}
 	}
</script>

<style lang="css" scoped>
.IntroText{
	background: #ffffff;
	font-size: .28rem;
	width: 7.5rem;
	overflow: hidden;
	line-height: .45rem;

}
.IntroText .playerForm {
  width: 6.8rem;
  margin: 0 auto;
  margin-top:.2rem;
  margin-bottom: .3rem;
}
.IntroText .playerForm table {
     border-collapse: collapse;

}
.IntroText .playerForm th,td {
     padding: .1rem;
     min-width: 1.5rem;
}

.IntroText .playerForm th {
   background: #555 nonerepeat scroll 0 0;
   border: 1px solid #777;
   color: #fff;
}

.IntroText .playerForm td {
     border: 1px solid#777;
}
.IntroText p{
	width: 6.6rem;
	margin-top:.5rem;
	padding: 0 .45rem;
	color: #333333;
	text-indent:2em;
	margin-bottom: .25rem;
	letter-spacing:.04rem;
}
.PhotoWall {
	width: 6.6rem;
	padding: 0 .45rem;
}
.PhotoWall img {
	width: 100%;
	height: 100%;
}
.map{
	width: 6.6rem;
	display: inline-block;
	margin-top:.2rem;
	padding: 0 .45rem;
/* 	margin-bottom: 1.2rem; */
}
.map img{
	width:100%;
	height: 100%;
}
.PhotoWall_text{
	width: 100%;
	display: inline-block;
	margin-bottom:.2rem;
	font-size: .32rem;
	text-align: center;
}
.PhotoWall_text_a{
	width: 7.25rem;
	display: inline-block;
	margin-bottom:.2rem;
	font-size: .32rem;
	padding-left:.25rem;
}
.PhotoWall_texts{
	height: .95rem;
	line-height: .95rem;
	width: 100%;
	display: inline-block;
	margin-bottom:.2rem;
	font-size: .32rem;
	text-align: center;
}
.M_bottom{
	margin-bottom: 1.3rem;
}

</style>
