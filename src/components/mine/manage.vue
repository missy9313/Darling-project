<template>
  <div class="manage">
    <div v-for="obj in manageList" class="manageList">
     <div>
       <img v-bind:src='obj.imgs'>
       <p>{{obj.title}}</p>
     </div>
      <div>
        <img src="../../assets/icon10.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {urls} from '../../router/urlList';
  export default{
    name:'manage',
    data(){
        return{
          manageList:''
        }
    },
    created(){
      var self=this;
      axios.get(urls.httpBtUrlOne+urls.httpBtUrlSeven).then(function(res){
        self.manageList=res.data.manage;
      })
    }
  }
</script>

<style scoped>
  .manage{
    width:100%;
    background-color: white;
  }
  .manageList{
    width:100%;
    height:3rem;
    border-bottom: 1px solid #f6f4f7;
    display: flex;
    justify-content: space-between;
    line-height: 3rem;
  }
  .manageList div{
   display: flex;
    margin-left:2%;
    margin-right:2%;
  }
  .manageList div img{
    margin-top:0.5rem;
    height:2rem;
  }
</style>
