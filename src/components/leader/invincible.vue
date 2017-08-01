<template>
  <div class="leadGoodsWrap">
    <!--各种产品-->
    <goods-info></goods-info>
  </div>
</template>

<script>
  import axios from 'axios';
  import goodsInfo from '@/components/goodsInfo'
  export default{
    name:'invincible',
    data(){
      return{
        goodsinfo:true
      }
    },
    components:{
      goodsInfo
    },
    created(){
      var self=this;
      axios.get('../../static/home.json').then(function(res){
        self.goods=res.data.data.complex;
//        for(var i=0;i<self.goods.length;i++){
//          self.title=self.goods[4].txt
//        }
        self.goodsinfo=res.data.data.complex[4].list[0].list
      },function(err){
        console.log(err)
      })
    }

  }
</script>

<style scoped>
  .leadGoodsWrap{
    position: relative;
    top:8rem;
    width:100%;
    height:100%;
    background-color: pink;
    z-index: 29;
  }
  .newLeader p{
    font-size: 1.5rem;
  }
  .newLeader span{
    display: inline-block;
    width:100%;
    height:1.5rem;
    border:1px solid #ec87c0;
    border-radius:2rem;
    text-align: center;
    color:#ec87c0;
  }
  .newLeader img{
    width:30%;
    height:5rem;
    margin-top: 2.5rem;
  }

</style>
