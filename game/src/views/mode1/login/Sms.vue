<template>
  <div class="sms flex">
    <Navbar :title="title">
      <span class="arrow-back iconfont icon-ios-arrow-back" slot="left" @click="$router.back()"></span>
    </Navbar>
    <ul class="sms-card flex">
      <li>
        <span class="iconfont icon-shouji"></span>
        <input type="text" placeholder="请输入手机号码">
      </li>
      <li>
        <span class="iconfont icon-dui1"></span>
        <input type="text" placeholder="请输入验证码">
        <span class="code iconfont icon-rocket"></span>
      </li>
      <li class="sms-button" :class="{
      'button-bg1':skin==1,
      'button-bg2':skin==2,
      'button-bg3':skin==3}">登录</li>
    </ul>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        title: '验证码登录',
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
  @import './index.scss';

  .sms {
    position: relative;
    padding-top: 60px;

    .arrow-back {
      position: absolute;
      left: 10px;
    }
  }

  .sms-card {
    flex-direction: column;
    width: 100%;
    margin-top: 50px;

    li {
      position: relative;
      width: 300px;
      height: 80px;
      border-bottom: 1px solid #efefef;
    }

    span,
    input {
      display: inline-block;
      position: absolute;
      bottom: 10px;
    }

    span {
      font-size: 30px;
    }

    span.code {
      right: 0;
      height: 18px;
      line-height: 12px;
      font-size: 30px;
      padding-left: 10px;
      border-left: 1px solid #ddd;
      color: rgb(77, 161, 7);
    }

    input {
      left: 50px;
      width: 175px;
    }

    .sms-button {
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-top: 80px;
      color: #fff;
      border-radius: 5px;
    }
  }
</style>