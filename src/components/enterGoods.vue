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
          <div  class="imgWrap">
            <div v-for="item in list">
              <img v-bind:src="item.image">
            </div>
          </div>
          <p>
          {{obj.txt}}
          </p>

        </div>
      </div>
    </div>
      <button class="addCart"  @click="addcart(goodslist.goods_id)">加入购物车</button>
    <div class="addS">
      亲，已成功加入购物车~
 </div>
    <div class="backBtn">
      <small-leader></small-leader>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import {urls} from '../router/urlList'
  import smallLeader from '@/components/leader/smallLeader'
  export default{
    name:"entergoods",
    data(){
        return{
        key:true,
          goodslist:"",
          others:{},
          uId:'',
          arrdata:{},
          num:1,
          d:[],
          arrdataStr:"",
          detailsId:'',
          list:{}
        }
    },
    components:{
      smallLeader
    },
    methods:{
        back(){
           window.history.go(-1)
        },
      addcart(id){
          var aa=document.querySelector('.addS');
          aa.style.display="block";
          var time=setTimeout(function(){
            aa.style.display="none";
          },1000)
        axios.get(urls.httpBtUrlOne +"static/"+ id + '.json').then((res) => {
          this.d = res.data;
        })
          .catch((error) => {
            console.log(error + "err");
          });
///        获取用户Id
        this.uId=localStorage.getItem('uId');
//        判断用户是否存在
        if(!this.uId){
          this.$router.push('/mine');
        }

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
        that.others= Object.assign({},  that.others, that.goodslist.special);
        for(var i in that.others){
            that.list=Object.assign({},that.list,that.others[i].list)
        }
      },function(err){
        console.log(err)
      });

  }
  }
</script>
<style scoped>
  .imgWrap{
    width:100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .imgWrap div{
    width:50%;
  }
  .imgWrap div img{
    width:70%;
  }
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


  .addCart{
    width:40%;
    background-color: #b05bc0;
    border:none;
    height:3rem;
    color:white;
    font-size: 1.5rem;
    position:fixed;
    bottom:0;
    left:60%;
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
  .backBtn{
    width:30%;
    z-index: 99;
    position:fixed;
    bottom:5rem;
    right:2rem;
  }
</style>
