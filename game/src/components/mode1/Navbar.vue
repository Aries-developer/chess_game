<!--头部导航栏-->
<template>
    <div class="navbar"
        :class="{
        'head-bg1':skin==1,
        'head-bg2':skin==2,
        'head-bg3':skin==3}">
        <slot name="left"></slot>
        <span>{{title}}</span>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
  props: ['title'],
  data(){
    return {
      skin: ''
    }
  },
  mounted() {
      this.skin = this.$store.state.mode1.Login_skin
      console.log(this.skin)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mode1/common.scss';
    .navbar{
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #fff;
        z-index: 9999;
    } 
</style>