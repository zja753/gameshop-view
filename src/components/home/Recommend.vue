<template>
  <div class="recommend">
    <div class="item">
      <div class="img">
        <img :src="imgUrl[0]" alt />
      </div>
      <div class="title">降速经济全新体验到来</div>
    </div>
    <div class="item">
      <div class="img">
        <img :src="imgUrl[1]" alt />
      </div>
      <div class="title">降速经济全新体验到来</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      imgUrl: [require("@/assets/img/p2.jpg"), require("@/assets/img/p3.jpg")],
    };
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid red;
  .item {
    width: 590px;
    height: 250px;
    border: 1px solid rgba($color: #999, $alpha: 0.6);
    border-radius: 10px;
    overflow: hidden;
    .img {
      width: 100%;
      height: 200px;
    }
    .title {
      height: 50px;
      font-size: 20px;
      text-align: center;
      color: #b9bfee;
      display: block;
      position: relative;
      background-color: #32394c;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>