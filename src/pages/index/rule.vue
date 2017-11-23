<template lang="html">
   	<div class="player">
   		<p class="playerA">善人榜，帮人善。</p>
   		<p class="playerA">牛人榜，帮人牛。</p>
   		<p class="playerA">要帮忙，找华尔街！</p>

	   	<div class="playerA">善人榜涵盖校友、招聘、相亲、调解、咨询、募捐等社会互助服务，牛人榜包括证券、理财、项目等金融互助内容。每周六在汉街举办社会互助&公益金融茶话会，旨在为会员提供靠谱的社会福利、业务收入及投资收益。积分考核流程如下：</div>
	   	<div class="playerB"><img src="http://www.iwstreet.com/public/wf.jpg"></div>
	   	<div>
	   		<p class="playerA">根据需求的达成难度和预期效果，华尔街人民公社将信息分为五个级别，每个级别对应的保证金及积分如下：</p>
	   	</div>
	   	<div class="playerForm">
	   		<table width="100%;">
				<tr>
					<td>评级</td>
					<td>保证金</td>
					<td>积分</td>
				</tr>
				<tr>
					<td>一星</td>
					<td>100元</td>
					<td>100积分</td>
				</tr>
				<tr>
					<td>二星</td>
					<td>500元</td>
					<td>500积分</td>
				</tr>
				<tr>
					<td>三星</td>
					<td>2000元</td>
					<td>2000积分</td>
				</tr>
				<tr>
					<td>四星</td>
					<td>6000元</td>
					<td>6000积分</td>
				</tr>
				<tr>
					<td>五星</td>
					<td>12000元</td>
					<td>12000积分</td>
				</tr>
			</table>
	   	</div>
		<div class="playerC">
	   		<p class="playerA">善人榜的会员称之为“善人”，按其累计积分大小分为五个段位，并获得对应的公社承诺互助额度。当其需要帮助时，公社和群友将为其提供对应额度以上的资助。牛人榜的会员称之为“牛人”，也按其累计积分大小分为五个段位，并获得不低于公社承诺的资产管理额度。这两项承诺的实现以公社的实际财力为准，直至公社无力支持为止：</p>
	   	</div>
		   <div class="playerForm">
	   		<table width="100%;">
				<tr>
					<td>累计积分</td>
					<td>善人段位</td>
					<td>牛人段位</td>
				</tr>
				<tr>
					<td>0-1000积分</td>
					<td>一段（获得100元的公社互助额度）</td>
					<td>一段（获得1000元的资产管理额度）</td>
				</tr>
				<tr>
					<td>1000-1万积分</td>
					<td>二段（获得1000元的公社互助额度）</td>
					<td>二段（获得1万元的资产管理额度）</td>
				</tr>
				<tr>
					<td>1万-10万积分</td>
					<td>三段（获得1万元的公社互助额度）</td>
					<td>三段（获得10万元的资产管理额度）</td>
				</tr>
				<tr>
					<td>10万-100万积分</td>
					<td>四段（获得10万元的公社互助额度）</td>
					<td>四段（获得100万元的资产管理额度）</td>
				</tr>
				<tr>
					<td>100万以上积分</td>
					<td>五段（获得100万元的公社互助额度）</td>
					<td>五段（获得1000万元的资产管理额度）</td>
				</tr>
			</table>
	   	</div>
	   	<div class="playerC">
	   		<p class="playerA">特别说明，所有评级和交易信息均是公开透明的，供会员自主消化利用。华尔街人民公社只负责对信息的初步审查和最终考核，对信息能否按预期兑现不做保证，也不收取任何费用。</p>
	   	</div>
	</div>
</template>
<script>
export default{

}
</script>

<style lang="css" scoped>
.player{
	margin-bottom: 1.3rem;
	padding: 0 .3rem;
	font-size: .28rem;
	line-height: 0.4rem;
	letter-spacing: .04rem;
}
.playerA:first-child{
	margin-top:.45rem;
}
.playerA{
	color: #333333;
	line-height: 0.4rem;
    text-indent: 2em;
}
.playerB{
	margin: 0.4rem 0rem;
}
.playerB img{
	width: 100%;
	height: 100%;
}
.playerForm {
	width: 100%;
	margin: 0 auto;
	margin-top:.2rem;
	margin-bottom: .3rem;
}
.playerForm table {
     border-collapse: collapse;

}
.playerForm th,td {
     padding: .05rem;
}

.playerForm th {
   background: #555 nonerepeat scroll 0 0;
   border: 1px solid #777;
   color: #fff;
}

.playerForm td {
     border: 1px solid#777;

}
.playerC{
	margin-bottom: .4rem;
}
</style>
