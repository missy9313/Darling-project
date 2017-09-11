<template>
  <div>
    <ul class="disBar">
      <li  v-for="obj in list">
        <router-link :to="obj.to" :class='obj.cla' :activeClass="obj.activeCla">
         {{obj.title}}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'discount',
    data () {
      return{
        list:[
          { to:'/discount',
            title:'今日约惠',
            cla:"disCla",
            activeCla:'actCla'
          }
          ,
          { to:'/notice',
            title:'约惠预告',
            cla:"disCla",
            activeCla:'actCla'
          }
        ]
      }
    }
//    created(){
//        this.$router.push('/today')
//    }
  }
</script>

<style scoped>
.disBar{
  width:100%;
  height:4rem;
  background-color: white;
  display: flex;
  justify-content: space-around;
  line-height: 4rem;
  list-style: none;
}
  .disCla{
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
  }
  .actCla{
    color: #a651b7;
  }
</style>
