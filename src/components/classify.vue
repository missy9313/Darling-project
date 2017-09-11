<template>
  <div>
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading"
               style="background-color:rgba(0,0,0,0) ;border:none">
         </el-button>
    <go-search></go-search>
      <left-bar></left-bar>
  </div>
</template>

<script>
  import goSearch from '@/components/home/goSearch'
  import leftBar from '@/components/leftBar'
  export default{
    name:'classify',
    data(){
        return{
          fullscreenLoading:false,
        }
    },
    components:{
      goSearch,
      leftBar

    },
    created(){
      this.openFullScreen();
    },
    methods:{
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1500);
      }
    }
  }
</script>

<style scoped>

</style>
