<template>
  <div>
    <div class="goodsWrap" >
      <div class="goods">
        <div class="title">{{title}}</div>
      </div>
    </div>
    <!--各种产品-->
    <div class="infoWrap">
      <div v-for="obj in goodsinfo" class="infos">
        <div class="icon">
          <!--<img v-bind:src="obj.icons.img" >-->
        </div>
        <img v-bind:src="obj.image" alt="宝贝没了">
        <p class="showName">{{obj.goods_show_name}}
       <!--<span>{{obj.icon_display.txt}}</span>-->
        </p>
        <p class="name">{{obj.goods_name}}</p>
        <div class="buyInfo">
          <p class="price"><span>￥</span>{{obj.price}}</p>
          <div class="cart">
            <img src="../assets/cart0.png">
          </div>
        </div>
        <div class="people">已加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {urls}  from '../router/urlList'
  export default{
    name:'guess',
    data(){
      return{
        title:true,
        goodsinfo:true
      }
    },
    created(){
      var self=this;
      axios.get(urls.httpBtUrlOne+urls.httpBtUrlThree).then(function(res){
        self.guess=res.data.data;
        self.title=self.guess.txt;
        self.goodsinfo=self.guess.list;
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
  .infoWrap{
    width:100%;
    margin-top: -3rem;
    padding-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    background-color:white;
  }
  .infos{
    width:48%;
    padding-left:2%;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
  .infos img{
    width:100%;
    height:16rem;
  }
  .showName{
    font-size: 1.5rem;
    color: #252525;
  }
  .name{
    color:#9f9f9f;
    font-size: 1.2rem;
    height:4rem;
  }
  .price{
    color:#ff5d5a;
    font-size: 1.8rem;
    font-weight: 500;
  }
  .buyInfo{
    width:98%;
    display: flex;
    justify-content: space-between;
  }
  .cart{
    width:15%;
    height:2.7rem;
    border:1px solid #a4a4a4;
    border-radius: 0.5rem;
    padding:1%;
  }

  .cart img{
    width:2.5rem;
    height:2.5rem;
  }
  .icon{
    width:3rem;
    height:3rem;
    position:relative;
    left:80%;
    top:3.5rem;
    background-color: rgba(255,255,255,0.7);

  }
  .icon img{
    width:100%;
    height:100%;
    z-index: 99;
  }
  .people{
    width:100%;
    height:2rem;
    background-color: #f9f9f9;
    color: #9f9f9f;
  }
</style>
