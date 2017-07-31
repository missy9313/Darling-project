<template>
  <div>
    <div class="top">
      <img src="../assets/clock.png" alt="">
      <p>闪购专场 已经开抢</p>
    </div>
    <today-goods></today-goods>
  </div>
</template>

<script>

  import todayGoods from '@/components/todayGoods'
  export default{
    name:'today',
    data(){
      return{
          title:true
      }
    },

    components:{
        todayGoods
    }
  }
</script>

<style scoped>
.top{
  width:100%;
  height:10rem;
  background-color: #f5c400;
  text-align: center;
}
.top img{
  width:5%;
  margin-top: 2rem;
  margin-bottom:1rem;
}
  .top p{
    color:white;
    font-size: 1.5rem;
  }
</style>
