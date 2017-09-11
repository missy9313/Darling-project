<template>
  <div>
    <!--各种即将抢购产品-->
    <div class="infoWrap" >
      <div v-for="obj in notice" class="infos" >
        <img v-bind:src="obj.image" alt="宝贝没了" @click="enterGoods(obj.goods_id)">
        <p class="showName">{{obj.goods_show_name}}
        </p>
        <p class="name">{{obj.goods_name}}</p>
        <div class="buyInfo">
          <p class="price"><span>￥</span>{{obj.price}} <span class="origin">￥{{obj.origin_price}}</span></p>
          <div class="cart" @click="addcart(obj.goods_id)">
            <img src="../assets/cart0.png">
          </div>
        </div>
        <div class="people">已加入购物车</div>
      </div>
    </div>
    <div class="addS">
         亲，已成功加入购物车~
    </div>
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">

    </el-button>
  </div>
</template>

<script>
  import axios from 'axios';
  import {urls} from '../router/urlList';



  export default{
    name:'noticeGoods',
    data(){
      return{
        notice:true,
        uId:'',
        arrdata:{},
        num:1,
        d:[],
        arrdataStr:"",
        detailsId:'',
        goodshow:true,
        fullscreenLoading:false

      }
    },
    created(){
      if (sessionStorage.getItem(location.hash)){
        setTimeout(function () {
          document.body.scrollTop=sessionStorage.getItem(location.hash);
          sessionStorage.removeItem(location.hash);
        },200);
      }
      var self=this;
      axios.get(urls.httpBtUrlOne+urls.httpBtUrlSix).then(function(res){
        self.notice=res.data.data.flash_list[0].list
      },function(err){
        console.log(err)
      })
      this.openFullScreen();


    },
//  回到点击位置
    mounted(){
//      var map = {};
//      window.onhashchange = function() {
//        document.body.scrollTop = 0;
//      }
//      /*  2 再屏蔽掉浏览器自动恢复滚动位置行为带来的影响
//       a 在 hashchange 时强制 document.body.scrollTop = 0
//       b 在 scroll 事件里面, 当 document.body.scrollTop = 0 的时候不做 存操作.*/
//      window.onscroll = function() {
//        if (document.body.scrollTop) {
//          // 存
//          map[location.hash] = document.body.scrollTop;
//        } else {
//          var timer = null;
//          //3 在读操作里面, 设置一个定时任务, 去判断 document.body.scrollTop 的值和你保存的位置是不是相同的
//          timer = setInterval(function(){
//            if (document.body.scrollTop === map[location.hash]) {
//              map={}
//              clearInterval(timer);
//
//            } else {
//              document.body.scrollTop = map[location.hash];
//            }
//          }, 200);
//        }
//      }
    },
    methods:{
//        屏幕加载时的等待显示
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1500);
      },
//        加入购物车
      addcart(id){
//          已加入购物车信息提示
          var aa=document.querySelector('.addS');
          aa.style.display="block";
         var time=setTimeout(function(){
            aa.style.display="none";
        },1000);
//        获取数据
        axios.get(urls.httpBtUrlOne +"static/"+ id + '.json').then((res) => {
            this.d = res.data;
          })
          .catch((error) => {
            console.log(error + "err");
          });
//        获取用户Id
        this.uId=localStorage.getItem('uId');
        console.log(this.uId)
//        判断用户是否存在
        if(!this.uId){
          this.$router.push('/mine');
        }
//        先获取数据

        axios.get(urls.details+"/"+this.uId).then((res)=>{
//            如果数据为空时，获取可简化
            if(res.data.data==="" || !res.data.data ){
              this.arrdata[id]={
//                 商品id 做key 下面为传值
                "id":id,
                "num":this.num,
                "price":this.d.origin_price,
                "name":this.d.goods_name,
                "info":this.d.color_name,
                "img":this.d.image,
                "sum":this.d.origin_price*this.num,
              };
              this.arrdataStr=JSON.stringify(this.arrdata);
            }
           else{
                this.arrdata=JSON.parse(res.data.data);
                this.arrdata[id]={
//                 商品id 做key 下面为传值
                  "id":id,
                  "num":this.num,
                  "price":this.d.origin_price,
                  "name":this.d.goods_name,
                  "info":this.d.color_name,
                  "img":this.d.image,
                  "sum":this.d.origin_price*this.num
              };
              this.arrdataStr=JSON.stringify(this.arrdata);
            }
            axios.put(urls.details+"/"+this.uId,{
                data:this.arrdataStr
            }).then(function(res){
                console.log('成功')
              localStorage.setItem('goodsId',id)
            },function(err){
                console.log("错误"+err)
            },function(err){
              console.log("错误"+err)
            })
        })
      },
//      进入详情页
      enterGoods(ids){
        sessionStorage[location.hash] = document.body.scrollTop;
        this.$router.push({path:"/entergoods", query: {key:ids}})
      }
    }
  }
</script>

<style scoped>
  .infoWrap{
    width:100%;

    padding-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    background-color:white;
  }
  .infos{
    width:48%;
    margin-top:1rem;
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
    height:4.8rem
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
  .name{
    color:#9f9f9f;
    font-size: 1.2rem;
    height:4rem;
  }
  .origin{
    color:#9f9f9f;
    text-decoration: line-through;
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
  .addS{
    width:30%;
    height:5rem;
    position:fixed;
    top:20rem;
    left:40%;
    display: none;
    background-color: rgba(0,0,0,0.5);
    color:white;
    text-align: center;
    line-height: 5rem;
    border-radius: 0.5rem;
  }
  .goodsWrap{
    position:absolute;
    top:0;
    z-index: 99;
  }
</style>
