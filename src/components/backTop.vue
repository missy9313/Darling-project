<template>
  <div class="backTop" v-show="scrolled">

    <a href="javascript:scroll(0,0)">
      <span class="backTopImg"></span>
    </a>

  </div>
</template>



<script>



  export default {
    data() {
      return {

        scrolled: false

      }
    },
    methods: {

      handleScroll(){ console.log(    this.scrolled);
        this.scrolled = window.scrollY > 500;

      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

</script>
<style>

.backTopImg{
  width: 30px;
  margin-left:9px;
  margin-top: 8px;
}


.backTop{
  width: 50px;
  height: 50px;
  border-radius: 25px; ;
  border: solid 1px salmon;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99999;
}



</style>
