<template>
  <div>
    <div class="goTop" @click="goTops" v-show="showTop">
       Top
    </div>
  </div>
</template>

<script>
  export default{
    name:'goTop',
    data(){
        return{
            top:'',
          showTop:false,
          scroll:''
        }
    },
    mounted() {
      window.addEventListener('scroll', this.goTop)
    },
    methods:{
        goTops(e){
            if(!e){
                e=window.event;
            }
            document.body.scrollTop=0;
        },
      goTop(){
        this.scroll = document.body.scrollTop;
        if(parseInt(this.scroll)>600){
            this.showTop=true;
        }else{
         this.showTop=false;
        }
      }
    }
  }
</script>

<style scoped>
  .goTop{
    width:5rem;
    height:5rem;
    border-radius: 50%;
    color:white;
    background-color: rgba(198,107,205,0.7);
    text-align: center;
    line-height: 5rem;
    /*position:fixed;*/
    /*top:500px;*/
  }
</style>
