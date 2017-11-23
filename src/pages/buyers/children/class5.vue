<template lang="html">
<div class="class1">
  <div class="all_content" >
    <scroller style="background:#fff;padding-bottom:.5rem;"
              :on-infinite="infinite"
              ref="my_scroller">
              <thead v-if="dataList.length>0?true:false" class="weui-flex">
                <td class="weui-flex__item">发布时间</td>
                <td class="weui-flex__item">发布人</td>
                <td class="weui-flex__item">评级</td>
                <td class="weui-flex__item">详情咨询</td>
              </thead>
    <div v-for=" item in dataList">
         <tr  class="weui-flex">
           <td class="weui-flex__item">
             <p>{{item.add_time}}</p>
           </td>
           <td class="weui-flex__item">
             <p>{{item.name}}</p>
           </td>
           <td class="weui-flex__item">
             <p>
               {{item.star}}
             </p>
           </td>
           <td class="weui-flex__item">
             <a   @click="toNext(item.id)" class="btn-more weui-btn weui-btn_mini weui-btn_primary" >预约</a>
           </td>
           <tr class="tb_content">
             <p>{{item.reason}}</p>
           </tr>
         </tr>
    </div>
    <thead v-if="dataList1.length>0?true:false" class="weui-flex">
      <td class="weui-flex__item">发布时间</td>
      <td class="weui-flex__item">发布人</td>
      <td class="weui-flex__item">评级</td>
      <td class="weui-flex__item">考核结果</td>
    </thead>
    <div v-for=" item in dataList1">
      <tr  class="weui-flex">
       <td class="weui-flex__item">
         <p>{{item.add_time}}</p>
       </td>
       <td class="weui-flex__item">
         <p>{{item.name}}</p>
       </td>
       <td class="weui-flex__item">
         <p>
           {{item.star}}
         </p>
       </td>
       <td class="weui-flex__item">
         <p>{{item.check>=0?'+':''}}{{item.check}}分</p>
       </td>
       <tr class="tb_content">
         <p>{{item.reason}}</p>
       </tr>
      </tr>
    </div>
  </scroller>
  </div>
  <div @click="btnKg"  v-if="btn" class="bg_dialog">
  <div v-if="btn2" class="more_info" @click.stop>
    <h3>预约</h3>
    <input class="buy_input" type="text" v-model="buyer.name" placeholder="请输入您的姓名"  value="">
    <p class="msg">{{msgname}}</p>
    <input class="buy_input" type="text" v-model="buyer.mobile" placeholder="请输入您的手机号" value="">
    <p class="msg">{{msgphone}}</p>
    <div class="btn_list">
      <a @click="btnKg" class="btn-qx weui-btn weui-btn_mini weui-btn_default">取消</a>
      <a @click="submitBtn" class="btn-gm weui-btn weui-btn_mini weui-btn_warn">提交</a>
    </div>
  </div>
  <div v-if="btn3" class="more_info more_info_suc" @click.stop>
    <h3>预约</h3>
    <p class="more_msg">{{msg}}</p>
    <div class="btn_list">
      <a @click="btnKg" class="btn-suc weui-btn  weui-btn_warn">确定</a>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import getsell from '@/data/index.js'
import '../../../assets/css/class.css'
export default {
  data() {
    return {
      data: "今天天气真好！",
      msg:'',
      msgname:"",
      msgphone:"",
      btn:false,
      btn2:false,
      btn3:false,
      loading: false,
      dataList: [],
      dataList1: [],
      buypage:1,
      satus:1,
      type:1,
      buyer:{
        mobile:'',
        name:'',
        sell_id:''
      }
    }
  },
  beforeMount:function() {
    let _this =this
    getsell.getSell(5,1,1,function(data){
      _this.dataList=_this.dataList.concat(data.cate)
    })
  },
  methods: {
    btnKg:function(){
      this.btn=!this.btn;
      this.btn2=!this.btn
      this.btn3=false
      this.msg='';
      this.msgname='';
      this.msgphone='';
    },
    toNext:function(id){
      this.buyer.mobile='';
      this.buyer.name='';
      this.buyer.sell_id='';
      this.buyer.sell_id=id;
      this.btn=true;
      this.btn2=true;
    },
    submitBtn:function(){
      this.btn=true;
      let _this =this
      _this.msgname = ''
      _this.msgphone = ''
      let reg_mobile = /^(1[3-9]\d{9}$)/;
      if (_this.buyer.name=='') {
        _this.msgname = '请输入姓名'
        return false
      }
      if (_this.buyer.mobile=='') {
        _this.msgphone = '请输入手机号码'
        _this.btn1=!_this.btn1
        return false
      }
      if (!reg_mobile.test(_this.buyer.mobile)) {
        _this.msgphone = '请输入正确的手机号码'
        _this.buyer.mobile=''
        _this.btn1=!_this.btn1
        return false
      }
      this.btn2=!this.btn2;
      this.btn3=!this.btn3;
      let formData =new FormData();
      formData.append('name', _this.buyer.name);
      formData.append('mobile', _this.buyer.mobile);
      formData.append('sell_id', _this.buyer.sell_id);
      getsell.subBuy(formData,function(data){
        _this.msg=data.rs
      })
    },
    infinite(done) {
      let _this =this
      setTimeout(() => {
        getsell.getSell(5,2,_this.buypage,function(data){
          _this.dataList1=_this.dataList1.concat(data.cate)
          if(data.cate.length==0){
            done(true)
            return false
          }
          done()
        })
        _this.buypage++
      }, 1000)
    }
  }
}
</script>

<style lang="css">

</style>
