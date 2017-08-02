<template>
  <div>
   <register></register>
  </div>
</template>

<script>
  import register from "@/components/register"
  export default{
    name:'mine',
    components:{
        register,
    },
    created(){
        if(localStorage.getItem('user')){
          this.$router.push('/login')
        }
    }
  }
</script>
<style scoped>

</style>
