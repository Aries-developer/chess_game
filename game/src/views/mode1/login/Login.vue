<template>
  <div class="login">
    <div :style="{backgroundColor:(skin==1?'#000':'')}" :class="bgUp?'login-bg-up':'login-bg-middle'"
      class="login-bg flex">
      <!-- 公司LOGO -->
      <div class="login-logo">公司LOGO</div>
      <!-- 背景图控制区域 --><img v-if="skin==1" src="@/assets/mode1/images/bg_1.jpg"><img v-if="skin==2"
        src="@/assets/mode1/images/bg_2.png"><img v-if="skin==3" src="@/assets/mode1/images/bg_3.jpg">
      <div class="login-card flex" :class="{  
'card-color1':skin==1,
//皮肤一 卡片颜色
'card-color2':skin==2,
//皮肤二 卡片颜色 
'card-color3':skin==3 //皮肤三 卡片颜色
}
">
        <ul>
          <!-- 手机号码输入框 -->
          <li class="card-li flex" :class="{'error': errors.has('checkPhone')}"><span
              class="login-icon login-icon-phone"></span><input oninput="if(value.length>11)value=value.slice(0,11)"
              v-validate="{ required: true, regex: /^[1][3,4,5,7,8][0-9]{9}$/ }" name="checkPhone" v-model="userPhone"
              placeholder="请输入手机号码" type="text"></li>
          <!-- 密码输入框 -->
          <li :class="{'error': errors.has('checkPassword')}" class="card-li flex"><span
              class="login-icon login-icon-password"></span><input minlength="6" maxlength="16"
              v-validate="{ required: true, regex: /^[\w_-]{6,16}$/}" name="checkPassword" v-model="userPwd"
              placeholder="请输入密码" type="password" @keyup.enter="login"></li>
        </ul>
        <ul class="login-button flex">
          <li :class="{
'button-color1':skin==1,
//皮肤一 按钮颜色
'button-color2':skin==2,
//皮肤二 按钮颜色
'button-color3':skin==3,
//皮肤三 按钮颜色
}

" class="button-register" @click="$router.push('/login/register')">注册</li>
          <li :class="{
'button-color1':skin==1,
//皮肤一 按钮颜色
'button-color2':skin==2,
//皮肤二 按钮颜色
'button-color3':skin==3,
//皮肤三 按钮颜色
}

" class="button-login" @click="login">登录</li>
          <li :class="{
'button-color1':skin==1,
//皮肤一 按钮颜色
'button-color2':skin==2,
//皮肤二 按钮颜色
'button-color3':skin==3,
//皮肤三 按钮颜色
}

" class="button-more" @click="show=true">更多</li>
        </ul>
      </div>
    </div>
    <div class="change_skin"><span @click="changeSkin">--换皮肤--</span><span @click="changeBg">排版--</span></div>
    <van-popup class="login-popup" v-model="show" position="bottom">
      <p @click="$router.push('/login/password')">找回密码</p>
      <p @click="$router.push('/login/sms')">验证码登录</p>
    </van-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        userPhone: "",
        userPwd: "",
        skin: 3, //初始皮肤为第二款
        bgUp: true, //登录卡片位置切换
        show: false
      }

      ;
    }

    ,
    mounted() {
      //将本地存储信息取出
      // localStorage.setItem('Login_skin',JSON.stringify(this.skin))
      //开发调试用-----------------------------------------------------
      let Login_skin = JSON.parse(localStorage.getItem("Login_skin"));
      let Login_bgUp = JSON.parse(localStorage.getItem("Login_bgUp"));
      let Login_data = JSON.parse(localStorage.getItem("Login_data"));
      // this.phone = Login_data.phone
      // this.password = Login_data.password
      this.bgUp = Login_bgUp.bgUp;
      this.skin = Login_skin;
      //---------------------------------------------------------------
      // 强制前台验证
      this.$validator.validate();
    }

    ,
    computed: {}

    ,
    methods: {

      // 切换皮肤
      changeSkin() {
        this.skin++;

        if (this.skin > 3) {
          this.skin = 1;
        }

        //开发调试用-----------------------------------------------------
        localStorage.setItem("Login_skin", JSON.stringify(this.skin));
      }

      ,
      changeBg() {
        this.bgUp = !this.bgUp;

        localStorage.setItem("Login_bgUp",
          JSON.stringify({
              bgUp: this.bgUp
            }

          ));
      }

      ,
      //登录事件
      login() {

        // 前台验证
        if (this.errors.any()) {
          this.$dialog.alert({
              message: "登录失败，请确认密码或账号是否正确！"
            }

          );
          return;
        } else {
          this.$toast.loading({
              duration: 0, // 持续展示 toast
              mask: true,
              message: "登陆中..."
            }

          );

          // ajax后台验证
          this.axios.post("/users/login", {
                userPhone: this.userPhone,
                userPwd: this.userPwd.toString()
              }

            ) // 请求成功

            .then(response => {
                this.$toast.clear();
                let res = response.data;

                if (res.status == 0) {

                  // console.log(1)
                  //将数据存在本地
                  localStorage.setItem("Login_data",
                    JSON.stringify({
                        userPhone: this.userPhone,
                        userPwd: this.userPwd
                      }

                    ));
                  // 登录成功页面跳转
                  this.$router.replace("/personal");
                } else {
                  this.$toast(res.msg);
                }
              }

            ) // 请求失败

            .catch(err => {
                this.$toast.clear();
                this.$toast("登录异常失败，请检查网络是否中断..");
              }

            );
        }
      }
    }
  }

  ;
</script>
<style lang="scss" scoped>
  @import "./index.scss";

  //皮肤更换按钮
  .change_skin {
    position: fixed;
    top: 10px;
    right: 10px;
    color: orangered;
    font-size: 20px;
  }

  //换肤按钮
  .login {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .login-bg {
    position: relative;
    width: 100%;
    height: 100%;

    .login-card {
      position: absolute;
      flex-direction: column;
      left: 5%;
      width: 90%;
      height: 240px;
      border-radius: 5px;
      box-shadow: 0px 0px 20px 0 #ddd;

      .card-li {
        width: 220px;
        padding-left: 20px;
        justify-content: space-between;
        background-color: #fff;
        margin-bottom: 10px;
        border-radius: 10px;
        border: 2px solid #4fb34c;
        color: #4fb34c;
      }

      //验证未通过时边框色
      .error {
        border: 2px solid red;
        color: red;
      }

      input {
        display: inline-block;
        background-color: transparent;
        width: 150px;
        height: 45px;
      }

      .login-icon {
        display: inline-block;
        width: 45px;
        height: 45px;
      }

      //此处需要客服所选版本更换图标
      .login-button {
        width: 240px;
        color: #fff;
        text-align: center;
        font-size: 12px;
        margin-top: 20px;
        justify-content: space-around;

        .button-register {
          width: 35px;
          height: 35px;
          line-height: 35px;
          border-radius: 50%;
        }

        .button-login {
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
        }

        .button-more {
          width: 35px;
          height: 35px;
          line-height: 35px;
          border-radius: 50%;
        }
      }
    }
  }

  //弹出层
  .login-popup {
    overflow-y: hidden;

    p {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      text-align: center;
      border-bottom: 1px solid #efefef;
    }
  }
</style>