 <template>
  <div>
      <div class="cartTop">
        <span style="font-size: 1.6rem">我的购物车 </span>
        <span class="redact" @click="dels=!dels">编辑</span>
      </div>
      <!--当购物车里没有商品时显示的页面-->
    <div class="nogoods" v-show="showcart">
      <div class="haveNo">
        <img src="../assets/sleepCar.png">
        <p>购物车里没有东西哦，快去挑选吧</p>
        <p class="goHome">
          <a href="http://localhost:8080/#/home">逛逛首页</a>
        </p>
      </div>
    </div>
    <!--当购物车有商品时-->
  <div class="hasgoods">
    <div class="goodsInfo" v-for="(obj,index,sub) in goods">
      <input type="checkbox" class="checks" @click="selectedProduct(obj,sub)" >
        <img v-bind:src="obj.img" @click="enterGoods(index)">
      <div class="infoWraps">
        <div >
          <p>{{obj.name}}</p>
        </div>
        <div>{{obj.info}}</div>
        <div class='controlWrap'>
          <span class="price">￥{{obj.price}}</span>
          <div class="cartcontrol">
          <div class="cart-decrease"  @click="obj.num--,changeCount()" v-show="obj.num>0"  >- </div>
          <div class="count" v-show="obj.num>0" >{{obj.num}}</div>
          <div @click="obj.num++,changeCount()" class="cart-add">+</div>
          </div>
          <!--<transition name="el-zoom-in-center">-->
          <!--<span style="margin-right:10%;color:red" @click="del(obj.id)" v-show="dels">删除</span>-->
          <!--</transition>-->
        </div>
        <transition name="el-zoom-in-center">
          <span style="margin-right:1%;color:red" @click="del(obj.id)" v-show="dels">删除</span>
        </transition>
      </div>
    </div>
  </div>
    <!--结算条-->
    <div class="account">
      <div class="accountWrap">

        <div class="checksAll">
          <input type="checkbox" @click="checkAll">
          <span style="font-size: 1.5rem">全选</span>
       </div>
       <div class="money">
        <p>合计:<span style="color:#f0593f;font-size: 1.5rem">￥{{sum}}</span></p>
        <p>总额:￥{{sum}}</p>
      </div>
      </div>
      <div class="goBuy">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {urls} from '../router/urlList';

  export default{
    name: 'cart',
    data(){
      return {
        dels:false,
        ids: "",
        goods: "",
        showcart: true,
        count: "",
        sum: 0,
        uId: '',
        checks: "",
        price: '',
        allprice: 0,
        gonum: 0,
        change0: "",
        bool0:'',
        arrdata: "",
        all:true,
        arr:'',
        prices:'',
        counts:''

      }
    },
    created(){
//        判断是否有商品
      if (localStorage.getItem('goodsId') ||  localStorage.getItem('uId')) {
        this.showcart = false;
        this.ids = localStorage.getItem('goodsId')
      }else if(!localStorage.getItem('goodsId')){
        this.showcart = true;
      }
//   获取用户的uId,根据用户信息获取对应数据
      this.uId = localStorage.getItem('uId');
      var that = this;
      axios.get(urls.details + "/" + this.uId).then(function (res) {
        that.goods = JSON.parse(res.data.data);
//        for (var i in that.goods) {
//          that.sum += that.goods[i].num * that.goods[i].price;
//        }
      }, function (err) {
        console.log(err)
      })
      this.load();
    },
    methods: {
//        进入详情页
      enterGoods(ids){
        this.$router.push({path:"/entergoods", query: {key:ids}})
      },
      changeCount(){
        var aa = 0;
        for (var i in this.goods) {
          aa += this.goods[i].num * this.goods[i].price;
        }
        this.sum = aa;
//        修改变更后的后台数据
        this.change(this.goods)
      },
//      删除商品
      del(ids,e){
          if(!e){
              e=window.event;
          }


         if(this.bool0){
         this.$confirm('是否要删除该商品', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
      //调用函数将值传回服务器   然后调用load()渲染页面,
     // 这个方法好处是可以使服务器数据和本地同步,但是服务器请求比较多, 另一种可以做一个编辑按钮,然后进行加 减 删除等操作,点击完成 然后上传
             delete this.arrdata[ids];
             this.change(this.arrdata);
             e.target.parentNode.parentNode.remove();
             this.sum=0;
             this.$message({
               type: 'success',
               message: '删除成功!',
             });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
         }
         else{
           this.$alert('您未选中商品', {
             confirmButtonText: '重新选择',
           });
         }

      },

//       更改数据传回到后台
      change(gai){
        this.change0 = JSON.stringify(gai);
        axios.put(urls.details + "/" + this.uId, {
          data: this.change0
        }).then((res) => {
          console.log('修改成功');
          this.load();
        }, function (err) {
          console.log("错误" + err)
        })
      },
//      下载数据
      load(){
        axios.get(urls.details + "/" + this.uId).then((res) => {
          this.arrdata = JSON.parse(res.data.data);
        })

      },
//      选择商品
      selectedProduct(obj, sub) {
        this.checks = document.querySelectorAll('.checks');
        this.prices=document.querySelectorAll('.price');
        var len=this.checks.length;
        for(var k=0;k<len;k++){
          if(this.checks[k].checked){
            this.sum+=this.prices[k].textContent.slice(1)*obj.num
            return this.bool0=true;
          }else{
            this.sum=0
          }
        }

        },
//全选//全选/取消全选
      checkAll() {
        this.checks = document.querySelectorAll('.checks');
          if(this.all===true){
            for(var k=0;k<this.checks.length;k++){
              this.$set(this.checks[k],"checked",true)
            }
            for (var j in this.goods) {
              this.sum += this.goods[j].num * this.goods[j].price;
            }
            this.all=false;
          }else{
            for(var k=0;k<this.checks.length;k++){
              this.$set(this.checks[k],"checked",false)
            }
            for(var i=0;i<this.checks.length;i++){
              this.sum=0;
            }
            this.all=true;
          }
      }
    }
  }
</script>


 <style scoped>
.cartTop{
  width:100%;
  height: 4.4rem;
  background-color: white;
  text-align: center;
  line-height: 4.4rem;
}
  .redact{
    color: #b05bc0;
    font-size: 1.3rem;
    float: right;
    margin-right: 3%;
  }
  .haveNo{
    width:100%;
    text-align: center;
    margin-top: 8rem;
    color:#666;
    line-height:3rem;
    font-size: 1.5rem;
  }
  .hasgoods{
    width:100%;
    margin-top: 1rem;
  }
  .goodsInfo {
    width:100%;
    display:flex;
    padding:3%;
    background-color: white;
    margin-top: 1rem;
  }
  .goodsInfo img{
    width:6rem;
    height:6rem;
    margin-right:2%;
  }
  .infoWraps{
    width:100%;
     line-height:2rem;
  }

/*加减控制器*/
.cartcontrol{
  margin-left: 35%;
  margin-right:7%;
  display: inline-block;
  font-size: 0;
}
.cart-decrease{
  display: inline-block;
  width:2rem;
  height:2rem;
  border:1px solid #b05bc0;
  border-radius:50%;
  text-align: center;
  font-size: 2.4rem;
  transition:all 0.4s linear
 }
.controlWrap{
  width:100%;
  display: flex;
  justify-content: space-between;
}

.count{
  display: inline-block;
  width:3rem;
  height:3rem;
  text-align: center;
  font-size: 2rem;
}
.cart-add{
  display: inline-block;
  width:2rem;
  height:2rem;
  border:1px solid #b05bc0;
  background-color: #b05bc0;
  border-radius:50%;
  text-align: center;
  color:white;
  font-size: 2.4rem;
}
.goHome{
    display: inline-block;
    width:20%;
    height:3rem;
    border:1px solid #666;
    line-height:3rem;
    text-align: center;
    border-radius: 0.3rem;
  }
  .goHome a{
    text-decoration: none;
    color:#666;
  }
  .account{
    width:100%;
    height:5rem;
    background-color: white;
    position: fixed;
    bottom:4.9rem;
    display: flex;
    justify-content: space-between;
  }
  .accountWrap{
    display: flex;
    width:46%;
    justify-content: space-around;
    line-height:2rem;
    margin-top: 0.3rem;
  }
  .checksAll{
    display: flex;
    font-size: 1.5rem;
    align-items: center;
  }
  .checkAll{
    margin-right: 0.5rem;
    display: inline-block;
    width:1.5rem;
    height:1.5rem;
    border-radius: 50%;
    background-color: #b05bc0;
    margin-left:0.3rem;
  }
  .noCheck{
    margin-right: 0.5rem;
    display: inline-block;
    width:1.5rem;
    height:1.5rem;
    border-radius: 50%;
    border:1px solid  #b05bc0;
    margin-left:0.3rem;

  }
  .checks{
    margin-right:1rem;
    margin-top:2rem;
    display: inline-block;
    width:1.5rem;
    height:1.5rem;
    border-radius:100%;
    border:1px solid  #b05bc0;
  }
  .checksCla{
    margin-right:1rem;
    margin-top:2rem;
    display: inline-block;
    width:1.5rem;
    height:1.5rem;
    border-radius:100%;
    border:1px solid  #b05bc0;
    background-color: purple;
  }
  .money{
    margin-left: 5%;

  }
  .money p{
    width:7rem;
    height:2rem;
    font-size: 1.5rem;
  }
  .goBuy{
    width:35%;
    height:4.9rem;
    background-color: #b05bc0;
    color:white;
    line-height: 4.9rem;
    text-align: center;
  }
.sure{
  position: absolute;
  top:0;
  z-index: 99;
  width:100%;
  height:58rem;
  background-color: rgba(0,0,0,0.3);
  display: none;
}
.sure div{
  width:60%;
  height:125px;
  border-radius: 10px;
  text-align: center;
  position: fixed;
  top:35%;
  left:20%;
  background-color: white;
}
.sure div p:nth-child(1){
  font-weight: 300;
  color: #333;
  font-size:16px;
  margin-top: 25px;
}
.sure div p:nth-child(2){
  width:100%;
  display: flex;
  margin-top: 35px;
}
.sure div p span{
  border-top:1px solid #ccc;
  border-left:1px solid #ccc;
  display: inline-block;
  width:50%;
  height:42px;
  line-height: 42px;
  text-align: center;
  color:#34a0f8;
  font-size:20px;

}
</style>
