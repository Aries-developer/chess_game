<template>
  <div class="personal">
    <Navbar :title="title" />
    <van-collapse v-model="activeNames" accordion>
      <van-collapse-item title="账户" name="1" icon="smile-comment-o">
        <p>
          <span>账号：</span>
          <span></span>
        </p>
        <p>
          <span>密码：</span>
          <span></span>
        </p>
        <p class="svg">
          <!--VIP-->
          <span>
            <span></span>
            <span class="svg-info">
              <i>普通会员</i>
            </span>
          </span>
        </p>
      </van-collapse-item>
      <van-collapse-item title="金柜" name="2" icon="stop-circle-o">
        <p class="svg">
          <!--余额-->
          <span>
            <img src="@/assets/mode1/images/yingbi.png" alt>
            <span class="svg-info rmb">
              <i>1000</i>
            </span>
          </span>
          <van-button @click="$router.push({
                    name: 'Business',
                    params: {
                        withdrawId: 2
                    }
                })" size="mini">提现</van-button>
        </p>
        <p class="svg">
          <!--筹码-->
          <span>
            <img src="@/assets/mode1/images/chouma.png" alt>
            <span class="svg-info doudou">
              <i>500</i>
            </span>
          </span>
          <van-button size="mini">兑换</van-button>
        </p>
        <p class="explan">说明：金币与筹码以一定比例相互兑换，筹码用于游戏，金币用于提现！</p>
        <p class="explan">比例：1：100（金币/筹码）</p>
      </van-collapse-item>
      <van-collapse-item title="记录" name="3" icon="bars">
        <van-button class="more" size="mini">更多</van-button>
      </van-collapse-item>
      <van-collapse-item title="设置" name="4" icon="setting-o">
        <van-button @click="Go('/login/pwd')" size="small">修改密码</van-button>
        <van-button @click="Go('/business')" size="small">去充值</van-button>
        <van-button @click="Go('/home')" size="small">返回大厅</van-button>
        <van-button @click="logout" size="small">退出登录</van-button>
      </van-collapse-item>
    </van-collapse>
    <Loginflag :flag="flag" :unLogin="unLogin" />
    <Tabbar />
  </div>
</template>

<script>
  import Loginflag from "@/components/mode1/Loginflag.vue";
  import {
    mapActions
  } from "vuex";
  export default {
    components: {
      Loginflag
    },
    data() {
      return {
        title: '会员中心',
        activeNames: ["1"],
        flag: false,
        unLogin: ''
      };
    },
    mounted() {
      this.checklogin(() => {
        this.flag = true;
        this.unLogin = this.$store.state.mode1.unLogin
      });
    },
    methods: {
      ...mapActions("mode1", ["checklogin"]),
      Go(url) {
        //路由跳转
        this.$router.push(url);
      },
      logout() {
        this.$dialog
          .confirm({
            // title: '退出',
            message: "您确认要退出登录状态吗？"
          })
          .then(() => {
            this.axios.post("/api/users/logout").then(response => {
              let res = response.data;
              if (res.status == "0") {
                this.$router.replace("/login");
              }
            });
          })
          .catch(() => {
            // on cancel
          });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .icon {
    width: 30px;
    height: 30px;
    display: inline-block;
    position: relative;
    top: 6px;
    fill: currentColor;
    overflow: hidden;
  }

  $color1: rgb(213, 216, 19);
  $color2: rgb(143, 16, 16);

  .personal {
    position: relative;
    overflow-x: hidden;
    top: 60px;

    .svg {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      .svg-info {
        text-indent: 13px;
        color: $color2;
        position: relative;
        top: -2px;
      }

      .doudou {
        color: $color1;
        top: -4px;
      }

      i {
        display: inline-block;
        font-style: normal;
        font-weight: bold;
      }
    }

    .explan {
      //兑换说明
      margin-top: 5px;
      color: $color2;
      font-size: 12px;
    }

    .head {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 150px;
      background-color: rgb(143, 16, 16);

      .user {
        position: relative;

        .info {
          position: absolute;
          top: 40px;
          left: 95px;
          color: #fff;
          font-size: 15px;

          .edit {
            position: relative;
            top: 3px;
            left: 10px;
          }
        }

        .avatar-data {
          position: absolute;
          top: 15px;
          left: 10px;
          width: 60px;
          height: 60px;
          background-color: $color1;
          border-radius: 50%;
          overflow: hidden;

          img {
            width: 60px;
            height: 60px;
          }
        }
      }

      .logo {
        img {
          position: absolute;
          height: 180px;
          left: 40px;
          opacity: 0.8;
        }
      }
    }
  }
</style>