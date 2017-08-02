<template>
  <div class="wallet">
    <!--我的钱包-->
    <div class="mineWallet">
      <p>我的钱包</p>
    </div>
    <!--钱包管理管理-->
    <div class="walletList">
      <div>
        <span>0</span>
        <p style="color:red">领取惊喜红包</p>
      </div>
      <div>
        <span>0.00</span>
        <p>余额</p>
      </div>
      <div>
        <span>0</span>
        <p>达令币</p>
      </div>
    </div>
  </div>

</template>
<script>
  export default{
    name:'wallet',
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  .wallet{
    background-color: white;
    margin-top: 1rem;
  }
  .mineWallet{
    width:100%;
    height:3rem;
    border-bottom:1px solid #f4f6f7;
    line-height:3rem;
  }
  .mineWallet p{
    margin-left: 3%;
    font-size: 1.7rem;
    color:#121212;
  }
  .walletList{
    width:100%;
    display: flex;
    justify-content: space-around;
    height:5rem;
  }
  .walletList div{
    margin-top: 1rem;
    width:33%;
    text-align: center;
    border-left:1px solid  #f4f6f7;
    font-size: 1.6rem;
    color:#8c8a8c;
  }

</style>
