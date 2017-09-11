<template>
  <div>
    <div class="goodsWrap" >
      <div class="goods"  >
        <div class="title">{{title}}</div>
      </div>
      <div v-for="item in goodsinfo" class="info">
        <img v-bind:src='item.list[0].cover'>
        <div class="timer"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import {urls} from '../router/urlList'
  export default{
    name: 'superGoods',
    data(){
      return {
        title:"hi darling",
        goodsinfo: true,
        timer: ''
      }
    },
    created(){
            var self = this;
        axios.get(urls.httpBtUrlOne + urls.httpBtUrlTwo).then(function (res) {
        self.goods = res.data.data.complex;
        for (var i = 0; i < self.goods.length; i++) {
          self.title = self.goods[0].txt
        }
        self.goodsinfo = res.data.data.complex[0].list;
      }, function (err) {
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
    font-size: 1.6rem;
    line-height: 5rem;
    font-weight: 700;
    color: plum;
  }
  .goodsWrap img{
    width:100%;
   height:20rem;

  }
  .timer{
    width:100%;
    text-align: center;
    height:4rem;
    line-height: 4rem;
  }
</style>
