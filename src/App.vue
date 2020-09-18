<template>
  <div id="app">
    <Header />
    <div class="ctx"></div>
    <router-view class="content" />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
#app {
  min-width: 1200px;
  .ctx {
    height: 82px;
    background: #202539;
  }
  .content {
    background: #202539;
  }
}
</style>
