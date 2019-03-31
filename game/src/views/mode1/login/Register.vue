<template>
  <div class="register flex">
    <Navbar :title="title">
      <span class="arrow-back iconfont icon-ios-arrow-back" slot="left" @click="$router.back()"></span>
    </Navbar>
    <ul class="register-card flex">
      <li :class="{'error': errors.has('checkPhone')}">
        <span class="iconfont icon-shouji"></span>
        <input oninput="if(value.length>11)value=value.slice(0,11)"
          v-validate="{ required: true, regex: /^[1][3,4,5,7,8][0-9]{9}$/ }" name="checkPhone" v-model="userPhone"
          placeholder="请输入手机号码" type="text">
      </li>
      <li>
        <span class="iconfont icon-dui1"></span>
        <input type="text" placeholder="请输入验证码" v-model="userCode">
        <span class="code iconfont icon-rocket"></span>
      </li>
      <li :class="{'error': errors.has('checkPassword')}">
        <span class="iconfont icon-mima3"></span>
        <input minlength="6" maxlength="16" v-validate="{ required: true, regex: /^[\w_-]{6,16}$/}" name="checkPassword"
          v-model="userPwd" placeholder="请输入密码" type="password" @keyup.enter="login">
      </li>
      <li :class="{'error': errors.has('checkPasswordAgain')||(userPwd!==userPwdAgain)}">
        <span class="iconfont icon-mima1"></span>
        <input minlength="6" maxlength="16" v-validate="{ required: true, regex: /^[\w_-]{6,16}$/}"
          name="checkPasswordAgain" v-model="userPwdAgain" placeholder="请输入密码" type="password" @keyup.enter="login">
      </li>
      <li class="register-button" @click="register" :class="{
      'button-bg1':skin==1,
      'button-bg2':skin==2,
      'button-bg3':skin==3}" @keyup.enter="register">立即注册</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "注册",
        skin: "",
        userPhone: "",
        userCode: "",
        userPwd: "",
        userPwdAgain: ""
      };
    },
    mounted() {
      this.skin = this.$store.state.mode1.Login_skin;
      this.$validator.validate();
      console.log(this.skin);
    },
    methods: {
      register() {
        if (this.errors.any() || this.userPwd !== this.userPwdAgain) {
          this.$dialog.alert({
            message: "请确认所填信息是否全部正确"
          });
          return;
        } else {
          this.$toast.loading({
            duration: 0, // 持续展示 toast
            mask: true
          });
          this.axios
            .post("api/users/register", {
              userPhone: this.userPhone,
              userPwd: this.userPwd
              // userCode: "",
            })
            .then(response => {
              let res = response.data;
              this.$toast.clear();
              if (res.status == 0) {
                this.$dialog.alert({
                  message: "亲！恭喜您注册成功。"
                });
              } else {
                this.$toast(res.msg);
              }
            })
            .catch(err => {
              this.$toast.clear();
              this.$toast("服务器繁忙，请稍后再试.....");
            });
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "./index.scss";

  .register {
    position: relative;
    padding-top: 60px;

    .arrow-back {
      position: absolute;
      left: 10px;
    }
  }

  .register-card {
    flex-direction: column;
    width: 100%;
    margin-top: 50px;

    li {
      position: relative;
      width: 300px;
      height: 80px;
      color: rgb(77, 161, 7);
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

    .error {
      color: red;
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

    .register-button {
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-top: 70px;
      color: #fff;
      border-radius: 5px;
    }
  }
</style>