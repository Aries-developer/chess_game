<!-- 底部菜单栏 -->
<template>
    <div class="tabbar flex">
      <router-link to="/home">
        <ul class="tabbar-ul flex-column" 
            :class="{
            'text-bg1':skin==1,
            'text-bg2':skin==2,
            'text-bg3':skin==3}">
          <li class="tabbar-li">
            <i v-if="$route.path === '/home'" class="iconfont icon-youxi2"></i>
            <i v-else class="iconfont icon-youxi1"></i>
          </li>
          <li class="tabbar-li">
            <span>大厅</span>
          </li>
        </ul>
      </router-link>
      <router-link to="/business">
        <ul class="tabbar-ul flex-column"
          :class="{
          'text-bg1':skin==1,
          'text-bg2':skin==2,
          'text-bg3':skin==3}">
          <li class="tabbar-li">
            <i v-if="$route.path === '/business'" class="iconfont icon-renminbi"></i>
            <i v-else class="iconfont icon-rmb"></i>
          </li>
          <li class="tabbar-li">
            <span>充值</span>
          </li>
        </ul>
      </router-link>
      <router-link to="/personal">
        <ul class="tabbar-ul flex-column" 
            :class="{
            'text-bg1':skin==1,
            'text-bg2':skin==2,
            'text-bg3':skin==3}">
          <li class="tabbar-li">
            <i v-if="$route.path === '/personal'" class="iconfont icon-huiyuan-kuai"></i>
            <i v-else class="iconfont icon-huiyuan"></i>
          </li>
          <li class="tabbar-li">
            <span>会员</span>
          </li>
        </ul>
      </router-link>
    </div>
</template>

<script>
export default {
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
$color1: rgb(213, 216, 19);
$color2: rgb(143, 16, 16);
//tabbar样式
  .tabbar{
    position: fixed;
    justify-content: space-around;
    width: 100%;
    bottom: 0;
    height: 48px;
    border-top: 1px solid #ddd;
    background-color: #fafafa;
    z-index: 99999;
    .tabbar-li{
      i{font-size: 22px;}
      span{font-size: 12px;}
    }
  }
</style>