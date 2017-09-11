<template>
   <div>
      <router-view></router-view>
      <ul class="tabBar" >
        <li  v-for="(obj,index,aa) in tablist">
          <router-link :to="obj.to" :class="obj.cla"  :activeClass="obj.activeCla">
          </router-link>
          <p>{{obj.title}}</p>
        </li>
      </ul>
   </div>
</template>

<script>
export default {
  name: 'tabBar',
  data () {
      return{
          tablist:[
              { to:'/home',
                title:'首页',
                cla:"homeCla",
                activeCla:'activeHome'
              },
            { to:'/classify',
              title:'分类',
              cla:"classifyCla",
              activeCla:'activeClassify'
            },
            { to:'/discount',
              title:'约惠',
              cla:"discountCla",
              activeCla:'activeDiscount'
            },
            { to:'/cart',
              title:'购物车',
              cla:"cartCla",
              activeCla:'activeCart'
            },
            { to:'/mine',
              title:'我的',
              cla:"mineCla",
              activeCla:'activeMine'
            }
          ]
      }
  }


}
</script>

<style scoped>
.tabBar{
  list-style: none;
  width:100%;
  position:fixed;
  bottom:0;
  height:4.9rem;
  background-color:white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  border-top:1px solid plum;
  z-index:39;
}
.tabBar li{
  width:20%;
  margin-top: 0.5rem;
}
.tabBar a{
  width: 2.5rem;
  height:2.5rem;
  display: inline-block;
  text-decoration: none;
}

.homeCla{
    background-image: url(../assets/home0.png);
    background-size: 100%;
  }
  .classifyCla{
    background-image: url(../assets/category0.png);
    background-size: 100%;
  }
  .discountCla{
    background-image: url(../assets/discount0.png);
    background-size: 100%;
  }
  .cartCla{
    background-image: url(../assets/cart0.png);
    background-size: 100%;
  }
  .mineCla{
    background-image: url(../assets/profile0.png);
    background-size: 100%;
  }
.activeHome~p,.activeClassify~p,.activeDiscount~p,.activeCart~p,.activeMine~p{
  color:#bc53c5;
}

.activeHome {
  background-image: url(../assets/home1.png);
  background-size: 100%;
}

.activeClassify{
  background-image: url(../assets/category1.png);
  background-size: 100%;
}
.activeDiscount{
  background-image: url(../assets/discount1.png);
  background-size: 100%;
}
.activeCart{
  background-image: url(../assets/cart1.png);
  background-size: 100%;
}
.activeMine{
  background-image: url(../assets/profile1.png);
  background-size: 100%;
}
</style>
