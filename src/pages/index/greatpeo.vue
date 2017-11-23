<template lang="html">
   	<div>
	    <div class="ContentNotice">
			<div class="Integral">
				<div class="weui-flex IntegralIist">
			        <div class="weui-flex__item text-left"><div class="placeholder ranking">排名</div></div>
			        <div class="weui-flex__item text-center"><div class="placeholder">姓名</div></div>
			        <div class="weui-flex__item text-right"><div class="placeholder integral">积分</div></div>
			    </div>
				<div>
					<ul>
						<li class="IntegralData" v-for="item in dataList">
							<div class="text-left"><span class="DataLeft">{{item.key}}</span></div>
							<div class="text-center"><span>{{item.name}}</span></div>
							<div class="text-right"><span>{{item.integral}}</span></div>
						</li>
					</ul>
				</div>
			</div>
	    </div>
	    <div class="intro" v-if="int">
	        <div>
	        	<p class="title1">以上榜单由华尔街人民公社发起设立，反映的是入榜玩家的过往业绩和信用情况，供其他玩家参考。公社仅对榜单信息的“公平、公正、公开”负责，对入榜玩家的未来表现或信用状况不做担保。详情咨询027-87883688，手机/微信13986063648。</p>
            <img src="http://www.iwstreet.com/public/qrcode.jpg" class="regcode" >
          </div>
	    </div>
	   	</div>
</template>
<script>
import '../../assets/css/table.css'
export default {
  props:['dataList','getHash','int'],
  data() {
    return {

    };
  },
  computed: {
    
  },
  mounted() {
      this.getHash(window.location.hash)
  },
  methods: {

  }
};
</script>
