<template lang="html">
  <div class="seller_app">
    <div class="seller_content">
      <form class=""  method="post"  @submit.prevent="submit">
        <ul>
          <li>
            <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
            <input placeholder="请输入您的姓名" type="text" name="name" v-model="user.name" value="">
          </li>
          <li>
            <span>手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机</span>
            <input placeholder="请输入您的手机号" type="text" v-model="user.mobile" name="mobile" value="">
          </li>
          <li>
            <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
            <select class="" name="type" @change="tab"   v-model="user['type']">
              <option v-for="(item,i) in msg"  :value="item.id">{{item.name}}</option>
            </select>
          </li>
          <li class="inputgroup" v-for="item in msg[id].data">
            <span>{{item.title}}</span>
            <input v-if="!item.class" type="text" :name="item.name"  value=""   v-model="user[item.name]">
            <select v-if="item.class == 'select'" class="select" :name="item.name"   v-model="user[item.name]">
              <option v-for="(subitem,j) in item.data" :value="subitem.title">{{subitem.title}}</option>
            </select>
            <textarea v-if="item.class == 'textarea'" class="textarea" v-model="user[item.name]" :name="item.name"></textarea>
          </li>
          <!-- <li>
            <span>{{msg[id].data[0].title}}</span>
            <input type="text" name="param1" value=""   v-model="user.param1">
          </li>
          <li>
            <span>{{msg[id].data[1].title}}</span>
            <input type="text" name="param2" value="" v-model="user.param2">
          </li>
          <li>
            <span>{{msg[id].data[2].title}}</span>
            <select v-if="msg[id].data[2].class==='select'" class="" name="param3"   v-model="user.param3">
              <option value="0" selected>请选择</option>
              <option v-for="msgs in msg[id].data[2].data" :value="msgs.title">{{msgs.title}}</option>
            </select>
            <input v-if="msg[id].data[2].class==='input'" type="text" name="param3" value="" v-model="user.param3">
          </li>
          <li>
            <span>{{msg[id].data[3].title}}</span>
            <select v-if="msg[id].data[3].class==='select'" name="param4"  v-model="user.param4">
              <option value="0" selected>请选择</option>
              <option v-for="msgs in msg[id].data[3].data" :value="msgs.title">{{msgs.title}}</option>
            </select>
            <input v-model="user.param4" v-if="msg[id].data[3].class==='input'" type="text" name="param4" value="">
          </li>
          <li style="position:relative">
            <span style="vertical-align:top;">推荐内容</span>
            <textarea maxlength="200" @input="descInput" placeholder="请输入推荐内容" v-model="user.reason" name="reason" rows="8" cols="30"></textarea>
            <span style="position:absolute;bottom:.1rem;right:.4rem;font-size:.24rem;color:#999;">{{remnant}}</span>
          </li> -->
          <button  class="weui-btn weui-btn_warn" :class="{'disabled weui-btn_disabled':!cansub}" type="submit" name="button">提交</button>
        </ul>
      </form>
    </div>
    <!-- <div v-if="btn" class="bg_dialog">
      <div  class="more_info" @click.stop>
        <p class="more_msg">{{infomsg}}<span class="warnX" ></span></p>
      </div>
    </div> -->
    <div @click="btnKg" v-if="btn" class="bg_dialog">
      <div  class="more_info" @click.stop>
        <p  class="more_msg">{{infomsg}}<span @click="btnKg" class="warnX" >X</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import postform from '@/data/index.js'
