<template>
  <div class="group">
    <div class="item" v-for="item in 4" :key="item.key">
      <img :src="imgUrl" alt />
      <div class="text">
        <h2>杉果热门讨论组</h2>
        <div class="bottom">
          <span>玩家数:1128504</span>
          <span>主题数:124124</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotGroup",
  data() {
    return {
      imgUrl: require("@/assets/img/p3.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.group {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .item {
    width: 24%;
    height: 200px;
    position: relative;
    cursor: pointer;
    &::before {
      content: "";
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(
        rgba($color: #2d3436, $alpha: 0),
        rgba($color: #2d3436, $alpha: 1)
      );
    }
    img {
      width: 100%;
    }
    .text {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      h2 {
        margin: 20px 0px;
        text-align: center;
        font-size: 20px;
        color: rgba($color: #fff, $alpha: 0.8);
      }
      .bottom {
        position: absolute;
        width: 100%;
        bottom: 0;
        display: flex;
        justify-content: space-between;
      }
      span {
        color: rgba($color: #fff, $alpha: 0.6);
        font-size: 14px;
        margin: 10px 20px;
      }
    }
  }
}
</style>