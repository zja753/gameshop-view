<template>
  <div class="gamelist">
    <main>
      <h2>{{gameInfo.name}}</h2>
      <h3>{{gameInfo.name_en}}</h3>
      <div class="content">
        <div class="left">
          <GameImg v-if="gameInfo" :gameImg="gameInfo.detailImgs" />
          <GameIntroduction v-if="gameInfo" :gameInfo="gameInfo" />
        </div>
        <div class="right">
          <GameInfo v-if="gameInfo" :gameInfo="gameInfo" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import GameImg from "@/components/gamedetail/GameImg";
import GameInfo from "@/components/gamedetail/GameInfo";
import GameIntroduction from "@/components/gamedetail/GameIntroduction";

export default {
  name: "GameDetail",
  data() {
    return {
      gameInfo: "",
    };
  },
  components: {
    GameImg,
    GameInfo,
    GameIntroduction,
  },
  created() {
    this.getGameInfo();
  },
  mounted() {},
  methods: {
    getGameInfo() {
      this.$axios
        .get("/getProductInfo", { _id: this.$route.params.id })
        .then((res) => {
          // console.log(res);
          this.gameInfo = res.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.gamelist {
  // height: 2000px;
  padding: 50px 0;
  main {
    width: 1200px;
    margin: auto;
    h2 {
      color: #afb8de;
      margin: 5px 0;
    }
    h3 {
      color: #757f9d;
      margin: 5px 0;
    }
    .content {
      display: flex;
      justify-content: space-between;
      .left {
        border: 1px solid red;
        width: 830px;
      }
      .right {
        width: 350px;
        border: 1px solid red;
      }
    }
  }
}
</style>