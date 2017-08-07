<template>
  <div class="aa">
    <transition name="el-zoom-in-bottom">
      <ul v-show="show2" class="smWrap">
        <li v-for="obj in tablist" class="smLi">
          <router-link :to="obj.to" >{{obj.title}}</router-link >
        </li>
      </ul>
    </transition>
    <el-button @click="show2 = !show2" class="btn">back</el-button>

  </div>
</template>
<script>
  export default {
    name:'smallLeader',
    data(){
        return{
            show2:false,
              tablist:[
                { to:'/home',
                  title:'首页',
                },
                { to:'/classify',
                  title:'分类',
                },
                { to:'/discount',
                  title:'约惠',
                },
                { to:'/cart',
                  title:'购物车',
                },
                { to:'/mine',
                  title:'我的',
                }
              ]
            }
          }


  }
</script>

<style>
  .aa{
    text-align: right;
  }
  .smWrap {
    width:100%;
    background-color:white;
    border:1px solid #ccc;
    text-align: center;
    color: #666;
    list-style: none;
    border-radius: 1rem;
  }
  .smWrap li {
    width:100%;
    height:3rem;
    line-height:3rem;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  .smWrap a{
    line-height:3rem;
    text-decoration: none;
    font-size: 1.4rem;
    color: #ccc;
  }
  .btn{
    width:5rem;
    height:5rem;
    border-radius: 50%;
    color:#b05bc0;
    background-color: rgba(198,107,205,0.7);
    text-align: center;
    border:none;
  }
  .btn span{
    font-size:2rem;
    color:white;
    display: inline-block;
    height:2rem;
  }
</style>
