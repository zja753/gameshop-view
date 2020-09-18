<template>
  <div class="gamelist">
    <main>
      <h2>原子农场</h2>
      <h3>Atomicrops</h3>
      <div class="content">
        <div class="left">
          <GameImg />
          <GameIntroduction />
        </div>
        <div class="right">
          <GameInfo />
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
    return {};
  },
  components: {
    GameImg,
    GameInfo,
    GameIntroduction,
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