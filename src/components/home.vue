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
</style>
