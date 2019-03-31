<!-- 头部样式 -->
<template>
    <div class="headtop">
      <h1 class="headtop-title">
        <span>抖金</span>
        <span>畅玩</span>
      </h1>
      <div class="headtop-logo">
        <img src="@/assets/images/logo.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  
}

</script>
<style lang="scss" scoped>
$color1: rgb(213, 216, 19);
$color2: rgb(143, 16, 16);
.headtop{
      z-index: 9999;
      position: fixed;
      top: 0;
      width: 100%;
      height: 85px;
      overflow: hidden;
      background-color: $color2;
      border-bottom-left-radius: 30%;
      border-bottom-right-radius: 10%;
      .headtop-title{
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 35px;
        color: $color1;
        font-weight: bold;
        text-align: center;
      }
      .headtop-logo{//金币
        position: absolute;
        left: -16px;
        top: -10px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        img{
            position: absolute;
            top: -9px;
            left: -11px;
            width: 101px;
            height: 101px;
        }
    }
    .headtop-logo:before {
        display: inline-block;
        content: "";
        position: absolute;
        z-index: 1;
        width: 80px;
        height: 10px;
        background-color: rgba(255, 254, 194, 0.5);
        transform: rotate(-55deg);
        animation: blink 4s ease-in-out 2s infinite;
      }
      @keyframes blink {//金币闪烁
        from {left: -42px; top: 12px;}
        to {left: 38px; top: 60px;}
      }
    }
</style>