<template>
  <div>
    <input type="text" placeholder="请输入手机号">
    <input type="text" placeholder="请输入图形验证码">
    <div class="getMa">
      <input type="text" placeholder="请输入短信验证码">
      <button @click="getMa">获取短信验证码</button>
    </div>
    <button class="login">登录</button>
    <img src="../assets/logo.e8155d.png" alt="">
  </div>

</template>

<script>
  export default{
    name:'mine',
    methods:{
        getMa(){
            console.log(1)
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
  .getMa button{
    width:30%;
    height:4rem;
    border:none;
    position: absolute;
    left:66%;
    top:11rem;
    color: white;
    line-height: 4rem;
    border-radius: 0 0.5rem 0.5rem 0;
    background-color: #B349BD;
  }
  .login{
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
