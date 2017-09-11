<template>
  <div>
    <div class="goodsWrap" >
      <div class="goods"  >
        <div class="title">{{title}}</div>
      </div>
      <!--分类-->
    </div>
    <!--各种热销产品-->
    <hot-info></hot-info>
  </div>
</template>

<script>
  import axios from 'axios';
  import hotInfo from '@/components/hotInfo'
  export default{
    name:'hotGoods',
    data(){
      return{
        title:"hi darling",
        goodsinfo:true
      }
    },
    components:{
      hotInfo
    },
    created(){
//        获取所需数据
      var self=this;
      axios.get('../../static/home.json').then(function(res){
        self.goods=res.data.data.complex;
        for(var i=0;i<self.goods.length;i++){
          self.title=self.goods[5].txt
        }
        self.goodsinfo=res.data.data.complex[5].list[0].list
      },function(err){
        console.log(err)
      })
    }

  }
</script>

<style scoped>
  .goodsWrap{
    width:100%;
    margin-top:1rem;
    background-color: white;
  }
  .goods{
    width:100%;
  }
  .title{
    width:100%;
    height:5rem;
    text-align: center;
    font-size: 1.5rem;
    line-height: 5rem;
    font-weight: 700;
    color:rebeccapurple;
  }
  .newLeader{
    width:100%;
    display: flex;
    flex-wrap: wrap;
  }
  .nWrap{
    width:49%;
    height:9rem;
    border-top:0.1rem solid #ccc;
    border-bottom:0.1rem solid #ccc;
    border-left:0.1rem solid #ccc;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .wWrap{
    width:50%;
    display: inline-block;
    height:10rem;
    margin-top: 3rem;
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
