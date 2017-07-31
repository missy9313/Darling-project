<template>
  <div>
     <div class="youwrap">
       <!--优惠券-->
        <div v-for="obj in ticket" key="ticket">
          <router-link to="mine">
            <img v-bind:src='obj.image_url'>
          </router-link>
        </div>
     </div>
       <!--菜单栏-->
       <div class="menuWrap">
         <div v-for="obj in menu">
           <router-link to="mine">
             <img v-bind:src='obj.image_url'>
           </router-link>
         </div>
       </div>

  </div>
</template>

<script>
  import axios from 'axios';
  export default{
     name:'menus',
     data(){
       return{
         ticket:true,
         menu:true
       }
     },
    created(){
       var self=this;
     axios.get('../../static/home.json').then(function(res){
         self.ticket=res.data.data.activity_list;
         self.menu=res.data.data.index_select_range
     },function(err){
       console.log(err)
     })
   }
 }
</script>

<style scoped>
.youwrap{
  width:100%;
  display: flex;
  margin-top: 5rem;
  flex-wrap: wrap;
  background-color: white;
}
  .youwrap div:nth-child(1){
    width:100%;
  }
  .youwrap div{
    width:50%;
  }
  .youwrap img{
    width:100%;
  }
  .menuWrap{
    width:100%;
    height:6rem;
    display: flex;
    background-color: white;
    margin-bottom: 3rem;
  }
  .menuWrap a{
    width:20%;
  }
  .menuWrap div a img{
    width:100%;
  }

</style>
