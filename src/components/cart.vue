 <template>
  <div>
     <div class="cartTop">
        <span style="font-size: 1.6rem">我的购物车 </span>
        <span class="redact">编辑</span>
     </div>
    <!--当购物车里没有商品时显示的页面-->
     <div class="haveNo">
       <img src="../assets/sleepCar.png">
       <p>购物车里没有东西哦，快去挑选吧</p>
       <p class="goHome">
         <a href="http://localhost:8080/#/home">逛逛首页</a>
       </p>
     </div>
    <!--结算条-->
    <div class="account">
      <div class="accountWrap">
        <div class="check">
          <span class="checkAll"></span>
          <span>全选</span>
       </div>
       <div class="money">
        <p>合计:</p>
        <p>总额:</p>
      </div>
      </div>
      <div class="goBuy">
        去结算（0）
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      name:'cart'
  }
</script>

<style scoped>
.cartTop{
  width:100%;
  height: 4.4rem;
  background-color: white;
  text-align: center;
  line-height: 4.4rem;
}
  .redact{
    color: #b05bc0;
    font-size: 1.3rem;
    float: right;
    margin-right: 3%;
  }
  .haveNo{
    width:100%;
    text-align: center;
    margin-top: 8rem;
    color:#666;
    line-height:3rem;
    font-size: 1.5rem;
  }
  .goHome{
    display: inline-block;
    width:20%;
    height:3rem;
    border:1px solid #666;
    line-height:3rem;
    text-align: center;
    border-radius: 0.3rem;
  }
  .goHome a{
    text-decoration: none;
    color:#666;
  }
  .account{
    width:100%;
    height:5rem;
    background-color: white;
    position: fixed;
    bottom:4.9rem;
    display: flex;
    justify-content: space-between;
  }
  .accountWrap{
    display: flex;
    width:25%;
    justify-content: space-around;
    line-height:2rem;
    margin-top: 0.3rem;
  }
  .check{
    display: flex;
    margin-top:1rem;
  }
  .checkAll{
    margin-right: 0.5rem;
    display: inline-block;
    width:1.5rem;
    height:1.5rem;
    border-radius: 50%;
    border:1px solid  #b05bc0;

  }
  .goBuy{
    width:40%;
    height:4.9rem;
    background-color: #b05bc0;
    color:white;
    line-height: 4.9rem;
    text-align: center;
  }

</style>