export default {
  data(){
    return {
      btn:false,
      btn1:false,
      msg:[
        {id:0,'name':"校友",data:[
          {'title':'互助主题','name':'param2',"class":"select",data:[
            {"title":"人脉"},
            {"title":"调解"},
            {"title":"咨询"},
            {"title":"募捐"}
          ]},
          {'title':'目标对象','name':'param1'},
          {'title':'互助事项','name':'param3'},
          {'title':'预期进展','name':'param4','class':'select',data:[
            {'title':'与目标对象面谈'},
            {'title':'与目标对象达成意向'}
          ]},
          {'title':'互助内容','name':'reason',"class":"textarea"}
        ]},
        {id:1,'name':"招聘",data:[
          {'title':'目标岗位','name':'param1'},
          {'title':'目标单位','name':'param2'},
          {'title':'互助事项','name':'param3'},
          {'title':'预期进展','name':'param4','class':'select',data:[
            {'title':'与单位老总面谈'},
            {'title':'被单位录用'}
          ]},
          {'title':'互助内容','name':'reason',"class":"textarea"}
        ]},
        {id:2,'name':"相亲",data:[

          {'title':'生辰性别','name':'param1'},
          {'title':'学历职业','name':'param2'},
          {'title':'收入住房','name':'param3'},
          {'title':'预期进展','name':'param4','class':'select',data:[
            {'title':'AA制游玩'},
            {'title':'确定男女朋友关系'}
          ]},
          {'title':'互助内容','name':'reason',"class":"textarea"}
        ]},
        {id:3,'name':"证券",data:[

          {'title':'标的名称','name':'param1'},
          {'title':'当前价位','name':'param2'},
          {'title':'方向选择','name':'param3','class':'select',data:[
            {'title':'看多'},
            {'title':'看空'}
          ]},
          {'title':'预期收益','name':'param4','class':'select',data:[
            {'title':'一周3%'},
            {'title':'半个月4%'},
            {'title':'一个月6%'},
            {'title':'二个月9%'},
            {'title':'三个月12%'},
            {'title':'半年20%'},
            {'title':'一年32%'}
          ]},
          {'title':'推荐内容','name':'reason',"class":"textarea"}
        ]},
        {id:4,'name':"理财",data:[

          {'title':'标的名称','name':'param1'},
          {'title':'资金投向','name':'param2'},
          {'title':'起投金额','name':'param3'},
          {'title':'预期收益','name':'param4'},
          {'title':'推荐内容','name':'reason',"class":"textarea"}
        ]},
        {id:5,'name':"项目",data:[
          {'title':'标的名称','name':'param1'},
          {'title':'融资金额','name':'param2'},
          {'title':'预期收益','name':'param3'},
          {'title':'预期进展','name':'param4','class':'select',data:[
            {'title':'与项目方老总面谈'},
            {'title':'与项目方达成意向'}
          ]},
          {'title':'推荐内容','name':'reason',"class":"textarea"}
        ]}
      ],
      id:0,
      state:'',
      remnant:200,
      user: {type:0},
      infomsg:''
    }
  },
  methods:{
    descInput(){
      var txtVal = this.user.reason.length;
      this.remnant = 200 - txtVal;
    },
    btnKg:function(){
      this.btn=!this.btn
      let _this=this
      if(_this.state==='success'){
        window.location.reload()
      }
    },
    tab(){
      if(!this.user.name && !this.user.mobile){
        this.user = {type: this.user.type}
      }else if(!this.user.name){
        this.user = {type: this.user.type,mobile:this.user.mobile}
      }else{
        this.user = {type: this.user.type,mobile:this.user.mobile,name:this.user.name}
      }
      this.id = this.user.type
    },
    submit:function(e){
      if(!this.cansub){
        return
      }
        let _this=this;
        let reg_mobile = /^(1[3-9]\d{9}$)/;
        let d = this.user
        var formData = `name=${d.name}&mobile=${d.mobile}&type=${d.type}&param1=${d.param1}&param2=${d.param2}&param3=${d.param3}&param4=${d.param4}&reason=${d.reason}`
        // formData.append('name', this.user.name);
        // formData.append('mobile', this.user.mobile);
        // formData.append('type', this.user.type);
        // formData.append('param1', this.user.param1);
        // formData.append('param2', this.user.param2);
        // formData.append('param3', this.user.param3);
        // formData.append('param4', this.user.param4);
        // formData.append('reason', this.user.reason);
        // console.log(formData)
        postform.postForm(formData,function(data){
          if(data.status==1){
            _this.infomsg=data.rs;
            _this.btn=!_this.btn;
            _this.state=data.state;
          }
        })
    }
  },
  watch:{
    id:(old,n)=>{
      this.user = {}
    }
  },
  computed: {
    cansub(){
      const d = this.user
      if(d.name && d.mobile && d.type !== false && d.param1 && d.param2 && d.param3 && d.param4 && d.reason){
        return true
      }else{
        return false
      }
    }
  }
}
</script>

<style lang="css">
.seller_app{
  width: 100%;
  background: #fff;
  padding-bottom: 1.2rem;
}
.warnX{
  float: right;
  display: inline-block;
  vertical-align: middle;
  height: .4rem;
  width: .4rem;
  color: red;
  line-height: .4rem;
  text-align: center;
}
.seller_app .more_info{
  height: 1rem;
  border-radius: 8px;
}
.seller_content{
  width: 6.9rem;
  margin: 0 auto;
  padding: .5rem 0 0;
}
ul {
  list-style-type: none;
}
ul li{
  text-align: right;
  margin-bottom: .4rem;
  position: relative;
}
.zd{
  position: absolute;
  top:0;
  background: red;
  width: 100%;
}
.seller_content input{
  width: 4.8rem;
  height: .8rem;
  padding:0 .1rem;
  border-radius: 3px;
  border: solid 1px #cbcbcb;
}
.seller_content select{
  width: 5rem;
  height: .8rem;
  padding:0 .1rem;
}
.seller_content input,.seller_content select,.seller_content textarea{
  margin-left: .3rem;
  margin-right: .2rem;
  font-size: .28rem !important;
}
.seller_content option{
  margin-top: .2rem;
  display: inline-block;
  height: .8rem;
}
.seller_content textarea{
  width: 4.8rem;
  height:1.5rem;
  resize:none;
  font-size: .3rem;
  padding: .1rem;
}
.seller_content{
  font-size: .3rem;
}
.textarea{
  vertical-align: top;
  border: solid 1px #cbcbcb;
  border-radius: 3px;
}
.weui-btn_disabled.weui-btn_warn{
  background-color: #bcbcbc;
}
</style>
