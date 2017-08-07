<template>
  <div>
    <div class="top" @click="back">《《BACK</div>
    <div class="exit" @click="exit">
      退出账户
    </div>
    <!--确认退出弹出-->
    <div class="sure">
      <div>
        <p>确定要退出吗</p>
        <p>
          <span @click="cancel">取消</span>
          <span @click="yes">确定</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'exit',
    data(){
        return{
          sure:''
        }
    },
    methods:{
        exit(){
          this.sure=document.querySelector('.sure');
          this.sure.style.display='block';
        },
      cancel(){
        this.sure.style.display='none';
        window.history.go(-1);
      },
      yes(){
          localStorage.clear();
          this.$router.push('/home');
      },
      back(){
        window.history.go(-1);
      }
    }
  }
</script>

<style scoped>
  .top{
    width:100%;
    height:4.4rem;
    background-color: #efefef;
    font-size: 1.4rem;
    line-height: 4.4rem;
    color:#666;

  }
.exit{
  width:90%;
  margin-top: 10rem;
  margin-left: 5%;
  background-color: #f0593f;
  border-radius: 0.3rem;
  color: white;
  height:5rem;
  line-height: 5rem;
  text-align: center;
  font-size: 2rem;
}
.sure{
  position: absolute;
  top:0;
  z-index: 99;
  width:100%;
  height:58rem;
  background-color: rgba(0,0,0,0.3);
  display: none;
}
.sure div{
  width:60%;
  height:125px;
  border-radius: 10px;
  text-align: center;
  position: fixed;
  top:35%;
  left:20%;
  background-color: white;
}
.sure div p:nth-child(1){
  font-weight: 300;
  color: #333;
  font-size:16px;
  margin-top: 25px;
}
.sure div p:nth-child(2){
  width:100%;
  display: flex;
  margin-top: 35px;
}
.sure div p span{
  border-top:1px solid #ccc;
  border-left:1px solid #ccc;
  display: inline-block;
  width:50%;
  height:42px;
  line-height: 42px;
  text-align: center;
  color:#34a0f8;
  font-size:20px;

}
</style>
