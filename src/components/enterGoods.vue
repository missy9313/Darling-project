<template>
  <div>
    <div>
      <!--展示图-->
      <div class="pic">
        <img v-bind:src="goodslist.image">
      </div>
      <!--产品信息-->
      <div class="goodsinfo">
        <p class="name">{{goodslist.goods_name}}</p>
        <p style="color:#f0593f">￥<span class="price">{{goodslist.origin_price}}</span></p>
      </div>
      <!--其他信息-->
      <div class="othersWrap">
        <div v-for="obj in others" class="others">
          <h4>
            {{obj.name}}
       </h4>
          <p>
            {{obj.txt}}
      </p>
        </div>
      </div>
    </div>
    <div class="gBottom">
      <p @click="back">〈〈&nbsp;&nbsp;返回上一页</p>
      <button class="addCart"  @click="addcart(goodslist.goods_id)">加入购物车</button>

    </div>

  </div>

</template>

<script>
  import axios from 'axios'
  import {urls} from '../router/urlList'
  export default{
    name:"entergoods",
    data(){
        return{
        key:true,
          goodslist:"",
          others:'',
          uId:'',
          arrdata:{},
          num:1,
          d:[],
          arrdataStr:"",
          detailsId:''
        }
    },
    methods:{
        back(){
          window.history.go(-1)
        },
      addcart(id){
        axios.get(urls.httpBtUrlOne +"static/"+ id + '.json').then((res) => {
          this.d = res.data;
        })
          .catch((error) => {
            console.log(error + "err");
          });
//        获取用户Id
        this.uId=localStorage.getItem('uId');
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
      }
  },
  created(){
    this.key=this.$route.query.key;
    var that=this;
      axios.get(urls.httpBtUrlOne+"static/"+this.key+'.json').then(function(res){
        that.goodslist=res.data
        that.others=that.goodslist.special
      },function(err){
        console.log(err)
      });

  }
  }
</script>
<style scoped>
  .pic{
    width:100%;
  }
    .pic img{
      width:100%;
    }
  .goodsinfo{
    width:94%;
    padding:3%;
    height:7rem;
    background-color:white;
    border-bottom:1px solid #c0c0c0;
    line-height: 3rem;
  }
     .name{
       font-size: 1.8rem;
     }
     .price{
       font-size: 1.8rem;
       color:#f0593f;
     }
  .othersWrap{
    width:100%;
    margin-top: 1rem;
    background-color: white;
    line-height:2rem;
  }
      .others{
        width:100%;
        border-bottom: 1px solid #b05bc0;
        background-color:white;
        }
.gBottom{
  display: flex;
  justify-content: space-between;
  position:fixed;
  bottom:0;
  background-color: white;
  border-top:1px solid #c0c0c0;
  width:100%;
  height:3rem;
}
.gBottom p{
   width:50%;
  font-size: 1.5rem;
  height:3rem;
  line-height: 3rem;
  color:#b05bc0;
}
  .addCart{
    width:40%;
    background-color: #b05bc0;
    border:none;
    height:3rem;
    color:white;
    font-size: 1.5rem;
  }
</style>
