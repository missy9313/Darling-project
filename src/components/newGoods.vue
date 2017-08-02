<template>
  <div>
    <div class="goodsWrap" >
      <div class="goods"  >
        <div class="title">{{title}}</div>
      </div>
      <!--分类-->
      <div class="newLeader">
        <div v-for="item in goodsinfo" class="nWrap">
          <div class="wWrap">
            <p>{{item.title}}</p>
            <span >{{item.count_txt}}</span>
          </div>
          <img v-bind:src='item.cover'>
        </div>
      </div>
    </div>
    <!--各种产品-->
    <goods-info></goods-info>
  </div>
</template>

<script>
  import axios from 'axios';
  import {urls} from '../router/urlList'
  import goodsInfo from '@/components/goodsInfo'
  export default{
    name:'newGoods',
    data(){
      return{
        title:true,
        goodsinfo:true
      }
    },
    components:{
        goodsInfo
    },
    created(){
      var self=this;
      axios.get(urls.httpBtUrlOne+urls.httpBtUrlTwo).then(function(res){
        self.goods=res.data.data.complex;
        for(var i=0;i<self.goods.length;i++){
          self.title=self.goods[4].txt
        }
        self.goodsinfo=res.data.data.complex[4].list[0].list
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
