<template>
  <div class="home">
    <Banner />
    <Recommend />
  </div>
</template>

<script>
import Banner from "@/components/home/Banner";
import Recommend from "@/components/home/Recommend";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: { Banner, Recommend },
};
</script>

<style lang="scss" scoped>
.home {
  background: #202539;
  min-width: 1200px;
}
</style>