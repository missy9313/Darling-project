<template>
  <div>
      <go-search></go-search>
      <leader></leader>
      <menus></menus>
      <home-goods></home-goods>
      <div class="homeBottom">
        <img src="../assets/footer.b1cf18.png" alt="">
        <p>北京普缇客科技有限公司 Copyright@2016达令</p>
      </div>
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">

    </el-button>
  <!--<div class="goTop">-->
    <!--<go-top></go-top>-->
  <!--</div>-->
  </div>

</template>

<script>
import goSearch from '@/components/home/goSearch'
import leader from '@/components/leader'
import menus from '@/components/home/menus'
import homeGoods from '@/components/home/homeGoods'
//import goTop from '@/components/goTop'

  export default{
    name:'home',
    data(){
        return{
          fullscreenLoading:false,
          scroll:'',
          top:''
        }
    },
    components:{
      goSearch,
      leader,
      menus,
      homeGoods,
//      goTop
    },
    created(){
      this.openFullScreen();
    },
    mounted() {
//      window.addEventListener('scroll', this.goTop)
    },
    methods:{
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1500);
      },
//      goTop(){
//        this.scroll = document.body.scrollTop;
//       this.top=document.querySelector('.goTop');
//        if(parseInt(document.body.scrollTop)>5500){
//          this.top.style.display='block';
//        }else{
//          this.top.style.display='none';
//        }
//      }


    }
  }
</script>
<style scoped>
.goTop{
  position:fixed;
  top:30rem;
  right:2rem;
  display: none;
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
