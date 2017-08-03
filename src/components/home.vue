<template>
  <div>
    <!--<div class="hhh">-->
       <!--客官请稍后，玩命加载中~-->
    <!--</div>-->
      <go-search></go-search>
      <leader></leader>
      <menus></menus>
      <home-goods></home-goods>
      <div class="homeBottom">
        <img src="../assets/footer.b1cf18.png" alt="">
        <p>北京普缇客科技有限公司 Copyright@2016达令</p>
      </div>

  </div>

</template>

<script>
import goSearch from '@/components/goSearch'
import leader from '@/components/leader'
import menus from '@/components/menus'
import homeGoods from '@/components/homeGoods'

  export default{
    name:'home',
    components:{
      goSearch,
      leader,
      menus,
      homeGoods
    }
    ,
//    created(){
//        window.onload=function(){
//            var hh=document.querySelector('.hhh');
//            hh.style.display='none';
//        }
//    }
  }
</script>
<style scoped>
  .homeBottom{
    width:100%;
    height:15rem;
    margin-top: 2rem;
    text-align: center;
  }
  .homeBottom img{
    width:40%;
  }
  .homeBottom p{
    width: 100%;
    text-align: center;
    color: #ccc;
  }
  /*.hhh{*/
    /*width:100%;*/
    /*height:100rem;*/
    /*background-color:rgba(255,255,255,0.7);*/
    /*position: absolute;*/
    /*top:0;*/
    /*left:0;*/
    /*z-index: 999;*/
    /*text-align: center;*/
    /*color:#b05bc0;*/
    /*line-height:30rem;*/
    /*font-size: 3rem;*/
  /*}*/

</style>
