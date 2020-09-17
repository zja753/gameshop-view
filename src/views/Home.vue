<template>
  <div class="home">
    <Banner />
    <Recommend />
    <div class="content" v-for="(item,index) in list" :key="index">
      <p>{{item.title}}</p>
      <GameRec />
    </div>
    <div class="content">
      <p>热门小组</p>
      <HotGroup />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/home/Banner";
import Recommend from "@/components/home/Recommend";
import GameRec from "@/components/home/GameRec";
import HotGroup from "@/components/home/HotGroup";

export default {
  name: "Home",
  data() {
    return {
      list: [
        { title: "【推荐】今日最超值", data: [{ name: "游戏名" }] },
        { title: "【推荐】预售同样精彩", data: [{ name: "游戏名" }] },
        { title: "【推荐】角色扮演推荐", data: [{ name: "游戏名" }] },
      ],
    };
  },
  components: { Banner, Recommend, GameRec, HotGroup },
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
}
</style>