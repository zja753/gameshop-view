<template>
  <div>
    <main>
      <div class="card" v-for="(item,index) in productList" :key="item+index">
        <img
          src="https://s1-rc.sonkwo.com/medium/910135728720663/file/57947/sonkwo-top-L-Bless-Unleashed.jpg?imageView2/2/w/170/h/100"
          alt
        />
        <div class="info">
          <div class="title">
            神佑 压力测试版
            <span class="badge_ys">预售</span>
            <span class="badge_gjz">国际站</span>
          </div>
          <div class="detial">
            发行于 2020-07-28
            <span>￥163.00</span>
          </div>
          <div class="iconGroup">
            <span>多人</span>
            <span>角色扮演</span>
            <span>动作</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      productList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  .card {
    width: 830px;
    height: 100px;
    background-color: rgb(51, 57, 77);
    color: rgba($color: #ddd, $alpha: 1);
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgba(51, 57, 77, 0.5);
    }

    .info {
      margin-left: 20px;
      flex: 1;
      .title {
        height: 24px;
        font-size: 16px;
        font-weight: 600;

        span {
          font-size: 12px;
          border-radius: 2px;
          color: white;
          font-weight: 400;

          &.badge_ys {
            padding: 0 4px;
            background-color: rgb(138, 195, 73);
          }
          &.badge_gjz {
            padding: 0 4px;
            background-color: #3178f5;
          }
        }
      }
      .detial {
        width: 100%;
        height: 18px;
        font-size: 12px;
        color: #7a80a2;
        margin-top: 6px;
        display: flex;

        span {
          margin-left: auto;
          padding-right: 20px;
          color: #eb6100;
          font-size: 16px;
          font-weight: bold;
        }
      }
      .iconGroup {
        height: 18px;
        font-size: 12px;
        color: #7a80a2;
        margin-top: 6px;

        span {
          border: 1px solid #7a80a2;
          border-radius: 2px;
          padding: 0 2px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>