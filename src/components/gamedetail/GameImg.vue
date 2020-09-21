<template>
  <div class="gameimg">
    <div class="main">
      <div class="left">
        <img :src="gameImg[currentIndex]" alt />
      </div>
      <div class="right">
        <vue-scroll :ops="ops" style="width:100%;height:100%">
          <img
            @click="imgClick(index)"
            v-for="(item,index) in gameImg"
            :key="index"
            :src="item"
            :class="{actice:index==currentIndex}"
            alt
          />
        </vue-scroll>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GameImg",
  props: {
    gameImg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // imgList: [
      //   { id: 0, url: require("@/assets/img/p1.jpg") },
      //   { id: 1, url: require("@/assets/img/p2.jpg") },
      //   { id: 2, url: require("@/assets/img/p3.jpg") },
      //   { id: 3, url: require("@/assets/img/p4.jpg") },
      //   { id: 4, url: require("@/assets/img/p5.jpg") },
      //   { id: 5, url: require("@/assets/img/p6.jpg") },
      // ],
      currentIndex: 0,
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          keepShow: true,
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: "#F5F5F5", //滚动条颜色
          opacity: 0.5, //滚动条透明度
          "overflow-x": "hidden",
        },
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    imgClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.gameimg {
  background: #32394c;
  padding: 10px;
  height: 350px;
  .main {
    height: 330px;
    display: flex;
    img {
      width: 100%;
      object-fit: cover;
    }
    .left {
      width: 70%;
      height: 100%;
      margin-right: 5px;
      img {
        height: 100%;
      }
    }

    .right {
      flex: 1;
      height: 100%;
      overflow: auto;
      img {
        cursor: pointer;
      }
    }
  }
}
</style>