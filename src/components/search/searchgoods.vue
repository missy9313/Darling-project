<template>
  <div>
    <go-search></go-search>
    <div class="infoWrap">
      <div style="margin-top: 5rem">{{keys}}</div>
      <div v-for="obj in goodslist" class="infos">
        <div class="icon">
          <!--<img v-bind:src="obj.icons.img" >-->
        </div>
        <img v-bind:src="obj.cover_image" alt="宝贝没了">
        <p class="showName">{{obj.country}} | {{obj.title_desc}}
       <!--<span>{{obj.icon_display.txt}}</span>--></p>
        <p class="name">{{obj.goods_name}}</p>
        <div class="buyInfo">
          <p class="price"><span>￥</span>{{obj.price}}</p>
          <div class="cart">
            <img src="../../assets/cart0.png">
          </div>
        </div>
        <div class="people">已加入购物车</div>
      </div>
    </div>
    <!--<div class="goTop">-->
      <!--<go-top></go-top>-->
    <!--</div>-->
    <div class="backBtn">
      <small-leader></small-leader>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {urls} from '../../router/urlList'
  import GoSearch from "../home/goSearch";
//  import goTop from '@/components/goTop'
  import smallLeader from '@/components/leader/smallLeader'
  export default{
    components: {
        GoSearch,
//        goTop
      smallLeader
    },
    name:"searchgoods",
    data(){
        return{
          sel:true,
          keys:'',
          arr:[],
          goodslist:'',
          searchgoods:true
        }
    },

  mounted(){
//    window.addEventListener('scroll', this.goTop)
  },
    created(){
      this.sel=this.$route.query.id;
      this.keys=this.$route.query.key;
console.log(this.keys)
      this.arr=["static/masker.json"];
//      热门推荐里的搜索选择
       var that=this;
        for(var i=0;i<this.arr.length;i++){
             axios.get(urls.httpBtUrlOne+this.arr[that.sel]).then(function(res){
                  that.goodslist=res.data.data.list
              },function(err){
                console.log(err)
              });
          }
//      for(var j=0;j<this.arr.length;j++){
//        axios.get(urls.httpBtUrlOne+this.arr[0]).then(function(res){
//          that.goodslist=res.data.data.list
//        },function(err){
//          console.log(err)
//        });
//      }
    },
    methods:{
//      goTop(){
//        this.scroll = document.body.scrollTop;
//        var top=document.querySelector('.goTop');
//        if(parseInt(document.body.scrollTop)>1500){
//          top.style.display='block';
//        }else{
//          top.style.display='none';
//        }
//      }
//
    }

  }
</script>
<style scoped>
  .backBtn{
    width:30%;
    z-index: 99;
    position:fixed;
    bottom:5rem;
    right:2rem;
  }
  .goTop{
    position:fixed;
    top:30rem;
    right:2rem;
    display: none;
  }
  .infoWrap{
    width:100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    background-color:white;
  }
  .infos{
    width:48%;
    padding-left:2%;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
  .infos img{
    width:100%;
    height:16rem;
  }
  .showName{
    font-size: 1.5rem;
    color: #252525;
    height:3rem
  }

  .name{
    color:#9f9f9f;
    font-size: 1.5rem;
    height:4rem;
  }

  .price{
    color:#ff5d5a;
    font-size: 1.8rem;
    font-weight: 500;
  }
  .buyInfo{
    width:98%;
    display: flex;
    justify-content: space-between;
  }
  .cart{
    width:15%;
    height:2.7rem;
    border:1px solid #a4a4a4;
    border-radius: 0.5rem;
    padding:1%;
  }

  .cart img{
    width:2.5rem;
    height:2.5rem;
  }
  .icon{
    width:3rem;
    height:3rem;
    position:relative;
    left:80%;
    top:3.5rem;
    background-color: rgba(255,255,255,0.7);

  }
  .icon img{
    width:100%;
    height:100%;
    z-index: 99;
  }
  .people{
    width:100%;
    height:2rem;
    background-color: #f9f9f9;
    color: #9f9f9f;
  }
</style>
