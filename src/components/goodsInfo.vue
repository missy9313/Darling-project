<template>
  <div class="infoWrap">
     <div v-for="obj in infos" class="infos">
       <div class="icon">
         <!--<img v-bind:src="obj.icons.img" >-->
         无敌价
       </div>
       <img v-bind:src="obj.image">

       <p class="showName">{{obj.goods_show_name}}
       <!--<span>{{obj.icon_display.txt}}</span>-->
       </p>
       <p class="name">{{obj.goods_name}}</p>
       <div class="buyInfo">
         <p class="price"><span>￥</span>{{obj.price}}</p>
         <div class="cart">
            <p>万人加入购物车</p>
           <img src="../assets/cart0.png">
         </div>
       </div>

     </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default{
    name:'goodsInfo',
    data(){
      return{
          infos:true
      }
    },
    created(){
      var self=this;
      axios.get('../../static/home.json').then(function(res){
          self.infos=res.data.data.complex[4].list.slice(1,81)
      },function(err){
        console.log(err)
      })
    }

  }
</script>

<style scoped>
.infoWrap{
   width:100%;
  background-color: white;
}
.infos{
  width:96%;
  padding-left:2%;
  line-height: 3rem;
  margin-bottom: 1rem;
}
  .infos img{
    width:100%;
    height:26rem;
  }
  .showName{
    font-size: 1.5rem;
    color: #252525;
  }
  .name{
    color:#9f9f9f;
    font-size: 1.2rem;
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
    width:30%;
    height:2.7rem;
    border:1px solid #a4a4a4;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-around;
    padding:1%;
  }
  .cart p{
    width:55%;
    height:2.5rem;
    border-right:1px solid #a4a4a4;
    white-space: pre-wrap;
    line-height: 1.5rem;
    color:#666;
  }
  .cart img{
    width:2.5rem;
    height:2.5rem;
  }
  .icon{
    width:3rem;
    height:3rem;
    position:relative;
    left:88%;
    top:5rem;
    background-color: rgba(255,255,255,0.7);

  }
  .icon img{
    width:100%;
    height:100%;
    /*z-index: 2;*/
  }
</style>
