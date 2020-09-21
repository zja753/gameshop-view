<template>
  <div class="introduction"></div>
</template>
<script>
export default {
  name: "GameIntroduction",
  props: {
    gameInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {},
  mounted() {
    document.getElementsByClassName(
      "introduction"
    )[0].innerHTML = this.gameInfo.introduction;
    let h3 = document.getElementsByTagName("h3");
    let p = document.getElementsByTagName("p");
    let strong = document.getElementsByTagName("strong");
    // console.log(x);
    for (let i of h3) {
      i.style.fontSize = "25px";
      i.style.margin = "10px 0";
    }
    for (let i of p) {
      i.style.margin = "10px 0";
    }
    for (let i of strong) {
      i.style.fontSize = "15px";
      i.style.margin = "10px 0";
    }
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  margin-top: 20px;
  background: #32394c;
  padding: 10px;
  color: #a7acdc;
  // height: 350px;
  overflow: hidden;
  h3 {
    font-size: 30px;
    font-weight: 2000;
    margin: 20px 0;
  }
  strong {
    font-size: 20px;
  }
  img {
    width: 520px;
    margin: 20px 0;
  }
  p {
    color: #b7bdec;
    margin: 20px 0;
  }
}
</style>