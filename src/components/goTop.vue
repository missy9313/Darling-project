<template>
  <div>
    <div class="goTop" @click="goTop">
       Top
    </div>
  </div>
</template>

<script>
  export default{
    name:'goTop',
    methods:{
        goTop(e){
            if(!e){
                e=window.event;
            }
            document.body.scrollTop=0;
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
  }
</style>
