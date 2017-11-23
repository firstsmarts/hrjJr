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
	     		<p class="title">
           <router-link class="tab_btn" @click="initPage()" :class="{'current': hash == '#/index'}" to="/index">善人榜</router-link>
           <router-link class="tab_btn" @click="initPage()" :class="{'current': hash == '#/index/great'}" to="/index/great">牛人榜</router-link>
           <router-link class="tab_btn" @click="initPage()" :class="{'current': hash == '#/index/good'}" to="/index/good">校善榜</router-link>
           <router-link class="tab_btn" @click="initPage()" :class="{'current': hash == '#/index/better'}" to="/index/better">校牛榜</router-link>
           </p>
	     	</div>
         <router-view :dataList="dataList" :int="int"></router-view>
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
      items: [
        { url: Banner_a, listLink: "rule" },
        { url: Banner_b, listLink: "about" }
      ],
      panel: [],
      dataList: [],
      int: false,
      page: 0,
      pagesize: 1,
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
    },
    hash(){
      return '#' + this.$route.path
    }
  },
  mounted() {
    /*	 			this.swiper.slideTo(0, 0, false);*/
    const _this = this;
    _this.getMovie();
    //   this.panel.push(
    //     	{ranking:'1',namen:'张三',integral:'1100积分'},
    // 	{ranking:'2',namen:'李四 ',integral:'1200积分'},
    // 	{ranking:'3',namen:'王五 ',	integral:'1200积分'}
    // )
    // 	this.top = 1
    // 	this.bottom = 20
  },
  watch:{
    hash(){
      this.initPage()
      this.getMovie()
    }
  },
  methods: {
    getMovie() {},
    infinite(done) {
      let _this = this;
      setTimeout(() => {
        getint.getInt2(
          _this.pagesize,
          function(data) {
            _this.dataList = _this.dataList.concat(data.jifen);
            if (data.jifen.length == 0) {
              _this.int = true;
              done(true);
              return false;
            }
            done();
            _this.pagesize++;
          },
          1000
        );
      });
    },
    initPage(){
      this.page = 0
      this.pagesize = 1
      this.int = false
      this.dataList = []
    }
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
  line-height: 0.6rem;
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
.IntegralData span{
  display: inline-block;
  line-height: 0.6rem;
  vertical-align: top;
}
.IntegralData:last-child {
  border: none;
}
.ranking {
  margin-left: 0.3rem;
}
.DataLeft {
  margin-left: 0.15rem;
}
.title {
  text-align: left;
  height: 31px;
  line-height: 31px;
  font-size: 0.3rem;
  color: #333333;
  background: #f2f2f2;
  border-bottom: 1px solid #d9d9d9;
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
.placeholder.integral{
  margin-right: 0.2rem;
}
.tab_btn{
  height: 30px;
  display: inline-block;
  padding: 0 12px;
  margin-bottom: -1px;
  border-radius: 4px 4px 0 0;
  border: 1px solid #f2f2f2;
  border-bottom: none;
}
.tab_btn.current{
  color: red;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-bottom: 1px solid #fff;
}
</style>
