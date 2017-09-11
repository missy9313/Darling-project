<template>
  <div>
   <register v-if="logining"></register>
    <login v-else></login>
  </div>
</template>

<script>
  import register from "@/components/register"
  import login from "@/components/login"
  export default{
    name:'mine',
    data(){
      return{
        logining:true
      }
    },
    components:{
        register,
        login
    },
    created(){
        if(localStorage.getItem('user')){
            this.logining=false;
        }
    }
  }
</script>
<style scoped>

</style>
