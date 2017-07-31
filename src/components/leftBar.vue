<template>
  <div class="classifyWrap">
    <!--分类页面的左侧控制栏-->
      <ul class="leftBar">
        <li class="leftLi" v-for="(obj,index) in bar" @click="choose(index)">
          {{obj.title}}
       </li>
      </ul>
    <!--右侧内容显示-->
    <div class="goodsWrap">
         <template v-for="item in goods.block_list" >
           <div class="classTitle">
             {{item.title}}
              </div>
            <template v-for="item1 in item.list">
              <div class="classWrap">
                  <img v-bind:src="item1.category_img_url" alt="图图不见了呢">
                  <p>{{item1.alt}}</p>
              </div>
            </template>
         </template>
    </div>

  </div>

</template>

<script>
  import axios from 'axios';
  export default{
    name:'leftBar',
    data(){
        return{
          bar:true,
          goods:{}
        }
    },
    created(){
        var self=this;
        axios.get('../../static/classify.json').then(function(res){
          self.bar=res.data.data;
          self.goods = Object.assign({},  self.goods, res.data.data[0]);
        },function(err){
            console.log(err)
        })
    },
    methods:{
//        点击左侧菜单栏获取右侧显示区域数据
      choose(index,e){
          if(!e){
              e=window.event;
          }
          var goodsList=document.querySelectorAll('.leftLi');
          for(var i=0;i<goodsList.length;i++){
            if(e.target==goodsList[i]){
                goodsList[i].style.background="#af5bbf";
                goodsList[i].style.color="#fff";
            }else{
              goodsList[i].style.background=" #f6f5f7";
              goodsList[i].style.color="#000";
            }
        }
          var that=this;
          axios.get('../../static/classify.json').then(function(res){
            that.goods = Object.assign({},  that.goods, res.data.data[index]);

      },function(err){
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .classifyWrap{
    width:100%;
    display: flex;
    margin-top:4rem;
    border-top:1px solid #e5e4e7;
  }

  .leftBar{
    width:25%;
    list-style: none;
    position: fixed;
    height:50rem;
    background-color: #f6f5f7;
    border:1px solid #e5e4e7;

  }
  .leftLi{
    width:100%;
    height:4rem;
    text-align: center;
    line-height:4rem;
    border-bottom:1px solid #e5e4e7;
    font-size: 1.5em;
  }
  .leftBar :nth-child(1){
    background-color:#af5bbf;
    color:white;
  }
.goodsWrap{
  width:71%;
  background-color: white;
  margin-left:25%;
  padding:2%;
  display: flex;
  flex-wrap: wrap;
  /*justify-content: space-between;*/
  padding-bottom: 3rem;
  margin-bottom: 1rem;
}
.classTitle{
  width:98%;
  height:3.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 3.5rem;
  padding-left: 2%;
  border-bottom:1px solid  #e5e4e7;
  border-top:1px solid  #e5e4e7;
}
.classWrap{
  width:33%;
  margin-bottom: 2rem;
  text-align: center;
}
.classWrap p{
  width:100%;
  text-align: center;
}
  .classWrap img{
    width:60%;
    height:5.4rem;
  }
</style>
