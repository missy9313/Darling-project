<template>
  <div >
    <div class="leader" >
      <div class="wrap">
        <div v-for="(obj,index) in list">
          <p @click="goSee(index)" class="title">{{obj.title}}</p>

        </div>
      </div>
    </div>
    <el-button @click="willShow = !willShow" class="see"></el-button>
    <transition name="el-zoom-in-center">
      <div v-show="willShow" class="all">
      <div  class="allList">
        <div v-for="(obj,index) in list">
        <p @click="goSee(index)" class="title">{{obj.title}}</p>
        <!--<router-link :to="obj.to" activeClass="aCla" class="atop" @click="goSee(index)">{{obj.title}}</router-link>-->
        </div>
      </div>
      </div>
    </transition>
      <router-view ref="jj"></router-view>


  </div>
</template>

<script>
  export default{
    name:'leader',
    data(){
        return{
          willShow:false,
          list:[
            {
              "to":"/home/leaderone",
              "channel_id":"11",
              "title":"无敌价",
              "aCla":'topCla'

            },
            {
              "to":"/home/leaderone",
              "channel_id":"27",
              "title":"用券专区",
              "aCla":'topCla'
            },
            {
              "to":"/home/leadertwo",
              "channel_id":"6",
              "title":"极致美护",
              "aCla":'topCla'
            },
            {
              "to":"/home/leadertwo",
              "channel_id":"9",
              "title":"极速保税区",
              "aCla":'topCla'
            },
            {
              "to":"/home/overseas",
              "channel_id":"15",
              "title":"海外直邮",
              "aCla":'topCla'
            },
            {
              "to":"/home/fashion",
              "channel_id":"12",
              "title":"时尚配饰",
              "aCla":'topCla'
            },
            {
              "to":"/home/life",
              "channel_id":"10",
              "title":"创意生活",
              "aCla":'topCla'
            },
            {
              "to":"/home/snacks",
              "channel_id":"1",
              "title":"全球零食",
              "aCla":'topCla'
            },
            {
              "to":"/home/cloth",
              "channel_id":"8",
              "title":"尖货女装",
              "aCla":'topCla'
            },
            {
              "to":"/home/leaderone",
              "channel_id":"3",
              "title":"本周特卖",
              "aCla":'topCla'
            },
            {
              "to":"/home/weeknews",
              "channel_id":"4",
              "title":"本周新品",
              "aCla":'topCla'
            }
          ]
        }
    },
    methods:{
        show(){
           if(this.willShow===true){
               this.willShow=false;
           }else{
               this.willShow=true;
           }
        },
      goSee(index,e,aa){
            if(!e){
                e=window.event;
            }


        var titleList=document.querySelectorAll('.title');
            for(var i=0;i<titleList.length;i++) {
              if (e.target===titleList[i]) {
                titleList[i].style.color = 'purple';
                titleList[i].style.fontWeight='600';
              } else {
                titleList[i].style.color = 'black';
                titleList[i].style.fontWeight='400';
              }
            }
        this.$router.push('/home/leaderone');
        localStorage.setItem('leaderone',index)
        if(this.$refs.jj){
          this.$refs.jj.news();
        }
//            if(index===0 || index===1 || index===9 || index===10){
//              this.$router.push('/home/leaderone');
//              localStorage.setItem('leaderone',index)
//              if(this.$refs.jj){
//                this.$refs.jj.news();
//              }
//            }
//            else if(index===3 || index===4){
//              this.$router.push("/home/leadertwo")
//              localStorage.setItem('leadertwo',index)
//              if(this.$refs.jj){
//                this.$refs.jj.news();
//              }
//            }else{
//              this.$router.push("/home/leaderthree")
//              localStorage.setItem('leaderthree',index)
//              if(this.$refs.jj){
//                this.$refs.jj.news();
//              }
//            }

      }
    }
  }
</script>

<style scoped>

.leader{
  height:3.5rem;
  background-color: white;
  margin-top: 1rem;
  overflow-x:scroll;
  position:fixed;
  top:3rem;
  z-index: 80;
}
.wrap{
  width:295%;
  height:3rem;
}
.wrap div{
  width:9%;
  display: inline-block;
  text-align: center;
  height:3rem;
  line-height: 4rem;
}
p{

  font-size: 1.3rem;
  color:#666;
}
.topCla{
  color:#b05bc0;
}

  .see{
    position:fixed;
    top:4rem;
    left:93%;
    width:7%;
    height:3.5rem;
    background-image: url(../assets/see.png);
    font-size: 100%;
    z-index: 99;
    border:none;
  }
  .all{
    width:100%;
    height:50rem;
    background-color: rgba(255,255,255,0.5);
    position: fixed;
    top:0;
    z-index:89;
  }
  .allList{

    width:100%;
    height:15rem;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
  }
  .allList div{
    width:19%;
    margin: 1rem;
  }
</style>
