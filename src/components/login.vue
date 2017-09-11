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
        userName:'',
        user:''
    }
    },
  methods:{
    exit(){
      this.$router.push('/exit')
    }
  },
  created(){
      this.user=localStorage.getItem('user');
    var name1=this.user.slice(0,3);
    var p1=this.user.slice(3,7);
    var name2=p1.replace(p1,"****");
    var name3=this.user.slice(7,11);
      this.userName="达令"+name1+name2+name3;
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
    width:11%;
    height:4.5rem;
    border-radius: 50%;
    margin:0.5rem;
  }
  .mTitle p{
    font-size: 1.5rem;
  }
</style>
