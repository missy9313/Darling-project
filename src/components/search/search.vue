<template>
  <div>
     <!--搜索框-->
    <img src="../../assets/search.png" class="sImg" v-on:click="searching">
    <div class="seTop">
      <input type="text" placeholder="搜索商品" class="search" v-model="searched" >

      <span @click="cancelS">取消</span>
    </div>

    <div v-for="item in searchList" v-show="showList">
      {{myfilter(item.title)}}
    </div>
    <div class="searchWrap">
      <div class="hotSearch">
        <p class="sTitle">热门搜索</p>
        <div class="hotWrap">
           <div v-for="(obj,index) in searchList" @click="see(index)">{{obj.title}}</div>
        </div>
      </div>
      <div class="historySearch">
        <p class="sTitle">我的搜索历史</p>
        <div class="historyWrap">
          <!--<div v-for="obj in searchList">{{obj.title}}</div>-->
        </div>
      </div>
      <div class="clear">清空搜索历史</div>
    </div>
  </div>
</template>
<script>

  import axios from 'axios'
  import {urls} from '../../router/urlList'

  export default{

    name: 'search',
    data(){
      return {
        searchList: true,
        goodsinfo: {},
        searched: "",
        goods: '',
        arr: [],
        showList:false,
        searchgoods:'',
        inputs:''
      }
    },
    methods: {
      cancelS(){
        this.$router.push('/home');
      },
//      点击热门选项搜索
      see(index, e){
        if (!e) {
          e = window.event;
        }
        this.$router.push({path:"/searchgoods", query: {id: index}})
      },
//      点击搜索搜索
      myfilter(value){
          if(value.indexOf(this.searched)>-1){
              this.searchgoods=value;
//           return value;
          }
      },
      searching(){
          this.inputs=document.querySelector('.search')
         this.$router.push({path:"/searchgoods", query: {key:this.searchgoods}})
         this.searched=this.inputs.value;
      }
    },
    created(){
      var self = this;
      axios.get(urls.httpBtUrlOne + urls.httpBtUrlThree).then(function (res) {
        self.goodsinfo = res.data.data.list;
      }, function (err) {
        console.log(err)
      }),
        axios.get(urls.httpBtUrlOne + urls.httpBtUrlEight).then(function (res) {
          self.searchList = res.data.data
        }, function (err) {
          console.log(err)
        })
    }
  }

</script>

<style scoped>
  .seTop{
    width:100%;
    height:4rem;
    margin-top: 1.5rem;
    margin-left:0.5rem;
  }
  .search{
    width:75%;
    height:2.5rem;
    border-radius:2.5rem;
    border:none;
    padding-left:12%;
    margin-right:2%;
  }
  .sImg{
    position: absolute;
    top:1.8rem;
    left:2.8%;
    border-radius: 2.5rem 0 0 2.5rem;
  }
  .searchWrap{
    width:100%;
    height:50rem;
    background-color: white;
  }
  .sTitle{
   color:#858385;
    font-size: 1.3rem;
    height:3rem;
    line-height:4rem;
    margin-left: 5%;
  }
  .hotWrap{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    padding:4%;
    border-bottom:1px solid #eee;
  }
  .hotWrap div{
    color:#39383b;
    background-color: #f7f7f7;
    height:1rem;
    padding:1rem;
    margin-right: 5%;
    margin-bottom: 1rem;
  }
  .clear{
    width:33%;
    height:2.5rem;
    border:1px solid #cdcdcd;
    line-height: 2.5rem;
    text-align: center;
    margin-left: 35%;
    margin-top: 5rem;
  }
</style>
