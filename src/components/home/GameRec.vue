<template>
  <div class="game">
    <div class="item" v-for="item in 5" :key="item.id">
      <div class="img">
        <img :src="imgUrl" alt />
      </div>
      <div class="text">
        <h2>游戏名</h2>
        <div class="bottom">
          <div class="discount">
            <span>-20%</span>
          </div>
          <div class="price">
            <p>原价</p>
            <p>现价</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameRec",
  data() {
    return {
      imgUrl: require("@/assets/img/p1.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.game {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  .item {
    width: 19.5%;
    border: 1px solid #32394c;
    background: #32394c;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    // border: 1px solid red;
    img {
      width: 100%;
    }
    h2 {
      font-size: 14px;
      color: #6c7d9f;
      text-indent: 2em;
    }
    .bottom {
      color: #6c7d9f;
      padding: 10px;
      align-items: center;
      display: flex;
      margin-left: auto;
      justify-content: flex-end;
      span {
        background: #ff6900;
        color: #b5c1eb;
        border: 1px solid #ff6900;
        padding: 5px;
        border-radius: 5px;
        margin-right: 5px;
      }
      .price {
        // padding-right: 10px;
        p:nth-child(1) {
          // border: 1px solid red;
          text-decoration: line-through;
          text-align: right;
          font-size: 14px;
        }
        p:nth-child(2) {
          font-size: 18px;
          color: #b5c1eb;
        }
      }
    }
  }
}
</style>