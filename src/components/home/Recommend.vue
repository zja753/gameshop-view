<template>
  <div class="recommend">
    <div class="item_anima">
      <div class="img">
        <img :src="imgUrl[0]" alt />
      </div>
      <div class="title">降速经济全新体验到来</div>
    </div>
    <div class="item_anima">
      <div class="img">
        <img :src="imgUrl[1]" alt />
      </div>
      <div class="title">降速经济全新体验到来</div>
    </div>
  </div>
</template>

<script>
import scrollReveal from "scrollreveal";

export default {
  name: "Recommend",
  data() {
    return {
      imgUrl: [require("@/assets/img/p2.jpg"), require("@/assets/img/p3.jpg")],
      scrollReveal: scrollReveal(),
    };
  },
  created() {},
  mounted() {
    this.scrollReveal.reveal(".item_anima", {
      // 动画的时长
      duration: 500,
      // 延迟时间
      delay: 100,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: "center",
      // 回滚的时候是否再次触发动画
      reset: false,
      // 在移动端是否使用动画
      mobile: false,
      // 滚动的距离，单位可以用%，rem等
      distance: "0",
      // 其他可用的动画效果
      opacity: 0.001,
      easing: "linear",
      scale: 0.9,
    });
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  width: 1200px;
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid red;
  .item_anima {
    width: 590px;
    height: 250px;
    border: 1px solid rgba($color: #999, $alpha: 0.6);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    // &:hover{

    // }
    .img {
      width: 100%;
      height: 220px;
    }
    .title {
      height: 30px;
      font-size: 18px;
      text-align: center;
      color: #b9bfee;
      display: block;
      position: relative;
      background-color: #32394c;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>