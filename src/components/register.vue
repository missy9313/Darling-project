<template>
  <div>
    <input type="text" placeholder="请输入手机号" v-on:blur="tel"  class="phone" >
    <div class="getMa">
      <input type="text" placeholder="请输入验证码" class="yMa" v-on:change="yangzheng" v-on:blur="log">
      <button class="mBtn1" @click="getYma">获取验证码</button>
    </div>
    <div class="getMa">
      <input type="text" placeholder="请输入短信验证码" class="msgMa">
      <button @click="getMa" class="mBtn2">获取短信验证码</button>
    </div>
    <button class="loginBtn" @click="login">登录</button>
    <img src="../assets/logo.e8155d.png" alt="">
    <!--<div class="wrong"></div>-->
  </div>

</template>

<script>
  import axios from 'axios'
  import {urls} from '../router/urlList';
  import { Toast } from 'mint-ui';
  export default{
    name:'mine',
    data(){
        return{
          phoneNum:"",
          mBtn1:'',
          wrong:'',
          ma:'',
          yMa:'',
          mBtn2:'',
          msgMa:'',
          bool1:'',
          bool2:'',
          bool3:'',
          loginBtn:'',
          user:'',
          password:''
        }

    },
    methods:{
//        验证手机号
      tel(){
        this.phoneNum=document.querySelector('.phone');
        this.wrong=document.querySelector('.wrong');
        this.mBtn1=document.querySelector('.mBtn1');
        this.yMa=document.querySelector('.yMa');
        this.mBtn2=document.querySelector('.mBtn2');
        var mobileReg =/^[1][34578]\d{9}$/;
        if(mobileReg.test(this.phoneNum.value)){
          this.mBtn1.style.display="block";
          this.mBtn2.style.backgroundColor="#B349BD";
          this.user=this.phoneNum.value;
//          localStorage.setItem('user',this.user);
//          var that=this;
//          axios.post(urls.details,{
//            username:that.user,
//            password:"123"
//          }).then(function(res){
//            localStorage.setItem('user',this.user);
//            localStorage.setItem('uId',res.data.id);
//          },function(err){
//            console.log(err)
//          });

          return this.bool1=true;

        }else{
//            如果错误显示提示窗口
          let instance = Toast('手机号码有误，请重新输入');
          setTimeout(() => {
            instance.close();
          }, 2000);

      }
      },
//      获取验证码
      getYma(){
        this.mBtn1.textContent=parseInt(Math.random()*9000+1000);
      },
//      判断验证码是否正确
      yangzheng(){
       if(this.yMa.value===this.mBtn1.textContent){
            return this.bool2=true;
       }else{
         let ins = Toast('验证码有误，请重新输入');
         setTimeout(() => {
           ins.close();
         }, 2000);
       }
     },
//      获取短信验证码
      getMa(){
        this.msgMa=document.querySelector('.msgMa');
        this.mBtn2.style.backgroundColor="#c0c0c0";
        let str=60;
        var that=this;
        that.mBtn2.textContent='已发送';
          var countDown=setInterval(function(){
            str--;
            that.mBtn2.textContent=str+'后重新获取';
            if(str===0){
              window.clearInterval(countDown);
              that.mBtn2.style.backgroundColor="#B349BD";
              that.mBtn2.textContent='获取短信验证码';
            }
          },1000);
      },
//      hide(){
//        this.wrong=document.querySelector('.wrong');
//        this.wrong.style.display='none';
//      },
      //    登录
      log(){
        this.loginBtn=document.querySelector(".loginBtn");
        if(this.bool1 && this.bool2 ){
            this.loginBtn.style.backgroundColor='#B349BD';
        }
      },
      find(){
          var self=this;
        axios.post(urls.details+'/login',{
          username:self.user,
          password:"123"
        }).then(function(res){
          localStorage.setItem('user',self.user);
          localStorage.setItem('uId',res.data.uid);
        },function(err){
          console.log('登录'+err)
        })
      },
      login(){
         var that=this;
        axios.get(urls.details).then(function(res){
            var self=that;
           for(var i=0;i<res.data.length;i++){
               var s=res.data[i].username;
             if(s.indexOf(that.user)>-1){
                that.find();
             }else{
                 axios.post(urls.details,{
            username:self.user,
            password:"123"
          }).then(function(res){
              localStorage.setItem('user',self.user);
              localStorage.setItem('uId',res.data.id);
          },function(err){
            console.log(err)
          });
             }
           }
        })
        if(this.bool1 && this.bool2 ){
          this.loginBtn.style.backgroundColor='#B349BD';
//          this.$router.push('/login')
          localStorage.setItem('user',this.user);
//          当LocalStorage保存到用户信息的时候，重新加载页面
          this.$router.go(0)


        }

      }
    }

  }

</script>
<style scoped>
  input{
    display: inline-block;
    width:90%;
    height:4rem;
    padding-left:3%;
    line-height:4rem;
    border:none;
    margin:1rem 0 0 1rem;
    border-radius: 0.5rem;
    font-size: 1.3rem;
  }
  img{
    width:45%;
    position: fixed;
    bottom:9rem;
    left:30%;
  }
  .getMa{
    display: flex;
  }
  .mBtn1{
    width:30%;
    height:4rem;
    border:none;
    position: absolute;
    left:66%;
    top:6rem;
    color:white;
    line-height: 4rem;
    border-radius: 0 0.5rem 0.5rem 0;
    background-color:#c0c0c0;
    text-align: center;
    display:none;
  }
  .mBtn2{
    width:30%;
    height:4rem;
    border:none;
    position: absolute;
    left:66%;
    top:11rem;
    color: white;
    line-height: 4rem;
    border-radius: 0 0.5rem 0.5rem 0;
    background-color:#c0c0c0;
    text-align: center;
  }
  .loginBtn{
    display: inline-block;
    color: white;
    width:90%;
    height:3.5rem;
    text-align: center;
    line-height:3.5rem;
    border:none;
    margin:2rem 0 0 1rem;
    border-radius: 0.3rem;
    font-size: 1.8rem;
    background-color: #c5c5c5;
  }

</style>
