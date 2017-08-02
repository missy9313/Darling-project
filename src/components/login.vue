<template>
  <div>
    <!--用户名-->
    <div class="mTitle" @click="exit">
      <img src="../assets/users.png" alt="">
      <p>{{userName}}</p>
    </div>
    <order></order>
    <wallet></wallet>
    <manage></manage>
  </div>
</template>

<script>
  import order from '@/components/mine/order'
  import wallet from '@/components/mine/wallet'
  import manage from '@/components/mine/manage'
export default{
  name:'login',
  data(){
    return{
        userName:''
    }
    },
  methods:{
    exit(){
      this.$router.push('/exit')
    }
  },
  created(){
      this.userName="达令"+localStorage.getItem('user');

  },
  components:{
    order,
    wallet,
    manage
  }
}
</script>

<style scoped>
.mTitle{
  width:100%;
  height:8rem;
  text-align: center;
  background-color: white;
  margin-bottom: 1rem;
}
  .mTitle img{
    width:15%;
    height:4rem;
    border-radius: 50%;
    margin:0.5rem;
  }
  .mTitle p{
    font-size: 1.5rem;
  }
</style>
