<template>
  <div>
    <super-goods ></super-goods>
    <on-going></on-going>
    <heart-goods></heart-goods>
    <act-goods></act-goods>
    <new-goods></new-goods>
    <hot-goods></hot-goods>
    <guess></guess>
  </div>
</template>

<script>
  import superGoods from'@/components/superGoods'
  import onGoing from'@/components/onGoing'
  import heartGoods from'@/components/heartGoods'
  import actGoods from'@/components/actGoods'
  import newGoods from '@/components/newGoods'
  import hotGoods from '@/components/hotGoods'
  import guess from '@/components/guess'
  export default{
    name:'homeGoods',
      components:{
        superGoods,
        onGoing,
        heartGoods,
        actGoods,
        newGoods,
        hotGoods,
        guess
      }
  }
</script>
<style scoped>

</style>

