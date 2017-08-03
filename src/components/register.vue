<template>
  <div>
    <input type="text" placeholder="请输入手机号" v-on:change="tel" v-on:focus='hide' class="phone" v-on:blur="log">
    <div class="getMa">
      <input type="text" placeholder="请输入验证码" class="yMa" v-on:change="yangzheng" v-on:focus='hide' v-on:blur="log">
      <button class="mBtn1" @click="getYma">获取验证码</button>
    </div>
    <div class="getMa">
      <input type="text" placeholder="请输入短信验证码" class="msgMa">
      <button @click="getMa" class="mBtn2">获取短信验证码</button>
    </div>
    <button class="loginBtn" @click="login">登录</button>
    <img src="../assets/logo.e8155d.png" alt="">
    <div class="wrong"></div>
  </div>

</template>

<script>
  import axios from 'axios'
  import {urls} from '../router/urlList';
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
        let mobileReg =/^[1][34578]\d{9}$/;
        if(mobileReg.test(this.phoneNum.value)){
          this.mBtn1.style.display="block";
          this.mBtn2.style.backgroundColor="#B349BD";
          this.user=this.phoneNum.value;
          var self=this;
          axios.post(urls.details,{
              username:self.user,
              password:"123"
          }).then(function(res){
            localStorage.setItem('user',self.user);
            localStorage.setItem('uId',res.data.id)
          })

          return this.bool1=true;

        }else{
          this.wrong.style.display='block';
          this.wrong.textContent='手机号码有误，请重新输入';
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
         this.wrong.style.display='block';
         this.wrong.textContent='验证码输入错误，请重新输入';
       }
     },
//      获取短信验证码
      getMa(){
        this.msgMa=document.querySelector('.msgMa');
        this.mBtn2.style.backgroundColor="#c0c0c0";
        let str=60;
        var that=this;
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
      hide(){
        this.wrong=document.querySelector('.wrong');
        this.wrong.style.display='none';
      },
      //    登录
      log(){
        this.loginBtn=document.querySelector(".loginBtn");
        if(this.bool1 && this.bool2 ){
            this.loginBtn.style.backgroundColor='#B349BD';
        }
      },
      login(){
        if(this.bool1 && this.bool2 ){
          this.loginBtn.style.backgroundColor='#B349BD';
          this.$router.push('/login')
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
  .wrong{
    width:50%;
    height:10rem;
    border-radius: 0.5rem;
    background-color: rgba(0,0,0,0.5);
    line-height: 10rem;
    text-align: center;
    position: fixed;
    top:15rem;
    left:25%;
    display: none;
    color: white;
    font-size: 1.5rem;
  }
</style>
