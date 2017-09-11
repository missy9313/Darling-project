<template>

    <div class="leadgoodsWrap">
      <template v-for="obj in goods" >
        <div v-for="item in obj " class="leadgoodsinfo" >
          <img v-bind:src="item.cover_image">
          <p class="showName">{{item.title_desc}}</p>
          <p class="name">{{item.goods_name}}</p>
          <div class="buyInfo">
            <p class="price"><span>￥</span>{{item.price}}</p>
            <div class="cart">
              <p>加入购物车</p>
              <img src="../../assets/cart0.png">
            </div>
          </div>
       </div>
     </template>
      <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
                 style="background-color:rgba(0,0,0,0) ;border:none">

      </el-button>
    </div>
</template>

<script>
  import axios from 'axios';
  import {urls} from '../../router/urlList';
  export default{
    name:'leaderone',
    data(){
      return{
        fullscreenLoading:false,
        goodsinfo:true,
        key:'',
        infos:'',
        goods:{},
        prices:[],
        name:[],
        title:'',
        imgs:''
      }
    },
    methods:{
       news(){
//       this.key=this.$route.query.key;
         this.key=localStorage.getItem('leaderone');
         var self=this;
         axios.get(urls.httpBtUrlOne+'static/leader/'+this.key+".json").then(function(res){
           self.infos=res.data.data.goods_list.list;
           self.goods = Object.assign({},  self.goods, res.data.data.goods_list.list);
         },function(err){
           console.log(err)
         })

       },
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1500);
      }
    },
    created(){
      this.openFullScreen();
        this.news();
    }
  }
</script>

<style scoped>

  .leadgoodsWrap{
    width:100%;
    background-color: white;
    margin-top:4rem;
    position:absolute;
    z-index: 29;
  }
  .leadgoodsinfo{
    width:96%;
    padding-left:2%;
    line-height: 3rem;
    margin-bottom: 1rem;

  }
  .leadgoodsinfo img{
    width:100%;
    height:24rem;
  }
  .showName{
    font-size: 1.5rem;
    color: #252525;
  }
  .name{
    color:#9f9f9f;
    font-size: 1.2rem;
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
    width:30%;
    height:2.7rem;
    border:1px solid #a4a4a4;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-around;
    padding:1%;
  }
  .cart p{
    width:55%;
    height:2.5rem;
    border-right:1px solid #a4a4a4;
    white-space: pre-wrap;
    line-height:2.5rem;
    color:#666;
  }
  .cart img{
    width:2.5rem;
    height:2.5rem;
  }

</style>

