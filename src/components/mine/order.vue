<template>
  <div class="order">
    <!--我的订单-->
       <div class="mineOrder">
          <div>
            <img src="../../assets/icon1.png" alt="" style="width:3rem;height:3rem">
            <p style="color: #121212;font-size: 1.7rem">我的订单</p>
          </div>
         <div>
           <p style="color: #8c8a8c;font-size: 1.3rem">全部订单</p>
           <img src="../../assets/icon10.png" style="width:2rem;height:2rem">
         </div>
       </div>
    <!--订单管理-->
    <div class="orderList">
      <div v-for="obj in orderList">
        <img v-bind:src="obj.imgs">
        <p>{{obj.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import {urls} from '../../router/urlList';
  export default{
    name:'order',
    data(){
      return{
          orderList:''
      }
    },
    created(){
        var self=this;
        axios.get(urls.httpBtUrlOne+urls.httpBtUrlSeven).then(function(res){
          self.orderList=res.data.order;
        })
    }
  }
</script>
<style scoped>
.order{
  background-color: white;
}
  .mineOrder{
    display: flex;
    justify-content: space-between;
    width:100%;
    height:3rem;
    border-bottom:1px solid #f4f6f7;
  }
  .mineOrder div{
    display: flex;
    align-items: center;
    margin-left: 3%;
    margin-right: 3%;
  }
  .orderList{
    width:100%;
    display: flex;
    justify-content: space-around;
    height:6rem;
  }
  .orderList div{
    margin-top:0.5rem;
    width:25%;
    text-align: center;
  }
  .orderList img{
    height:2.5rem;
  }
  .orderList p{
    font-size: 1.5rem;
    color:#8c8a8c;
  }
</style>
