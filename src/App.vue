<template>
  <div id="app">
    <Header />
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
</style>
