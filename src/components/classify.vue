<template>
  <div>
    <go-search></go-search>
      <left-bar></left-bar>
  </div>
</template>

<script>
  import goSearch from '@/components/goSearch'
  import leftBar from '@/components/leftBar'
  export default{
    name:'classify',
    components:{
      goSearch,
      leftBar

    }
  }
</script>

<style scoped>

</style>
