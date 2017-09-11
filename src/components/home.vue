<template>
  <div>
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">

    </el-button>
    <div class="tops">
      <go-search></go-search>
      <leader></leader>
    </div>
      <go-search></go-search>
      <leader></leader>
      <menus></menus>
    <super-goods v-lazy="0"></super-goods>
    <on-going v-lazy="100"></on-going>
    <heart-goods  v-lazy="50"></heart-goods>
    <act-goods  v-lazy="200"></act-goods>
    <new-goods  v-lazy="250"></new-goods>
    <hot-goods  v-lazy="300"></hot-goods>
    <guess  v-lazy="350"></guess>
      <!--<home-goods></home-goods>-->
      <div class="homeBottom">
        <img src="../assets/footer.b1cf18.png" alt="">
        <p>北京普缇客科技有限公司 Copyright@2016达令</p>
      </div>
  <div class="goTop">
    <go-top></go-top>
  </div>
  </div>

</template>

<script>
import goSearch from '@/components/home/goSearch'
import leader from '@/components/leader'
import menus from '@/components/home/menus'
//import homeGoods from '@/components/home/homeGoods'
import goTop from '@/components/goTop'

import superGoods from'@/components/superGoods'
import onGoing from'@/components/onGoing'
import heartGoods from'@/components/heartGoods'
import actGoods from'@/components/actGoods'
import newGoods from '@/components/newGoods'
import hotGoods from '@/components/hotGoods'
import guess from '@/components/guess'

  export default{
    name:'home',
    data(){
        return{
          fullscreenLoading:false,
        }
    },
    components:{
      goSearch,
      leader,
      menus,
//      homeGoods,
      superGoods,
      onGoing,
      heartGoods,
      actGoods,
      newGoods,
      hotGoods,
      guess,
      goTop
    },
    created(){
      this.openFullScreen();
    },

    methods:{
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1500);
      }
    }
  }
</script>
<style scoped>
.goTop{
  position:fixed;
  top:30rem;
  right:2rem;
}
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


</style>
