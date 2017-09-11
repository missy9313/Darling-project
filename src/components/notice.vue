<template>
  <div>
    <div class="top">
      <img src="../assets/clock.png" alt="">
      <p>下一场闪购即将开抢</p>
    </div>
    <notice-goods></notice-goods>
  </div>
</template>

<script>

  import noticeGoods from '@/components/noticeGoods'
  export default{
    name:'notice',
    data(){
      return{
        title:true,

      }
    },


    components:{
      noticeGoods,
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

