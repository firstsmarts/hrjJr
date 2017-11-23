<template lang="html">
   	<div>
   	<scroller :on-infinite="infinite"ref="my_scroller" class="max_auto">
		<swiper :options="swiperOption"  ref="mySwiper" class="banner">
            <!-- 这部分放你要渲染的那些内容 -->
            <swiper-slide v-for="item in items" class="banner_img">
				<router-link :to="{path: item.listLink}">
					<img :src="item.url" class="banner_img">
				</router-link>
            </swiper-slide>
            <!-- 轮播的小圆点 -->
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
        <!--<div class="banner">
          	<img class="banner_img" :src="BannerImgUrl" alt="">
 		</div> -->
	    <div class="ContentNotice">
	     	<div class="integral">
	     		<p class="title">华尔街积财榜</p>
	     	</div>
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
	    </scroller>
	   	</div>
</template>
<script>
import Banner_a from "../../assets/images/banner1.png";
import Banner_b from "../../assets/images/banner2.png";
import getint from "@/data/index.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      items: [ window.location.hash == '#/index' ?
        { url: Banner_a, listLink: "rule" }:
        { url: Banner_b, listLink: "about" }
      ],
      panel: [],
      dataList: [],
      int: false,
      company: true,
      swiperOption: {
        // autoplay: 3000,
        effect: "slide",
        autoplayDisableOnInteraction: false,
        pagination: ".swiper-pagination",
        slidesPerView: "auto",
        centeredSlides: true,
        paginationBulletRender: "",
        paginationClickable: true,
        preloadImages: false,
        loop: true,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        }
      },
      swiperSlides: [1, 2],
      parentMessage: "Parent"
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {

  },
  methods: {
  
  }
};
</script>

<style lang="css" scoped>
.max_auto {
  width: 7.5rem !important;
  margin: 0 auto;
  left: 0;
  right: 0;
}
.banner {
  width: 7.5rem;
  height: 3.2rem;
}
.banner_img {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}
.Integral {
  background: #ffffff;
}
.Integral ul {
  font-size: 0;
}
.Integral ul li div {
  font-size: 0.28rem;
}
.ContentNotice {
  background: #f2f2f2;
}
.IntegralIist {
  color: #666666;
  border-bottom: 1px solid #e2e2e2;
}
.IntegralData {
  color: #333333;
  width: 6.9rem;
  display: inline-block;
  margin: 0 0.3rem;
  border-bottom: 1px solid #e2e2e2;
}
.IntegralData div {
  float: left;
  width: 2.3rem;
}
.IntegralData:last-child {
  border: none;
}
.IntegralData span{
  display: inline-block;
  line-height: 0.6rem;
  vertical-align: top;
}
.ranking {
  margin-left: 0.3rem;
}
.DataLeft {
  margin-left: 0.15rem;
}

.title {
  text-align: left;
  padding-right: 0.3rem;
  height: 35px;
  line-height: 35px;
  font-size: 0.3rem;
  color: #333333;
  margin-left: 0.3rem;
}
.title1 {
  text-align: left;
  text-indent: 2em;
  padding: 0.2rem;
  font-size: 13px;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.list_jf {
  text-align: left;
  list-style-type: none;
}
.IntroCase {
  padding: 0.3rem;
  background: #ffffff;
}
.intro {
  overflow: hidden;
  width: 7.5rem;
}
.IntroText {
  background: #ffffff;
  font-size: 0.28rem;
  width: 7.5rem;
  overflow: hidden;
  line-height: 0.45rem;
}
.IntroText p {
  padding: 0 0.3rem;
  color: #333333;
  padding-bottom: 1rem;
  text-indent: 2em;
  letter-spacing: 0.04rem;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-pagination{
	position: absolute;
    text-align: center;
    transition: .3s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
	z-index: 10;
	width: 100%;
	bottom: 10px;
}
.regcode{
  display: block;
  margin: 0 0.2rem;
  max-width: 38%;
}
.placeholder{
  font-size: 0.28rem;
}
.weui-flex__item{
  line-height: 35px;
}

</style>
