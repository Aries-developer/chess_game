<template>
  <div v-if="flag" class="loginflag flex">
    <img src="@/assets/mode1/images/loginflag3.jpg">
    <p>{{unLogin}}</p>
    <p>NO.No.No.No......</p>
    <p @click="$router.push('/login')">
      这就去
      <span>登录</span>！(*￣︶￣)
    </p>
  </div>
</template>

<script>
export default {
  props: ["flag", "unLogin"]
};
</script>
<style lang="scss" scoped>
.loginflag {
  top: 60px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #f2f2f2;
  position: fixed;
  z-index: 999;
  font-size: 15px;
  img {
    margin-top: -200px;
  }
  p {
    height: 30px;
    line-height: 30px;
  }
  span {
    font-weight: bold;
    font-size: 20px;
    color: #f05508;
  }
}
</style>