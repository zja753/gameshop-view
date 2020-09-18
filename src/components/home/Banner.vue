<template>
  <div class="block">
    <!-- <span class="demonstration">Click 指示器触发</span> -->
    <el-carousel trigger="click" height="450px">
      <el-carousel-item v-for="item in  imgList" :key="item.id">
        <img class="img" :src="item.url" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      imgList: [
        { id: 0, url: require("@/assets/img/p1.jpg") },
        { id: 1, url: require("@/assets/img/p2.jpg") },
        { id: 2, url: require("@/assets/img/p3.jpg") },
        { id: 3, url: require("@/assets/img/p4.jpg") },
        { id: 4, url: require("@/assets/img/p5.jpg") },
        { id: 5, url: require("@/assets/img/p6.jpg") },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.block {
  height: 500px;
}
.img {
  width: 100%;
  // object-fit: cover;
}
</style>
