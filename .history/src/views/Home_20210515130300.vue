<template>
  <div class="home">
    <Banner />
    <!-- <Recommend /> -->
    <div class="content">
      <p>为您推荐</p>
      <GameRec :productList="recommendProductList" />
    </div>
    <div class="content">
      <p>热门游戏</p>
      <GameRec :productList="hotProductList" />
    </div>
    <div class="content">
      <p>热门小组</p>
      <HotGroup />
    </div>
    <div class="gamelist">
      <div class="list">
        <div class="topbar">
          <span
            class="cate"
            v-for="(item, index) in cateList"
            :key="index"
            :class="{ active: currentIndex == index }"
            @click="cateClick(index)"
          >
            {{ item }}
            <span class="icon" v-if="index != cateList.length - 1">-</span>
          </span>
        </div>
        <Game class="game" />
      </div>
      <div class="toplist">
        <div class="topbar">
          <span
            class="cate"
            v-for="(item, index) in topList"
            :key="index"
            :class="{ active: currentIndex2 == index }"
            @click="topClick(index)"
          >
            {{ item }}
            <span class="icon" v-if="index != topList.length - 1">-</span>
          </span>
        </div>
        <TopGame />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/home/Banner";
// import Recommend from "@/components/home/Recommend";
import GameRec from "@/components/home/GameRec";
import HotGroup from "@/components/home/HotGroup";
import Game from "@/components/gamelist/Game";
import TopGame from "@/components/gamelist/TopGame";

export default {
  name: "Home",
  data() {
    return {
      list: [
        { title: "【推荐】今日最超值", data: [{ name: "游戏名" }] },
        { title: "【推荐】预售同样精彩", data: [{ name: "游戏名" }] },
        { title: "【推荐】角色扮演推荐", data: [{ name: "游戏名" }] },
      ],
      cateList: ["最新", "促销", "预售"],
      topList: ["周排行", "月排行"],
      currentIndex: 0,
      currentIndex2: 0,
      recommendProductList: [],
      hotProductList: [],
    };
  },
  components: { Banner, Recommend, GameRec, HotGroup, Game, TopGame },
  created() {
    this.fetchRecommendProductList();
    this.fetchHotProductList();
  },
  methods: {
    cateClick(index) {
      this.currentIndex = index;
    },
    topClick(index) {
      this.currentIndex2 = index;
    },
    fetchRecommendProductList() {
      this.$axios
        .get("product/recommend", { user_id: localStorage.getItem("user_id") })
        .then((res) => {
          const { data } = res;
          this.recommendProductList = data;
        });
    },
    fetchHotProductList() {
      this.$axios.get("product/hot", {}).then((res) => {
        const { data } = res;
        this.hotProductList = data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #202539;
  min-width: 1200px;
  .content {
    width: 1200px;
    margin: auto;
    p {
      color: #b9bfee;
      font-size: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba($color: #999, $alpha: 0.6);
    }
  }
  .gamelist {
    padding: 20px 0;
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    color: rgba($color: #ddd, $alpha: 0.6);
    .active {
      color: rgba($color: #ddd, $alpha: 1);
    }
    .topbar {
      margin-bottom: 20px;
    }
    .icon {
      font-size: 20px;
      padding: 0 10px;
    }
    .cate {
      cursor: pointer;
    }
    .toplist {
      width: 350px;
    }
  }
}
</style>
