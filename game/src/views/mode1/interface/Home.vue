<template>
  <div class="home">
    <Navbar :title="title" />
    <div class="home-swipe flex">
      <van-swipe :autoplay="5000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img style="width:100%;" :src="image.url">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-notice-bar text="恭喜小花在线充值累计达到10万元，成为VIP10级尊贵用户......." left-icon="volume-o" mode="link" />
    </div>
    <div class="home-menu">
      <div class="home-menu-item">
        <div class="home-menu-title">
          <i class="iconfont icon-jiangbei"></i>
          <span>推荐</span>
        </div>
        <div class="home-games home-games-first">
          <ul v-for="(games,index) in all_games.recommend" :key="index" class="flex">
            <li class="game" v-for="(game,game_url) in games" :key="game_url">
              <a :href="game_url">
                <img style="border:none;" :src="game.game_img" :alt="game.game_name">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="home-menu-item">
        <div class="home-menu-title">
          <i class="iconfont icon-qipaishi"></i>
          <span>棋牌</span>
        </div>
        <div class="home-games">
          <ul v-for="(games,index) in all_games.chess" :key="index" class="flex">
            <li class="game" v-for="(game,game_url) in games" :key="game_url">
              <a :href="game_url">
                <img style="border:none;" :src="game.game_img" :alt="game.game_name">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="home-menu-item">
        <div class="home-menu-title">
          <i class="iconfont icon-touzi"></i>
          <span>麻将</span>
        </div>
        <div class="home-games">
          <ul v-for="(games,index) in all_games.mahjong" :key="index" class="flex">
            <li class="game" v-for="(game,game_url) in games" :key="game_url">
              <a :href="game_url">
                <img style="border:none;" :src="game.game_img" :alt="game.game_name">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-friend flex">
      <div class="title">
        <span :class="{
                'head-bg1':skin==1,
                'head-bg2':skin==2,
                'head-bg3':skin==3}">
          <i class="iconfont icon-icon"></i>
          友情链接
        </span>
        <span :class="{
                'head-bg1':skin==1,
                'head-bg2':skin==2,
                'head-bg3':skin==3}"></span>
      </div>
      <div class="friendly-link">
        <span>六合彩</span>
        <span>大转盘</span>
      </div>
    </div>
    <Tabbar />
    <!-- <div @click="add">{{$store.state.mode1.money}}</div> -->
  </div>
</template>

<script>
  import {
    mapActions
  } from "vuex";
  export default {
    components: {},
    data() {
      return {
        title: "游戏大厅",
        skin: "",
        all_games: {
          recommend: [
            [{
                name: "麻将",
                game_url: "xxx",
                game_img: require("@//assets/images/game1.png")
              },
              {
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game2.png")
              },
              {
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game3.png")
              }
            ],
            [{
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game13.png")
              },
              {
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game5.png")
              },
              {
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game12.png")
              }
            ]
          ],
          chess: [
            [{
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game8.png")
              },
              {
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game10.png")
              },
              {
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game42.png")
              }
            ],
            [{
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game17.png")
              },
              {
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game29.png")
              },
              {
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/game14.png")
              }
            ]
          ],
          mahjong: [
            [{
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/more.png")
              },
              {
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/more.png")
              },
              {
                name: "麻将",
                game_url: "xxx",
                game_img: require("@/assets/images/more.png")
              }
            ]
          ]
        },
        images: [{
            url: require("@/assets/mode1/images/swipe_1.jpg")
          },
          {
            url: require("@/assets/mode1/images/swipe_2.png")
          },
          {
            url: require("@/assets/mode1/images/swipe_3.jpg")
          },
          {
            url: require("@/assets/mode1/images/swipe_4.png")
          }
        ]
      };
    },
    mounted() {
      this.skin = this.$store.state.mode1.Login_skin;
    },
    computed: {},
    methods: {
      ...mapActions("mode1", ["add", "reduce"])
    }
  };
</script>

<style lang="scss">
  //轮播
  .van-swipe {
    width: calc(100% - 2px);
    border-radius: 2px;

    .van-swipe__indicator {
      width: 18px;
      height: 2px;
      border-radius: 1px;
    }
  }
</style>

<style lang="scss" scoped>
  @import "@/assets/mode1/common.scss";
  $color1: rgb(213, 216, 19);
  $color2: rgb(143, 16, 16);

  .home {
    padding: 60px 0 100px 0;
    overflow-x: hidden;
    background: url("../../../assets/mode1/images/game_item_1.png") no-repeat;
    background-size: cover;
  }

  .home-swipe {
    width: 100%;
    padding: 1px 0;
  }

  .home-menu {
    padding-top: 10px;
  }

  .home-menu-title {
    margin-left: 10px;
    height: 30px;
    line-height: 30px;
    color: #ac497f;

    i {
      font-size: 20px;
    }

    img {
      width: 40px;
      height: 40px;
    }

    span {
      display: inline-block;
      margin-left: 10px;
      font-weight: bold;
    }
  }

  .home-friend {
    flex-direction: column;
    font-size: 12px;
    padding-top: 20px;

    .title {
      width: 100%;
      position: relative;

      span {
        display: inline-block;
        color: #fff;
      }

      span:first-child {
        width: 100px;
        font-size: 13px;
        font-weight: bold;
        border-radius: 15px;
        text-align: center;
        height: 30px;
        line-height: 30px;
      }

      span:last-child {
        position: absolute;
        top: 15px;
        width: 100%;
        height: 2px;
      }
    }

    .friendly-link {
      width: 100%;
      padding-top: 5px;

      span {
        margin-left: 10px;
        color: #aaa;
      }
    }
  }

  //游戏列表
  .home-games {
    padding-top: 10px;
    margin-left: 10px;
    width: calc(100% - 20px);

    // overflow: hidden;
    ul {
      justify-content: space-between;
      width: 100%;

      a,
      img {
        display: inline-block;
        width: 100px;
        height: 100px;
      }

      .game {
        border: 1px solid #eee;
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 2px 3px 10px 0 $color2;
      }
    }
  }
</style>