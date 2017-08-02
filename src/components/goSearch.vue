<template>
  <div class="searchWrap">
    <!--搜索栏-->
    <div class="search" @click="goSearch">
      <img src="../assets/timer.png" alt="">
      <span>搜索商品</span>
    </div>
  </div>
</template>
<script>

  export default{
    name:"goSearch",

    methods:{
      goSearch(){
         this.$router.push("/search")
      }
    }

  }
</script>

<style scoped>
  .searchWrap{
    width:100%;
    height: 4.4rem;
    position: fixed;
    top:0;
    background-color: #efefef;
    z-index: 39;
  }
  .search{
    width:95%;
    height:2.5rem;
    background-color: white;
    margin-left:0.5rem;
    margin-top:0.8rem;
    border-radius: 2.5rem;
    display: flex;
    align-items: center;

  }
  .search img{
    margin-left: 40%;
    margin-right: 0.2rem;
  }
</style>
