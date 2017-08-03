<template>
  <div>
    <div class="leader" v-if="willShow">
      <div class="wrap">
        <div v-for="obj in list">
          <router-link :to="obj.to"  >{{obj.title}}</router-link>
        </div>
      </div>
    </div>
    <div v-else class="all">
      <div class="allList">
        <div v-for="obj in list">
          <router-link :to="obj.to" activeClass="aCla" class="atop">{{obj.title}}</router-link>
        </div>
      </div>

    </div>
    <div class="see" @click="show">
    </div>

      <router-view></router-view>


  </div>
</template>

<script>
  export default{
    name:'leader',
    data(){
        return{
          willShow:true,
          list:[
            {
              "to":"/home/invincible",
              "channel_id":"11",
              "title":"无敌价",
              "aCla":'topCla'

            },
            {
              "to":"/home/ticket",
              "channel_id":"27",
              "title":"用券专区",
              "aCla":'topCla'
            },
            {
              "to":"/home/beauty",
              "channel_id":"6",
              "title":"极致美护",
              "aCla":'topCla'
            },
            {
              "to":"/home/bonded",
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
              "to":"/home/spacial",
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
           if(this.willShow==true){
               this.willShow=false;
           }else{
               this.willShow=true;
           }

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
  z-index: 90;
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
a{
  text-decoration: none;
  font-size: 1.3rem;
  color:#666;
}
.topCla{
  color:#b05bc0;
}

  .see{
    position:fixed;
    top:4.3rem;
    left:90%;
    width:4rem;
    height:3rem;
    background-image: url(../assets/see.png);
    font-size: 100%;
    z-index: 99;
  }
  .all{
    width:100%;
    height:50rem;
    background-color: rgba(255,255,255,0.5);
    position: fixed;
    top:0;
    z-index: 99;
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
