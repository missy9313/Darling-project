 <template>
  <div>

      <div class="cartTop">
        <span style="font-size: 1.6rem">我的购物车 </span>
        <span class="redact">编辑</span>
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
      <span class="checks"  v-bind:class="{check:obj.checked}" @click="selectedProduct(obj,sub)"></span>
        <img v-bind:src="obj.img" @click="enterGoods(index)">
      <div>
        <p>{{obj.name}}</p>
        <p>{{obj.info}}</p>
        <p>
          ￥<span class="price">{{obj.price}}</span>
          <span class="control">
            <span @click="obj.num--,changeCount()" v-show="obj.num>0" class="cut">-</span>
            <span class="count" v-show="obj.num>0">{{obj.num}}</span>
            <span @click="obj.num++,changeCount()">+</span>
          </span>
           <span style="margin-right:10%" @click="del(obj.id)">删除</span>
        </p>
      </div>
    </div>

  </div>
    <!--结算条-->
    <div class="account">
      <div class="accountWrap">
        <div class="check">
          <span class="noCheck"  v-if="all" @click="checkAll"></span>
          <span class="checkAll"  v-else  @click="checkAll"></span>
          <span>全选</span>
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
        all:true
      }
    },
    created(){
      if (localStorage.getItem('goodsId')) {
        this.showcart = false;
        this.ids = localStorage.getItem('goodsId')
      }
      this.uId = localStorage.getItem('uId');
      var that = this;
      axios.get(urls.details + "/" + this.uId).then(function (res) {
        that.goods = JSON.parse(res.data.data);
        for (var i in that.goods) {
          that.sum += that.goods[i].num * that.goods[i].price;
        }
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
          if(this.goods[i].num===0){
              this.bool0=true;
              this.del();
          }
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
      //调用函数将值传回服务器   然后调用load()渲染页面,    这个方法好处是可以使服务器数据和本地同步,但是服务器请求比较多, 另一种可以做一个编辑按钮,然后进行加 减 删除等操作,点击完成 然后上传
             delete this.arrdata[ids];
             this.change(this.arrdata);
             e.target.parentNode.parentNode.parentNode.remove();
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
      selectedProduct: function (obj, sub) {
        this.checks = document.querySelectorAll('.checks');
          obj.checked = !obj.checked;
//          未选中状态
          var len=this.checks.length;
          for (var i = 0; i < len; i++) {
            if (obj.checked) {
              this.checks[sub].style.backgroundColor = "white";
              return this.bool0=false;
            }
//                选中状态
            else {
              this.checks[sub].style.backgroundColor = "#b05bc0";
              return this.bool0=true;
            }
          }
        },
//全选
      checkAll() { //全选/取消全选
        this.checks = document.querySelectorAll('.checks');
          if(this.all===true){
            for(var i=0;i<this.checks.length;i++){
              this.checks[i].style.backgroundColor = "#b05bc0";
            }
            this.all=false;
          }else{
            for(var i=0;i<this.checks.length;i++){
              this.checks[i].style.backgroundColor = "white";
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
  .goodsInfo div{
    width:100%;
     line-height:2rem;
  }
.goodsInfo p{
  display: flex;
  width:100%;
  justify-content: space-between;
}
/*加减控制器*/
.control{
  margin-left:35%;
  display: inline-block;
  font-size: 0;
}
.control span:nth-child(1){
   display: inline-block;
   width:2.5rem;
   height:2rem;
   border:1px solid #ccc;
   border-radius: 0.3rem 0 0 0.3rem;
   text-align: center;
 }
.control span:nth-child(2){
  display: inline-block;
  width:3rem;
  height:2rem;
  border:1px solid #ccc;
  text-align: center;
}
.control span:nth-child(3){
  display: inline-block;
  width:2.5rem;
  height:2rem;
  border:1px solid #ccc;
  border-radius:0 0.3rem 0.3rem 0;
  text-align: center;
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
    width:35%;
    justify-content: space-around;
    line-height:2rem;
    margin-top: 0.3rem;
  }
  .check{
    display: flex;
    margin-top:1rem;
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
    width:40%;
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
