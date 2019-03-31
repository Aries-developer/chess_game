<!-- 菜单栏 -->
<template>
    <div class="tabbar">
      <router-link to="/home">
        <ul class="tabbar-ul flex-column">
          <li class="tabbar-li">
            <i v-if="$route.path === '/home'" class="iconfont icon-home1"></i>
            <i v-else class="iconfont icon-home"></i>
          </li>
          <li class="tabbar-li">
            <span>大厅</span>
          </li>
        </ul>
      </router-link>
      <router-link to="/business">
        <ul class="tabbar-ul flex-column">
          <li class="tabbar-li">
            <i v-if="$route.path === '/business'" class="iconfont icon-qian1"></i>
            <i v-else class="iconfont icon-qian"></i>
          </li>
          <li class="tabbar-li">
            <span>充值</span>
          </li>
        </ul>
      </router-link>
      <router-link to="/personal">
        <ul class="tabbar-ul flex-column">
          <li class="tabbar-li">
            <i v-if="$route.path === '/personal'" class="iconfont icon-gerenzhongxinlv"></i>
            <i v-else class="iconfont icon-gerenzhongxinhui"></i>
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
  
}
</script>

<style lang="scss" scoped>
$color1: rgb(213, 216, 19);
$color2: rgb(143, 16, 16);
//tabbar样式
  .tabbar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 48px;
    box-shadow: 0px 0px 2px 10 rgb(175, 159, 159);
    background-color: $color2;
    z-index: 99999;
    .tabbar-li{
      color: $color1;
      i{font-size: 22px;}
      span{font-size: 12px;}
    }
  }
</style>